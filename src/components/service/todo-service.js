import axios from 'axios';

axios.defaults.baseURL = 'https://626645cf63e0f382567f1db9.mockapi.io';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// GET /api/todos
export const getTodos = async () => {
  const { data } = await axios.get('/todos');

  return data;
};
// GET /api/todos/:id
export const getTodo = async id => {
  const { data } = await axios.get(`/todos/${id}`);
  return data;
};
// POST /api/todos
export const createTodo = async todo => {
  const { data } = await axios.post('/todos', todo);

  return data;
};
// DELETE /api/todos/:id
export const deleteTodo = async id => {
  const { data } = await axios.delete(`/todos/${id}`);

  return data;
};
// PUT /api/todos/:id
export const updateTodo = async (id, todo) => {
  const { data } = await axios.put(`/todos/${id}`, todo);

  return data;
};
