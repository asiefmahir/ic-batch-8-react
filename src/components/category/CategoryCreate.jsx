"use client";
import { useEffect, useRef } from "react";

const CategoryCreate = ({ getCategories }) => {
	const titleRef = useRef();

	useEffect(() => {
		titleRef.current.focus();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		fetch(`${process.env.API}/category`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title: titleRef.current.value }),
		})
			.then(() => {
				return getCategories();
			})
			.then(() => {
				titleRef.current.value = "";
			});
	};

	return (
		<div className="my-5">
			<form onSubmit={submitHandler}>
				<input type="text" ref={titleRef} />
				<button type="submit" className="btn bg-primary text-light">
					Create Category
				</button>
			</form>
		</div>
	);
};

export default CategoryCreate;
