import * as React from 'react';
import Grid from '@mui/material/Grid';
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {  loginUser } from '../../redux/auth/auth-operations';
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
import { Logo } from '../logo';

export function SignInSide() {
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
          // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          // backgroundImage: 'url(https://lh3.googleusercontent.com/pw/ABLVV84NgEGMTPzQ47zjZagxdKa0SXPWLZgWc5MxDfQn68H6HIImyaaHXDg_9JqpVFCltBhnO_SZrBJJOR7FCm5GLmPc3PRcxULV8u5F_xcLxCkqhADEISQ=w600-h315-p-k)',
          backgroundImage: 'url(https://lh3.googleusercontent.com/pw/ABLVV84-plRyZTkUdSLrDV9FuH86HHdPkjmzCs2eYdDmkYoD3EOFOBTuxpRLwrlBCrhkCgM3T4tCZv5FdVYklBDHJupcs_SnDwOgc0FVslJEc8Arq2wkiUw=w600-h315-p-k)',
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
                Логін
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Немає акаунту?&nbsp;
                <NavLink to='/signup'>
                <Link
                  underline="hover"
                  variant="subtitle2"
                >
                  Зареєструйтесь!
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
                    label="Електронна пошта"
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
                    label="Пароль"
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
                  Увійти
                </Button>
              </form>
          </div>
        </Box>
      </Box>
        </Grid>
      </Grid>
    </Box>
  );
}