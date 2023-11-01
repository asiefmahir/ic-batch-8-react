import { Link, useLoaderData } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Posts = () => {
	const {
		data: posts,
		isLoading,
		errorMessage,
	} = useFetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`, []);
	return (
		<div>
			<h2>All Posts</h2>
			{isLoading && <p>Loading...</p>}
			{errorMessage && <p>{errorMessage}</p>}
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
