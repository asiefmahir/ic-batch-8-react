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
	revalidatePath("/dashboard/admin/products");

	redirect("/");
}

export const deleteProduct = async (id) => {
	console.log(id);
	try {
		await fetch(`${process.env.API}/${id}`, {
			method: "DELETE",
		});
	} catch (error) {
		console.log(error);
	}

	revalidatePath("/dashboard/admin/products");
	revalidatePath("/");
	return id;
};
