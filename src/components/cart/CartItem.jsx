import { useState, useContext } from "react";

import {
	MODIFY_QUANTITY_OF_A_ITEM,
	REMOVE_ITEM_FROM_CART,
} from "@/action-types/cart";
import { CartContext } from "@/contexts/Cart";

function CartItem({ item }) {
	const [quantity, setQuantity] = useState(item.quantity);

	const { dispatchCartAction } = useContext(CartContext);
	return (
		<tr>
			<td>
				<div className="product">
					<img src={item.image} className="product-img" alt="" />
				</div>
			</td>
			<td>
				<p>{item.title}</p>
			</td>
			<td>$ {item.price}</td>
			<td>
				<div className="qty_input">
					<button
						className="qty-count qty-count--minus"
						data-action="minus"
						type="button"
					>
						<figure
							onClick={() => {
								if (quantity > 1) {
									setQuantity((prevQuantity) => {
										dispatchCartAction({
											type: MODIFY_QUANTITY_OF_A_ITEM,
											payload: {
												id: item._id,
												quantity: prevQuantity - 1,
											},
										});
										return prevQuantity - 1;
									});
								}
							}}
						>
							-
							{/* <img alt="Decrease Item" src={icons.minusIcon} /> */}
						</figure>
					</button>
					<input
						className="product-qty"
						type="number"
						name="product-qty"
						value={quantity}
						min="1"
						onChange={(e) => {
							if (parseInt(e.target.value) >= 0) {
								setQuantity(parseInt(e.target.value));
								dispatchCartAction({
									type: MODIFY_QUANTITY_OF_A_ITEM,
									payload: {
										id: item._id,
										quantity: quantity,
									},
								});
							}
						}}
					/>
					<button
						className="qty-count qty-count--add"
						data-action="add"
						type="button"
					>
						<figure
							onClick={() => {
								if (quantity >= 0) {
									setQuantity((prevQuantity) => {
										dispatchCartAction({
											type: MODIFY_QUANTITY_OF_A_ITEM,
											payload: {
												id: item._id,
												quantity: prevQuantity + 1,
											},
										});
										return prevQuantity + 1;
									});
								}
							}}
						>
							+
							{/* <img alt="Increase Item" src={icons.plusIcon} /> */}
						</figure>
					</button>
				</div>
			</td>
			<td>$ {item.quantity ? item.price * item.quantity : 0}</td>
			<td
				onClick={() =>
					dispatchCartAction({
						type: REMOVE_ITEM_FROM_CART,
						payload: item._id,
					})
				}
			>
				x
			</td>
		</tr>
	);
}

export default CartItem;
