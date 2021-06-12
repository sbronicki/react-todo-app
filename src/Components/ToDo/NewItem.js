import Button from "../../UI/Button"

const NewItem = ({newItemOnClick}) => (
    <Button text="New List Item" btnType="newItem" onClick={newItemOnClick} />
)

export default NewItem