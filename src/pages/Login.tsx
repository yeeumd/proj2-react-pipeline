import React, { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import {useGetUserByIdQuery} from '../api/userApi';
import { Container, Typography, TextField, Button } from '@mui/material';
import Error from './ErrorPage'

const login = async (username, password) => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      // Successful login
      // go to reservations page
      // save the language preference in state
    } else {
        // return <Error />
        return <Error title="Log in Error" subtitle="invalid email or password" />

      // Failed login
      // Handle the error, display an error message, or redirect to an error page
    }
  };

  
const Login: React.FC = () => {
//   const history = useHistory();
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async () => {
    // console.log("trying to login")
    try {
      const response = await fetch('http://localhost/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        // Successful login
        // Handle the response or redirect to the desired page
        // const { data: user, language, refetch }  =  useGetUserByIdQuery(response.id); 
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
