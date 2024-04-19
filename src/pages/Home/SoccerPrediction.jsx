import React, { useEffect, useState } from "react";
import {
  DeportivoPastoIcon,
  EnvigadoIcon,
  logoIcon,
  reventNews01,
  teamIcon01,
} from "../../assets/images/images";
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaInfoCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { PiArrowDownRightLight, PiArrowUpRightLight } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import { PastMatch } from "./PastMatch";
import { UpcomingMatch } from "./UpcomingMatch";
import { PassedCookedSlip } from "./PassedCookedSlip";
import { useDispatch, useSelector } from "react-redux";
import { getDeshStatistics } from "../../reducers/StatisticsSlice";
const SoccerPrediction = () => {

  const {DeshStatistics} = useSelector((state) => state.statistics)
  console.log('DeshStatistics', DeshStatistics)

  useEffect(() => {
    AOS.init();
  }, []);

  const dispatch = useDispatch()

  const [loadingData, setLoadingData] = useState(false);
  const [homeLoader, setHomeLoader] = useState(true);

  useEffect(() =>{
   dispatch(getDeshStatistics({})).then((res) =>{
    if (res?.payload?.status === true) {
      setLoadingData(true);
      setHomeLoader(false);
    } else {
      setLoadingData(false);
      setHomeLoader(true);
    }
   })
   
  },[dispatch])

  return (
    <div className="bg-[#2aa9e1] py-10 lg:py-24 px-8 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-white">
              Lifetime Statistics
            </h2>
            <p className="text-center text-white pb-8">
              Football lovers all around the world use Soccersm to generate
              prediction for games they love
            </p>
            <div className="mb-16">
              <Tabs
                data-aos="fade-up"
                data-aos-duration="1500"
                className="team_comparisions_tab_section"
              >
                <TabList className="tab_bar">
                  <Tab>Over/Under Statistics</Tab>
                  <Tab>Outcome Statistics</Tab>
                  <Tab>All Statistics</Tab>
                </TabList>
                <TabPanel>
                {loadingData && !homeLoader ? (
                  <div className="pt-4">
                   {DeshStatistics.map((data) => (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" key={data.id}>

                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-[#4d927b] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <PiArrowUpRightLight className="text-white" />
                            </div>
                            <p className="text-black text-base font-medium mb-0">
                              High Accuracy Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                          {data?.high_accuracy}
                          <span className="text-[#08a5f5] font-bold text-base">
                            ({data?.percentage_high_accuracy}%)
                          </span>
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-center">
                          <FaInfoCircle className="text-[#08a5f5] mr-1" />
                          Predictions that had same outcome as our given advice.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-[#dc524b] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <PiArrowDownRightLight className="text-white" />
                            </div>
                            <p className="text-black text-base font-medium mb-0">
                              Low Accuracy Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                        {data?.low_accuracy}
                          <span className="text-[#08a5f5] font-bold text-base">
                          ({data?.percentage_low_accuracy}%)
                          </span>
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-center">
                          <FaInfoCircle className="text-[#08a5f5] mr-1" />
                          Predictions that were completely off.
                        </p>
                      </div>
                    </div>
                   ))}
                  </div>
                ):(
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
                )
                 }
                </TabPanel>
                <TabPanel>
                {loadingData && !homeLoader ? (
                  <div className="pt-4">
                  {DeshStatistics.map((data) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" key={data?.id}>
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-[#4d927b] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <PiArrowUpRightLight className="text-white" />
                            </div>
                            <p className="text-black text-base font-medium mb-0">
                              High Accuracy Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                        {data?.high_accuracy}
                          <span className="text-[#08a5f5] font-bold text-base">
                          ({data?.percentage_high_accuracy}%)
                          </span>
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-center">
                          <FaInfoCircle className="text-[#08a5f5] mr-1" />
                          Predictions that had same outcome as our given advice.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-[#dc524b] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <PiArrowDownRightLight className="text-white" />
                            </div>
                            <p className="text-black text-base font-medium mb-0">
                              Low Accuracy Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                        {data?.low_accuracy}
                          <span className="text-[#08a5f5] font-bold text-base">
                          ({data?.percentage_low_accuracy}%)
                          </span>
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-center">
                          <FaInfoCircle className="text-[#08a5f5] mr-1" />
                          Predictions that were completely off.
                        </p>
                      </div>
                    </div>
                   ))}
                  </div>
                ):(
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
                )
                }
                </TabPanel>
                <TabPanel>
                {loadingData && !homeLoader ? (
                  <div className="pt-4">
                  {DeshStatistics.map((data) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" key={data?.id}>
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-[#4d927b] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <PiArrowUpRightLight className="text-white" />
                            </div>
                            <p className="text-black text-[14px] font-medium mb-0">
                              High Accuracy Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                        {data?.high_accuracy}
                          <span className="text-[#08a5f5] font-bold text-base">
                          ({data?.percentage_high_accuracy}%)
                          </span>
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-top">
                          <FaInfoCircle className="text-[#08a5f5] mr-1 text-[16px]" />
                          Predictions that had same outcome as our given advice.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-[#dc524b] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <PiArrowDownRightLight className="text-white" />
                            </div>
                            <p className="text-black text-[14px] font-medium mb-0">
                              Low Accuracy Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                        {data?.low_accuracy}
                          <span className="text-[#08a5f5] font-bold text-base">
                          ({data?.percentage_low_accuracy}%)
                          </span>
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-center">
                          <FaInfoCircle className="text-[#08a5f5] mr-1" />
                          Predictions that were completely off.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-[#9333ea] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <BsLightningCharge className="text-white" />
                            </div>
                            <p className="text-black text-[14px] font-medium mb-0">
                              All Active Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                          {data?.active}
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-top">
                          <FaInfoCircle className="text-[#08a5f5] mr-1 text-[16px]" />
                          Predictions still waiting for the match to be played.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-[#a1a1aa] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <BsLightningCharge className="text-white" />
                            </div>
                            <p className="text-black text-[14px] font-medium mb-0">
                              All Inactive Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                          {data?.inactive}
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-top">
                          <FaInfoCircle className="text-[#08a5f5] mr-1 text-[16px]" />
                          Predictions for which the match has already been
                          played.
                        </p>
                      </div>
                    </div>
                    ))}
                  </div>
                ):(
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
                )
              }
                </TabPanel>
              </Tabs>
            </div>
            <Tabs
              data-aos="fade-up"
              data-aos-duration="1500"
              className="team_comparisions_tab_section"
            >
              <TabList className="tab_bar">
                <Tab>Past Matches</Tab>
                <Tab>Past Cooked Slips</Tab>
                <Tab>Upcoming Matches</Tab>
              </TabList>
              <TabPanel>
                <PastMatch />
              </TabPanel>
              <TabPanel>
                <PassedCookedSlip />
                {/* <div className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-5 shadow-xl">
                      <div className="flex justify-between items-center mb-5">
                        <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                          #45678
                        </p>
                        <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                          High Risk
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                            3.03 Odds
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                            5 Matches
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Strategy
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Double, Single
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            2278 Matches
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            1:30 PM
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Ends On
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            6:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-0">
                        <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                          <FaEye className="text-base mr-1" />
                          View Slip Details
                        </button>
                        <div className="text-right flex items-center">
                          <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                            Passed
                          </p>
                          <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-xl">
                      <div className="flex justify-between items-center mb-5">
                        <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                          #45678
                        </p>
                        <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                          High Risk
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                            3.03 Odds
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                            5 Matches
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Strategy
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Double, Single
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            2278 Matches
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            1:30 PM
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Ends On
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            6:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-0">
                        <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                          <FaEye className="text-base mr-1" />
                          View Slip Details
                        </button>
                        <div className="text-right flex items-center">
                          <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                            Passed
                          </p>
                          <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-xl">
                      <div className="flex justify-between items-center mb-5">
                        <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                          #45678
                        </p>
                        <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                          High Risk
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                            3.03 Odds
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                            5 Matches
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Strategy
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Double, Single
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            2278 Matches
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            1:30 PM
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Ends On
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            6:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-0">
                        <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                          <FaEye className="text-base mr-1" />
                          View Slip Details
                        </button>
                        <div className="text-right flex items-center">
                          <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                            Passed
                          </p>
                          <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-xl">
                      <div className="flex justify-between items-center mb-5">
                        <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                          #45678
                        </p>
                        <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                          High Risk
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                            3.03 Odds
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                            5 Matches
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Strategy
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Double, Single
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            2278 Matches
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            1:30 PM
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Ends On
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            6:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-0">
                        <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                          <FaEye className="text-base mr-1" />
                          View Slip Details
                        </button>
                        <div className="text-right flex items-center">
                          <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                            Passed
                          </p>
                          <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-xl">
                      <div className="flex justify-between items-center mb-5">
                        <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                          #45678
                        </p>
                        <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                          High Risk
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                            3.03 Odds
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                            5 Matches
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Strategy
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Double, Single
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            2278 Matches
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            1:30 PM
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Ends On
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            6:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-0">
                        <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                          <FaEye className="text-base mr-1" />
                          View Slip Details
                        </button>
                        <div className="text-right flex items-center">
                          <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                            Passed
                          </p>
                          <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-xl">
                      <div className="flex justify-between items-center mb-5">
                        <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                          #45678
                        </p>
                        <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                          High Risk
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                            3.03 Odds
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                            5 Matches
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Strategy
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Double, Single
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            2278 Matches
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            1:30 PM
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                            Ends On
                          </p>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                            Wed, 27 Mar, 2024
                          </span>
                          <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                            6:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-0">
                        <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                          <FaEye className="text-base mr-1" />
                          View Slip Details
                        </button>
                        <div className="text-right flex items-center">
                          <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                            Passed
                          </p>
                          <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </TabPanel>
              <TabPanel>
                <UpcomingMatch />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoccerPrediction;
