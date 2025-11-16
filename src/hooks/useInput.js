import { useState, useCallback } from "react";

export default function useInput(initial = "") {
  const [value, setValue] = useState(initial);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const clear = useCallback(() => setValue(""), []);

  return { value, setValue, onChange, clear };
}
