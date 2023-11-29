// import { useSelector, useDispatch } from "react-redux";

// import CartItem from "../components/CartItem";
// import { clearCart } from "../store/action/cart";

// const Cart = () => {
// 	const cart = useSelector((store) => store.cart);
// 	const dispatch = useDispatch();

// 	let totalAmount = 0; // 16800 + 50

// 	cart.forEach((item) => (totalAmount += item.quantity * item.price));

// 	return (
// 		<>
// 			<div className="account-setting__content">
// 				<div className="account-setting__content__title">
// 					<h4>Product list in your cart</h4>
// 				</div>
// 				<div className="product-table-container">
// 					<table>
// 						<thead>
// 							<tr>
// 								<th>Image</th>
// 								<th>PRODUCT Title</th>
// 								<th>Price</th>
// 								<th>Quantity</th>
// 								<th>Subtotal</th>
// 								<th>Action</th>
// 							</tr>
// 						</thead>
// 						<tbody>
// 							{cart.map((item) => (
// 								<CartItem key={item.id} item={item} />
// 							))}
// 						</tbody>
// 					</table>
// 				</div>
// 				<h2 className="total-price">
// 					You Total Price Will be $ {totalAmount}
// 				</h2>
// 				<div className="mt-50">
// 					<button
// 						onClick={() => dispatch(clearCart())}
// 						type="button"
// 						className="btn-big"
// 					>
// 						Clear Cart
// 					</button>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Cart;

import { Component } from "react";
import { connect } from "react-redux";
import { clearCart } from "../store/action/cart";
import CartItem from "../components/CartItem";
// import { useSelector } from "react-redux";

class Cart extends Component {
	render() {
		let totalAmount = 0; // 16800 + 50

		this.props.cart.forEach(
			(item) => (totalAmount += item.quantity * item.price),
		);
		return (
			<>
				<div className="account-setting__content">
					<div className="account-setting__content__title">
						<h4>Product list in your cart</h4>
					</div>
					<div className="product-table-container">
						<table>
							<thead>
								<tr>
									<th>Image</th>
									<th>PRODUCT Title</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Subtotal</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{this.props.cart.map((item) => (
									<CartItem key={item.id} item={item} />
								))}
							</tbody>
						</table>
					</div>
					<h2 className="total-price">
						You Total Price Will be $ {totalAmount}
					</h2>
					<div className="mt-50">
						<button
							onClick={() => this.props.clearCart()}
							type="button"
							className="btn-big"
						>
							Clear Cart
						</button>
					</div>
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	const { cart } = state;
	return { cart };
};

// useSelector((state) => state.cart)
export default connect(mapStateToProps, { clearCart })(Cart);
