import "../styles/Button.css"
const Button = (props: any) => {
    if (props.name === "add") {
        return <><button className="icon-btn add-btn">
            <div className="add-icon"></div>
            <div className="btn-txt">Add Item</div>
        </button></>
    }
    return <>
        <button className="delete">
            x
        </button>
    </>
}
export default Button;