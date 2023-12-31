/* eslint-disable @next/next/no-img-element */
"use client";

import { createProduct } from "@/actions/product";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Resizer from "react-image-file-resizer";

const AddProduct = () => {
	const [product, setProduct] = useState({
		title: "",
		price: "",
		description: "",
		image: null,
		category: "",
	});
	const [categories, setCategories] = useState([]);

	const [image, setImage] = useState(null);
	const [uploading, setUploading] = useState(false);

	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		const getCategories = () => {
			fetch(`${process.env.API}/category`)
				.then((res) => res.json())
				.then((data) => {
					setCategories(data);
					setProduct((prev) => ({ ...prev, category: data[0] }));
				});
		};
		getCategories();
	}, []);

	const removePhoto = (image) => {
		fetch(`${process.env.API}/admin/upload/image`, {
			method: "DELETE",
			body: JSON.stringify({ public_id: image?.public_id }),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			if (res.ok) {
				setProduct({ ...product, image: null });
				setImage(null);
				toast.success("Image removed from cloud");
			}
		});
	};

	const uploadImage = (e) => {
		const file = e.target.files[0];
		if (file) {
			setUploading(true);
			const promise = new Promise((resolve) => {
				Resizer.imageFileResizer(
					file,
					1280,
					720,
					"JPEG",
					100,
					0,
					(uri) => {
						fetch(`${process.env.API}/admin/upload/image`, {
							method: "POST",
							body: JSON.stringify({ image: uri }),
						})
							.then((res) => res.json())
							.then((data) => {
								setProduct({ ...product, image: data });
								setImage(data);
								setUploading(false);
								resolve();
							});
					},
					"base64",
				);
			});

			// Promise.all(promise).then(() => {
			// 	setProduct({ ...product, image: data });
			// 	setUploading(false);
			// });
		}
	};

	const createProductAction = createProduct.bind(null, product);
	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
				action={createProductAction}
			>
				<p>Title</p>
				<input
					onChange={handleChange}
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Description</p>
				<input
					onChange={handleChange}
					type="text"
					name="description"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Price</p>
				<input
					onChange={handleChange}
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<select
					name="category"
					id=""
					onChange={handleChange}
					value={product.category}
				>
					{categories?.map((cat) => (
						<option key={cat?._id} value={cat?._id}>
							{cat.title}
						</option>
					))}
				</select>
				<p>Image</p>
				<label>
					<input
						type="file"
						hidden
						accept="images/*"
						onChange={uploadImage}
						disabled={uploading}
					/>
					{uploading ? "Processing" : "Upload Image"}
				</label>
				{!uploading && <input type="submit" />}
			</form>
			<div className="d-flex justify-content-center">
				{image && (
					<div key={image?.public_id}>
						<img
							style={{ width: "100px", objectFit: "cover" }}
							className="img-thumbnail mx-1 shadow"
							src={image?.secure_url}
							alt="New product"
						/>
						<br />
						<button
							onClick={() => removePhoto(image)}
							className="text-center pointer"
						>
							x
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default AddProduct;
