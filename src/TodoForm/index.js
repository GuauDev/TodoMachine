import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

export function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')


    const onSubmit = (event) => {
        event.preventDefault()
        setOpenModal(false)
        addTodo(newTodoValue)
    }
    const onCancel = () => {
        setOpenModal(false)
    }


    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu Nuevo Todo</label>
            <textarea required placeholder="Cortar cebollla para el almuerzo" onChange={onChange} value={newTodoValue} />
            <div className='TodoForm-buttonContainer'>
                <button onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}