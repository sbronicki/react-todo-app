import {  useState } from "react"
import {MdLibraryAdd} from 'react-icons/md'

import { useToggle } from '../../Hooks/toggle-hook'

import Button from "../../UI/Button"
import NewItemTextArea from "../../UI/NewItemTextArea"
import ToDoList from "./ToDoList"


const ToDo = () => {
    const [listItems, setListItems] = useState([])

    const [displayTextArea, setDisplayTextArea] = useToggle()

    const onNewItemClick = () => {
        setDisplayTextArea(true)
    }

    const onSaveNewItem = (e) => {
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

    const onCancelNewItem = () => {
        setDisplayTextArea(false)
    }

    const onEditItem = (e) => {
        console.log('edit: ', e)
    }

    const onDeleteItem = (e) => {
    // const listItemCopy = [...listItems]
    // const index = e.target.parentElement.parentElement.children[0].children[0].innerText.substring(0,1)

    // listItemCopy.splice(index, 1)

    // console.log(listItemCopy)
    console.log('delete: ', e)
    }
    
    const chevron = <MdLibraryAdd />
    return (
        <div className="ToDo is-Flex column">
            {displayTextArea ? <NewItemTextArea newItemSave={onSaveNewItem} newItemCancel={onCancelNewItem} />
            : <Button text="New List Item" className="NewItem" onClick={onNewItemClick} chevron={chevron} />
            }
            <ToDoList listItems={listItems} itemEdit={onEditItem} itemDelete={onDeleteItem} />
        </div>
    )
}

export default ToDo