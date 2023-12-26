"use client";

const CategoryList = ({ categories }) => {
	return (
		<div>
			{categories.map((category) => (
				<p key={category._id}>{category.title}</p>
			))}
		</div>
	);
};

export default CategoryList;
