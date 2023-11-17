import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme} from '@mui/material/styles';

// import {useLocation} from 'react-router-dom'
// import {LoginForm} from "./loginForm"
// import { SignUpForm } from "./signupForm";

// import {Button} from '@mantine/core'
import {NavLink} from 'react-router-dom'

import { useDispatch } from 'react-redux';
import {  loginUser } from '../../redux/auth/auth-operations';


// import { Provider } from 'react-redux';
// import { store, persistor } from '../../redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import { NavLink} from 'react-router-dom'

// import Head from 'next/head';
// import NextLink from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
// import { Layout as AuthLayout } from '../../../src/layouts/auth/layout';

// import PropTypes from 'prop-types';
// import NextLink from 'next/link';
// import {Unstable_Grid2 as Grid } from '@mui/material';
import { Logo } from '../logo';

// const defaultTheme = createTheme();

export function SignInSide() {
  // const location = useLocation()
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup
        .string()
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values) => {
      dispatch(loginUser(values))
    }
  });

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        height: '100vh',
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
        xs={0}
        lg={6}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            
            <Box
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32
              }}
            >
              <Logo width="50px" height="50px" />
            </Box>
          </Box>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%',
            paddingTop: '50px',
            paddingBottom: '50px'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Login
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <NavLink to='/signup'>
                <Link
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
                </NavLink>
              </Typography>
            </Stack>
              <form
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.username && formik.errors.username)}
                    fullWidth
                    helperText={formik.touched.username && formik.errors.username}
                    label="Email Address"
                    name="username"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.username}
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
              </form>
          </div>
        </Box>
      </Box>
        </Grid>
      </Grid>
    </Box>
    // <ThemeProvider theme={defaultTheme}>
    //   <Grid container component="main" sx={{ height: '100vh' }}>
    //     <CssBaseline />
    //     <Grid
    //       item
    //       xs={false}
    //       sm={4}
    //       md={7}
    //       sx={{
    //         backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundColor: (t) =>
    //           t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //       }}
    //     />
    //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    //         <NavLink to='/'>
    //           <Button variant="transparent" color="rgba(0, 0, 0, 1)" m="5px">Home</Button>
    //         </NavLink>
    //       <Box
    //         sx={{
    //           my: 8,
    //           mx: 4,
    //           display: 'flex',
    //           flexDirection: 'column',
    //           alignItems: 'center',
    //         }}
    //       >   
    //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //           <LockOutlinedIcon />
    //         </Avatar>
    //         <Typography component="h1" variant="h5">
    //         {/* eslint-disable-next-line */}
    //         {location.pathname == '/login' ? "Sign in" : "Sign up"}
    //         </Typography>
    //         {/* eslint-disable-next-line */}
    //         {location.pathname == '/login' ? <LoginForm/> : <SignUpForm/> }
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>
  );
}