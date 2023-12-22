import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function Nav() {
	const { data, status } = useSession();
	console.log(data, status);
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link href="/shop">Shop</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
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
						{data?.user && data?.user?.role === "admin" && (
							<li>
								<Link href="/dashboard/admin/add-product">
									Add product
								</Link>
							</li>
						)}
						<li>
							<Link href="/product-admin">All Products</Link>
						</li>
						{data?.user && (
							<li>
								<button onClick={() => signOut()}>
									Log Out
								</button>
							</li>
						)}
						{!data?.user && (
							<li>
								<Link href="/login">Login</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;
