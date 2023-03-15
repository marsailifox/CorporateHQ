import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import PostList from '../../components/PostList/PostList';
import PostEditForm from '../../components/PostEditForm/PostEditForm';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [post] = useState({});

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      console.log(response.data)
      setPosts(response.data);
    });
  }, []);

  function addPost(post) {
    setPosts([...posts, post])
  }

  function deletePost(id) {
    return setPosts(posts.filter((post) => post._id !== id));
  }

  function PostDelete({ id }) {
    function handleDelete() {
      axios.delete(`/api/posts/${id}`).then((response) => {
        setPosts(posts.filter((post) => post._id !== id));
      });
    }
    return (
      <button onClick={handleDelete}>Delete</button>
    );
  }

  function editPost(id, updatedPost) {
    axios.put(`/api/posts/${id}`, updatedPost)
      .then(response => {
        const updatedPosts = posts.map(post => {
          if (post._id === id) {
            return response.data;
          } else {
            return post;
          }
        });
        setPosts(updatedPosts);
      })
      .catch(error => {
        console.error(error);
      });
  }
  

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<PostList posts={posts} addPost={addPost} deletePost={deletePost} editPost={editPost} />} />
            <Route path="/posts/:id/delete" element={<PostDelete />} />
            <Route path="/posts/:id/edit" element={<PostEditForm post={post} editPost={editPost} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}