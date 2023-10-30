import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
	const { postId } = useParams();
	const [post, setPost] = useState(null);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, [postId]);
	console.log(postId);
	return (
		<div>
			<h2>The details of Post {post.id}</h2>
			<p>Post Title - {post.title}</p>
			<p>Post Body - {post.body}</p>
		</div>
	);
};

export default PostDetails;
