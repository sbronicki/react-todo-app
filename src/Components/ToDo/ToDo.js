import { useEffect, useState } from "react"

import NewItem from "./NewItem"
import ToDoList from "./ToDoList"
import ToDoItem from "./ToDoItem"

const ToDo = () => {
    const newItemOnClickHandler = () => {
        console.log('new item')
        // open text area with save/cancel buttons
    }
    const itemOnClickHandler = () => {
        console.log('item')
        // expand focused item
    }
    const editOnClickHandler = () => {
        console.log('edit')
        // open item editor
    }
    const deleteOnClickHandler = () => {
        console.log('delete')
        // delete item
    }

    useEffect(() => {
        getToDoItems()
    })

    const getToDoItems = async() => {
        const res = await fetch("https://api-nodejs-todolist.herokuapp.com/task")
        const data = await res.json()
        console.log(data)
    }

    const [toDoListItems, setToDoListItems] = useState([
        <ToDoItem key="1" id="1" content="to do list item #1" itemOnClick={itemOnClickHandler} editOnClick={editOnClickHandler} deleteOnClick={deleteOnClickHandler} />,
        <ToDoItem key="2" id="2" content="to do list item #2" itemOnClick={itemOnClickHandler} editOnClick={editOnClickHandler} deleteOnClick={deleteOnClickHandler} />,
        <ToDoItem key="3" id="3" content="to do list item #3" itemOnClick={itemOnClickHandler} editOnClick={editOnClickHandler} deleteOnClick={deleteOnClickHandler} />,
        <ToDoItem key="4" id="4" content="to do list item #4" itemOnClick={itemOnClickHandler} editOnClick={editOnClickHandler} deleteOnClick={deleteOnClickHandler} />
    ])

    return (
        <div className="ToDo is-Flex column">
            <NewItem newItemOnClick={newItemOnClickHandler} />
            <ToDoList listItems={toDoListItems} >
                {toDoListItems}
            </ToDoList>
        </div>

    )
}

export default ToDo