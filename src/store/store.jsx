import React, { useState } from "react";

// Zustand store for global state management
const useAuthStore = (() => {
  let state = {
    user: null,
    isAuthenticated: true,
    currentPage: 'login'
  };
  
  const listeners = new Set();
  
  const setState = (newState) => {
    state = { ...state, ...newState };
    listeners.forEach(listener => listener());
  };
  
  const useStore = () => {
    const [, forceUpdate] = useState({});
    
    React.useEffect(() => {
      const listener = () => forceUpdate({});
      listeners.add(listener);
      return () => listeners.delete(listener);
    }, []);
    
    return state;
  };
  
  useStore.getState = () => state;
  useStore.setState = setState;
  
  return useStore;
})();

export default useAuthStore