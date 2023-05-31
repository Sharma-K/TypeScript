import React from "react";
import Todo from "../models/todo";
import Item from "./Item";
import classes from './Todos.module.css';
// it makes clear that it is a function that acts as a functional component
const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id:string)=> void}> = (props) =>{

 
    

    return (
        <ul className={classes.todos} >
            {props.items.map(item=> <Item 
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} 
            key={item.id} 
            text={item.text} 
            />)}
        </ul>
    )

}
export default Todos;