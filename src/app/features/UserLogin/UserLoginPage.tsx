"use client"

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserInfo from './UserInfo';
import { logout } from './UserLoginSlice';

const UserLoginPage = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.userLogin.loggedInUser);

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div>
      <h1>User Login Page</h1>
      {!loggedInUser ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <UserInfo user={loggedInUser} />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default UserLoginPage;
