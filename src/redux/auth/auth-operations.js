// http://localhost:8080/api/auth/signin/ --- local server 

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registrationUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(credentials)
      await axios.post('auth/signup', credentials);
      const {email , password} = credentials
      let loguser = {
        password,
        username: email
      }
      const res = await axios.post('/auth/signin', loguser);
      setAuthToken(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    console.log(credentials)
    console.log(credentials.password)
    try {  let loguser = {
        password: `${credentials.password}`,
        username: `${credentials.username}`
      }
      const res = await axios.post('/auth/signin', loguser);
      setAuthToken(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      clearAuthToken();
    } catch (error) {
      return rejectWithValue;
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (data, thunkApi) => {
//     const state = thunkApi.getState();

//     if (!state.auth.token) {
//       return thunkApi.rejectWithValue('No valid token');
//     }

//     setAuthToken(state.auth.token);

//     try {
//       const res = await axios.get('auth/current');

//       return res.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue;
//     }
//   }
// );

// export const updateUser = createAsyncThunk(
//   'auth/edit',
//   async (user, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.patch(`/auth/edit`, user, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getCurrentUser = createAsyncThunk(
//   'auth/getCurrent',
//   async (_, thunkAPI) => {
//     // Reading the token from the state via getState()
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       // If there is no token, exit without performing any request
//       return thunkAPI.rejectWithValue('Unable to download user information');
//     }
//     try {
//       // If there is a token, add it to the HTTP header and perform the request
//       persistedToken && setAuthToken(persistedToken);
//       const res = await axios.get('/user/');
//       return res.data;
//     } catch (error) {
//       // check is token is expired - and then delete it from local storage
//       if (error.response.data.message === 'jwt expired') {
//         // If the response status is 401, clear the auth header and purge the persisted data
//         // clearAuthToken();
//         thunkAPI.dispatch({ type: 'persist/PURGE', key: 'persist:auth' });
//       }
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );