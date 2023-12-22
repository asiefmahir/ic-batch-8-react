"use server";

import connectDb from "@/utils/connectDb";
import Product from "@/models/product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData) {
	try {
		await connectDb();
		const product = {
			title: formData.get("title"),
			description: formData.get("description"),
			price: Number(formData.get("price")),
			image: formData.get("image"),
		};
		await new Product(product).save();
	} catch (error) {
		console.log(error);
		return {
			message: "Error creating product",
		};
	}

	revalidatePath("/");

	redirect("/");
}
