"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ currentPage, totalPages, pathname, searchParams }) => {
	const router = useRouter();
	const createQueryString = (name, value) => {
		let params = new URLSearchParams(searchParams);

		params.set(name, value);
		return params.toString();
	};
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
							const url = {
								pathname,
								query: {
									...searchParams,
									page,
								},
							};
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
									<button
										onClick={() => {
											router.push(
												`${pathname}?${createQueryString(
													"page",
													page,
												)}`,
											);
										}}
									>
										{page}
									</button>
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
