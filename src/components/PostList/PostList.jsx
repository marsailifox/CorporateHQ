import axios from 'axios';
import PostForm from '../PostForm/PostForm';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function PostList({ posts, addPost, deletePost, setPosts }) {
  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      console.log(response.data)
      setPosts(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/posts/${id}`);
      deletePost(id)
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <PostForm addPost={addPost} />
      {posts.map(post => (
        <div key={post._id}>
          <h3><Link to={`/posts/${post._id}/edit`}>{post.title}</Link></h3>
          <p><Link to={`/posts/${post._id}/edit`}>{post.body}</Link></p>
          <p>By {post.author}</p>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;

