import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { monnifyPayment } from '../../reducers/paymentSlice';
import { logoIcon } from '../../assets/images/images';

const PaymentSuccess = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [paymentDetailsApi, setPaymentDetailsApi] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const UserId = JSON.parse(localStorage.getItem("userId"));
    const planId = Number(localStorage.getItem("planId"));

    const location = useLocation();

    const getQueryParams = (search) => {
        return new URLSearchParams(search);
    };

    // const baseURL = 'https://sandbox.monnify.com/api/v1'; // Use the appropriate Monnify environment
    const baseURL = 'https://api.monnify.com/api/v1';

    const apiKey = 'MK_PROD_DGWL4CGVAW';
    const secretKey = 'QN7DBTKPHNWM2X4WPCASLXPBGUNAMK6H';

    const api = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${apiKey}:${secretKey}`),
        }
    });

    const getTransactionDetails = (paymentReference) => {
        return api.get(`/merchant/transactions/query?paymentReference=${paymentReference}`);
    };

    useEffect(() => {
        if (paymentDetailsApi !== null) {
            const paymentSuccess = dispatch(monnifyPayment({

                "user_id": UserId,
                "plan_id": planId,
                "data": paymentDetailsApi,
            }))
            paymentSuccess.then((response) => {
                if (response?.payload?.status_code === 200) {
                    navigate("/dashboard");
                }
            })
        }

    }, [paymentDetailsApi])

    useEffect(() => {
        const fetchPaymentDetails = async () => {
            const params = getQueryParams(location.search);
            const paymentReference = params.get('paymentReference');

            if (paymentReference) {

                const response = await getTransactionDetails(paymentReference);
                setPaymentDetails(response.data.responseBody);
                setPaymentDetailsApi(response.data);
            } else {
                setError('No payment reference found.');
                setLoading(false);
            }
        };

        fetchPaymentDetails();
    }, [location.search]);

    if (loading) {
        return <div>Loading...  <img src={logoIcon} alt="loading.." className="loader mb-4" /></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    return (
        <div>
            <h1>Payment Successful</h1>
            {paymentDetails && (
                <div>
                    <p>Payment Reference: {paymentDetails.paymentReference}</p>
                    <p>Amount Paid: {paymentDetails.amountPaid}</p>
                    <p>Payment Status: {paymentDetails.paymentStatus}</p>
                </div>
            )}
        </div>
    );
};

export default PaymentSuccess;