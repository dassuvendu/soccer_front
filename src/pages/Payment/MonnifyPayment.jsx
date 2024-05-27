import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { logoIcon } from '../../assets/images/images';

const MonnifyPayment = ({ planId }) => {
    const { email, first_name } = useSelector((state) => state.auth?.currentUser);
    const plansList = useSelector((state) => state.plans?.plans);
    const redirectUrl = `${import.meta.env.VITE_FRONT_BASE_URL}/payment-success`;

    const [reference, setReference] = useState(`ref-${Math.floor(Math.random() * 1000000000)}`);

    const baseURL = 'https://sandbox.monnify.com/api/v1'; // Use the appropriate Monnify environment

    const apiKey = 'MK_TEST_WE3QLPMYDR';
    const secretKey = 'DPKDQWEDGNN2TZ1LF6YPYA0B00NAC0YL';
    const contractCode = '1931878869';

    const api = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${apiKey}:${secretKey}`),
        }
    });

    const initializeTransaction = (data) => {
        return api.post('/merchant/transactions/init-transaction', data);
    };

    useEffect(() => {
        const transactionData = {
            amount: planId === 1 ? plansList[0]?.price : plansList[1]?.price,
            customerName: first_name, // Replace with dynamic data if needed
            customerEmail: email,
            paymentReference: reference,
            paymentDescription: 'Subscription Payment',
            currencyCode: 'NGN',
            contractCode: contractCode, // Replace with your Monnify contract code
            redirectUrl: redirectUrl // Replace with your success URL
        };

        const handleSubscription = async () => {
            try {
                const response = await initializeTransaction(transactionData);
                const { checkoutUrl } = response.data.responseBody;
                window.location.href = checkoutUrl; // Redirect to Monnify payment page
            } catch (error) {
                console.error('Error initializing transaction:', error);
            }
        };

        handleSubscription();
    }, []); // Dependencies for useEffect

    return (
        <div>
            <h1>Initializing Subscription...</h1>
            <img src={logoIcon} alt="loading.." className="loader mb-4" />
        </div>
    );
};

export default MonnifyPayment;
