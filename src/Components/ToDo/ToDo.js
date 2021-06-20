import { useState } from "react"
import {MdLibraryAdd} from 'react-icons/md'

import { useToggle } from '../../Hooks/toggle-hook'

import Button from "../../UI/Button"
import NewItemTextArea from "../../UI/NewItemTextArea"
import ToDoList from "./ToDoList"


const ToDo = () => {
    const chevron = <MdLibraryAdd />

    const [listItems, setListItems] = useState([])

    const [displayTextArea, setDisplayTextArea] = useToggle()

    const onNewItemClick = () => {
        setDisplayTextArea(true)
    }

    const onSaveNewItem = (e) => {
        setListItems([...listItems, 
                {
                    id: listItems.length + Math.floor(Math.random() * 1000) + 1,
                    title: e.target.parentElement.previousElementSibling.parentElement.children[0].value,
                    content: e.target.parentElement.previousElementSibling.value,
                }]
        )
        setDisplayTextArea(false)

        e.target.parentElement.previousElementSibling.parentElement.children[0].value = ''
        e.target.parentElement.previousElementSibling.value = ''
    }

    const onCancelNewItem = () => {
        setDisplayTextArea(false)
    }

    const onDeleteItem = (e) => {
        const listItemCopy = [...listItems]
        const itemID = e.target.parentElement.parentElement.id
        const filteredItems = listItemCopy.filter((item) => item.id !== parseInt(itemID))
        setListItems(filteredItems)
    }
    
    return (
        <div className="ToDo is-Flex column">
            {displayTextArea ? <NewItemTextArea itemSave={onSaveNewItem} itemCancel={onCancelNewItem} />
            : <Button text="New List Item" className="NewItem" onClick={onNewItemClick} chevron={chevron} />
            }
            <ToDoList listItems={listItems} onDelete={onDeleteItem} />
        </div>
    )
}

export default ToDo