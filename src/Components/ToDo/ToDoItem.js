import React from 'react'
import {HiChevronDoubleDown, HiChevronDoubleUp} from 'react-icons/hi'

import { useToggle } from '../../Hooks/toggle-hook'

import Button from "../../UI/Button"

const ToDoItem = ({id, title, content, onEdit, onDelete}) => {
    const [displayContent, setDisplayContent] = useToggle(false)
    const itemOnClick = () => setDisplayContent(!displayContent)

    return (
    <li className="ToDoItem is-Flex column">
        <div className="ItemTitleWrapper" onClick={itemOnClick}>
            <h4>{id}. {title}</h4> 
            {displayContent ?
                <div className="is-Flex">
                    <p>{content} </p>
                    <HiChevronDoubleUp />
                </div>
            : <HiChevronDoubleDown 
            size="1.5em" 
            color="#fff" />}
        </div>
        <div className="ButtonContainer is-Flex">
            <Button text="Edit" onClick={onEdit} />
            <Button text="Delete" onClick={onDelete} />
        </div>
    </li>
)}

export default ToDoItem