import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../store/api';

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
                            response?.data?.data[0]?.user_subscriptions[0]?.plan?.id,
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



const initialState = {
    message: null,
    error: null,
    loading: false,
    profile: [],
    userPlan: [],
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
            })
            .addCase(editProfile.fulfilled, (state, { payload }) => {
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