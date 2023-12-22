// import Image from 'next/image'
import Product from "@/models/product";
import { authOptions } from "@/utils/auth";
import connectDb from "@/utils/connectDb";

import GridLayout from "@/components/home/GridLayout";

export default async function Home() {
	await connectDb();
	const products = await Product.find({}).sort({ createdAt: -1 });
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
				<div class="section">
					<div class="container">
						<div class="section__head">
							<div class="product__details__title">
								<h2>Filtered Products</h2>
							</div>
						</div>
						<div class="section__content">
							<GridLayout products={products} />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
