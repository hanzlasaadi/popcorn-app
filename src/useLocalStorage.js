import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
