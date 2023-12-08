import { createSlice } from '@reduxjs/toolkit';

import { getAll } from '../device-controller'

const initialState = {
    devices: [],
    isRefreshing: false,
    error: '',
};

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
  
    extraReducers: builder =>
      builder
        .addCase(getAll.pending, state => state)
        .addCase(getAll.fulfilled, (state, action) => {
            state.devices = action.devices
            state.error = null;
        })
        .addCase(getAll.rejected, (state, action) => {
          state.error = action.payload.message;
  })
})

export const deviceReducer =  deviceSlice.reducer;