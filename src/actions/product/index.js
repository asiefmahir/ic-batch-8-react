"use server";

import connectDb from "@/utils/connectDb";
import Product from "@/models/product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function createProduct(prevState, formData) {
	try {
		await connectDb();
		const product = {
			title: prevState.title,
			description: prevState.description,
			price: Number(prevState.price),
			category: prevState.category,
			image: prevState.image,
		};
		await new Product(product).save();
	} catch (error) {
		console.log(error);
		return {
			message: "Error creating product",
		};
	}

	revalidatePath("/");
	revalidatePath("/dashboard/admin/products");

	redirect("/");
}

export const deleteProduct = async (id) => {
	console.log(id);
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

	revalidatePath("/dashboard/admin/products");
	revalidatePath("/");
	return id;
};
