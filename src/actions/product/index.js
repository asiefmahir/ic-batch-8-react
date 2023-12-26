"use server";

import connectDb from "@/utils/connectDb";
import Product from "@/models/product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

	redirect("/");
}
