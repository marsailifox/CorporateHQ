import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import PostList from '../../components/PostList/PostList';
import PostForm from '../../components/PostForm/PostForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      console.log(response.data)
      setPosts(response.data);
    });
  }, []);

  function addPost(post) {
    setPosts([...posts, post])
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

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<PostList posts={posts} addPost={addPost} />} />
            <Route path="/posts/:id/edit" element={<PostForm  />} />
            <Route path="/posts/:id/delete" element={<PostDelete />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}