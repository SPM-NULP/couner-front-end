import { createSlice } from '@reduxjs/toolkit';

import {
  registrationUser,
  loginUser,
  logoutUser,
//   refreshUser,
//   updateUser,
} from './auth-operations';

const initialState = {
  user: { email: '', username: '' },
  token: '',
  isAuthentificated: false,
  isLoggedIn: 'false',
  isRefreshing: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(registrationUser.pending, state => state)
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(loginUser.pending, state => state)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthentificated = true
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(logoutUser.pending, state => state)
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload.message;
      })
    //   .addCase(refreshUser.pending, state => {
    //     state.isRefreshing = true;
    //   })
    //   .addCase(refreshUser.fulfilled, (state, action) => {
    //     state.user = action.payload;
    //     state.isLoggedIn = true;
    //     state.isRefreshing = false;
    //     state.error = null;
    //   })
    //   .addCase(refreshUser.rejected, (state, action) => {
    //     state.isRefreshing = false;
    //     state.error = action.payload.message;
    //   })
    //   .addCase(updateUser.pending, state => state)
    //   .addCase(updateUser.fulfilled, (state, action) => {
    //     state.user.name = action.payload.data.user.name;
    //     state.user.avatar = action.payload.data.user.avatar;
    //   })
    //   .addCase(updateUser.rejected, (state, action) => {
    //     state.error = action.payload.message;
    //   }),
});

export const authReducer = userSlice.reducer;