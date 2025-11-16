import React from "react";

/**
 * Props:
 * - filter: "all" | "done" | "pending"
 * - setFilter: function
 * - counts: { total, done, pending }
 */
export default function TodoFilters({ filter, setFilter, counts }) {
  return (
    <div className="filters">
      <div className="filters-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Todas ({counts.total})
        </button>

        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pendentes ({counts.pending})
        </button>

        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => setFilter("done")}
        >
          Concluídas ({counts.done})
        </button>
      </div>
    </div>
  );
}
