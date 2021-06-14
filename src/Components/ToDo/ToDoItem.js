import React, {useState} from 'react'

import {HiChevronDoubleDown, HiChevronDoubleUp} from 'react-icons/hi'

import Button from "../../UI/Button"

const ToDoItem = ({id, title, content, editOnClick, deleteOnClick}) => {
    const [displayContent, setDisplayContent] = useState(false)
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
            <Button text="Edit" onClick={editOnClick} />
            <Button text="Delete" onClick={deleteOnClick} />
        </div>
    </li>
)}

export default ToDoItem