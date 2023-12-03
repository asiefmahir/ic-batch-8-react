import Image from "next/image";
import { icons } from "@/assets";

function ProductRow({ item }) {
	const removeHandler = () => {
		fetch(`http://localhost:4000/products/${item.id}`, {
			method: "DELETE",
		}).then(() => {
			fetch(`http://localhost:3000/api/product/revalidate-shop"`).then(
				() => {
					console.log("success");
				},
			);
		});
	};
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
				<div className="product-icon">
					<Image
						// onClick={() =>
						// 	navigate(`/admin/product-edit-form/${item._id}`)
						// }
						className=""
						src={icons.editIcon}
						alt=""
						width={30}
					/>
				</div>
			</td>
			<td>
				<Image
					alt={item.title}
					className="product-icon"
					src={icons.crossIcon}
					width={30}
					onClick={removeHandler}
					// onClick={}
					// onClick={() => removeProductMutation.mutate(item._id)}
				/>
			</td>
		</tr>
	);
}

export default ProductRow;
