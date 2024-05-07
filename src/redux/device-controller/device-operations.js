import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://counterdisplayserver-26598a91a1e5.herokuapp.com/api/';

export const getAll = createAsyncThunk(
    'device/getAll',
    async (_, thunkApi) => {
    const state = thunkApi.getState();
    
    if (!state.auth.token) {
        return thunkApi.rejectWithValue('No valid token');
    }

    try {
        axios.defaults.headers.common.Authorization = state.auth.token
        const res = await axios.get(`user/getDevicesForCurrentUser`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue;
    }
});
