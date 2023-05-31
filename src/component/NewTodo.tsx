import { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) =>{

     const todoInput = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.MouseEvent) =>{
        event.preventDefault();

        var enteredText = todoInput.current!.value;

        if(enteredText?.trim().length===0)
        {
            return;
        }

        props.onAddTodo(enteredText);
      todoInput.current!.value="";


    }
    return <form className={classes.form} >
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoInput} />
        <button onClick={submitHandler} >Add Todo</button>
    </form>
}
export default NewTodo;