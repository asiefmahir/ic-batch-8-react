import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../services/products";

const AddProductForm = () => {
	const [product, setProduct] = useState({
		title: "",
		price: "",
		image: "",
		description: "",
	});
	const client = useQueryClient();

	const createProductMutation = useMutation({
		mutationFn: () => createProduct(product),
		onSuccess: () => {
			client.invalidateQueries(["products"]);
		},
	});
	console.log(createProductMutation.data);

	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
		// setProduct({ ...product, "title": sdfdsfdsfad });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createProductMutation.mutate(product);
	};

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}
				onSubmit={handleSubmit}
			>
				<p>Title:</p>
				<input
					value={product.title}
					onChange={handleChange}
					name="title"
					style={{ display: "block", width: "80%" }}
					required
				/>
				<br />
				<p>Price:</p>

				<input
					value={product.price}
					onChange={handleChange}
					name="price"
					style={{ display: "block", width: "80%" }}
					type="number"
					required
				/>
				<br />

				<p>Description:</p>
				<input
					value={product.description}
					onChange={handleChange}
					name="description"
					style={{ display: "block", width: "80%" }}
					type="text"
					required
				/>
				<br />
				<p>Image URL:</p>

				<input
					onChange={handleChange}
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
