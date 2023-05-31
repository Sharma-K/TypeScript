import React from "react";
import Todo from "../models/todo";
import Item from "./Item";
// it makes clear that it is a function that acts as a functional component
const Todos: React.FC<{items: Todo[]}> = (props) =>{
    return (
        <ul>
            {props.items.map(item=> <Item key={item.id} text={item.text} />)}
        </ul>
    )

}
export default Todos;