import Link from "next/link";

const Pagination = ({ currentPage, totalPages, pathname }) => {
	console.log(Array.from({ length: totalPages }));
	return (
		<div style={{ textAlign: "center" }}>
			<div>
				<nav>
					<ul
						style={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						{Array.from({ length: totalPages }, (_, index) => {
							const page = index + 1;
							return (
								<li
									style={{
										marginRight: "10px",
										border: "1px solid blue",
										padding: "5px",
										backgroundColor: "aqua",
									}}
									key={page}
								>
									<Link href={`${pathname}?page=${page}`}>
										{page}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Pagination;
