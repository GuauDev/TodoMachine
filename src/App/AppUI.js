import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoContext } from '../TodoContext';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import React from 'react';
function AppUI(/*{
    error,
    loading,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}*/) {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal

    } = React.useContext(TodoContext)


    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {
                    (!loading && searchedTodos.length === 0)
                    &&
                    <EmptyTodos />
                }
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                        onComplete={() => { completeTodo(todo.text) }}
                        onDelete={() => { deleteTodo(todo.text) }}
                    />
                ))}
            </TodoList>



            <CreateTodoButton />
            {
                openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
        </>
    );
}

export { AppUI }