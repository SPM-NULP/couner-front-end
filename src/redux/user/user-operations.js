import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `${token}`;
};

axios.defaults.baseURL = 'https://counterdisplayserver-26598a91a1e5.herokuapp.com/api/';

export const getUserData = createAsyncThunk(
    'user/getUser',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        console.log(state.auth.token)
        if (!state.auth.token) {
            return thunkApi.rejectWithValue('No valid token');
        }
        try {
            setAuthToken(state.auth.token)
            const res = await axios.get('user/');
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)



