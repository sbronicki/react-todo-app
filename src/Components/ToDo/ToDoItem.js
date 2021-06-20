import React, {useState} from 'react'
import {HiChevronDoubleDown, HiChevronDoubleUp} from 'react-icons/hi'

import { useToggle } from '../../Hooks/toggle-hook'

import EditItemTextArea from '../../UI/EditItemTextArea'
import Button from "../../UI/Button"

const ToDoItem = ({id, title, content, onDelete}) => {
    const [itemDetails, setItemDetails] = useState({
        title: title,
        content: content
    })
    const [displayContent, setDisplayContent] = useToggle(false)
    const [editMode, setEditMode] = useToggle(false)

    const onEdit = () => {
        setEditMode(true)
    }
    const onSaveEdit = () => {
        setEditMode(false)
    }
    const titleChangedHandler = (e) => {
        setItemDetails(
            {
                ...itemDetails,
                title: e.target.value
            }
        )
    }
    const contentChangedHandler = (e) => {
        setItemDetails(
            {
                ...itemDetails,
                content: e.target.value 
            }
        )
    }
    const onCancelEdit = () => {
        setEditMode(false)    
    }

    const onClickItem = () => setDisplayContent(!displayContent)

    return (
    <li id={id} className="ToDoItem is-Flex column">
        <div className="ItemTitleWrapper" onClick={onClickItem}>
            {editMode ? <EditItemTextArea textChanged={titleChangedHandler} title={itemDetails.title} isTitle /> : <h4>{itemDetails.title}</h4>}
            {editMode ? <EditItemTextArea textChanged={contentChangedHandler} content={itemDetails.content} /> : 
                displayContent ?
                    <div className="is-Flex">
                        <p>{itemDetails.content} </p>
                        <HiChevronDoubleUp />
                    </div>
                : <HiChevronDoubleDown 
                size="1.5em" 
                color="#fff" />}
        </div>
        <div className="ButtonContainer is-Flex">
            {editMode ?  
                <>
                    <Button text="Save" onClick={onSaveEdit} />
                    <Button text="Cancel" onClick={onCancelEdit} />
                </> :
                <>
                    <Button text="Edit" onClick={onEdit} />
                    <Button text="Delete" onClick={onDelete} />
                </>
            }
        </div>
    </li>
)}

export default ToDoItem