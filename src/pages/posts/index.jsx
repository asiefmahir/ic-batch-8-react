import Link from "next/link";

const Posts = ({ posts }) => {
	return (
		<div>
			<h2>I am Posts page</h2>
			<h3>I am updated</h3>
			<h4>I am further updated</h4>
			<ul>
				{posts.map((post) => (
					<Link key={post.id} href={`/posts/${post.id}`}>
						<li>{post.title}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export async function getStaticProps() {
	console.log("I am running just on the server");
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const res = await fetch("http://localhost:5000/posts");
	const posts = await res.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
		},
		revalidate: 15,
	};
}

export default Posts;
