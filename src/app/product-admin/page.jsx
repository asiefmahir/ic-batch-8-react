import ProductList from "@/components/ProductList";

const AllProducts = async () => {
	return (
		<div className="product-section">
			<div className="product-section__heading">
				<h4>Product list in your app</h4>
			</div>

			<div className="product-table-container">
				<table>
					<ProductList />
				</table>
			</div>
		</div>
	);
};

export default AllProducts;
