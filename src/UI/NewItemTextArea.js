import Button from "./Button"

const NewItemTextArea = ({itemSave, itemCancel}) => (
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
            <Button text="Save" onClick={itemSave} />
            <Button text="Cancel" onClick={itemCancel} />
        </div>
    </div>
)

export default NewItemTextArea