import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



export default function PostEditForm({ post, editPost,}) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [updatedPost, setUpdatedPost] = useState({
    title: "",
    content: ""

  })
const {id} = useParams()
const navigate = useNavigate()
  async function handleEdit(evt) {
    evt.preventDefault();
    try {
      const response = await axios.put(`/api/posts/${id}`, updatedPost);
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(evt) {
    setUpdatedPost({...updatedPost, [evt.target.name]: evt.target.value})
  }

  

  return (
    <form onSubmit={handleEdit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Save</button>
    </form>
  );
}

