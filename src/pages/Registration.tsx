
import React, { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { useGetUserByIdQuery } from '../api/userApi';
import { Container, Typography, TextField, Button } from '@mui/material';
import Error from './ErrorPage';
import Reservations from './Reservations'

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
    return <Error title="Log in Error" subtitle="invalid email or password" />;
  }
};

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleLogin = async () => {
    try {
      const encodedCredentials = btoa(`${username}:${password}`);
      const response = await fetch(`${import.meta.env.VITE_API_URI}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${encodedCredentials}`,
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        <Reservations />
        // Successful login
        // Handle the response or redirect to the desired page
      } else {
        // Failed login
        // Handle the error, display an error message, or redirect to an error page
      }
    } catch (error) {
      // Handle any network or server errors
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
        <TextField
          label="Useremail"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          margin="normal"
        />
        <TextField
          label="Phonenumber"
          variant="outlined"
          fullWidth
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          type="phonenumber"
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

export default Registration;
