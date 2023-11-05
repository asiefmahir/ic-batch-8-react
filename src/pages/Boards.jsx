import BoardCreatingForm from "../components/BoardCreatingForm";

import BoardList from "../components/BoardList";

const Boards = () => {
	return (
		<div>
			<BoardCreatingForm />
			<BoardList />
		</div>
	);
};

export default Boards;
