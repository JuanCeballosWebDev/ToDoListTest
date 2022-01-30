import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4} from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "React Hooks in Depth",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: "Write Articles @ Medium",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: "Share article at Reddit",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    // add new todo to the todos array (id, text, isCompleted)
    
  }

  const completeTodo = (index) => {
  

  };

  const removeTodo = (index) => {
   

  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1 className="title">Todo App</h1>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
