import Todos from './component/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './component/NewTodo';
import { useState } from 'react';

// const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

function App() {

 const [todos, setTodos] = useState<Todo[]>([]);
  const onAddTodoHandler = (text: string) =>{

    const newTodo = new Todo(text);
    setTodos((current:Todo[])=>{
          return current.concat(newTodo);
    })
   
      
  }
  const removef = (todoId: string) => {
       
    setTodos((prev)=>{
      return prev.filter(todo => todo.id!==todoId)
    })
  }
  
  return (
    <div className='App'>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos onRemoveTodo={removef} items={todos} />
    </div>
  );
}

export default App;
