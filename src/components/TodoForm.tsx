import { useState, useEffect, useRef } from 'react';
import "../App.css"

const Form = (props: any) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const inputRef: any = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = (e: any) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput("");
    }

    return <>
        <div className='form'>
            <form onSubmit={handleSubmit} className='todo-form'>
                <input
                    placeholder={props.text}
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className={`todo-input ${props.class}`}
                />
                <button onClick={handleSubmit} className={`todo-button ${props.class}`}>
                    {props.btn}
                </button>
            </form>
        </div>
    </>
}

export default Form
