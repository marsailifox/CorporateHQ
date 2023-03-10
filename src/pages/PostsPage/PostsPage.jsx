import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm';

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} />
      <h2>Create a new post</h2>
      <PostForm addPost={addPost} />
    </div>
  );
}

export default PostsPage;
