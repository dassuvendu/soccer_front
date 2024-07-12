import React from 'react';
import { PaystackButton } from 'react-paystack';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { payStackPayment } from '../../reducers/paymentSlice';
import { useNavigate } from 'react-router-dom';

const PayStackPayment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, first_name } = useSelector((state) => state.auth?.currentUser);
    const plansList = useSelector((state) => state.plans?.plans);
    const amountUSD = parseFloat(plansList[0]?.price);
    // const email = "user@yopmail.com"; // Replace with actual user email
    // const paymentAmount = 5000; // Replace with actual amount to be paid
    // const publicKey = 'pk_test_ccca273e8e59f09d03c23626425219567eb4e5c6'; // Replace with your Paystack public key
    // const secretKey = 'sk_test_27d5bd78d53ef0a61692cb1145b00a1901d9eb56'; // Replace with your Paystack secret key (caution!)
    const publicKey = 'pk_live_b173f0ba73d0c3efedfbce69d723e2c636be51b3';
    const secretKey = 'sk_live_555e56a0023b0517a149f9d59062608b8bd41c16';
    const amountInKobo = amountUSD * 100; // Convert amount to kobo (Naira to Kobo)

    const convertUSDtoNGN = (amountInKobo) => {
        // Assuming a fixed exchange rate (example: 1 USD = 410 NGN)
        const exchangeRate = 1500; // Replace with your desired exchange rate

        // Perform the conversion
        const amountNGN = amountInKobo * exchangeRate;

        // Return the converted amount
        return amountNGN;
    };

    const amountNGN = convertUSDtoNGN(amountInKobo);

    const UserId = JSON.parse(localStorage.getItem("userId"));
    const planId = Number(localStorage.getItem("planId"));

    const componentProps = {
        email,
        amount: amountNGN,
        publicKey,
        text: "Pay Now",
        onSuccess: (reference) => handleSuccess(reference),
        onClose: () => handleClose(),
    };

    const handleSuccess = async (reference) => {
        // console.log("Payment successful, reference:", reference);

        try {
            const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference.reference}`, {
                headers: {
                    Authorization: `Bearer ${secretKey}`
                }
            });
            // console.log("Transaction details: response", response)

            const payStackPaymentSuccess = dispatch(payStackPayment({
                "user_id": UserId,
                "plan_id": planId,
                "data": {
                    "requestSuccessful": true,
                    "responseMessage": response?.data?.data?.gateway_response,
                    "responseCode": "0",
                    "responseBody": {
                        "paymentMethod": response?.data?.data?.channel,
                        "createdOn": response?.data?.data?.createdAt?.split('T')[0],
                        "amount": response?.data?.data?.amount,
                        "fee": response?.data?.data?.fees,
                        "currencyCode": response?.data?.data?.currency,
                        "completedOn": response?.data?.data?.paidAt?.split('T')[0],
                        "customerName": first_name,
                        "customerEmail": response?.data?.data?.customer?.email,
                        "paymentDescription": response?.data?.message,
                        "paymentStatus": response?.data?.data?.status,
                        "transactionReference": response?.data?.data?.reference,
                        "paymentReference": response?.data?.data?.reference,
                        "payableAmount": response?.data?.data?.requested_amount,
                        "amountPaid": response?.data?.data?.amount,
                        "completed": true,
                    }
                },
            }));
            payStackPaymentSuccess.then((response) => {
                if (response?.payload?.status_code === 200) {
                    navigate("/dashboard");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                }
            })
            // Handle post-payment success actions with the transaction details here
        } catch (error) {
            console.error("Error verifying transaction:", error);
            // Handle error during verification
        }
    };

    const handleClose = () => {
        console.log("Payment dialog closed");
        // Handle post-payment dialog close actions here
    };

    return (
        <>
            <div className='mt-10 mb-8'>
                <h3 className='text-center text-xl font-medium'>Pay with Paystack</h3>
                <div className='text-center items-center mt-4'>
                    <PaystackButton {...componentProps} className='rounded-full text-sm mb-0 uppercase px-8 py-2 bg-[#639aba] inline-block text-white hover:bg-[#75b1d3]' />
                </div>

            </div>
        </>

    );
};

export default PayStackPayment;
