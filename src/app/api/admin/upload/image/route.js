import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
	const { image } = await req.json();
	const result = await cloudinary.uploader.upload(image);
	return NextResponse.json({
		public_id: result.public_id,
		secure_url: result.secure_url,
	});
}
