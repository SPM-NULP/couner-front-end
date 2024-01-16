import * as React from 'react';
import Grid from '@mui/material/Grid';
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {  registrationUser } from '../../redux/auth/auth-operations';
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

export function SignUpSide() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      confirmPassword: '',
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      username: '',
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      username: Yup
        .string()
        .max(255)
        .required('Username is required'),
      lastname: Yup
        .string()
        .max(255)
        .required('Last Name is required'),
      firstname: Yup
        .string()
        .max(255)
        .required('First Name is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required'),
      confirmPassword: Yup
        .string()
        .max(255)
        .required('Password Confirm is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        dispatch(registrationUser(values))
      } catch (error) {
      }
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
          backgroundImage: 'url(https://lh3.googleusercontent.com/pw/ABLVV84NgEGMTPzQ47zjZagxdKa0SXPWLZgWc5MxDfQn68H6HIImyaaHXDg_9JqpVFCltBhnO_SZrBJJOR7FCm5GLmPc3PRcxULV8u5F_xcLxCkqhADEISQ=w600-h315-p-k)',
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
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Реєстрація
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Вже маєте акаунт?
                &nbsp;
                <NavLink to='/login'>
                    <Link
                    href="/auth/login"
                    underline="hover"
                    variant="subtitle2"
                >
                  Увійти
                </Link>
                </NavLink>
                
              </Typography>
            </Stack>
            <form
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.firstname && formik.errors.firstname)}
                  fullWidth
                  helperText={formik.touched.firstname && formik.errors.firstname}
                  label="Ім'я"
                  name="firstname"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                />
                <TextField
                  error={!!(formik.touched.lastname && formik.errors.lastname)}
                  fullWidth
                  helperText={formik.touched.lastname && formik.errors.lastname}
                  label="Прізвище"
                  name="lastname"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                />
                <TextField
                  error={!!(formik.touched.username && formik.errors.username)}
                  fullWidth
                  helperText={formik.touched.username && formik.errors.username}
                  label="Ім'я акаунту"
                  name="username"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Електронна пошта"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
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
                <TextField
                  error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                  fullWidth
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  label="Підтвердження паролю"
                  name="confirmPassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.confirmPassword}
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
                Зареєструватись 
              </Button>
            </form>
          </div>
        </Box>
      </Box>
        </Grid>
      </Grid>
    </Box>
  )
}