import GridLayout from "@/components/home/GridLayout";
import Pagination from "@/components/product/Pagination";
import ProductFilter from "@/components/product/ProductFilter";

export const dynamic = "force-dynamic";
const getProducts = async (searchParams) => {
	const searchQuery = new URLSearchParams({
		page: searchParams.page || 1,
		minPrice: searchParams.minPrice || "",
		maxPrice: searchParams.maxPrice || "",
		ratings: searchParams.ratings || "",
		category: searchParams.category || "",
	}).toString();

	try {
		const res = await fetch(
			`http://localhost:3000/api/product/filters?${searchQuery}`,
			{
				method: "GET",
			},
		);
		// if (!res.ok) {
		// 	throw new Error("Failed to fetch products");
		// }
		const data = await res.json();
		// if (!data || Array.isArray(data.products)) {
		// 	throw new Error("Failed to fetch products");
		// }
		return data;
	} catch (error) {
		console.log(error.message);
		return { products: [], currentPage: 1, totalPages: 1 };
	}
};

export default async function Shop({ searchParams }) {
	console.log(searchParams);
	const { products, currentPage, totalPages } = await getProducts(
		searchParams,
	);

	if (products.length === 0) {
		return (
			<>
				<main>
					<h2>No Products found with these filters</h2>
					<ProductFilter searchParams={searchParams} />
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						searchParams={searchParams}
						pathname={"/shop"}
					/>
				</main>
			</>
		);
	}
	return (
		<main>
			<div>
				<div className="page-banner">
					<div className="page-banner__details">
						<div className="page-banner__details__title">
							<h1>Our E-commerce Website</h1>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<div className="section__head">
							<div className="product__details__title">
								<h2>Filtered Products</h2>
							</div>
						</div>
						<div className="section__content">
							<GridLayout products={products} />
						</div>
					</div>
				</div>
			</div>
			<ProductFilter searchParams={searchParams} />
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				searchParams={searchParams}
				pathname={"/shop"}
			/>
		</main>
	);
}
