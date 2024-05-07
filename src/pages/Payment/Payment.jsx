import React, { useEffect, useState } from "react";
// import { paymentIcon } from '../../../ui/layout/outside-login/images';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import { bannerImgTwo, paymentIcon } from "../../assets/images/images";
// import { paymentIcon, stripeIcon } from '../../assets/images/images';

const Payment = (props) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [options, setOptions] = useState(null);

  const [errorMessage, setErrorMessage] = useState();

  const {
    stripeClientSecret,
    customer_id,
    subscription_id,
    stripePublishableKey,
    email,
    user_id,
    planId,
  } = props;

  console.log("props", props);

  useEffect(() => {
    const promise = loadStripe(stripePublishableKey);
    setStripePromise(promise);

    const stripe_options = {
      clientSecret: stripeClientSecret,
    };
    setOptions(stripe_options);
  }, []);
  return (
    <>
      <div className="py-10 lg:py-24 px-8 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-[#232a34]">
            Payment
          </h2>
          <div className="plan_tab_area">
            <div className="px-4 lg:px-0">
              <div className="w-full max-w-4xl p-6 mx-auto my-0 shadow-xl bg-[#2aa9e1] rounded-2xl lg:p-10">
                <div className="container mx-auto my-0">
                  <div className="md:flex">
                    <div className="w-2/5 flex justify-center items-center">
                      <div className="hidden lg:block">
                        <div className="text-center">
                          <img
                            src={paymentIcon}
                            alt="paymentIcon"
                            className="rounded-xl w-64"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-3/5">
                      <div className="register_cont">
                        <h2 className="font-Bebas py-5 text-4xl tracking-normal mb-5 text-center text-white">
                          Make Payment
                        </h2>
                        <div className="stripe-error text-red-600">
                          {errorMessage}
                        </div>
                        <>
                          {stripePublishableKey &&
                            customer_id &&
                            subscription_id &&
                            planId &&
                            user_id && (
                              <>
                                {console.log("keys", stripePublishableKey, customer_id, subscription_id, planId, user_id)}
                                <Elements
                                  stripe={stripePromise}
                                  options={options}
                                >
                                  <CheckoutForm
                                    customer_id={customer_id}
                                    subscription_id={subscription_id}
                                    plan_id={planId}
                                    user_id={user_id}
                                  />
                                </Elements>
                              </>
                            )}
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
