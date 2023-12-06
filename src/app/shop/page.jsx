import GridLayout from "@/app/shop/GridLayout";

const Shop = () => {
	console.log("I am being rerendered");
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
						<GridLayout />
					</div>
				</div>
			</div>
		</div>
	);
};

// export async function getStaticProps() {
// 	console.log("I am running on the server");
// 	const res = await fetch(`http://localhost:4000/products`);
// 	const products = await res.json();
// 	return {
// 		props: {
// 			products,
// 		},
//      revalidate: 10
// 	};
// }

export default Shop;
