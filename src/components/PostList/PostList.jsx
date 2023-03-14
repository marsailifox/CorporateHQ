import axios from 'axios';
import PostForm from '../PostForm/PostForm';

function PostList({ posts, addPost, deletePost }) {

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete();
      deletePost(id);
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
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;

