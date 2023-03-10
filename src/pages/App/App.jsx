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
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    axios.get('/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/posts', { title, body }).then((response) => {
      setPosts([...posts, response.data]);
      setTitle('');
      setBody('');
    });
  };

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<PostList posts={posts} />} />
            <Route
              path="/create"
              element={<PostForm title={title} body={body} onSubmit={handleSubmit} onTitleChange={handleTitleChange} onBodyChange={handleBodyChange} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}