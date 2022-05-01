import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from 'components/service/todo-service';

export default function Home() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const { data, error, isLoading } = useGetTodosQuery('');
  const [deleteTodo, { isLoading: isDeliting }] = useDeleteTodoMutation();
  const [createTodo, { isLoading: isCreating }] = useCreateTodoMutation();
  const [updateTodo, result] = useUpdateTodoMutation();
  
  if (data) { 

    console.log(result);

    const showTodos = () => {
      const normalizedFilter = filter.toLowerCase();
      console.log(data);
      return data.filter(todo =>
        todo.title.toLowerCase().includes(normalizedFilter)
      );
    };

    const onEditTodoChange = e => {
      setCurrentTodo({ ...currentTodo, title: e.target.value });
    };

    const handleInputChange = e => {
      const { name, value } = e.target;

      if (name === 'title') {
        setTitle(value);
      }

      if (name === 'text') {
        setText(value);
      }
    };

    const handleFormSubmit = e => {
      e.preventDefault();

      const newTodo = {
        title,
        text,
        completed: false,
      };

      createTodo(newTodo);
      setTitle('');
      setText('');
    };

    const handleEditClick = id => {
      const toggleTodo = data.find(todo => todo.id === id);

      setCurrentTodo(toggleTodo);
      setIsEditing(true);
    };

    const handleEditSubmit = e => {
      e.preventDefault();

      const editTodo = {
        ...currentTodo,
        title: currentTodo.title,
      };

      updateTodo(currentTodo.id, editTodo);
      setTitle('');
    };

    const handleSearchChange = e => {
      const value = e.target.value.toLowerCase().trim();
      setFilter(value);
    };

    const onToggleTodo = (id) => {
      const toggleTodo = data.find(todo => todo.id === id);

      const updatedTodo = {
        ...toggleTodo,
        completed: !toggleTodo.completed,
      };

      updateTodo(toggleTodo.id, updatedTodo);
    };
    
    return (
      <>
        <h1>Home</h1>
  
        {data.length > 2 && (
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleSearchChange}
            value={filter}
          />
        )}
  
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <h2>Edit Todo</h2>
  
            <label htmlFor="editTodo">Edit todo: </label>
  
            <input
              name="editTodo"
              type="text"
              placeholder="Edit todo"
              value={currentTodo.title}
              onChange={onEditTodoChange}
            />
  
            <button type="submit">Update</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter title"
              onChange={handleInputChange}
            />
  
            <input
              type="text"
              name="text"
              value={text}
              placeholder="Enter todo text"
              onChange={handleInputChange}
            />
            <button>Add Todo</button>
          </form>
        )}
  
        {isLoading && <p>Loading...</p>}
  
        {error && <p>Error: {error.message}</p>}
  
        <ul>
          {showTodos().map(({ id, title, completed }) => (
            <li key={id}>
              <Link to={`/${id}`}>
                <h2>{title}</h2>
              </Link>
  
              <input
                type="checkbox"
                checked={completed}
                onChange={() => onToggleTodo(id)}
              />
              <button type="button" onClick={() => handleEditClick(id)}>
                Edit
              </button>
              <button type="button" onClick={() => deleteTodo(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  };
}
