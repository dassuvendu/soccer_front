import { Link, useNavigate } from "react-router-dom";
import { PlaycopeLogoPopup, global_pay_icon, logoIcon, monnify_icon } from "../../assets/images/images";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLeagues } from "../../reducers/LeagueSlice";
// import { useUuid } from "../../hooks/useUuid";
import { logout } from "../../reducers/authSlice";
import { getUid } from "../../reducers/uuidSlice";
import "react-toastify/dist/ReactToastify.css";
import { referral } from "../../reducers/RefCount";
import { subscriptionPlans } from "../../reducers/planSlice";
import { bankPayment, bankPaymentRedirect, bankPlanKeys } from "../../reducers/paymentSlice";
import errorHandler from "../../store/errorHandler";
import axios from "axios";
import Payment from "../Payment/Payment";
import MonnifyPayment from "../Payment/MonnifyPayment";
import { Modal } from "flowbite-react";

const Dashboard = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { isloadingEditProfile } = useSelector((state) => state.profile);
  const { league, isLoading } = useSelector((state) => state.league);
  const { valid } = useSelector((state) => state.uuid);

  const subscribed = JSON.parse(localStorage.getItem("isSubscribed"))?.isSubscribed;

  // const [ Id ] = useUuid()

  const [apiCall, setApiCall] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uuid = localStorage.getItem("uuid");

  useEffect(() => {
    dispatch(getUid({}));
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getUid({}));
      console.log("local UUID:", uuid);
      console.log("valid UUID from API:", valid?.data);
      if (uuid !== valid?.data) {
        dispatch(logout());
        navigate("/");
        console.log("UUID: ", uuid);
        console.log("valid Data:", valid?.data);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [valid, uuid, dispatch]);

  useEffect(() => {
    if (valid?.data === uuid && apiCall) {
      dispatch(getLeagues({ ids: "39,140,135,78,61,2" })).then((res) => {
        if (res?.payload?.status === true) {
          setApiCall(false);
        }
      });
    }
  }, [dispatch, valid, uuid, apiCall]);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //         if (uuid === valid?.data && apiCall) {
  //           console.log("local",uuid);
  //           console.log("api",valid?.data);
  //             dispatch(editProfile());
  //             setApiCall(false)
  //         }
  //     }, 2000);

  //     return () => clearTimeout(timer);

  // }, [valid, uuid, dispatch,apiCall]);


  const [openChoosePaymentModal, setOpenChoosePaymentModal] = useState(false);

  const choosePaymentHandler = () => {
    setOpenChoosePaymentModal(true);
  };

  const userToken = localStorage.getItem("userToken");
  console.log("plan token: ", userToken);

  const { profile } = useSelector((state) => state.profile);

  const redirectUrl = `${import.meta.env.VITE_FRONT_BASE_URL}/success`;
  const plansList = useSelector((state) => state.plans?.plans);
  console.log("plansList", plansList);
  const amountUSD = plansList[0]?.price;
  console.log("amountUSD", amountUSD);
  const [plans, setPlans] = useState([]);
  console.log("plans--", plans)
  // const { profile } = useSelector((state) => state.profile);
  // console.log("profile", profile);
  const { email, user_id } = useSelector((state) => state.auth?.currentUser);
  console.log("email", email);

  const UserId = JSON.parse(localStorage.getItem("userId"));
  console.log("id", UserId);
  const planId = plansList[0]?.id;
  console.log("planIdDashboard", planId)

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    setUserId(profile?.details?.id);
  }, [profile]);

  const [showSubscription, setShowSubscription] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [showMonnifyPayment, setShowMonnifyPayment] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: null,
    user_id: profile?.details?.id,
    plan_id: null,
  });

  const { secretKey, paymentLink, transactionReference, apiKey, redirectResponse } = useSelector((state) => state.payment);

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

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get(
          `https://paygw.globalpay.com.ng/globalpay-paymentgateway/api/paymentgateway/query-single-transaction/${transactionReference}`,
          {
            headers: {
              apiKey: apiKey, // or any other header key required by the API
              "Content-Type": "application/json",
            },
          }
        );
        console.log("responses", response);
        if (response?.status === 200) {
          console.log("inside");
          if (response?.data?.data?.paymentStatus === "Successful") {
            console.log("hello");

            clearInterval(intervalId);
            dispatch(
              bankPaymentRedirect({
                user_id: userId,
                plan_id: planId,
                data: {
                  txnref: response?.data?.data?.txnref,
                  merchantid: response?.data?.data?.merchantid,
                  channel: response?.data?.data?.channel,
                  amount: response?.data?.data?.amount,
                  paymentDate: response?.data?.data?.paymentDate,
                  paymentStatus: response?.data?.data?.paymentStatus,
                  furtherProcessed: response?.data?.data?.furtherProcessed,
                  processDate: response?.data?.data?.processDate,
                  merchantTxnref: response?.data?.data?.merchantTxnref,
                  inAmount: response?.data?.data?.inAmount,
                  inCurrency: response?.data?.data?.inCurrency,
                  rate: response?.data?.data?.rate,
                  redirectUrl: response?.data?.data?.redirectUrl,
                  transactionSource: response?.data?.data?.transactionSource,
                  transactionChannel: response?.data?.data?.transactionChannel,
                },

                successMessage: response?.data?.data?.successMessage,
                responseCode: response?.data?.data?.responseCode,
                isSuccessful: response?.data?.data?.isSuccessful,
                error: response?.data?.data?.error,
              })
            ).then(() => {
              alert("Payment Successful");
              localStorage.setItem("userToken", userToken);
              navigate("/dashboard");
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            });
          }
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        let errors = errorHandler(error);
        console.error(errors);
      }
    };

    fetchTransaction();
    const intervalId = setInterval(fetchTransaction, 2000);

    // Cleanup the interval on component unmount or when dependencies change
    return () => clearInterval(intervalId);
  }, [transactionReference, apiKey]);

  const createSubscription = (planId) => {
    setUserDetails(() => ({
      ...userDetails,
      plan_id: planId,
    }));
    const timestamp = new Date().getTime();
    const mref = email + "test" + timestamp;
    console.log("mref", mref);

    dispatch(
      bankPayment({
        amount: amountNGN,
        secretKey: secretKey,
        merchantTransactionReference: mref,
        redirectUrl: redirectUrl,
        lastName:
          profile?.details?.last_name === null
            ? "test"
            : profile?.details?.last_name,
        firstName: profile?.details?.first_name,
        currency: "NGN",
        phoneNumber: "09025711530",
        address: "Zenith_Bank_Street",
        emailAddress: email,
      })
    ).then((res) => {
      console.log(res);
    });
    setShowPayment(true);
    setShowSubscription(false);
  };

  const createMonnifySubscription = () => {
    setShowMonnifyPayment(true);
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
    <div className="dark wrapper_area max-w-7xl my-0 mx-auto px-0">
      {isloadingEditProfile ? (
        <div>
          <img src={logoIcon} alt="loading.." className="loader" />
        </div>
      ) : (
        <>
          {!showPayment && !showMonnifyPayment && (
            <>
              {subscribed === null ||
                subscribed === undefined ||
                subscribed === "cancel" ? (
                <div>
                  <div className="text-[#FF0000] font-medium text-base text-center">
                    Please <button onClick={() => {
                      choosePaymentHandler();
                      localStorage.setItem("planId", plans[0]?.id);
                    }}>SUBSCRIBE</button> for using our application
                  </div>
                </div>
              ) : (
                <div className="w-full h-full pt-4 mb-0">
                  <div className="md:flex justify-between mb-0">
                    <h1
                      className={`${themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                        } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
                    >
                      Hi,{" "}
                      {profile?.details?.first_name !== null
                        ? profile?.details?.first_name.toString().split(" ")[0]
                        : ""}
                    </h1>
                  </div>

                  {/* Actions section start here  */}
                  <div className="mb-10">
                    <h2
                      className={`${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                        } text-[20px] md:text-[27px] leading-[40px] font-medium pb-1 md:pb-3`}
                    >
                      Actions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-t from-[#04fca0] to-[#07abee] rounded-lg py-5 px-5">
                        <div className="flex justify-between mb-4">
                          <h2 className="text-white text-[25px] leading-[40px] font-semibold">
                            Coped slips
                          </h2>
                          <span className="text-white text-[20px] leading-[40px] font-normal">
                            New
                          </span>
                        </div>
                        <p className="text-white text-[15px] leading-[22px] font-normal mb-5">
                          Explore different slips containing multiple matches
                        </p>
                        <div
                          className={` ${themeMode === "light" ? "bg-white" : "bg-black"
                            } hover:bg-gray-800 inline-block rounded-full mb-2`}
                        >
                          <Link
                            to="/coped-slips"
                            className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent"
                          >
                            Explore Slips{" "}
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                      <div className="bg-gradient-to-t from-[#03faa1] to-[#3b5998] rounded-lg py-5 px-5">
                        <div className="flex justify-between mb-4">
                          <h2 className="text-white text-[25px] leading-[40px] font-semibold">
                            Predictions
                          </h2>
                        </div>
                        <p className="text-white text-[15px] leading-[22px] font-normal mb-5">
                          Browse matches happening today from any league.
                        </p>
                        <div
                          className={` ${themeMode === "light" ? "bg-white" : "bg-black"
                            } hover:bg-gray-800 inline-block rounded-full mb-2`}
                        >
                          <Link
                            to="/match-prediction"
                            className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent"
                          >
                            See Predictions
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                      <div className="bg-gradient-to-t from-[#12a4ee] to-[#fdca40] rounded-lg py-5 px-5">
                        <div className="flex justify-between mb-4">
                          <h2 className="text-white text-[25px] leading-[40px] font-semibold">
                            Statistics
                          </h2>
                        </div>
                        <p className="text-white text-[15px] leading-[22px] font-normal mb-5">
                          Browse matches happening tomorrow from any league.
                        </p>
                        <div
                          className={` ${themeMode === "light" ? "bg-white" : "bg-black"
                            } hover:bg-gray-800 inline-block rounded-full mb-2`}
                        >
                          <Link
                            to="/statistics"
                            className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[44px] from-[#fdca40] via-[#93b990] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent"
                          >
                            See Statistics
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Actions section ends here */}
                  </div>

                  {/* Explore Matches section start here  */}
                  <div className="mb-0">
                    <h2
                      className={`${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                        } text-[20px] md:text-[27px] leading-[25px] md:leading-[40px] font-medium pb-3`}
                    >
                      Explore Matches from your Favorite Leagues
                    </h2>
                    {!isLoading ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {league?.data?.map((data) => (
                          <Link
                            to={`/match-prediction/${data.league.id}`}
                            key={data.id}
                          >
                            <div
                              className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                                } rounded-md pt-10 pb-5 px-2 text-center border-b-4 border-[#2aa9e1] shadow-xl explore_matches_box`}
                            >
                              {themeMode === "light" ? (
                                <img
                                  src={data.league.logo}
                                  alt={data.league.name}
                                  className="mb-4 inline-block"
                                />
                              ) : (
                                <img
                                  src={data.league.logo}
                                  alt={data.league.name}
                                  className="mb-4 inline-block"
                                />
                              )}
                              <h3
                                className={`font-Montserrat ${themeMode === "light" ? "text-black" : "text-white"
                                  } font-bold text-[16px] leading-[20px] mb-2`}
                              >
                                {`${data.league.name.slice(0, 14)}`}
                              </h3>
                              <p className="text-[#8EA2AB] text-[12px] leading-[20px]">
                                {data.country.name}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center">
                        <div role="status">
                          <img src={logoIcon} alt="loading.." className="loader" />
                          {/* <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg> */}
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Explore Matches section ends here */}

                  {/* Actions section ends here */}

                  {/* Explore Matches section start here  */}

                  {/* Explore Matches section ends here */}
                </div>
              )}
            </>
          )}
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
                  <button
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

export default Dashboard;
