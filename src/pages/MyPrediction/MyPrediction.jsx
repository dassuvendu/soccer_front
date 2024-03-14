import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BuyTokenIcon,
  MyPredictionsbanner,
  icSortIcon
} from "../../assets/images/images";
import { FiArrowRight } from "react-icons/fi";
import "react-tabs/style/react-tabs.css";
import { BsChevronDown } from 'react-icons/bs'
import { Tab, TabList,Tabs } from 'react-tabs';
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "./PredictionCompo/Pagination";
import { PreditionTableBody } from "./PredictionCompo/TableBody";


const MyPrediction = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);

  const { fixture } = useSelector((state) => state.prediction)
  console.log("fixtures", fixture);

  const dispatch = useDispatch()

  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="md:flex justify-between mb-10">
          <div className="mb-4 md:mb-0">
            <h1
              className={`${themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                } font-Bebas text-2xl md:text-5xl tracking-normal mb-1`}
            >
              My Prediction
            </h1>
            <p
              className={`text-[15px] md:text-[18px] leading-[22px] font-medium ${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                }`}
            >
              Explore different slips containing multiple matches for best odds.
            </p>
          </div>
          <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            <img src={BuyTokenIcon} alt="BuyTokenIcon" className="mr-1" />
            Buy Tokens <FiArrowRight className="text-white ml-0.5" />
          </Link>
        </div>
        <div
          className="bg-right-top bg-no-repeat rounded-xl bg-cover mb-6"
          style={{ backgroundImage: `url(${MyPredictionsbanner})` }}
        >
          <div className="w-8/12 py-16 pl-14">
            <h1 className="font-Bebas text-2xl md:text-4xl tracking-normal text-black mb-2">
              Stake responsibly, keep correct score accuracy in mind
            </h1>
            <p className="text-black text-[18px] leading-[28px] font-medium">
              While our AI predictions can be a useful guide, remember they're {" "}
              <br></br>
              <span className="text-[#ff0000]">not foolproof</span>. Actual
              results might differ, so consider the accuracy percentages
            </p>
          </div>
        </div>
        {/* My Prediction section start here */}
        <div
          className={` ${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
            } rounded-md`}
        >
          {/* Tab section start here */}
          <Tabs className="tab_section">
            <div className="md:flex justify-between items-center">
              <TabList>
                <Tab>All Prediction</Tab>
                <Tab>Recently</Tab>
                <Tab>Cooked Slip</Tab>
                <Tab>Failed Prediction</Tab>
              </TabList>
              <div className="mr-4 mb-4 ml-4 md:ml-0 md:mb-0">
                <Link
                  className={`${themeMode === "light" ? "bg-[#E1E1E1]" : "bg-[#0d0f11]"
                    } border border-[#9db4e1] w-[180px] hover:bg-[#2854b7]  ${themeMode === "light" ? "text-black" : "text-[#C8C8C8]"
                    } hover:text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-medium rounded-3xl flex items-center`}
                >
                  <img src={icSortIcon} alt="BuyTokenIcon" className="mr-1" />
                  Apply Filter{" "}
                  <BsChevronDown className="text-[#08a1f8] ml-1 text-[18px]" />
                </Link>
                {/* <Dropdown label="Apply Filter" dismissOnClick={false}>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown> */}

              </div>

            </div>
            <PreditionTableBody />
          </Tabs>
          {/* Tab section ends here */}
        </div>
        {/* Pagination section start here */}
        <Pagination />
        {/* Pagination section ends here */}
      </div>
    </div>
  );
};

export default MyPrediction;
