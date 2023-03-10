import React, { useState } from 'react';
import axios from 'axios';

function PostForm({ addPost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/posts', { title, body, author })
      .then(response => {
        addPost(response.data);
        setTitle('');
        setBody('');
        setAuthor('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
