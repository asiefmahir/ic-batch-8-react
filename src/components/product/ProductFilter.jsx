"use client";
import { useEffect, useState } from "react";
import { priceRanges } from "@/utils/filterData";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import Stars from "@/components/product/Stars";

export default function ProductFilter({ searchParams }) {
	const [categories, setCategories] = useState([]);
	const pathname = "/shop";
	const { minPrice, maxPrice, ratings, category } = searchParams;
	const getCategories = () => {
		fetch(`http://localhost:3000/api/category`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCategories(data);
			});
	};
	// context
	// const { fetchCategoriesPublic, categories } = useCategory();
	// const { fetchTagsPublic, tags } = useTag();
	// const { fetchBrands, brands } = useProduct();

	useEffect(() => {
		// fetchCategoriesPublic();
		// fetchTagsPublic();
		// fetchBrands();
		getCategories();
	}, []);

	const router = useRouter();

	const activeButton = "btn btn-primary btn-raised mx-1 rounded-pill";
	const button = "btn btn-raised mx-1 rounded-pill";

	const handleRemoveFilter = (filterName) => {
		const updatedSearchParams = { ...searchParams };
		// delete updatedSearchParams[filterName];

		// if filterName is string
		if (typeof filterName === "string") {
			delete updatedSearchParams[filterName];
		}
		// if filterName is array
		if (Array.isArray(filterName)) {
			filterName?.forEach((name) => {
				delete updatedSearchParams[name];
			});
		}

		// reset page to 1 when applying new filtering options
		updatedSearchParams.page = 1;

		const queryString = new URLSearchParams(updatedSearchParams).toString();
		const newUrl = `${pathname}?${queryString}`;
		router.push(newUrl);
	};

	return (
		<div className="mb-5 overflow-scroll">
			<p className="lead">Filter Products</p>

			<Link className="text-danger" href="/shop">
				Clear Filters
			</Link>

			<p className="mt-4 alert alert-primary">Price</p>
			<div className="row d-flex align-items-center mx-1">
				{priceRanges?.map((range) => {
					const url = {
						pathname,
						query: {
							...searchParams,
							minPrice: range?.min,
							maxPrice: range?.max,
							page: 1,
						},
					};
					const isActive =
						minPrice === String(range?.min) &&
						maxPrice === String(range?.max);
					return (
						<div key={range?.label}>
							<Link
								href={url}
								className={isActive ? activeButton : button}
							>
								{range?.label}
							</Link>
							{isActive && (
								<span
									onClick={() =>
										handleRemoveFilter([
											"minPrice",
											"maxPrice",
										])
									}
									className="pointer"
								>
									X
								</span>
							)}
						</div>
					);
				})}
			</div>

			{/* <p className="mt-4 alert alert-primary">Ratings</p>
			<div className="row d-flex align-items-center mx-1">
				{[5, 4, 3, 2, 1].map((ratingValue) => {
					const isActive = String(ratings) === String(ratingValue);

					const url = {
						pathname,
						query: {
							...searchParams,
							ratings: ratingValue,
							page: 1,
						},
					};
					return (
						<div key={ratingValue}>
							<Link
								href={url}
								className={
									isActive
										? "btn btn-primary btn-raised mx-1 rounded-pill"
										: "btn btn-raised mx-1 rounded-pill"
								}
							>
								<Stars rating={ratingValue} />
							</Link>
							{isActive && (
								<span
									onClick={() =>
										handleRemoveFilter("ratings")
									}
									className="pointer"
								>
									X
								</span>
							)}
						</div>
					);
				})}
			</div> */}

			<p className="mt-4 alert alert-primary">Categories</p>
			<div className="row d-flex align-items-center mx-1 filter-scroll">
				{categories?.map((c) => {
					const isActive = category === c._id;

					const url = {
						pathname,
						query: {
							...searchParams,
							category: c?._id,
							page: 1,
						},
					};
					return (
						<div key={c._id}>
							<Link
								href={url}
								className={isActive ? activeButton : button}
							>
								{c?.title}
							</Link>
							{isActive && (
								<span
									onClick={() =>
										handleRemoveFilter("category")
									}
									className="pointer"
								>
									X
								</span>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
