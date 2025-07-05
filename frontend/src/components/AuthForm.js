import React, { useState, useContext } from 'react'; // ✅ Add useContext here
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); // ✅ Use context here

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin ? '/auth/login' : '/auth/register';
      const res = await axios.post(url, { email, password, name });

      // Save token to localStorage
      localStorage.setItem('token', res.data.token);

      // Set user in context (mock user for now)
      setUser({ email, role: 'user' });

      // Redirect to homepage
      navigate('/');
    } catch (err) {
      alert(isLogin ? 'Login failed' : 'Registration failed');
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={!isLogin}
          />
        )}
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        &nbsp;
        <a href={isLogin ? '/register' : '/login'}>
          {isLogin ? 'Register' : 'Login'}
        </a>
      </p>
    </div>
  );
};

export default AuthForm;