import { createSlice } from '@reduxjs/toolkit';

import {getUserData} from './user-operations';

const initialState = {
    name: '',
    surname: '',
    email: '', 
    username: '', 
    phoneNumber: '',
    id: 0,
    error: '',
};

export const userDataSlice = createSlice({
    name: 'user',
    initialState,
  
    extraReducers: builder =>
      builder
        .addCase(getUserData.pending, state => state)
        .addCase(getUserData.fulfilled, (state, action) => {
          state.name = action.payload.firstName
          state.surname = action.payload.lastName
          state.email = action.payload.email;
          state.username = action.payload.username
          state.error = null;
          state.phoneNumber = action.payload.phoneNumber;
          state.id = action.payload.id
        })
        .addCase(getUserData.rejected, (state, action) => {
          state.error = action.payload.message;
        })
});

export const userReducer = userDataSlice.reducer;