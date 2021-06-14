import Button from "./Button"

const NewItemTextArea = ({newItemSave, newItemCancel}) => (
    <div className="is-Flex column">
        <textarea
            placeholder="Title"
            className="top"
            cols="50" 
            rows="1"
        />
        <textarea
            placeholder="Content"
            className="bottom"
            cols="50" 
            rows="3"
        />
        <div className="ButtonContainer is-Flex">
            <Button text="Save" onClick={newItemSave} />
            <Button text="Cancel" onClick={newItemCancel} />
        </div>
    </div>
)

export default NewItemTextArea