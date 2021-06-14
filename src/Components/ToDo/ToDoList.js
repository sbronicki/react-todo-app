import ToDoItem from "./ToDoItem"


const ToDoList = ({listItemsData, listItemEdit, listItemDelete}) => (
    <ul className="ToDoList is-Flex column">
        {listItemsData.length ? 
            listItemsData.map(({id, title, content}) => (
                <ToDoItem 
                    key={id}
                    id={id} 
                    title={title}
                    content={content}
                    deleteOnClick={listItemDelete}
                />
            )) : <p className="big-P">Nothing to do!</p>
        }
    </ul>
)

export default ToDoList