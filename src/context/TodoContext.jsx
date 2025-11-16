import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

export function useTodos() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  // useLocalStorage retorna [value, setValue]
  const [todos, setTodos] = useLocalStorage("todos", []);

  function addTodo(text) {
    const novo = { id: Date.now(), text, done: false };
    setTodos((prev) => [...prev, novo]);
  }

  function toggleTodo(id) {
    setTodos((prev) => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter(t => t.id !== id));
  }

  function clearAll() {
    setTodos([]);
  }

  const value = { todos, addTodo, toggleTodo, removeTodo, clearAll };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
