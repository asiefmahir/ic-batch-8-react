// "use client";
// import { useFormState } from "react-dom";
import Image from "next/image";
import { deleteProduct } from "@/actions";

const initState = {
	message: "",
};

const DeleteButton = ({ deleteProductWithId }) => {
	return (
		<form action={deleteProductWithId}>
			<button type="submit">x</button>
		</form>
	);
};

function ProductRow({ item }) {
	const deleteProductWithId = deleteProduct.bind(null, item.id);
	// const [state, action] = useFormState(deleteProductWithId, initState);
	return (
		<tr className="product-row d-flex justify-content-around align-items-center">
			<td>
				{" "}
				<img src={item.image} className="product-img" alt="" />
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
				{/* <Image
					alt={item.title}
					className="product-icon"
					src={icons.crossIcon}
					width={30}
					onClick={removeHandler}
					// onClick={}
					// onClick={() => removeProductMutation.mutate(item._id)}
				/> */}
			</td>
		</tr>
	);
}

export default ProductRow;
