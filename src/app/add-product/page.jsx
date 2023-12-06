"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/actions";

const AddProductForm = () => {
	// const router = useRouter();

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	fetch(`http://localhost:4000/products`, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-type": "application/json",
	// 		},
	// 		body: JSON.stringify(product),
	// 	}).then(() => {
	// 		fetch("http://localhost:3000/api/product/revalidate-shop").then(
	// 			() => {
	// 				console.log("successful");
	// 			},
	// 		);
	// 	});
	// };

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}
				action={createProduct}
			>
				<p>Title:</p>
				<input
					name="title"
					style={{ display: "block", width: "80%" }}
					required
				/>
				<br />
				<p>Price:</p>

				<input
					name="price"
					style={{ display: "block", width: "80%" }}
					type="number"
					required
				/>
				<br />

				<p>Description:</p>
				<input
					name="description"
					style={{ display: "block", width: "80%" }}
					type="text"
					required
				/>
				<br />
				<p>Image URL:</p>

				<input
					name="image"
					style={{ display: "block", width: "80%" }}
					type="text"
				/>
				<br />
				<input type="submit" />
			</form>
		</>
	);
};

export default AddProductForm;
