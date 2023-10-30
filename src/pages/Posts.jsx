import React from "react";
import { getPosts } from "../services/post";
import { Link, useLoaderData } from "react-router-dom";

const Posts = () => {
	const posts = useLoaderData();
	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{posts?.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
