import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { logoIcon } from '../../assets/images/images';

const MonnifyPayment = ({ planId }) => {
    const { email, first_name } = useSelector((state) => state.auth?.currentUser);
    const plansList = useSelector((state) => state.plans?.plans);
    const amountUSD = plansList[0]?.price;
    console.log("amountUSD", amountUSD)
    const redirectUrl = `${import.meta.env.VITE_FRONT_BASE_URL}/payment-success`;

    const [reference, setReference] = useState(`ref-${Math.floor(Math.random() * 1000000000)}`);

    const baseURL = 'https://sandbox.monnify.com/api/v1'; // Use the appropriate Monnify environment
    // const baseURL = 'https://api.monnify.com/api/v1';
    const apiKey = 'MK_TEST_WE3QLPMYDR'; //test
    // const apiKey = 'MK_PROD_DGWL4CGVAW';
    const secretKey = 'DPKDQWEDGNN2TZ1LF6YPYA0B00NAC0YL';  //test
    // const secretKey = 'QN7DBTKPHNWM2X4WPCASLXPBGUNAMK6H';
    const contractCode = '1931878869';  //test
    // const contractCode = '819597383830';

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

    const convertUSDtoNGN = (amountUSD) => {
        // Assuming a fixed exchange rate (example: 1 USD = 410 NGN)
        const exchangeRate = 1500; // Replace with your desired exchange rate

        // Perform the conversion
        const amountNGN = amountUSD * exchangeRate;

        // Return the converted amount
        return amountNGN;
    };

    const amountNGN = convertUSDtoNGN(amountUSD);
    console.log("amountNGN", amountNGN);

    useEffect(() => {
        const transactionData = {
            // amount: planId === 1 ? plansList[0]?.price : plansList[1]?.price,
            amount: amountNGN,
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
            <h1 className='text-center items-center'>Initializing Subscription...</h1>
            <img src={logoIcon} alt="loading.." className="loader mb-4" />
        </div>
    );
};

export default MonnifyPayment;
