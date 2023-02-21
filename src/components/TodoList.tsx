import TodoForm from "./TodoForm";
import "../App.css"
import { useState } from "react";
import Todo from "./Todo";

const TodoList = (props: any) => {
    const [todos, setTodos]: any[] = useState([]);

    const addTodo = (todo: any) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos)
        console.log(todos);
    }

    const updateTodo = (todoId: any, newValue: any) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos((prev: any) => prev.map((item: any) => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id: any) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

    const completeTodo = (id: any) => {
        let updatedTodos = todos.map((todo: any) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return <>
        <div className="background">
            <TodoForm onSubmit={addTodo} btn="Add TODO" text="Add a TODO!!!" />
            <div className="layout">
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
            </div></div></>
}

export default TodoList;