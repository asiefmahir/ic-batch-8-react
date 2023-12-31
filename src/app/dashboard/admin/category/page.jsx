"use client";
import { useState, useEffect } from "react";
import CreateCategory from "@/components/category/CategoryCreate";
import CategoryList from "@/components/category/CategoryList";

const AdminCategory = () => {
	const [categories, setCategories] = useState([]);
	const getCategories = () => {
		fetch(`${process.env.API}/category`)
			.then((res) => res.json())
			.then((data) => setCategories(data));
	};

	useEffect(() => {
		getCategories();
	}, []);
	return (
		<div className="container mb-5">
			<div className="row">
				<div className="col">
					<p className="lead">Create Category</p>
					<CreateCategory getCategories={getCategories} />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p className="lead">List of Categories</p>
					<CategoryList categories={categories} />
				</div>
			</div>
		</div>
	);
};

export default AdminCategory;
