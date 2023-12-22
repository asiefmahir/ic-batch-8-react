import ProductCard from "./ProductCard";
const GridLayout = async ({ products }) => {
	return (
		<div className="grid three">
			{products?.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</div>
	);
};

export default GridLayout;
