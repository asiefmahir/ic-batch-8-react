import ProductRow from "@/components/ProductRow";

const AllProducts = ({ products }) => {
	return (
		<div className="product-section">
			<div className="product-section__heading">
				<h4>Product list in your app</h4>
			</div>

			<div className="product-table-container">
				<table>
					<tbody>
						{products?.length !== 0 &&
							products?.map((item) => (
								<ProductRow key={item.id} item={item} />
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	console.log("I am running on the server");
	const res = await fetch(`http://localhost:4000/products`);
	const products = await res.json();
	return {
		props: {
			products,
		},
	};
}

export default AllProducts;
