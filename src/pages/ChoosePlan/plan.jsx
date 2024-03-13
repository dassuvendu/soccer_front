import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { planIcon } from "../../assets/images/images";
const Plan = () => {
  const navigate = useNavigate();
  const goPaymentHandler = () => {
    navigate("/payment");
  };
  return (
    <div>
      {/* Choose your plan section start here */}
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
                      <div className="lg:px-28">
                        <h2 className="font-Bebas text-white py-5 text-6xl lg:text-8xl tracking-normal mb-0 text-center">
                          Choose Plan
                        </h2>
                        <div className="text-center">
                          <h3 className="text-2xl text-white font-semibold mb-4">
                            10$ monthly only
                          </h3>
                          <Link
                            to="/payment"
                            className="text-base font-medium hover:bg-[#18191b] text-white text-center w-full block border-2 py-2 border-white hover:border-[#18191b]"
                          >
                            Subscribe Now
                          </Link>
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
      {/* Choose your plan section ends here */}
    </div>
  );
};

export default Plan;
