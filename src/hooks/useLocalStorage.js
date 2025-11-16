import { useState, useEffect } from "react";

/**
 * useLocalStorage(key, initial)
 * - inicializa a partir do localStorage (se existir)
 * - mantém o valor sincronizado com o localStorage
 */
export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch (err) {
      console.error("useLocalStorage init error:", err);
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("useLocalStorage set error:", err);
    }
  }, [key, value]);

  return [value, setValue];
}
