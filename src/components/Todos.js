import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleComplete, deleteTodo } from './todoSlice'

const Todos = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText(e.target.value)
    }

    const handleAddtodo = () => {
        if(text){
            dispatch(addTodo(text));
            setText("");
        }
    }

    const handleCompletetodo = (id) => {
        if(id){
            dispatch(toggleComplete(id));
        }
    }

    const handleDeletetodo = (id) => {
        if(id){
            dispatch(deleteTodo(id));
        }
    }


    return (
        <div>
            <h1>Todos List</h1>
            <input type="text" value={text} onChange={(e) => handleInputChange(e)} />
            <button onClick={handleAddtodo}>Add Todo</button>
            <div>
                {todos.map((todo) => (
                <p
                    key={todo.id}
                    style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    }}
                >
                    {todo.text}{" "}
                    {!todo.completed ? <button onClick={() => handleCompletetodo(todo.id)}>Done</button> : ""}
                    <button onClick={() => handleDeletetodo(todo.id)}> X </button>{" "}
                </p>
                ))}
            </div>
        </div>
    )
}


export default Todos;