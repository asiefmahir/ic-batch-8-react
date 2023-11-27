import { useQuery } from "@tanstack/react-query";
import ProductRow from "../components/ProductRow";
import { getAllProducts } from "../services/products";

const AllProducts = () => {
	const { data, isFetching, isError, error } = useQuery({
		queryKey: ["products"],
		queryFn: getAllProducts,
	});
	return (
		<>
			<div className="product-section">
				<div className="product-section__heading">
					<h4>Product list in your app</h4>
				</div>

				<div className="product-table-container">
					<table>
						<tbody>
							{data?.length !== 0 &&
								data?.map((item) => (
									<ProductRow key={item.id} item={item} />
								))}
						</tbody>
					</table>
				</div>
			</div>

			{isFetching && <h2>Loading........</h2>}
			{isError && <p>{error.message}</p>}
		</>
	);
};

export default AllProducts;
