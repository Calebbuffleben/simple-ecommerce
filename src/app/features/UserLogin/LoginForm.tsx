"use client"

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './UserLoginSlice';

const LoginForm = ({ onLogin }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform validation or API call, then call onLogin callback
    const user = { username, password };
    dispatch(login(user))
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
