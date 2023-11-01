import { useFetch } from "../hooks/useFetch";

// useState -> use State
// use Effect -> use Effect
// useReducer -> use Reducer
// useContext -> use Context
// useFetch -> use Fetch

const UserList = () => {
	const {
		data: users,
		isLoading,
		errorMessage,
	} = useFetch("https://jsonplaceholder.typicode.com/users", []);
	return (
		<div>
			<h2>All Users</h2>
			{isLoading && <p>Loading...</p>}
			{errorMessage && <p>{errorMessage}</p>}
			<ul>
				{users?.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
