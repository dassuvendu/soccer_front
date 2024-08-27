import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {
  PlaycopeLogoPopup,
  bannerImgFour,
  bannerImgTwo,
  global_pay_icon,
  monnify_icon,
  paystack_icon,
  planIcon,
} from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { subscriptionPlans } from "../../reducers/planSlice";
import {
  bankPayment,
  bankPaymentRedirect,
  bankPlanKeys,
  stripePayment,
  stripePlanKeys,
} from "../../reducers/paymentSlice";
import Payment from "../Payment/Payment";
import axios from "axios";
import errorHandler from "../../store/errorHandler";
import Login from "../Auth/Login/Login";
import { Modal } from "flowbite-react";
import { AiOutlineLogin } from "react-icons/ai";
// import { referral } from "../../reducers/RefCount";
import { IoRadioButtonOnSharp } from "react-icons/io5";
import MonnifyPayment from "../Payment/MonnifyPayment";
import { FaCircle } from "react-icons/fa";
import PayStackPayment from "../Payment/PayStackPayment";

const Plan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const goPaymentHandler = () => {
  //   navigate("/payment");
  // };
  const [openChoosePaymentModal, setOpenChoosePaymentModal] = useState(false);

  const choosePaymentHandler = () => {
    setOpenChoosePaymentModal(true);
  };

  const userToken = localStorage.getItem("userToken");
  console.log("plan token: ", userToken);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  useEffect(() => {
    console.log("openLoginModal", openLoginModal);
    // console.log("openRegisterModal",openRegisterModal);
  }, [openLoginModal]);

  const redirectUrl = `${import.meta.env.VITE_FRONT_BASE_URL}/success`;
  const plansList = useSelector((state) => state.plans?.plans);
  console.log("plansList", plansList);
  const amountUSD = plansList[0]?.price;
  console.log("amountUSD", amountUSD);
  const [plans, setPlans] = useState([]);

  const { profile } = useSelector((state) => state.profile);
  console.log("profile", profile);
  const { email, user_id, first_name, last_name } = useSelector(
    (state) => state.auth?.currentUser
  );
  console.log("email", email);
  console.log("first_name", first_name);

  console.log("last_name", last_name);

  const UserId = JSON.parse(localStorage.getItem("userId"));
  console.log("id", UserId);
  const planId = Number(localStorage.getItem("planId"));

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    setUserId(profile?.details?.id);
  }, [profile]);

  const [showSubscription, setShowSubscription] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [showMonnifyPayment, setShowMonnifyPayment] = useState(false);
  const [showPayStackPayment, setShowPayStackPayment] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: null,
    user_id: profile?.details?.id,
    plan_id: null,
  });

  const {
    // stripeClientSecret,
    // customer_id,
    // subscription_id,
    // stripePublishableKey,
    secretKey,
    paymentLink,
    transactionReference,
    apiKey,
    redirectResponse,
  } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(bankPlanKeys());
  }, []);

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

  // useEffect(() => {
  //   const fetchTransaction = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://paygw.globalpay.com.ng/globalpay-paymentgateway/api/paymentgateway/query-single-transaction/${transactionReference}`,
  //         {
  //           headers: {
  //             apiKey: apiKey, // or any other header key required by the API
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       console.log("responses", response);
  //       if (response?.status === 200) {
  //         // console.log("aftersuccessful", response.data)
  //         console.log("inside");
  //         if (response?.data?.data?.paymentStatus === "Successful") {
  //           console.log("hello");
  //           // localStorage.setItem("txnref", response?.data?.data?.txnref)
  //           // localStorage.setItem("merchantid", response?.data?.data?.merchantid)
  //           // localStorage.setItem("channel", response?.data?.data?.channel)
  //           // localStorage.setItem("amount", response?.data?.data?.amount)
  //           // localStorage.setItem("paymentDate", response?.data?.data?.paymentDate)
  //           // localStorage.setItem("paymentStatus", response?.data?.data?.paymentStatus)
  //           // localStorage.setItem("furtherProcessed", response?.data?.data?.furtherProcessed)
  //           // localStorage.setItem("processDate", response?.data?.data?.processDate)
  //           // localStorage.setItem("merchantTxnref", response?.data?.data?.merchantTxnref)
  //           // localStorage.setItem("inAmount", response?.data?.data?.inAmount)
  //           // localStorage.setItem("inCurrency", response?.data?.data?.inCurrency)
  //           // localStorage.setItem("rate", response?.data?.data?.rate)
  //           // localStorage.setItem("redirectUrl", response?.data?.data?.redirectUrl)
  //           // localStorage.setItem("transactionSource", response?.data?.data?.transactionSource)
  //           // localStorage.setItem("transactionChannel", response?.data?.data?.transactionChannel)
  //           // localStorage.setItem("successMessage", response?.data?.successMessage)
  //           // localStorage.setItem("responseCode", response?.data?.responseCode)
  //           // localStorage.setItem("isSuccessful", response?.data?.isSuccessful)
  //           // localStorage.setItem("error", response?.data?.error)

  //           clearInterval(intervalId);
  //           dispatch(
  //             bankPaymentRedirect({
  //               user_id: UserId,
  //               plan_id: planId,
  //               data: {
  //                 txnref: response?.data?.data?.txnref,
  //                 merchantid: response?.data?.data?.merchantid,
  //                 channel: response?.data?.data?.channel,
  //                 amount: response?.data?.data?.amount,
  //                 paymentDate: response?.data?.data?.paymentDate,
  //                 paymentStatus: response?.data?.data?.paymentStatus,
  //                 furtherProcessed: response?.data?.data?.furtherProcessed,
  //                 processDate: response?.data?.data?.processDate,
  //                 merchantTxnref: response?.data?.data?.merchantTxnref,
  //                 inAmount: response?.data?.data?.inAmount,
  //                 inCurrency: response?.data?.data?.inCurrency,
  //                 rate: response?.data?.data?.rate,
  //                 redirectUrl: response?.data?.data?.redirectUrl,
  //                 transactionSource: response?.data?.data?.transactionSource,
  //                 transactionChannel: response?.data?.data?.transactionChannel,
  //               },

  //               successMessage: response?.data?.data?.successMessage,
  //               responseCode: response?.data?.data?.responseCode,
  //               isSuccessful: response?.data?.data?.isSuccessful,
  //               error: response?.data?.data?.error,
  //             })
  //           ).then(() => {
  //             alert("Payment Successful");
  //             localStorage.setItem("userToken", userToken);
  //             navigate("/dashboard");
  //             setTimeout(() => {
  //               window.location.reload();
  //             }, 1000);
  //           });
  //           // console.log("modal_status", openLoginModal);
  //           // setOpenLoginModal(true);
  //           // console.log("modal_status2", openLoginModal);

  //           // navigate('/payment-redirect')
  //         }
  //       } else {
  //         console.error(response.data.message);
  //       }
  //     } catch (error) {
  //       let errors = errorHandler(error);
  //       console.error(errors);
  //     }
  //   };

  //   fetchTransaction();
  //   const intervalId = setInterval(fetchTransaction, 2000);

  //   // Cleanup the interval on component unmount or when dependencies change
  //   return () => clearInterval(intervalId);
  // }, [transactionReference, apiKey]);

  // const createSubscription = (planId) => {
  //   setUserDetails(() => ({
  //     ...userDetails,
  //     plan_id: planId,
  //   }));
  //   // dispatch(stripePlanKeys());
  //   const timestamp = new Date().getTime();
  //   const mref = email + "test" + timestamp;
  //   console.log("mref", mref);
  //   console.log("first_name_fun", first_name);
  //   console.log("last_name_fun", last_name);
  //   // const firstName = first_name.split(" ").firstName[0]
  //   // const lastName = first_name.split(" ").firstName[1]
  //   // console.log('firstName', firstName);
  //   // console.log('lastName', lastName);
  //   dispatch(
  //     // stripePayment({
  //     //   plan_id: planId,
  //     //   user_id: UserId,
  //     //   entity: "payment_intent",
  //     // })
  //     bankPayment({
  //       // amount: planId === 1 ? plansList[0]?.price : plansList[1]?.price,
  //       amount: amountNGN,
  //       secretKey: secretKey,
  //       merchantTransactionReference: mref,
  //       redirectUrl: redirectUrl,
  //       lastName: last_name === null ? "test" : last_name,
  //       firstName: first_name,
  //       currency: "NGN",
  //       phoneNumber: "09025711530",
  //       address: "Zenith_Bank_Street",
  //       emailAddress: email,
  //     })
  //   ).then((res) => {
  //     console.log(res);
  //     // navigate(`${paymentLink}`)
  //   });
  //   setShowPayment(true);
  //   setShowSubscription(false);
  // };

  const createMonnifySubscription = () => {
    setShowMonnifyPayment(true);
    setShowSubscription(false);
  };

  const createPayStackSubscription = () => {
    setShowPayStackPayment(true);
    setShowSubscription(false);
  };

  useEffect(() => {
    dispatch(subscriptionPlans()).then(() => {
      setUserDetails({
        email: email,
        user_id: user_id,
      });
    });
  }, []);

  useEffect(() => {
    setPlans(plansList);
  }, [plansList]);

  return (
    <div>
      {/* Choose your plan section start here */}
      {showSubscription && (
        <div className="py-10 lg:py-10 px-8 lg:px-0">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-0 text-[#232a34]">
              Choose Plan
            </h2>
            <div className="choose_your_plan_section pb-0">
              <div className="max-w-7xl mx-auto py-0 lg:py-4 px-0">
                <div className="plan_tab_area">
                  <div className="px-4 lg:px-0">
                    <div className="w-full max-w-4xl p-3 mx-auto my-0 lg:p-10">
                      <div className="container mx-auto my-0">
                        <div className="md:flex justify-between px-4 md:px-10 py-10  shadow-xl bg-[#2aa9e1] rounded-2xl">
                          <div className="hidden md:block w-5/12">
                            <img
                              src={bannerImgFour}
                              alt="bannerImgFour"
                              className="rounded-xl w-full inline-block"
                            />
                          </div>
                          <div className="w-full md:w-6/12">
                            {plans &&
                              plans.length > 0 &&
                              plans?.map((plan, plankey) => (
                                <div key={"plan_" + plankey} className="">
                                  <h2 className="font-Bebas text-white pb-5 text-2xl lg:text-[40px] tracking-normal mb-2 text-center">
                                    Choose full features plan
                                  </h2>
                                  {/* <ul className="mb-4 px-4">
                                    <li className="text-[14px] text-white pb-3 flex">
                                      <FaCircle className="text-[10px] mr-1 mt-1" />
                                      Lorem Ipsum is simply dummy text of the
                                      printing
                                    </li>
                                    <li className="text-[14px] text-white pb-3 flex">
                                      <FaCircle className="text-[10px] mr-1 mt-1" />
                                      Lorem Ipsum is simply dummy text of the
                                      printing
                                    </li>
                                    <li className="text-[14px] text-white pb-3 flex">
                                      <FaCircle className="text-[10px] mr-1 mt-1" />
                                      Lorem Ipsum is simply dummy text of the
                                      printing
                                    </li>
                                  </ul> */}
                                  <div className="text-center">
                                    <h3 className="text-xl lg:text-xl text-white font-semibold mb-4">
                                      <span className="line_bar2 text-black text-base mr-1">
                                        $9.89
                                      </span>{" "}
                                      Subscribe today for
                                    </h3>
                                    <h3 className="text-3xl text-white font-bold mb-4">
                                      <span className="text-black pr-1">
                                        {plan?.price}$
                                      </span>{" "}
                                      Monthly only
                                    </h3>

                                    <button
                                      className="text-base font-medium bg-[#18191b] hover:bg-[#2aa9e1] text-white text-center rounded-lg w-full block border-2 py-2 hover:border-white border-[#18191b]"
                                      // onClick={() => {
                                      //   createSubscription(plan.id, userId);
                                      //   localStorage.setItem("planId", plan.id);
                                      // }}
                                      onClick={() => {
                                        choosePaymentHandler();
                                        localStorage.setItem("planId", plan.id);
                                      }}
                                    >
                                      Subscribe Now
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Choose your plan section ends here */}
      {showPayment &&
        // stripeClientSecret &&
        // customer_id &&
        // subscription_id &&
        // stripePublishableKey &&
        secretKey && (
          <Payment
            planId={userDetails.plan_id}
            email={userDetails.email}
            user_id={user_id}
            // stripeClientSecret={stripeClientSecret}
            // stripePublishableKey={stripePublishableKey}
            // customer_id={customer_id}
            // subscription_id={subscription_id}
            secretKey={secretKey}
          />
        )}

      {showMonnifyPayment && (
        <MonnifyPayment
          planId={planId}
          email={userDetails.email}
          user_id={user_id}
        />
      )}

      {showPayStackPayment && (
        <PayStackPayment
          planId={planId}
          email={userDetails.email}
          user_id={user_id}
        />
      )}

      {openLoginModal && (
        <Login
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}

      {openChoosePaymentModal && (
        <Modal
          show={openChoosePaymentModal}
          size="4xl"
          onClose={() => setOpenChoosePaymentModal(false)}
          popup
        >
          <Modal.Header className="absolute right-0 top-0" />
          <Modal.Body>
            <div className="md:flex items-center pt-6">
              <div className="w-full md:w-6/12 flex md:pr-4 mb-4 md:mb-0 justify-center items-center">
                <img
                  src={PlaycopeLogoPopup}
                  alt="PlaycopeLogoPopup"
                  className="rounded-xl w-32 md:w-72 opacity-80"
                />
              </div>
              <div className="w-full md:w-6/12 md:pl-4">
                <div className="text-center">
                  <h2 className="mb-8 text-xl font-bold text-[#2aa9e1]">
                    Choose one payment method{" "}
                  </h2>
                  {/* <button
                    className="flex justify-center items-center rounded-xl text-base font-medium text-[#111111] text-center w-full border-2 py-2 border-[#2aa9e1] hover:border-[#111111]"
                    onClick={() => {
                      createSubscription(planId, userId);
                      setOpenChoosePaymentModal(false);
                    }}
                  >
                    <img
                      src={global_pay_icon}
                      alt="global_pay_icon"
                      className="mr-1"
                    />{" "}
                    Global Pay
                  </button>
                  <p className="py-4 text-center">OR</p> */}
                  <button
                    className="flex justify-center items-center rounded-xl text-base font-medium text-[#111111] text-center w-full border-2 py-2 border-[#2aa9e1] hover:border-[#111111]"
                    onClick={() => {
                      createPayStackSubscription(planId, userId);
                      setOpenChoosePaymentModal(false);
                    }}
                  >
                    <img
                      src={paystack_icon}
                      alt="payStack_icon"
                      className="mr-2 w-6 py-1"
                    />{" "}
                    PayStack
                  </button>
                  <p className="py-4 text-center">OR</p>
                  <button
                    className="flex justify-center items-center rounded-xl text-base font-medium text-[#111111] text-center w-full border-2 py-2 border-[#2aa9e1] hover:border-[#111111]"
                    onClick={() => {
                      createMonnifySubscription(planId, userId);
                      setOpenChoosePaymentModal(false);
                    }}
                  >
                    <img
                      src={monnify_icon}
                      alt="monnify_icon"
                      className="mr-1"
                    />{" "}
                    Monnify
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Plan;
