"use client";
import { useEffect, useState } from "react";
import { priceRanges } from "@/utils/filterData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// import Stars from "@/components/product/Stars";

export default function ProductFilter({ searchParams }) {
	const [categories, setCategories] = useState([]);
	const pathname = "/shop";
	const { minPrice, maxPrice, ratings, category } = searchParams;
	const regSearchParams = useSearchParams();
	console.log(regSearchParams, "reg");
	const getCategories = () => {
		fetch(`${process.env.API}/category`)
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
	console.log(router);

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

	// useEffect(() => {
	// 	const url = `${pathname}?${regSearchParams}`;

	// 	router.push(url);
	// 	console.log(url);
	// }, [router, regSearchParams]);

	const createQueryString = (name, value) => {
		let params = new URLSearchParams(searchParams);

		if (Array.isArray(name) && Array.isArray(value)) {
			console.log(name, value, "val");
			name.forEach((n, index) => {
				console.log(n, "lw");
				// console.log(index, "lw");
				// params = new URLSearchParams(searchParams);
				params.set(n, value[index]);
				// params.toString();
			});
			params.set("page", 1);
			// for (let i = 0; i < name.length; i++) {
			// 	console.log(name);
			// 	params.set(name[i], value[i]);
			// }
			return params.toString();
		}

		if (typeof name === "string") {
			params.set(name, value);
			params.set("page", 1);
			return params.toString();
		}
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
							<button
								// href={url}
								className={isActive ? activeButton : button}
								onClick={() => {
									console.log(
										createQueryString(
											["minPrice, maxPrice"],
											[range?.min, range?.max],
										),
									);
									router.push(
										`${pathname}?${createQueryString(
											["minPrice", "maxPrice"],
											[range?.min, range?.max],
										)}`,
									);
								}}
								// onClick={() => router.replace(url)}
								// onClick={() =>
								// 	handleParamChange({
								// 		filterName: ["minPrice", "maxPrice"],
								// 		filterValue: [minPrice, maxPrice],
								// 	})
								// }
							>
								{range?.label}
							</button>
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
							<button
								// href={url}
								className={isActive ? activeButton : button}
								onClick={() => {
									router.push(
										`${pathname}?${createQueryString(
											"category",
											c._id,
										)}`,
									);
								}}
								// onClick={() =>
								// 	handleParamChange({
								// 		filterName: "category",
								// 		filterValue: c._id,
								// 	})
								// }
							>
								{c?.title}
							</button>
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
