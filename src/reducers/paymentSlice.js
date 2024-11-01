import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import errorHandler from '../store/errorHandler';
import api from '../store/api';
import axios from 'axios';

//stripe payment
export const stripePayment = createAsyncThunk(
    'user/strip-payment',
    async (entity, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/payment', entity);
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

export const stripePlanKeys = createAsyncThunk(
    'user/stripe-plan-keys',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/user/stripe-plan-keys');
            // console.log('stripe-key', response);
            if (response?.data?.status_code === 200) {
                // console.log('response.data', response.data);
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


export const bankPlanKeys = createAsyncThunk(
    'user/bank-plan-keys',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/user/gobalpay-key');
            // console.log('stripe-key', response);
            if (response?.data?.status_code === 200) {
                // console.log('response.data', response.data);
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

export const bankPayment = createAsyncThunk(
    'user/bank-payment',
    async (entity, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/gobalpay', entity);
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

export const bankPaymentRedirect = createAsyncThunk(
    'user/bank-payment-redirect',
    async (entity, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/payment-complete', entity);
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

export const monnifyPayment = createAsyncThunk(
    'user/monnify-payment',
    async (entity, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/payment-complete-monnify', entity);
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

export const payStackPayment = createAsyncThunk(
    'user/payStack-payment',
    async (entity, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/payment-complete-paystack', entity);
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

export const freePayment = createAsyncThunk(
    'user/free-payment',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/subscribe_to_free_plan');
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
    stripePublishableKey: null,
    stripeClientSecret: null,
    stripePromise: null,
    options: null,
    customer_id: null,
    subscription_id: null,
    secretKey: null,
    apiKey: null,
    paymentLink: null,
    transactionReference: null,
    redirectResponse: null,
    loadingFree: false,
};

const PaymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(stripePayment.pending, (state) => {
                state.loading = true;
            })
            .addCase(stripePayment.fulfilled, (state, { payload }) => {
                state.loading = false;
                const { clientSecret, customer_id, subscription_id } = payload;
                state.stripeClientSecret = clientSecret;
                state.customer_id = customer_id;
                state.subscription_id = subscription_id;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(stripePayment.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(stripePlanKeys.pending, (state) => {
                state.loading = true;
            })
            .addCase(stripePlanKeys.fulfilled, (state, { payload }) => {
                // console.log('payload', payload);
                state.loading = false;
                const { stripe_publishable_key } = payload;
                state.stripePublishableKey = stripe_publishable_key;
                // console.log('stripe_publishable_key', stripe_publishable_key);
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(stripePlanKeys.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(bankPlanKeys.pending, (state) => {
                state.loading = true;
            })
            .addCase(bankPlanKeys.fulfilled, (state, { payload }) => {
                // console.log('payload', payload);
                state.loading = false;
                const { secretKey, apiKey } = payload;
                state.secretKey = secretKey;
                state.apiKey = apiKey;
                // console.log('stripe_publishable_key', stripe_publishable_key);
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(bankPlanKeys.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(bankPayment.pending, (state) => {
                state.loading = true;
            })
            .addCase(bankPayment.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.paymentLink = payload?.payment_link
                state.transactionReference = payload?.response?.data?.transactionReference
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(bankPayment.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(bankPaymentRedirect.pending, (state) => {
                state.loading = true
            })
            .addCase(bankPaymentRedirect.fulfilled, (state, { payload }) => {
                state.loading = false
                state.redirectResponse = payload;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(bankPaymentRedirect.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = true;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(monnifyPayment.pending, (state) => {
                state.loading = true
            })
            .addCase(monnifyPayment.fulfilled, (state, { payload }) => {
                state.loading = false
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(monnifyPayment.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = true;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(payStackPayment.pending, (state) => {
                state.loading = true
            })
            .addCase(payStackPayment.fulfilled, (state, { payload }) => {
                state.loading = false
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(payStackPayment.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = true;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(freePayment.pending, (state) => {
                state.loadingFree = true
            })
            .addCase(freePayment.fulfilled, (state, { payload }) => {
                state.loadingFree = false
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(freePayment.rejected, (state, { payload }) => {
                state.loadingFree = false;
                state.error = true;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })


    },
});

export default PaymentSlice.reducer;