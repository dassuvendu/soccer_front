// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import {
  // BarcelonaIcon,
  // BayernMunichIcon,
  // BuyTokenIcon,
  // MyPredictionsbanner,
  // icSortIcon,
  // logoIcon,
  requestPredictionBanner,
} from "../../assets/images/images";
// import { FiArrowRight } from "react-icons/fi";
// import {
//   BsChevronDoubleLeft,
//   BsChevronDoubleRight,
//   BsChevronDown,
//   BsChevronLeft,
//   BsChevronRight,
// } from "react-icons/bs";
// import { TextInput, Table, Button } from "flowbite-react";
// import { MdMoreHoriz } from "react-icons/md";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useSelector } from "react-redux";
import { Recently } from "./PredictionCompo/Recently";
import { AllPrediction } from "./PredictionCompo/AllPrediction";
import { FailedPrediction } from "./PredictionCompo/FailedPrediction";
import { CopedSlips } from "./PredictionCompo/CopedSlips";

const MyPrediction = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);

  const token = localStorage.getItem("userToken");
  console.log("token: ", token);

  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="md:flex justify-between mb-10">
          <div className="mb-4 md:mb-0">
            <h1
              className={`${
                themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
              } font-Bebas text-2xl md:text-5xl tracking-normal mb-1`}
            >
              My Prediction
            </h1>
            <p
              className={`text-[15px] md:text-[18px] leading-[22px] font-medium ${
                themeMode === "light" ? "text-[#0d0f11]" : "text-white"
              }`}
            >
              Explore different slips containing multiple matches for best odds.
            </p>
          </div>
          {/* <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            <img src={BuyTokenIcon} alt="BuyTokenIcon" className="mr-1" />
            Buy Tokens <FiArrowRight className="text-white ml-0.5" />
          </Link> */}
        </div>
        <div
          className="bg-right-top bg-no-repeat rounded-xl bg-cover mb-6"
          style={{ backgroundImage: `url(${requestPredictionBanner})` }}
        >
          <div className="w-full md:w-5/12 py-28 pl-14">
            <h1 className="font-Bebas text-5xl tracking-normal text-white mb-4">
              My Prediction
            </h1>
            <p className="text-white text-[18px] leading-[24px] font-medium">
              Explore all your unlocked predictions
            </p>
          </div>
        </div>
        {/* My Prediction section start here */}
        <div
          className={` ${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } rounded-md px-4`}
        >
          {/* Tab section start here */}
          <Tabs className="tab_section">
            <div className="md:flex justify-between items-center">
              <TabList>
                <Tab>All Prediction</Tab>
                <Tab>Recently</Tab>
                <Tab>Coped Slip</Tab>
                <Tab>Failed Prediction</Tab>
              </TabList>
            </div>

            <TabPanel>
              {/* Table start here */}
              <AllPrediction themeMode={themeMode} token={token} />
              {/* Table ends here */}
            </TabPanel>
            <TabPanel>
              {/* Table start here */}
              <Recently themeMode={themeMode} token={token} />
              {/* Table ends here */}
            </TabPanel>
            <TabPanel>
              {/* Table start here */}
              <CopedSlips themeMode={themeMode} token={token} />
              {/* Table ends here */}
            </TabPanel>
            <TabPanel>
              {/* Table start here */}
              <FailedPrediction themeMode={themeMode} token={token} />
              {/* Table ends here */}
            </TabPanel>
          </Tabs>
          {/* Tab section ends here */}
        </div>
        {/* My Prediction section ends here */}
      </div>
    </div>
  );
};

export default MyPrediction;
