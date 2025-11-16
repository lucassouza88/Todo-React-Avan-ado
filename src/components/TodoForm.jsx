import React from "react";
import useInput from "../hooks/useInput";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const input = useInput("");
  const { addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addTodo(text);
    input.clear();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Nova tarefa..."
        value={input.value}
        onChange={input.onChange}
        aria-label="nova-tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
