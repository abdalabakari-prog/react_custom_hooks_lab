import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Initialize state with value from localStorage or initialValue
  const [state, setState] = useState(() => {
    // Try to get the value from localStorage
    const storedValue = localStorage.getItem(key);
    
    // If there's a stored value, parse and return it
    // Otherwise, return the initialValue
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  // Update localStorage whenever state or key changes
  useEffect(() => {
    // Save the current state to localStorage
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  // Return the state and setState function (just like useState)
  return [state, setState];
}
