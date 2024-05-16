import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { bankPaymentRedirect, stripePayment } from "../../reducers/paymentSlice";
// import { referral } from "../../reducers/RefCount";
import { editProfile } from "../../reducers/profileSlice";
import Login from "../Auth/Login/Login";
import Registration from "../Registration/Registration";

const PaymentRedirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState({ type: null, text: null });
  const [showReloadMessage, setshowReloadMessage] = useState(true);
  // const { profile } = useSelector((state) => state.profile);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const loginHandler = () => {
    setOpenRegisterModal(false);
    setOpenLoginModal(true);
  };

  useEffect(() => {
    console.log("openLoginModal", openLoginModal);
    console.log("openRegisterModal", openRegisterModal);
  }, [openLoginModal, openRegisterModal]);

  const token =
    JSON.parse(localStorage.getItem("userToken")) ||
    JSON.parse(localStorage.getItem("regToken"));

  // const urlString = window.location.search;
  // const urlParams = new URLSearchParams(urlString);
  // const redirectStatus = urlParams.get("redirect_status");
  // const customer_id = urlParams.get("customer_id")
  //   ? decodeURIComponent(urlParams.get("customer_id"))
  //   : null;
  // const subscription_id = urlParams.get("subscription_id")
  //   ? decodeURIComponent(urlParams.get("subscription_id"))
  //   : null;
  // const plan_id = Number(urlParams.get("plan_id"));
  // const user_id = Number(urlParams.get("user_id"));
  // const ref_id = Number(urlParams.get("ref_id"));


  const UserId = JSON.parse(localStorage.getItem("userId"));
  console.log("UserId", UserId);
  const planId = Number(localStorage.getItem("planId"));
  console.log("planrId", planId);
  const txnref = localStorage.getItem("txnref");
  const merchantid = Number(localStorage.getItem("merchantid"));
  const channel = localStorage.getItem("channel");
  const amount = Number(localStorage.getItem("amount"));
  const paymentDate = localStorage.getItem("paymentDate");
  const paymentStatus = localStorage.getItem("paymentStatus");
  const furtherProcessed = localStorage.getItem("furtherProcessed");
  const processDate = localStorage.getItem("processDate");
  const merchantTxnref = localStorage.getItem("merchantTxnref");
  const inAmount = Number(localStorage.getItem("inAmount"));
  const inCurrency = localStorage.getItem("inCurrency");
  const rate = localStorage.getItem("rate");
  const redirectUrl = localStorage.getItem("redirectUrl");
  const transactionSource = localStorage.getItem("transactionSource");
  const transactionChannel = localStorage.getItem("transactionChannel");
  const successMessage = localStorage.getItem("successMessage");
  const responseCode = localStorage.getItem("responseCode");
  const isSuccessful = localStorage.getItem("isSuccessful");
  const error = localStorage.getItem("error");

  const { redirectResponse } = useSelector((state) => state.payment)
  console.log("redirectResponse", redirectResponse);
  useEffect(() => {
    if (UserId && planId) {
      dispatch(
        // stripePayment({
        //   token: token?.token,
        //   user_id: user_id,
        //   plan_id: plan_id,
        //   customer_id: customer_id,
        //   subscription_id: subscription_id,
        //   refId: ref_id,
        //   entity: "subscription_complete",
        // })
        bankPaymentRedirect({
          "user_id": UserId,
          "plan_id": planId,
          "data": {
            "txnref": txnref,
            "merchantid": merchantid,
            "channel": channel,
            "amount": amount,
            "paymentDate": paymentDate,
            "paymentStatus": paymentStatus,
            "furtherProcessed": furtherProcessed,
            "processDate": processDate,
            "merchantTxnref": merchantTxnref,
            "inAmount": inAmount,
            "inCurrency": inCurrency,
            "rate": rate,
            "redirectUrl": redirectUrl,
            "transactionSource": transactionSource,
            "transactionChannel": transactionChannel
          },

          "successMessage": successMessage,
          "responseCode": responseCode,
          "isSuccessful": isSuccessful,
          "error": error

        })
      );
      // if (redirectStatus === "succeeded") {
      if (redirectResponse?.status_code === 200) {
        setshowReloadMessage(false);
        setMessage({
          type: "success",
          text: "Subscription updated successfully",
        });
      } else {
        setshowReloadMessage(false);
        setMessage({ type: "fail", text: "Failed to update subscription" });
      }
    }
  }, []);

  useEffect(() => {
    // if (redirectStatus === "succeeded") {
    if (redirectResponse?.status_code === 200) {
      //  dispatch(referral({
      //   user_id:user_id,
      //   ref_id:profile?.details?.ref_id
      //  })
      // )
      localStorage.setItem(
        "userToken",
        JSON.stringify({ token: token?.token })
      );
      localStorage.removeItem("regToken");

      localStorage.removeItem("txnref")
      localStorage.removeItem("merchantid")
      localStorage.removeItem("channel")
      localStorage.removeItem("amount")
      localStorage.removeItem("paymentDate")
      localStorage.removeItem("paymentStatus")
      localStorage.removeItem("furtherProcessed")
      localStorage.removeItem("processDate")
      localStorage.removeItem("merchantTxnref")
      localStorage.removeItem("inAmount")
      localStorage.removeItem("inCurrency")
      localStorage.removeItem("rate")
      localStorage.removeItem("redirectUrl")
      localStorage.removeItem("transactionSource")
      localStorage.removeItem("transactionChannel")
      localStorage.removeItem("successMessage")
      localStorage.removeItem("responseCode")
      localStorage.removeItem("isSuccessful")
      localStorage.removeItem("error")

      navigate("/");
      // setOpenLoginModal(true);
      // setOpenLoginModal(true);
      // setTimeout(() => {
      //   setOpenLoginModal(true);
      // }, 2000);
    }
  }, [redirectResponse]);

  return (
    <div className="h-96 flex justify-center items-center">
      <div className="container mx-auto mt-3">
        {showReloadMessage && (
          <p className="text-center">Please do not refresh the page</p>
        )}
        {/* Alert with success style */}
        {message?.type !== null && message?.type === "success" && (
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
            role="alert"
          >
            <p className="font-bold">Success! </p>
            <p>{message.text} </p>
          </div>
        )}
        {message?.type !== null && message?.type === "fail" && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
            role="alert"
          >
            <p className="font-bold">Failed! </p>
            <p>{message.text}</p> <br />
            <Button
              className="m-2 p-2 rounded-md"
              color="gray"
              onClick={() => navigate("/choose-plan")}
            >
              Back
            </Button>
          </div>
        )}
      </div>
      {openLoginModal && (
        <Login
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
      {openRegisterModal && (
        <Registration
          openRegisterModal={openRegisterModal}
          setOpenRegisterModal={setOpenRegisterModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
    </div>
  );
};

export default PaymentRedirect;
