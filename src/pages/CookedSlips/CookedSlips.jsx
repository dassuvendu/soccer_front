import React from "react";
import { Link } from "react-router-dom";
import { BuyTokenIcon, icSortIcon } from "../../assets/images/images";
import { FiArrowRight } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
const CookedSlips = () => {
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="flex justify-between mb-10">
          <div>
            <h1 className="font-Syne text-4xl font-medium text-white mb-2">
              Cooked Slips
            </h1>
            <p className="text-[18px] leading-[22px] font-medium text-white">
              Explore different slips containing multiple matches for best odds.
            </p>
          </div>
          <Link className="bg-[#08a1f8] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            <img src={BuyTokenIcon} alt="BuyTokenIcon" className="mr-1" />
            Buy Tokens <FiArrowRight className="text-white ml-0.5" />
          </Link>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-[14px] leading-[20px] font-medium text-white">
              Start and End Date
            </p>
          </div>
          <Link className="bg-[#0d0f11] border border-[#9db4e1] hover:bg-[#2854b7] text-[#C8C8C8] hover:text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-medium rounded-3xl flex items-center">
            <img src={icSortIcon} alt="BuyTokenIcon" className="mr-1" />
            Apply Filter{" "}
            <BsChevronDown className="text-[#08a1f8] ml-1 text-[18px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookedSlips;
