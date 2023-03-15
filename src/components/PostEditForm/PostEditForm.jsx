import { useState } from 'react';

function PostEditForm({ post, editPost }) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  function handleSubmit(event) {
    event.preventDefault();
    editPost(post._id, { title, body });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Body:
        <textarea value={body} onChange={event => setBody(event.target.value)} />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default PostEditForm;
