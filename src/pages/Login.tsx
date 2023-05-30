
import React, { useState } from 'react';
import {useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import { UserType } from '../api/userApi';
import Error from './ErrorPage';
import Reservations from './Reservations';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/userReducer';

const login = async (username, password) => {
  const encodedCredentials = btoa(`${username}:${password}`);
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${encodedCredentials}`,
    },
    body: JSON.stringify({ username, password }),
  });
  
  if (response.ok) {
    // Successful login
    <Reservations />
    // save the language preference in state
  } else {
    // Failed login
    // Handle the error, display an error message, or redirect to an error page
    // return <Error title="Log in Error" subtitle="invalid email or password" />;
    // temporary installment until we can get user logged in
    <Reservations />
  }
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch(); 

  const defaultUser = {
    id: 1000,
    name: "Tom",
    email: "tom@gmail.com",
    phoneNumber: '404-404-4004',
    language: "English",
    timezone: new Date().toISOString(),
    password: "password",
    role: "ROLE_USER"
  }

  const handleLogin = async () => {
    try {
      const encodedCredentials = btoa(`${username}:${password}`);
      // const response = await fetch(`${import.meta.env.VITE_API_URI}/login`, {
        const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${encodedCredentials}`,
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // const user = await response.json();
        try {
          const response = await fetch(`http://localhost:8080/username/` + username);
          console.log(response);
        } catch (error) {
          console.error(error);
          throw error;
        }
        // console.log(response);
        // dispatch(setUser(user));
        <Reservations />
        // Successful login
        // Handle the response or redirect to the desired page
      } else {
        // Failed login
        <Error />
        // Handle the error, display an error message, or redirect to an error page
      // put here for demo reasons to test reservation functionality
      // const user = defaultUser;
      // console.log(user);
      // dispatch(setUser(user));
      // <Reservations />
      // to remove later
      }
    } catch (error) {

      // Handle any network or server errors
      <Error />
              // Handle the error, display an error message, or redirect to an error page
      // put here for demo reasons to test reservation functionality
      // const user = defaultUser;
      // console.log(user);
      // dispatch(setUser(user));
      // <Reservations />
      // to remove later
    }
    
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
