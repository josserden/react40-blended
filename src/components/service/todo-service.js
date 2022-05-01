import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626645cf63e0f382567f1db9.mockapi.io',
  }),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => `/todos`,
      providesTags: ['Todo'],
    }),
    getTodo: builder.query({
      query: id => `/todos/${id}`,
      providesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    createTodo: builder.mutation({
      query: todo => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation({
      query: (id, ...todo) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation, useGetTodoQuery } = todosApi;