import React from "react";
import Link from "next/link";

function Nav() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link href="/shop">Shop</Link>
						</li>
						<li>
							<Link href="/cart">Cart</Link>
						</li>
						<li>
							<Link href="/posts">Posts</Link>
						</li>
						<li>
							<Link href="/todos">Todo-List</Link>
						</li>
						<li>
							<Link href="/products">Product List</Link>
						</li>
						<li>
							<Link href="/add-product">Add product</Link>
						</li>
						<li>
							<Link href="/product-admin">All Products</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;
