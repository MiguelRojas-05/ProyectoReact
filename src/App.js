import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
{text: "Cortar cebolla", completed:false },
{text: "Tomar el curso de React", completed:true},
{text: "Llorar con la llorona", completed:false},
{text: "Cantar LALALA", completed:true},
];

function App() {
  return (
    <>

      <TodoCounter completed={25} total={50} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo=>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

    <CreateTodoButton/>
     
    </>
  );
}


export default App;
