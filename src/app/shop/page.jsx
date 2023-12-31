import ProductFilter from "@/components/product/ProductFilter";
import Pagination from "@/components/product/Pagination";
import GridLayout from "@/components/home/GridLayout";

export const dynamic = "force-dynamic";
async function getProductsForShop(searchParams) {
	const searchQuery = new URLSearchParams({
		page: searchParams.page || 1,
		minPrice: searchParams.minPrice || "",
		maxPrice: searchParams.maxPrice || "",
		ratings: searchParams.ratings || "",
		category: searchParams.category || "",
	}).toString();

	try {
		const response = await fetch(
			`${process.env.API}/product/filters?${searchQuery}`,
			{
				method: "GET",
				cache: "no-store",
			},
		);
		if (!response.ok) {
			throw new Error("Failed to fetch products");
		}
		const data = await response.json();
		// if (!data || !Array.isArray(data.products)) {
		// 	throw new Error("No products returned");
		// }

		return data;
	} catch (err) {
		console.log(err);
		return { products: [], currentPage: 1, totalPages: 1 };
	}
}

export default async function Shop({ searchParams }) {
	//   console.log("searchParams in shop page => ", searchParams);
	const { products, currentPage, totalPages } = await getProductsForShop(
		searchParams,
	);
	console.log(totalPages, "t-page");

	return (
		<div className="container-fluid">
			<div className="row">
				<div
					className="col-lg-3 overflow-auto"
					style={{ maxHeight: "90vh" }}
				>
					<ProductFilter searchParams={searchParams} />
				</div>
				<div
					className="col-lg-9 overflow-auto"
					style={{ maxHeight: "90vh" }}
				>
					<h4 className="text-center fw-bold mt-3">
						Shop Latest products
					</h4>

					<div className="row">
						<GridLayout products={products} />
					</div>

					<br />

					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						searchParams={searchParams}
						pathname="/shop"
					/>
				</div>
			</div>
		</div>
	);
}
