import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Initialize state with value from localStorage or initialValue
  const [state, setState] = useState(() => {
    // Try to get the value from localStorage
    const storedValue = localStorage.getItem(key);
    
    // If there's a stored value, return it directly (no JSON.parse)
    // Otherwise, return the initialValue
    return storedValue !== null ? storedValue : initialValue;
  });

  // Update localStorage whenever state or key changes
  useEffect(() => {
    // Save the current state to localStorage (no JSON.stringify)
    localStorage.setItem(key, state);
  }, [key, state]);

  // Return the state and setState function (just like useState)
  return [state, setState];
}
