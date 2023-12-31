import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Product from "@/models/product";
import Order from "@/models/order";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
	await connectDb();
	const _raw = await req.text();
	const sig = req.headers.get("stripe-signature");

	try {
		// construct the event using stripe sdk
		const event = stripe.webhooks.constructEvent(
			_raw,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET,
		);

		// handle the event
		switch (event.type) {
			case "payment_intent.succeeded":
				const chargeSucceeded = event.data.object;
				const paymentIntent = event.data.object;
				const { id, ...rest } = chargeSucceeded;
				console.log(event.data.object.receipt_url, "charge plz");

				// console.log(
				//   "chargeSucceeded ===================================> ",
				//   chargeSucceeded
				// );

				const cartItems = JSON.parse(
					chargeSucceeded.metadata.cartItems,
				);
				const productIds = cartItems.map((item) => item._id);

				// fetch all products in one query
				const products = await Product.find({
					_id: { $in: productIds },
				});

				// create an object to quickly map product details by id
				const productMap = {};

				products.forEach((product) => {
					productMap[product._id.toString()] = {
						_id: product._id,
						title: product.title,
						price: product.price,
						image: product.images?.secure_url || "",
					};
				});

				// create cartItems with product details
				const cartItemsWithProductDetails = cartItems.map(
					(cartItem) => ({
						...productMap[cartItem._id],
						quantity: cartItem.quantity,
					}),
				);

				// create order
				const orderData = {
					...rest,
					chargeId: id,
					payment_intent: id,
					userId: chargeSucceeded.metadata.userId,
					cartItems: cartItemsWithProductDetails,
				};

				await Order.create(orderData);
		}
		return NextResponse.json({ ok: true });
	} catch (err) {
		console.log(err);
		return NextResponse.json({
			err: "Server error. Please try again",
			status: 500,
		});
	}
}
