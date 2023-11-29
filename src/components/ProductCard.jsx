// import { useDispatch } from "react-redux";
// import { addToCart } from "../store/action/cart";

// const ProductCard = ({ product }) => {
// 	const dispatch = useDispatch();
// 	return (
// 		<div className="ingredient">
// 			<div className="ingredient__image">
// 				<figure>
// 					<img src={product.image} alt={product.title} />
// 				</figure>
// 			</div>
// 			<div className="ingredient__title">
// 				<h3>{product.title}</h3>
// 			</div>
// 			<div className="ingredient__content">
// 				<p className="price">
// 					<span>${product.price}</span>
// 				</p>
// 			</div>
// 			<div className="ingredient__btn">
// 				<button
// 					className="btn-white"
// 					onClick={() => dispatch(addToCart(product))}
// 				>
// 					ADD TO CART
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default ProductCard;

import { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/action/cart";

class ProductCard extends Component {
	render() {
		console.log(this.props, "From Product Card");
		const { product } = this.props;
		return (
			<div className="ingredient">
				<div className="ingredient__image">
					<figure>
						<img src={product.image} alt={product.title} />
					</figure>
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
						onClick={() => this.props.addToCart(product)}
					>
						ADD TO CART
					</button>
				</div>
			</div>
		);
	}
}

export default connect(null, { addToCart })(ProductCard);
