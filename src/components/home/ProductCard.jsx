/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { useContext } from "react";
import { useCart } from "@/contexts/Cart";

const ProductCard = ({ product }) => {
	const { addToCart } = useCart();
	return (
		<div className="ingredient">
			<div className="ingredient__image">
				<figure>
					{typeof product?.image !== "object" ? (
						<img src={product?.image} alt={product.title} />
					) : (
						<img
							src={product?.image?.secure_url}
							alt={product?.title}
						/>
					)}
				</figure>
				{/* <h2>{product.title}</h2> */}
			</div>
			<div className="ingredient__title">
				<h3>{product.title}</h3>
			</div>
			<div className="ingredient__content">
				<p className="price">
					<span>${product.price}</span>
				</p>
			</div>
			<div className="ingredient__btn">
				<button
					className="btn-white"
					onClick={() => {
						addToCart(product);
					}}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
