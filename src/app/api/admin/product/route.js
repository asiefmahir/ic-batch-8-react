import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Product from "@/models/product";
import queryString from "query-string";
import cloudinary from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(req) {
	const { product } = await req.json();

	try {
		await connectDb();
		await Product.findByIdAndDelete({ _id: product._id });
		const result = await cloudinary.uploader.destroy(
			product?.image?.public_id,
		);
		return NextResponse.json({ success: true });
	} catch (err) {
		console.log(err);
	}
}
