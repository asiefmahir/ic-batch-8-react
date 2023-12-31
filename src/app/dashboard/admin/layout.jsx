import Link from "next/navigation";

export default function AdminLayout({ children }) {
	return (
		<>
			<div id="sidebar">
				<h1>Admin Routes</h1>

				<nav>
					<ul>
						<li>
							<Link href={`/dashboard/admin/products`}>
								Products
							</Link>
						</li>
						<li>
							<Link href={`/dashboard/admin/category`}>
								Category
							</Link>
						</li>
						<li>
							<Link href={`/dashboard/admin/orders`}>
								All Orders
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">{children}</div>
		</>
	);
}
