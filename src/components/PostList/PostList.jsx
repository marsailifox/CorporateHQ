import React from 'react';

function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>By {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
