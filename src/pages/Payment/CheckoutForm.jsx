import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { referral } from "../../reducers/RefCount";
import { useEffect } from "react";

const CheckoutForm = ({
  setErrorMessage,
  customer_id,
  subscription_id,
  plan_id,
  user_id,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const returnUrl = `${
    import.meta.env.VITE_FRONT_BASE_URL
  }/payment-redirect/?customer_id=${encodeURIComponent(
    customer_id
  )}&subscription_id=${encodeURIComponent(
    subscription_id
  )}&plan_id=${plan_id}&user_id=${user_id}`;
  // useEffect(() => {
  //   dispatch(
  //     referral({
  //       user_id: user_id,
  //       ref_id: profile?.details?.ref_id,
  //     })
  //   );
  // }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Hello");
    dispatch(
      referral({
        user_id: user_id,
        ref_id: profile?.details?.ref_id,
      })
    );

    if (!stripe || !elements) {
      return;
    }
    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: returnUrl,
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      } else {
        console.log("Payment confirmed successfully");
        // Do whatever you want to do after successful payment confirmation
      }
    } catch (error) {
      console.error("An error occurred while confirming payment:", error);
      // Handle the error accordingly
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        className="w-full h-12 mt-2 mb-0 text-sm text-white uppercase bg-blue-600 rounded-full hover:bg-blue-500"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
