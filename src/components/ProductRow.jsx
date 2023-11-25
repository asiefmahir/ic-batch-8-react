import { useNavigate } from "react-router-dom";
import { icons } from "../assets";
import { useRemoveProductMutation } from "../features/product/productApi";

function ProductRow({ item }) {
	const navigate = useNavigate();
	const [deleteProduct, result] = useRemoveProductMutation();

	if (result.isSuccess) {
		navigate("/");
	}

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
				<img
					// onClick={() =>
					// 	navigate(`/admin/product-edit-form/${item._id}`)
					// }
					className="product-icon"
					src={icons.editIcon}
					alt=""
				/>
			</td>
			<td>
				<img
					alt={item.title}
					className="product-icon"
					src={icons.crossIcon}
					onClick={() => {
						deleteProduct(item.id);
					}}
					// onClick={() => removeProductMutation.mutate(item._id)}
				/>
			</td>
		</tr>
	);
}

export default ProductRow;
