import { useState } from 'react';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
