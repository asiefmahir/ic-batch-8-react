import ProductCard from "@/components/ProductCard";
const GridLayout = async () => {
	console.log("I am running on the server");
	const res = await fetch(`http://localhost:8080/products`, {
		next: { revalidate: 20 },
	});
	const products = await res.json();
	return (
		<div className="grid three">
			{products?.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default GridLayout;
