/* eslint-disable @next/next/no-img-element */

import { deleteProduct } from "@/actions/product";

const DeleteButton = ({ deleteProductWithId }) => {
	return (
		<form action={deleteProductWithId}>
			<button type="submit">x</button>
		</form>
	);
};

function ProductRow({ item }) {
	const deleteProductWithId = deleteProduct.bind(null, item._id);
	return (
		<tr className="product-row d-flex justify-content-around align-items-center">
			<td>
				{" "}
				{typeof item.image === "object" ? (
					<img
						src={item.image?.secure_url}
						className="product-img"
						alt=""
					/>
				) : (
					<img src={item.image} className="product-img" alt="" />
				)}
			</td>

			<td>
				{" "}
				<h2>{item.title}</h2>
			</td>
			<td>
				<h2>{item.price}</h2>
			</td>
			<td>
				<div className="product-icon">y</div>
			</td>
			<td>
				<DeleteButton deleteProductWithId={deleteProductWithId} />
			</td>
		</tr>
	);
}

export default ProductRow;
