import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://counterdisplayserver-26598a91a1e5.herokuapp.com/api/';

export const getDisplays = createAsyncThunk(
    'display/getDisplays',
    async (_, thunkApi) => {
    const state = thunkApi.getState();
    
    if (!state.auth.token) {
        return thunkApi.rejectWithValue('No valid token');
    }

    try {
        const res = await axios.get('display_count/getAllDisplayCounts');
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue;
    }
});

export const getDisplaysByDeviceId = createAsyncThunk(
    'display/getDisplaysByDeviceId',
    async (id, thunkApi) => {
        const state = thunkApi.getState();
        
        if (!state.auth.token) {
            return thunkApi.rejectWithValue('No valid token');
        }
    
        try {
            const res = await axios.get(`display_count/getMeasurementsByDeviceNumber/${id}`);
            console.log(res.data)
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue;
        }
    }
)