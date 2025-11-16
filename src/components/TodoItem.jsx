import React from "react";
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <div className="todo-item">
      <div className="left">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.done ? "done" : ""}>{todo.text}</span>
      </div>

      <div className="actions">
        <button className="btn-remove" onClick={() => removeTodo(todo.id)}>Excluir</button>
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
