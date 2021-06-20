const EditItemTextArea = ({title, content, isTitle, itemSave, itemCancel, textChanged}) => (
    <div className="is-Flex column">
        {isTitle ? <textarea
            defaultValue={title}
            className="top"
            cols="50" 
            rows="1"
            onChange={textChanged}
        /> :
        <textarea
            defaultValue={content}
            className="bottom"
            cols="50" 
            rows="3"
            onChange={textChanged}
        />}
    </div>
)

export default EditItemTextArea