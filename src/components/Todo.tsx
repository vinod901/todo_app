import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = (props: any) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value: any) => {
        props.updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    const render = (todo: any) => {
        if (edit.id) {
            return <TodoForm edit={edit} onSubmit={submitUpdate} btn="Update" text="Update TODO!!!" class="edit" />;
        }
        return <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        >
            <div onClick={() => props.completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => props.removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    }

    return <div className="grid">{props.todos.map((todo: any) => (
        render(todo)
    ))}</div>
};

export default Todo;