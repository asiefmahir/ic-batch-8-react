import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { icons } from "../assets";
import { removeProduct } from "../services/products";

function ProductRow({ item }) {
	const client = useQueryClient();
	const navigate = useNavigate();
	const removeMutation = useMutation({
		mutationFn: () => removeProduct(item.id),
		onSuccess: () => {
			client.invalidateQueries(["products"]);
		},
	});

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
						removeMutation.mutate(item.id);
					}}
					// onClick={() => removeProductMutation.mutate(item._id)}
				/>
			</td>
		</tr>
	);
}

export default ProductRow;
