import React from "react";
import { Link } from "react-router-dom";
import {
  icSortIcon,
  requestPredictionBanner,
} from "../../assets/images/images";
import { Datepicker } from "flowbite-react";
import { BsChevronDown } from "react-icons/bs";
import { HiTemplate } from "react-icons/hi";

const RequestPrediction = () => {
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-screen py-4">
        <div
          className="bg-left-top bg-no-repeat rounded-xl bg-cover mb-6"
          style={{ backgroundImage: `url(${requestPredictionBanner})` }}
        >
          <div className="w-5/12 py-20 pl-14">
            <h1 className="font-Syne text-4xl font-bold text-white mb-4">
              Request <br></br> Predictions
            </h1>
            <p className="text-white text-[18px] leading-[24px] font-medium">
              Explore different slips containing multiple matches for best odds.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-[14px] leading-[20px] font-medium text-white pb-2">
              Select Date
            </p>
            <div className="date_picker_box">
              <Datepicker />
            </div>
          </div>
          <Link className="bg-[#0d0f11] border border-[#9db4e1] hover:bg-[#2854b7] text-[#C8C8C8] hover:text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-medium rounded-3xl flex items-center">
            <HiTemplate className="text-xl mr-1" />
            Prediction Slip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestPrediction;
