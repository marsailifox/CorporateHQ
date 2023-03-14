import axios from 'axios';
import PostForm from '../PostForm/PostForm';

function PostList({ posts, addPost, deletePost, update }) {

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`routes/api/posts/${id}`);
      deletePost(id);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleEdit = async (id) => {
    try {
      const response = await axios.put(`routes/api/posts/${id}`);
      update(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <PostForm addPost={addPost} />
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>By {post.author}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <button onClick={() => handleEdit(post.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;

