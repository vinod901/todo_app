import "../styles/Grid.css"
import Item from "./Item";

let items: any[] = [];
for (let index = 0; index < 10; index++) {
    items.push(<Item />)
}

const Grid = (props: any) => {
    return <>
        <div className="grid">
            {items.map((item) => { return item })}</div></>
}

export default Grid;