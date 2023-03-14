import PostForm from "../PostForm/PostForm";

function PostList({ posts, addPost, deletePost }) {
  return (
    <div>
      <PostForm addPost={addPost}/>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>By {post.author}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
