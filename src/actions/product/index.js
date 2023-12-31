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
	try {
		await connectDb();
		const product = await Product.findById({ _id: id });
		await Product.findByIdAndDelete({ _id: id });
		if (typeof product.image === "object") {
			const result = await cloudinary.uploader.destroy(
				product?.image?.public_id,
			);
		}
		return NextResponse.json({ success: true });
	} catch (err) {
		console.log(err);
	}

	revalidatePath("/dashboard/admin/products");
	revalidatePath("/");
	return id;
};
