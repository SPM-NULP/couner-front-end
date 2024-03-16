import { createSlice } from '@reduxjs/toolkit';
import {getDisplays} from './display-operations'

const initialState = {
    display: [],
    isRefreshing: false,
    error: '',
};

export const displaySlice = createSlice({
    name: 'display',
    initialState,

    extraReducers: builder =>
        builder
        .addCase(getDisplays.pending, state => state)
        .addCase(getDisplays.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.display = action.payload
            state.error = null;
        })
        .addCase(getDisplays.rejected, (state, action) => {
            state.error = action.payload.message;
    })
})

export const displayReducer =  displaySlice.reducer;