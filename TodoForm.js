import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4} from "uuid";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
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
    //if (!value) return;
    //use the addTodo function
    return(
    <div
      className="todo"
    >
      {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
    </div>);
    //clear value
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => setValue(e.target.value)}
        placeholder=" Enter your task"
      />
    </form>
  );
}

export default TodoForm;