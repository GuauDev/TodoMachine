import React from "react";
import './DeleteAllTodos.css'
import { TodoContext } from "../TodoContext";
export function DeleteAllTodos() {
    const { deleteTodos, totalTodos } = React.useContext(TodoContext)
    return (
        <>
            {
                totalTodos !== 0 && (
                    <button onClick={deleteTodos} className="delete-button">Borrar todos</button>

                )
            }
        </>
    )
} 