import Todos from './component/Todos';
import './App.css';
import Todo from './models/todo';

const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

function App() {
  return (
    <div className='App'>
      <Todos items={todos} />
    </div>
  );
}

export default App;
