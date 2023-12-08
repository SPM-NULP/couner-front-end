import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/';

export const getAll = createAsyncThunk(
    'device/getAll',
    async (_, thunkApi) => {
    const state = thunkApi.getState();
    
    if (!state.auth.token) {
        return thunkApi.rejectWithValue('No valid token');
    }

    try {
        const res = await axios.get('/device/getAllDevices');
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue;
        }
});