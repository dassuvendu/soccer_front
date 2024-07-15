import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  PlaycopeLogoPopup,
  bannerImgFour,
  bannerImgTwo,
  earnIcon,
  global_pay_icon,
  inviteIcon,
  monnify_icon,
  paystack_icon,
  planIcon,
  requestPredictionBanner,
  settingBanner,
  userFace,
} from "../../assets/images/images";
import { Button, FileInput, Modal, TextInput } from "flowbite-react";
import { FaRegCopy } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import { editProfile } from "../../reducers/profileSlice";
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "../Auth/ChangePassword/ChangePassword";
import { ReferModal } from "./ReferModal";
import { logout } from "../../reducers/authSlice";
import { getUid } from "../../reducers/uuidSlice";
import { subscriptionPlans } from "../../reducers/planSlice";
import {
  bankPayment,
  bankPaymentRedirect,
  bankPlanKeys,
} from "../../reducers/paymentSlice";
import axios from "axios";
import errorHandler from "../../store/errorHandler";
import Login from "../Auth/Login/Login";
import MonnifyPayment from "../Payment/MonnifyPayment";
import Payment from "../Payment/Payment";
import PayStackPayment from "../Payment/PayStackPayment";

const Settings = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { profile } = useSelector((state) => state.profile);
  console.log("profile", profile);
  const { valid } = useSelector((state) => state.uuid);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openReferModal, setOpenReferModal] = useState(false);
  const [refCount, setRefCount] = useState();
  console.log("n", refCount);
  const navigate = useNavigate();
  const uuid = localStorage.getItem("uuid");

  const updateHandler = () => {
    setOpenUpdateModal(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(editProfile());
  }, [dispatch]);

  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
  const handleChangePassword = () => {
    setOpenChangePasswordModal(true);
  };

  const userId = localStorage.getItem("userId");
  console.log("ul", userId);
  const encodedUserId = encodeURIComponent(userId);
  // const uId = userId?.split(':')[1]
  // console.log("ul1",uId);

  const refId = localStorage.getItem("ref_id");

  const handleRefModal = () => {
    setOpenReferModal(true);
  };
  useEffect(() => {
    console.log(openReferModal);
  }, [openReferModal]);

  useEffect(() => {
    dispatch(getUid({}));
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getUid({}));
      if (uuid !== valid?.data) {
        dispatch(logout());
        navigate("/");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [valid, uuid, dispatch]);

  useEffect(() => {
    if (profile && profile?.details && profile?.details?.ref_count === null) {
      setRefCount(0);
    } else if (
      profile &&
      profile?.details &&
      typeof profile?.details?.ref_count === "number"
    ) {
      setRefCount(profile?.details?.ref_count);
    }
  }, [profile]);

  const subscribed = JSON.parse(
    localStorage.getItem("isSubscribed")
  )?.isSubscribed;
  console.log("subscribed", subscribed);

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

  // const { profile } = useSelector((state) => state.profile);
  // console.log("profile", profile);
  const { email, user_id } = useSelector((state) => state.auth?.currentUser);
  console.log("email", email);

  // const UserId = JSON.parse(localStorage.getItem("userId"));
  // console.log("id", UserId);
  const planId = Number(localStorage.getItem("planId"));

  // const [userId, setUserId] = useState(null);
  // useEffect(() => {
  //   setUserId(profile?.details?.id);
  // }, [profile]);

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
  //         console.log("inside");
  //         if (response?.data?.data?.paymentStatus === "Successful") {
  //           console.log("hello");

  //           clearInterval(intervalId);
  //           dispatch(
  //             bankPaymentRedirect({
  //               user_id: userId,
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
  //   const timestamp = new Date().getTime();
  //   const mref = email + "test" + timestamp;
  //   console.log("mref", mref);

  //   dispatch(
  //     bankPayment({
  //       amount: amountNGN,
  //       secretKey: secretKey,
  //       merchantTransactionReference: mref,
  //       redirectUrl: redirectUrl,
  //       lastName:
  //         profile?.details?.last_name === null
  //           ? "test"
  //           : profile?.details?.last_name,
  //       firstName: profile?.details?.first_name === null ? "test" : profile?.details?.first_name,
  //       currency: "NGN",
  //       phoneNumber: "09025711530",
  //       address: "Zenith_Bank_Street",
  //       emailAddress: email,
  //     })
  //   ).then((res) => {
  //     console.log(res);
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
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full py-4 mb-0">
        {!showPayment && !showMonnifyPayment && !showPayStackPayment && (
          <>
            <div className="flex justify-between mb-8">
              <h1
                className={`${
                  themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
              >
                Settings
              </h1>
              {/* <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            Match Predictions <FiArrowRight className="text-white ml-0.5" />
          </Link> */}
            </div>
            {/* Banner start here */}
            <div
              className="bg-right-top bg-no-repeat rounded-xl bg-cover mb-6"
              style={{ backgroundImage: `url(${requestPredictionBanner})` }}
            >
              <div className="w-full md:w-9/12 py-14 pl-10 pr-2">
                {/* <h1 className="font-Bebas text-4xl tracking-normal text-white mb-2">
              Referral Link
            </h1> */}
                {/* <div className="md:flex items-center mb-5">
              <div className="copy_link_box bg-black rounded-full max-w-sm flex justify-between mr-4 mb-4 md:mb-0">
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="www.soccersm.ai/w/LJx-zVx"
                />
                <Button type="submit">
                  <FaRegCopy className="mr-1" /> Copy
                </Button>
              </div>
              <h3 className="text-white text-[24px] leading-[24px] font-medium">
                Total Referrals : 12
              </h3>
            </div> */}
                <p className="text-white text-[16px] leading-[24px] font-medium">
                  Get ready for some easy wins! Just refer as many friends as
                  you can, and you'll score free tokens for making predictions.
                  Have your pals use your referral link when signing up, and
                  when they snag tokens, you can check out and cash in on your
                  well-deserved rewards. It's a breeze!
                </p>
              </div>
            </div>
            {/* Banner ends here */}
            {/* Setting edit section start here */}
            <div className="md:flex mb-6">
              <div
                className={`w-full md:w-5/12 ${
                  themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                } rounded-md p-5 shadow-xl`}
              >
                <div className="flex justify-between items-center border-b border-[#DCDCDC] pb-3 mb-3">
                  <h3
                    className={`text-[20px]  ${
                      themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                    } font-medium`}
                  >
                    Overview
                  </h3>
                  <button onClick={updateHandler}>
                    <AiFillEdit
                      className={`${
                        themeMode === "light"
                          ? "text-[#2aa9e1] hover:text-black"
                          : "text-white"
                      } text-[28px] hover:text-[#2aa9e1]`}
                    />
                  </button>
                </div>
                <div className="flex items-center border-b border-[#DCDCDC] pb-3 mb-4">
                  <div>
                    {/* <img
                  className="w-10 h-10 rounded-full"
                  src={profile?.details?.avatar}
                  alt={profile?.details?.first_name}
                /> */}
                  </div>
                  <div>
                    <p
                      className={`${
                        themeMode === "light" ? "text-black" : "text-white"
                      } text-[19px] leading-[20px] text-medium`}
                    >
                      {profile?.details?.first_name}
                    </p>

                    <p className="text-[#898989] text-[14px] pt-1">
                      {" "}
                      {profile?.details?.username}
                    </p>
                    {/* <p
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-medium`}
                >
                  Licence :
                </p> */}
                  </div>
                </div>
                <div>
                  <div className="flex pb-4 mb-4 border-b border-[#DCDCDC]">
                    <div
                      className={`${
                        themeMode === "light" ? "text-black" : "text-white"
                      } text-[14px] text-medium w-4/12`}
                    >
                      Contact phone
                    </div>
                    <div
                      className={`${
                        themeMode === "light" ? "text-black" : "text-white"
                      } text-[14px] text-normal w-8/12`}
                    >
                      {profile?.details?.mobile}
                    </div>
                  </div>
                  <div className="flex mb-4 border-b border-[#DCDCDC] pb-4">
                    <div
                      className={`${
                        themeMode === "light" ? "text-black" : "text-white"
                      } text-[14px] text-medium w-4/12`}
                    >
                      {/* Address */}Gender
                    </div>
                    <div
                      className={`${
                        themeMode === "light" ? "text-black" : "text-white"
                      } text-[14px] text-normal w-8/12`}
                    >
                      {/* 23 Main Street, Anytown, USA 12345 */}
                      {profile?.details?.gender}
                    </div>
                  </div>
                  <div>
                    {/* <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-medium w-12/12 mb-4`}
                >
                  Share the your referral link below with your friends:
                </div> */}
                    {/* <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-normal w-8/12 flex`}
                >
                  <TextInput
                    id="base"
                    type="text"
                    sizing="md"
                    className="w-8/12"
                    value={`${
                      import.meta.env.VITE_FRONT_BASE_URL
                    }${"/signup/ReferRegistration/"}${encodedUserId}?=${refId}`}
                    readOnly
                  />
                  <button
                    type="button"
                    data-modal-target="course-modal"
                    data-modal-toggle="course-modal"
                    className="text-white bg-black hover:bg-[#2880DA] border-gray-200 focus:ring-4 
                    focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                    inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 
                    dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 h-10 ml-4"
                    onClick={handleRefModal}
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z" />
                    </svg>
                    Share
                  </button>
                </div> */}
                  </div>
                </div>
              </div>
              <div
                className={`w-full md:w-7/12 ${
                  themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                } rounded-md p-5 md:ml-4 mt-4 md:mt-0 shadow-xl`}
              >
                <div className="flex justify-between items-center border-b border-[#DCDCDC] pb-3 mb-3">
                  <h3
                    className={`text-[20px]  ${
                      themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                    } font-medium`}
                  >
                    Sign In Methods
                  </h3>
                </div>
                <div className="border-b border-[#DCDCDC] pb-3 pt-0 mb-3">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } text-[15px] text-normal pb-0`}
                  >
                    Email Address
                  </p>
                  <p className="text-[#898989] text-[14px]">
                    {profile?.details?.email}
                  </p>
                </div>
                <div className="border-b border-[#DCDCDC] pb-0 pt-0 mb-0 flex items-center">
                  <div className="w-7/12 lg:w-9/12">
                    <p
                      className={`${
                        themeMode === "light" ? "text-black" : "text-white"
                      } text-[15px] text-normal pb-0`}
                    >
                      Password
                    </p>
                    <TextInput
                      id="base"
                      type="password"
                      sizing="md"
                      placeholder="********"
                      className="password_box"
                    />
                  </div>
                  <div className="w-5/12 lg:w-3/12">
                    <button
                      className="border border-[#2880DA] text-[12px] bg-black hover:bg-[#2880DA] text-white leading-[30px] px-3 rounded-md"
                      onClick={handleChangePassword}
                    >
                      Change Password
                    </button>
                  </div>
                </div>
                <div className="mt-4 rounded-md p-4 flex justify-between items-center">
                  <div className="flex">
                    <p
                      className={`${
                        themeMode === "light" ? "text-black" : "text-white"
                      } text-[17px] text-normal pb-0`}
                    >
                      Number of referrals :
                    </p>
                  </div>
                  <div>
                    <p
                      className={`${
                        themeMode === "light" ? "text-black" : "text-white"
                      } text-[17px] text-normal pb-0`}
                    >
                      {refCount}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex pb-10">
              <div
                className={`w-full md:w-5/12 ${
                  themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                } rounded-md p-5 shadow-xl`}
              >
                <h3 className="text-[20px]  text-[#2aa9e1] font-medium text-center pb-2">
                  Refer Friends And Earn 20% Commission
                </h3>
                <p className="text-[#898989] text-[14px] text-center pb-2">
                  If you enjoy using Playcope, share your referral link and get
                  paid for every eligible purchase
                </p>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 my-6">
                  <div className="border border-[#2aa9e1] rounded-md text-center p-4 bg-[#fcfcfd]">
                    <img
                      src={inviteIcon}
                      alt="inviteIcon"
                      className="w-20 inline-block mb-4"
                    />
                    <p className="text-black text-[14px] font-bold text-center pb-2">
                      Invite Friends
                    </p>
                    <span className="text-[#898989] text-[14px] text-center pb-2">
                      Share your referral link with your friends, family, and
                      colleagues
                    </span>
                  </div>
                  <div className="border border-[#2aa9e1] rounded-md text-center p-4 bg-[#fcfcfd]">
                    <img
                      src={earnIcon}
                      alt="earnIcon"
                      className="w-20 inline-block mb-4"
                    />
                    <p className="text-black text-[14px] font-bold text-center pb-2">
                      Earn Commission
                    </p>
                    <span className="text-[#898989] text-[14px] text-center pb-2">
                      Get paid on each eligible purchase from your link
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    to="/referral"
                    className="border border-[#2880DA] text-[12px] bg-[#2880DA] hover:bg-black text-white leading-[30px] px-3 rounded-md inline-block"
                  >
                    Refer a Friend
                  </Link>
                </div>
              </div>
              {subscribed === null ||
              subscribed === undefined ||
              subscribed === "cancel" ? (
                <div className="w-full md:ml-4 md:w-7/12 mt-4 md:mt-0">
                  <div className="choose_your_plan_section pb-0">
                    <div className="max-w-7xl mx-auto py-0 lg:py-0 px-0">
                      <div className="plan_tab_area">
                        <div className="px-0 lg:px-0">
                          <div className="w-full max-w-4xl p-0 mx-auto my-0 lg:p-0">
                            <div className="container mx-auto my-0">
                              <div className="md:flex justify-between px-4 md:px-10 py-10  shadow-xl bg-[#2aa9e1] rounded-md">
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
                                        <h2 className="font-Bebas text-white pb-5 text-2xl lg:text-[35px] tracking-normal mb-2 text-center">
                                          Choose full features plan
                                        </h2>

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
                                            onClick={() => {
                                              choosePaymentHandler();
                                              localStorage.setItem(
                                                "planId",
                                                plan.id
                                              );
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
              ) : (
                <div className="w-full mt-4 md:mt-0 md:ml-4 md:w-7/12">
                  <div className="choose_your_plan_section pb-0">
                    <div className="max-w-7xl mx-auto py-0 lg:py-0 px-0">
                      <div className="plan_tab_area">
                        <div className="px-0 lg:px-0">
                          <div className="w-full max-w-4xl p-0 mx-auto my-0 lg:p-0">
                            <div className="container mx-auto my-0">
                              <div className="md:flex justify-between px-4 md:px-10 py-10  shadow-xl bg-[#2aa9e1] rounded-md">
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
                                        <h2 className="font-Bebas text-white pb-5 text-2xl lg:text-[35px] tracking-normal mb-2 text-center">
                                          Choose full features plan
                                        </h2>

                                        <div className="text-center">
                                          <h3 className="text-xl lg:text-2xl text-white font-semibold mb-4">
                                            {plan?.price}$ monthly only
                                          </h3>
                                          <button className="text-base font-medium bg-[#18191b] hover:bg-[#2aa9e1] text-white text-center rounded-lg w-full block border-2 py-2 hover:border-white border-[#18191b]">
                                            Valid till :{" "}
                                            {
                                              profile?.details
                                                ?.user_subscriptions[0]
                                                ?.plan_period_end
                                            }
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
              )}
            </div>
          </>
        )}

        {showPayment && secretKey && (
          <Payment
            planId={userDetails.plan_id}
            email={userDetails.email}
            user_id={user_id}
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
                    <p className="py-4 text-center">OR</p>
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
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}

        {openChangePasswordModal && (
          <ChangePassword
            openChangePasswordModal={openChangePasswordModal}
            setOpenChangePasswordModal={setOpenChangePasswordModal}
          />
        )}

        {/* Setting edit section ends here */}
        <UpdateProfile
          openUpdateModal={openUpdateModal}
          setOpenUpdateModal={setOpenUpdateModal}
        />
      </div>

      <ReferModal
        openReferModal={openReferModal}
        setOpenReferModal={setOpenReferModal}
      />
    </div>
  );
};

export default Settings;
