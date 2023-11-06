import { icons } from "../assets";

const AddItem = ({ listAddItem, setEditMode }) => {
	return (
		<div
			className={
				listAddItem
					? "add-item list-add-item"
					: "add-item task-add-item"
			}
			onClick={() => setEditMode(true)}
		>
			<img src={icons.plusIcon} alt="" className="add-item-icon" />
			<p className="add-item-text">
				{listAddItem ? "Add a list" : "Add a Task"}
			</p>
		</div>
	);
};

export default AddItem;
