import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      
    // memanggil API untuk mengambil data todos
    fetch("http://rafiisa.com/json/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("fetch aborted.");
        setTodos(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
