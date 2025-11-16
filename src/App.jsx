import React, { useMemo, useState } from "react";
import { TodoProvider, useTodos } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoFilters from "./components/TodoFilters";
import "./index.css";

function TodoList() {
  const { todos, clearAll } = useTodos();
  const [filter, setFilter] = useState("all");

  // useMemo para evitar recalcular a lista filtrada sem necessidade
  const filtered = useMemo(() => {
    if (filter === "done") return todos.filter(t => t.done);
    if (filter === "pending") return todos.filter(t => !t.done);
    return todos;
  }, [todos, filter]);

  const counts = useMemo(() => {
    const total = todos.length;
    const done = todos.filter(t => t.done).length;
    const pending = total - done;
    return { total, done, pending };
  }, [todos]);

  return (
    <div>
      <TodoForm />
      <TodoFilters filter={filter} setFilter={setFilter} counts={counts} />

      <div className="todos">
        {filtered.length === 0 ? (
          <p className="empty">Nenhuma tarefa encontrada.</p>
        ) : (
          filtered.map(todo => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>

      {todos.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <button className="btn-clear" onClick={clearAll}>Limpar todas</button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo List Avançada</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
}
