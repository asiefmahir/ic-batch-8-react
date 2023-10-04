const PersonalInfo = (props) => {
	return (
		<div className="personal-info">
			<h1>Bio Data of {props.name}</h1>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>Gender: {props.gender}</p>
			<p>Email: {props.email}</p>
			{props.phone && <p>Phone: {props.phone}</p>}
			<p>Address: {props.address}</p>
			<p>Country: {props.country}</p>
		</div>
	);
};

export default PersonalInfo;
