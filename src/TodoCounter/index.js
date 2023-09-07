import "./TodoCounter.css"
import React from 'react'
import { TodoContext } from '../TodoContext'
function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
        <h1 className="TodoCounter">
            {totalTodos === completedTodos ? "Haz completado todos los todos!!!" : <>Has completado<br /> <span >{completedTodos}</span> de <span >{totalTodos}</span> Todos</>}
        </h1>
    )
}

export { TodoCounter }