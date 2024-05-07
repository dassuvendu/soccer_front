import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { planIcon } from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { subscriptionPlans } from "../../reducers/planSlice";
import { stripePayment, stripePlanKeys } from "../../reducers/paymentSlice";
import Payment from "../Payment/Payment";
import { referral } from "../../reducers/RefCount";

const Plan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goPaymentHandler = () => {
    navigate("/payment");
  };

  const plansList = useSelector((state) => state.plans?.plans);
  const [plans, setPlans] = useState([]);

  const { profile } = useSelector((state) => state.profile);
  // console.log("pr",profile.details.ref_id);
  const { email, user_id } = useSelector((state) => state.auth?.currentUser);

  const UserId = JSON.parse(localStorage.getItem('userId'));
  console.log("id", UserId);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    setUserId(profile?.details?.id);
  }, [profile]);

  const [showSubscription, setShowSubscription] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: null,
    user_id: profile?.details?.id,
    plan_id: null,
  });

  const {
    stripeClientSecret,
    customer_id,
    subscription_id,
    stripePublishableKey,
  } = useSelector((state) => state.payment);

  const createSubscription = (planId) => {
    setUserDetails(() => ({
      ...userDetails,
      plan_id: planId,
    }));
    dispatch(stripePlanKeys());
    dispatch(
      stripePayment({
        plan_id: planId,
        user_id: UserId,
        entity: "payment_intent",
      })
    ).then((res) => {
      console.log(res);


    })
    setShowPayment(true);
    setShowSubscription(false);
  };

  useEffect(() => {
    dispatch(subscriptionPlans())
      .then(() => {
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
      {showSubscription &&
        <div className="py-10 lg:py-24 px-8 lg:px-0">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-[#232a34]">
              Choose Plan
            </h2>
            <div className="choose_your_plan_section pb-0">
              <div className="max-w-6xl mx-auto py-0 lg:py-4 px-0">
                <div className="plan_tab_area">
                  <div className="px-4 lg:px-0">
                    <div className="w-full max-w-4xl p-6 mx-auto my-0 shadow-xl bg-[#2aa9e1] rounded-2xl lg:p-10">
                      <div className="container mx-auto my-0">
                        <div className="md:flex">
                          <div className="w-2/5 hidden lg:block">
                            <div className="text-center">
                              <img
                                src={planIcon}
                                alt="planIcon"
                                className="rounded-xl"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-3/5">
                            {plans &&
                              plans.length > 0 &&
                              plans?.map((plan, plankey) => (
                                <div key={"plan_" + plankey} className="lg:px-28">
                                  <h2 className="font-Bebas text-white py-5 text-6xl lg:text-8xl tracking-normal mb-0 text-center">
                                    Choose Plan
                                  </h2>
                                  <div className="text-center">
                                    <h3 className="text-2xl text-white font-semibold mb-4">
                                      {/* 10$ monthly only */}
                                      {plan?.price}$ monthly only
                                    </h3>
                                    <button
                                      to="/payment"
                                      className="text-base font-medium hover:bg-[#18191b] text-white text-center w-full block border-2 py-2 border-white hover:border-[#18191b]"
                                      onClick={() => { createSubscription(plan.id, userId); }}
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
      }
      {/* Choose your plan section ends here */}
      {
        showPayment &&
        stripeClientSecret &&
        customer_id &&
        subscription_id &&
        stripePublishableKey && (
          <Payment
            planId={userDetails.plan_id}
            email={userDetails.email}
            user_id={user_id}
            stripeClientSecret={stripeClientSecret}
            stripePublishableKey={stripePublishableKey}
            customer_id={customer_id}
            subscription_id={subscription_id}
          />
        )}
    </div>
  );
};

export default Plan;
