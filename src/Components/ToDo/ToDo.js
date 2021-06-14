import { useEffect, useState } from "react"
import {MdLibraryAdd} from 'react-icons/md'

import Button from "../../UI/Button"
import NewItemTextArea from "../../UI/NewItemTextArea"
import ToDoList from "./ToDoList"


const ToDo = () => {
    const [displayTextArea, setDisplayTextArea] = useState(false)
    const [listItems, setListItems] = useState([])

    const newItemOnClick = () => {
        setDisplayTextArea(true)
    }
    const newItemSaveOnClick = (e) => {
        setListItems([...listItems, 
                {
                id: listItems.length,
                title: e.target.parentElement.previousElementSibling.parentElement.children[0].value,
                content: e.target.parentElement.previousElementSibling.value
            }]
        )
        setDisplayTextArea(false)

        e.target.parentElement.previousElementSibling.parentElement.children[0].value = ''
        e.target.parentElement.previousElementSibling.value = ''
    }
    const newItemCancelOnClick = () => {
        setDisplayTextArea(false)
    }
    const listItemDeleteOnClick = (e) => {
    console.log('delete')
    }
    
    const chevron = <MdLibraryAdd />
    return (
        <div className="ToDo is-Flex column">
            {displayTextArea ? <NewItemTextArea newItemSave={newItemSaveOnClick} newItemCancel={newItemCancelOnClick} />
            : <Button text="New List Item" className="NewItem" onClick={newItemOnClick} chevron={chevron} />
            }
            <ToDoList listItemsData={listItems} listItemDelete={listItemDeleteOnClick} />
        </div>
    )
}

export default ToDo