import { icons } from "../assets";

const BoardItem = ({ board }) => {
	return (
		<div className="board-box d-flex flex-direction-column">
			<div className="d-flex justify-content-between">
				<h5>{board.title}</h5>
				<img src={icons.crossIcon} alt="" className="add-item-icon" />
			</div>
		</div>
	);
};

export default BoardItem;
