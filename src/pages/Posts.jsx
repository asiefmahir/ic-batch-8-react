import { useSelector, useDispatch } from "react-redux";
import { fetchAllPost } from "../store/api-services/post";

const Posts = () => {
	const dispatch = useDispatch();
	const {
		data: posts,
		isLoading,
		errorMessage,
	} = useSelector((state) => state.post);

	const submitHandler = () => {
		dispatch(fetchAllPost);
	};
	return (
		<div>
			<button onClick={submitHandler}>Load Post</button>
			<div className="post-list">
				<h2>All Post</h2>
				{isLoading && <h1>Loading.....</h1>}
				{errorMessage && <h1>{errorMessage}</h1>}
				<ul>
					{posts.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Posts;
