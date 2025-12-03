import { useEffect, useState } from "react";
import TodoItem from "./TodoItem.jsx";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(Object.values(data));
            })
            .catch(err => alert(err.message));
    }, [refresh]);

    const toggleTodoHandler = (todoId) => {
        const currentTodo = todos.find(todo => todo._id === todoId);

        currentTodo.completed = !currentTodo.completed;

        fetch(`http://localhost:3030/jsonstore/todos/${currentTodo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentTodo),
        })
            .then(() => {
                setRefresh(state => !state);
            })
            .catch(err => alert(err.message))
    }

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    title={todo.title}
                    _id={todo._id}
                    completed={todo.completed}
                    onClick={toggleTodoHandler}
                />
            ))}
        </ul>
    );
}
