"use client";

const ProductCard = ({ product }) => {
	console.log("Client Compo");
	return (
		<div className="ingredient">
			<div className="ingredient__image">
				<figure>
					<img src={product.image} alt={product.title} />
				</figure>
				<h2>Hello testing</h2>
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
				<button className="btn-white" onClick={() => {}}>
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
