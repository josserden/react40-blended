import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetchTodos } from 'hooks/useFetchTodos';
import {
  getTodos,
  deleteTodo,
  createTodo,
  updateTodo,
} from 'components/service/todo-service';

export default function Home() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
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

  const onDeleteTodo = id => {
    deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggleTodo = id => {
    const toggleTodo = todos.find(todo => todo.id === id);

    updateTodo(toggleTodo.id, {
      ...toggleTodo,
      completed: !toggleTodo.completed,
    }).then(() => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    });
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

    createTodo(newTodo).then(todo => {
      setTodos([...todos, todo]);
    });

    setTitle('');
    setText('');
  };

  const handleEditClick = id => {
    const toggleTodo = todos.find(todo => todo.id === id);

    setCurrentTodo(toggleTodo);
    setIsEditing(true);
  };

  const handleEditSubmit = e => {
    e.preventDefault();

    const editTodo = {
      ...currentTodo,
      title: currentTodo.title,
    };

    updateTodo(currentTodo.id, editTodo).then(data => {
      setTodos(todos.map(todo => (todo.id === data.id ? data : todo)));
    });

    setTitle('');
  };

  const handleSearchChange = e => {
    const value = e.target.value.toLowerCase().trim();
    setFilter(value);
  };

  const showTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.title.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <h1>Home</h1>

      {todos.length > 2 && (
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

      {loading && <p>Loading...</p>}

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
            <button type="button" onClick={() => onDeleteTodo(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
