import ToDoItem from "./ToDoItem"


const ToDoList = ({listItems, onDelete}) => (
    <ul className="ToDoList is-Flex column">
        {listItems.length ? 
            listItems.map(({id, title, content}) => (
                <ToDoItem 
                    key={id}
                    id={id} 
                    title={title}
                    content={content}
                    onDelete={onDelete}
                />
            )) : <p className="big-P">Nothing to do!</p>
        }
    </ul>
)

export default ToDoList