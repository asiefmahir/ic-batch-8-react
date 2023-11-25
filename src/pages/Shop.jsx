import { useGetAllProductsQuery } from "../features/product/productApi";

import ProductCard from "../components/ProductCard";

const Shop = () => {
	const {
		data: products,
		isFetching,
		isError,
		error,
	} = useGetAllProductsQuery();

	if (isFetching) return <p>Loading...</p>;
	if (isError) return <p>{error.message} </p>;
	return (
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
							<h2>All Products</h2>
						</div>
					</div>
					<div className="section__content">
						<div className="grid three">
							{products?.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
