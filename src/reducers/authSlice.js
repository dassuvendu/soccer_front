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

export const sendOtp = createAsyncThunk(
    'user/send-otp',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('user/send-otp', userInput);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Failed to send OTP');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const verifyOtp = createAsyncThunk(
    'user/verify-otp',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('user/verify-otp', userInput);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Failed to verify OTP');
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

// Forgot Password
export const forgotPassword = createAsyncThunk(
    'auth/forgot-password',
    async (email, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/forget-password', email);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                // Handle the case when status code is not 200
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            let errors = errorHandler(error);
            return rejectWithValue(errors);
        }
    }
);

// Reset Password
export const resetPassword = createAsyncThunk(
    'auth/reset-password',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/change-pass', userInput);
            console.log("response: ", response);
            if (response?.status === 200) {
                //    console.log("response: ",response?.data);
                return response.data;
            } else {

                // Handle the case when status code is not 200
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            let errors = errorHandler(error);
            return rejectWithValue(errors);
        }
    }
);
// Google Sign In
export const googleSignIn = createAsyncThunk(
    'auth/google-signIn',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/api/google-login', data);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                // Handle the case when status code is not 200
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            let errors = errorHandler(error);
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
    subscription: false,
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
            localStorage.removeItem('isSubscribed');
            localStorage.removeItem('uuid')
            localStorage.removeItem('ref_id')
            localStorage.removeItem('googleAccessToken')

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
                const { user_id, email, otp_verified, access_token, first_name, last_name } = payload;
                state.loading = false;
                state.message = payload;
                state.currentUser = {
                    user_id: user_id,
                    email: email,
                    otp_verified: otp_verified,
                    first_name: first_name,
                    last_name: last_name,
                };
                localStorage.setItem(
                    'regToken',
                    JSON.stringify({ token: access_token })
                );
                localStorage.setItem('userId', user_id);
                // localStorage.setItem('firstName', payload?.first_name);

            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            .addCase(sendOtp.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(sendOtp.fulfilled, (state) => {
                state.loading = false;
                state.currentUser.otp_verified = 1;
            })
            .addCase(sendOtp.rejected, (state, response) => {
                state.loading = false;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(verifyOtp.pending, (state) => {
                state.message = null;
                state.error = null;
                state.loading = true;
            })
            .addCase(verifyOtp.fulfilled, (state, { payload }) => {
                const { message } = payload;
                state.loading = false;
                state.currentUser.otp_verified = 1;
                state.message = message;
            })
            .addCase(verifyOtp.rejected, (state, response) => {
                state.loading = false;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(login.pending, (state) => {
                state.loading = true;
                state.isLoggedIn = false;
                state.error = false;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                const { access_token, email, name, user_id, subscription } = payload;
                state.isLoggedIn = true;
                if (subscription !== null) {
                    state.subscription = true;
                }
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
                localStorage.setItem('userId', user_id);
                localStorage.setItem('isSubscribed', JSON.stringify({ isSubscribed: subscription })
                );
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

            .addCase(forgotPassword.pending, (state) => {
                state.message = null;
                state.error = null;
                state.loading = true;
            })
            .addCase(forgotPassword.fulfilled, (state, { payload }) => {
                const { message } = payload;
                state.loading = false;
                state.message = message;
            })
            .addCase(forgotPassword.rejected, (state, response) => {
                state.loading = false;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : '';
            })

            .addCase(resetPassword.pending, (state) => {
                state.message = null;
                state.error = null;
                state.loading = true;
            })
            .addCase(resetPassword.fulfilled, (state, { payload }) => {
                const { message } = payload;
                state.loading = false;
                state.message = message;
                // console.log("payload",response);
            })
            .addCase(resetPassword.rejected, (state, response) => {
                state.loading = false;
                state.error =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : '';
            })
            .addCase(googleSignIn.pending, (state, { payload }) => {
                state.isFetching = true;
                state.isLoggedIn = false;
                state.isGoogleLoggedIn = false;
                state.subscription = false;
                state.error = false;
            })

            .addCase(googleSignIn.fulfilled, (state, { payload }) => {
                const { access_token, subscription, user_id, email, otp_verified } =
                    payload;
                state.isGoogleLoggedIn = true;
                // console.log('state.isGoogleLoggedIn', state.isGoogleLoggedIn);
                state.isLoggedIn = true;
                state.currentUser = {
                    user_id: user_id,
                    email: email,
                    otp_verified: otp_verified,
                };
                localStorage.setItem(
                    'userToken',
                    JSON.stringify({ token: access_token })
                );
                localStorage.setItem(
                    'isSubscribed',
                    JSON.stringify({ isSubscribed: subscription })
                );
                localStorage.setItem('userId', JSON.stringify({ user_id: user_id }));
            })

            .addCase(googleSignIn.rejected, (state, { payload }) => {
                state.error = true;
                state.subscription = false;
                state.isGoogleLoggedIn = false;
                state.message =
                    payload !== undefined
                        ? payload
                        : 'Something went wrong. Try again later.';
                console.log(
                    'state.isGoogleLoggedIn -> rejected',
                    state.isGoogleLoggedIn
                );
            })
    },
});
export const { resetAfterLoggedIn, clearCurrentUser, logout } = authSlice.actions;

export default authSlice.reducer;
