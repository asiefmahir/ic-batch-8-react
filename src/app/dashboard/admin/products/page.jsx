// import Image from 'next/image'
import connectDb from "@/utils/connectDb";

import ProductList from "@/components/admin/ProductList";
import Pagination from "@/components/product/Pagination";

const getProducts = async (searchParams) => {
	const searchQuery = new URLSearchParams({
		page: searchParams?.page || 1,
	}).toString();

	const res = await fetch(`${process.env.API}/product?${searchQuery}`, {
		method: "GET",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}
	const data = await res.json();
	return data;
};
export default async function AdminProductList({ searchParams }) {
	console.log(searchParams);
	await connectDb();
	const { products, currentPage, totalPages } = await getProducts(
		searchParams,
	);
	return (
		<main>
			<div>
				<div className="product-section">
					<div className="product-section__heading">
						<h4>Product list in your app</h4>
					</div>
					<div className="product-table-container">
						<table>
							<ProductList products={products} />
						</table>
					</div>
				</div>
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				pathname={"/"}
			/>
		</main>
	);
}

// import ProductList from "@/components/admin/ProductList";

// const AllProducts = async () => {
// 	return (
// 		<div className="product-section">
// 			<div className="product-section__heading">
// 				<h4>Product list in your app</h4>
// 			</div>

// 			<div className="product-table-container">
// 				<table>
// 					<ProductList />
// 				</table>
// 			</div>
// 		</div>
// 	);
// };

// export default AllProducts;
