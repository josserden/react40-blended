import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchTodoDetail } from 'hooks/useFetchTodoDetail';

export default function TodoDetail() {
  const { todo, loading, error } = useFetchTodoDetail();
  const navigate = useNavigate();
  const { title, description, createdAt } = todo;

  return (
    <>
      <h1>Todo Detail</h1>

      <button type="button" onClick={() => navigate('/')}>
        go Back
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <h2>{title}</h2>
      <p>{description}</p>
      <p>{createdAt}</p>
    </>
  );
}
