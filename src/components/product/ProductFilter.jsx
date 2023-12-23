"use client";

import { priceRanges } from "@/utils/filterData";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductFilter = ({ searchParams, pathname }) => {
	// const router = useRouter();
	const handleRemoveFilter = (filterName) => {
		const updatedSearchParams = { ...searchParams };
		if (typeof filterName === string) {
			delete updatedSearchParams[filterName];
			// router.push(`/shop?${new URLSearchParams(updatedSearchParams)}`);
		}

		if (Array.isArray(filterName)) {
			filterName.forEach((filter) => {
				delete updatedSearchParams[filter];
			});
		}
		updatedSearchParams.page = 1;
		// router.push(`/shop?${new URLSearchParams(updatedSearchParams)}`);
	};
	return (
		<div>
			<p>Filter Products</p>
			<Link href="/shop">Clear Filter</Link>

			<p>Price:</p>
			{priceRanges.map((range) => {
				const url = {
					pathname,
					query: {
						...searchParams,
						minPrice: range.min,
						maxPrice: range.max,
					},
				};

				return (
					<div key={range?.label}>
						<Link href={url}>{range?.label}</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ProductFilter;
