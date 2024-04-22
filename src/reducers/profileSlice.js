import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../store/api';
import errorHandler from '../store/errorHandler';

export const editProfile = createAsyncThunk(
    'user/edit-profile',
    async (thunkAPI) => {
        try {
            const response = await api.get('user/edit-profile');
            if (response?.status === 200 && response?.data?.data) {
                localStorage.setItem(
                    'isSubscribed',
                    JSON.stringify({
                        isSubscribed:
                            response?.data?.data[0]?.user_subscriptions[0]?.subscription,
                    })
                );
                return response.data.data;
            } else {
                throw Error('Failed to fetch');
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const Updateprofile = createAsyncThunk(
    'user/UpdateProfile',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/update-profile', userInput);
            if (response.status === 200) {
                return response.data;

            } else {
                let errors = errorHandler(response);
                return rejectWithValue(errors);
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
    profile: [],
    userPlan: [],
    updatedProfile: [],
    isloadingEditProfile: false
};

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editProfile.pending, (state) => {
                state.loading = true;
                state.message = null;
                state.isloadingEditProfile = true;
            })
            .addCase(editProfile.fulfilled, (state, { payload }) => {
                state.isloadingEditProfile = false;
                state.loading = false;
                state.profile = {
                    details: payload[0],
                };
                const subscriptionDetails = payload[0].user_subscriptions[0];
                state.userPlan = {
                    details: subscriptionDetails,
                };
            })
            .addCase(editProfile.rejected, (state, response) => {
                state.isloadingEditProfile = false;
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            }).addCase(Updateprofile.pending, (state) => {
                state.loading = true;
                state.message = null;
            })
            .addCase(Updateprofile.fulfilled, (state, { payload }) => {
                state.loading = false;
                // const subscriptionDetails = payload[0].user_subscriptions[0];
                // state.userPlan = {
                //     details: subscriptionDetails,
                // };
                state.updatedProfile = payload;
            })
            .addCase(Updateprofile.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })
    }
});

export const { clearMessage } = ProfileSlice.actions;
export default ProfileSlice.reducer;