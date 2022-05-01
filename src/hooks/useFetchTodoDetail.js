import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTodo } from 'components/service/todo-service';

export const useFetchTodoDetail = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { todoId } = useParams();

  useEffect(() => {
    async function fetchTodos() {
      try {
        const todo = await getTodo(todoId);
        setTodo(todo);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchTodos();
  }, [todoId]);

  return { todo, loading, error };
};
