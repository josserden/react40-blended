import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetTodoQuery } from 'components/service/todo-service';

export default function TodoDetail() {
  const { todoId } = useParams();
  const { data, isLoading, error } = useGetTodoQuery(todoId);
  const navigate = useNavigate();
  if (data) {
    const { title, description, createdAt } = data;

    return (
      <>
        <h1>Todo Detail</h1>

        <button type="button" onClick={() => navigate('/')}>
          go Back
        </button>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        <h2>{title}</h2>
        <p>{description}</p>
        <p>{createdAt}</p>
      </>
    );
  }
}
