import Button from "../../UI/Button"

const ToDoItem = ({id, content, itemOnClick, editOnClick, deleteOnClick}) => (
    <li className="ToDoItem" onClick={itemOnClick}>
        {id}. {content}
        <Button text="Edit" onClick={editOnClick} />
        <Button text="Delete" btnType="danger" onClick={deleteOnClick} />
    </li>
)

export default ToDoItem