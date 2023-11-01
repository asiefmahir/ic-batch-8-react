import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PostDetails = () => {
	const { postId } = useParams();
	const {
		data: post,
		isLoading,
		errorMessage,
	} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, null);
	console.log(postId);
	return (
		<div>
			{errorMessage && <h3>{errorMessage}</h3>}
			<h2>
				The details of Post {isLoading ? "Post Id Loading" : post?.id}
			</h2>
			<p>Post Title - {isLoading ? "Post Title Loading" : post?.title}</p>
			<p>Post Body - {isLoading ? "Post Body Loading" : post?.body}</p>
		</div>
	);
};

export default PostDetails;
