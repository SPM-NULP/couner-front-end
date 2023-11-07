import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {useLocation} from 'react-router-dom'
import {LoginForm} from "./loginForm"
import { SignUpForm } from "./signupForm";

import {Button} from '@mantine/core'
import {NavLink} from 'react-router-dom'

const defaultTheme = createTheme();

export function SignInSide() {
  const location = useLocation()

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <NavLink to='/'>
              <Button variant="transparent" color="rgba(0, 0, 0, 1)" m="5px">Home</Button>
            </NavLink>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            {location.pathname == '/login' ? "Sign in" : "Sign up"}
            </Typography>
            {location.pathname == '/login' ? <LoginForm/> : <SignUpForm/> }
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}