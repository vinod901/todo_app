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
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type="text" placeholder={props.text} value={input} name="text" className='todo-input' onChange={handleChange} ref={inputRef} />
                <button className='todo-button'>{props.btn}</button>
            </form>
        </div>
    </>
}

export default Form