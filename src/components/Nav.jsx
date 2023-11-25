import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link to="/">Shop</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
						<li>
							<Link to="/counter-theme">Counter Theme</Link>
						</li>
						<li>
							<Link to="/posts">Posts</Link>
						</li>
						<li>
							<Link to="/todos">Todo-List</Link>
						</li>
						<li>
							<Link to="/products">Product List</Link>
						</li>
						<li>
							<Link to="/product/add">Add product</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;
