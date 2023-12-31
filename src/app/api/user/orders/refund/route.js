export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Order from "@/models/order";
import Product from "@/models/product";
import { currentUser } from "@/utils/currentUser";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
	await connectDb();
	try {
		// get current user
		const user = await currentUser();
		// get the order to refund
		const orderId = req.nextUrl.searchParams.get("orderId");
		const order = await Order.findById(orderId);
		console.log(order);
		// check if the order exists and belongs to the current user
		if (!order || order.userId.toString() !== user._id.toString()) {
			return NextResponse.json(
				{ err: "Order not found" },
				{ status: 404 },
			);
		}
		// check if the order is still 'Not Processed'
		if (order.delivery_status !== "Not Processed") {
			return NextResponse.json(
				{ err: "Order cannot be cancelled" },
				{ status: 400 },
			);
		}
		// make the refund request to stripe
		const refund = await stripe.refunds.create({
			payment_intent: order.payment_intent,
			reason: "requested_by_customer",
		});
		console.log(refund);
		// update the order in the database with refund details
		order.status = "Refunded";
		order.refunded = true;
		order.delivery_status = "Cancelled";
		order.refundId = refund.id;
		await order.save();

		return NextResponse.json(
			{ message: "Order refunded successfully" },
			{ status: 200 },
		);
	} catch (err) {
		console.log(err);
		return NextResponse.json(err, { status: 500 });
	}
}
