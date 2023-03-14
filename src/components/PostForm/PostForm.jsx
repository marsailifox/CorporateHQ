import React, { useState } from 'react';
import axios from 'axios';

function PostForm({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { title, content })
      .then(response => {
        addPost(response.data);
        setTitle('');
        setContent('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="content">content:</label>
        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
