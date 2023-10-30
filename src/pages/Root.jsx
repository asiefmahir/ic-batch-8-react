import { Outlet, Link, useNavigation, NavLink } from "react-router-dom";
export default function Root() {
	const navigation = useNavigation();
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<div>
					<form id="search-form" role="search">
						<input
							id="q"
							aria-label="Search contacts"
							placeholder="Search"
							type="search"
							name="q"
						/>
						<div id="search-spinner" aria-hidden hidden={true} />
						<div className="sr-only" aria-live="polite"></div>
					</form>
					<form method="post">
						<button type="submit">New</button>
					</form>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink
								to="/"
								className={({ isActive, isPending }) =>
									isActive
										? "active"
										: isPending
										? "pending"
										: ""
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive, isPending }) =>
									isActive
										? "active"
										: isPending
										? "pending"
										: ""
								}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/posts"
								className={({ isActive, isPending }) =>
									isActive
										? "active"
										: isPending
										? "pending"
										: ""
								}
							>
								Posts
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div
				id="detail"
				className={navigation.state === "loading" ? "loading" : ""}
			>
				<Outlet />
			</div>
		</>
	);
}
