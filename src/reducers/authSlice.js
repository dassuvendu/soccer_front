/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../store/api';
import errorHandler from '../store/errorHandler';

export const registerUser = createAsyncThunk(
    'user/register',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/register', userInput);
            if (response?.data?.status_code === 201) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/login', userInput);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                return rejectWithValue(response.data);
            }
        } catch (err) {
            let errors = errorHandler(err);
            return rejectWithValue(errors);
        }
    }
);

const initialState = {
    message: null,
    error: null,
    loading: false,
    isLoggedIn: false,
    currentUser: {},
    isGoogleLoggedIn: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearCurrentUser: (state) => {
            state.currentUser = {};
        },
        resetAfterLoggedIn: (state) => {
            state = { ...initialState, isLoggedIn: true };
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = {};
            state.message = null;
            state.error = null;
            localStorage.removeItem('userToken');
            localStorage.removeItem('userId');
            localStorage.removeItem('subscriptionId');
            localStorage.removeItem('custId');
            localStorage.removeItem('planId');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.message = null;
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user_id, email, otp_verified, access_token } = payload;
                state.loading = false;
                state.message = payload;
                state.currentUser = {
                    user_id: user_id,
                    email: email,
                    otp_verified: otp_verified,

                };
                localStorage.setItem(
                    'regToken',
                    JSON.stringify({ token: access_token })
                );
                localStorage.setItem('userId', JSON.stringify({ user_id: user_id }));
                // localStorage.setItem('firstName', payload?.first_name);

            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.isLoggedIn = false;
                state.error = false;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                const { access_token, email, name, user_id } = payload;
                state.isLoggedIn = true;
                state.message = payload?.message;
                state.loading = false;
                state.currentUser = {
                    user_id: user_id,
                    email: email,
                    name: name,
                };
                localStorage.setItem(
                    'userToken',
                    JSON.stringify({ token: access_token })
                );
                localStorage.setItem('userId', JSON.stringify({ user_id: user_id }));
                localStorage.removeItem('regToken');
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.error = true;
                state.loading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
    },
});
export const { resetAfterLoggedIn, clearCurrentUser, logout } = authSlice.actions;

export default authSlice.reducer;
