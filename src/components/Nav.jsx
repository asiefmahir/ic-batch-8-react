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
							<Link href="/cart">Cart</Link>
						</li>
						{data?.user && data?.user?.role === "user" && (
							<li>
								<Link href="/dashboard/user/orders">
									My Orders
								</Link>
							</li>
						)}
						{data?.user && data?.user?.role === "admin" && (
							<li>
								<Link href="/dashboard/admin/add-product">
									Add product
								</Link>
							</li>
						)}
						{data?.user && data?.user?.role === "admin" && (
							<li>
								<Link href="/dashboard/admin/products">
									All Product
								</Link>
							</li>
						)}
						{data?.user && data?.user?.role === "admin" && (
							<li>
								<Link href="/dashboard/admin/orders">
									All Orders
								</Link>
							</li>
						)}

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
