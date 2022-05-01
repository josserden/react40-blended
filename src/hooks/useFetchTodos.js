import { useState, useEffect } from 'react';
import { getTodos } from 'components/service/todo-service';

export const useFetchTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const todos = await getTodos();
        setTodos(todos);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  return { todos, loading, error };
};
