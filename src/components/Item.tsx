import "../styles/Item.css"
import Button from "./Button";

const Item = (props: any) => {
    return <>
        <div className="card">
            <div className="content">
                <div className="front">
                    <h3 className="title">Hey</h3>
                    <p className="subtitle">Hover me :)</p>
                </div>

                <div className="back">
                    <p className="description">
                        Cool description so you can read it too my friend
                    </p>
                    <Button name="delete"></Button>
                </div>
            </div>
        </div>
    </>
}

export default Item;