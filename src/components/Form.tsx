import "../styles/Form.css"
const Form = (props: any) => {
    return <>
        <div className="form">
            <div className="subtitle">Let's add a todo!</div>
            <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder="" />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">Title</label>
            </div>
            <div className="input-container ic2">
                <input id="lastname" className="input" type="text" placeholder="" />
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Content</label>
            </div>
            <button className="submit">Add TODO</button>
        </div></>
}

export default Form