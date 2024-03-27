import React, { useEffect } from "react";
import {
  DeportivoPastoIcon,
  EnvigadoIcon,
  reventNews01,
  teamIcon01,
} from "../../assets/images/images";
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { CiUnlock } from "react-icons/ci";
import { FaEye, FaInfoCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FiArrowRight } from "react-icons/fi";
import {
  PiArrowDownRightLight,
  PiArrowDownRightThin,
  PiArrowUpRightLight,
} from "react-icons/pi";
const SoccerPrediction = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#2aa9e1] py-10 lg:py-24 px-8 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="max-w-6xl mx-auto">
            <h2 class="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-4 text-white">
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
                  <div className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                          1818{" "}
                          <span className="text-[#08a5f5] font-bold text-base">
                            (90.63%)
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
                          188
                          <span className="text-[#08a5f5] font-bold text-base">
                            (9.37%)
                          </span>
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-center">
                          <FaInfoCircle className="text-[#08a5f5] mr-1" />
                          Predictions that were completely off.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                          1383
                          <span className="text-[#08a5f5] font-bold text-base">
                            (68.94%)
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
                          623
                          <span className="text-[#08a5f5] font-bold text-base">
                            (31.06%)
                          </span>
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-center">
                          <FaInfoCircle className="text-[#08a5f5] mr-1" />
                          Predictions that were completely off.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                          1818
                          <span className="text-[#08a5f5] font-bold text-base">
                            (90.63%)
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
                          188
                          <span className="text-[#08a5f5] font-bold text-base">
                            (9.37%)
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
                            <div className="bg-[#4d927b] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <PiArrowUpRightLight className="text-white" />
                            </div>
                            <p className="text-black text-[14px] font-medium mb-0">
                              All Active Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                          1597
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-top">
                          <FaInfoCircle className="text-[#08a5f5] mr-1 text-[16px]" />
                          Predictions still waiting for the match to be played.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-[#dc524b] w-8 h-8 rounded-full flex justify-center items-center mr-1">
                              <PiArrowDownRightLight className="text-white" />
                            </div>
                            <p className="text-black text-[14px] font-medium mb-0">
                              All Inactive Predictions
                            </p>
                          </div>
                        </div>
                        <h3 className="text-black font-bold text-5xl pb-2">
                          2006
                        </h3>
                        <p className="text-[#9c9da1] text-[11px] mb-0 flex items-top">
                          <FaInfoCircle className="text-[#08a5f5] mr-1 text-[16px]" />
                          Predictions for which the match has already been
                          played.
                        </p>
                      </div>
                    </div>
                  </div>
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
                <div className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Match Details
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Friendlies | Wednesday,
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            March 27, 2024 2:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Score
                                </p>
                                <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                              <div className="mb-4 text-center">
                                <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Prediction
                                </p>
                                <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            View Details
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Match Details
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Friendlies | Wednesday,
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            March 27, 2024 2:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Score
                                </p>
                                <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                              <div className="mb-4 text-center">
                                <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Prediction
                                </p>
                                <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            View Details
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Match Details
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Friendlies | Wednesday,
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            March 27, 2024 2:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Score
                                </p>
                                <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                              <div className="mb-4 text-center">
                                <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Prediction
                                </p>
                                <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            View Details
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Match Details
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Friendlies | Wednesday,
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            March 27, 2024 2:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Score
                                </p>
                                <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                              <div className="mb-4 text-center">
                                <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Prediction
                                </p>
                                <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            View Details
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Match Details
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Friendlies | Wednesday,
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            March 27, 2024 2:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Score
                                </p>
                                <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                              <div className="mb-4 text-center">
                                <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Prediction
                                </p>
                                <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            View Details
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Match Details
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Friendlies | Wednesday,
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            March 27, 2024 2:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Score
                                </p>
                                <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                              <div className="mb-4 text-center">
                                <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                  Prediction
                                </p>
                                <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                  <b>2 - 0</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            View Details
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pt-4">
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
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Matches
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Mar 28, 2024
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            12:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[15px] leading-[25px] font-Montserrat pb-1">
                                  Mar 28, 2024
                                </p>
                                <span className=" text-black font-medium  text-[12px] leading-[16px] font-Montserrat inline-block px-0">
                                  <b>12:30 AM</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            See Prediction
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Matches
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Mar 28, 2024
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            12:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[15px] leading-[25px] font-Montserrat pb-1">
                                  Mar 28, 2024
                                </p>
                                <span className=" text-black font-medium  text-[12px] leading-[16px] font-Montserrat inline-block px-0">
                                  <b>12:30 AM</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            See Prediction
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Matches
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Mar 28, 2024
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            12:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[15px] leading-[25px] font-Montserrat pb-1">
                                  Mar 28, 2024
                                </p>
                                <span className=" text-black font-medium  text-[12px] leading-[16px] font-Montserrat inline-block px-0">
                                  <b>12:30 AM</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            See Prediction
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Matches
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Mar 28, 2024
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            12:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[15px] leading-[25px] font-Montserrat pb-1">
                                  Mar 28, 2024
                                </p>
                                <span className=" text-black font-medium  text-[12px] leading-[16px] font-Montserrat inline-block px-0">
                                  <b>12:30 AM</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            See Prediction
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Matches
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Mar 28, 2024
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            12:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[15px] leading-[25px] font-Montserrat pb-1">
                                  Mar 28, 2024
                                </p>
                                <span className=" text-black font-medium  text-[12px] leading-[16px] font-Montserrat inline-block px-0">
                                  <b>12:30 AM</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            See Prediction
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl">
                      <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          Matches
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            Mar 28, 2024
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                            12:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={DeportivoPastoIcon}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Deportivo Pasto
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="mb-4 text-center">
                                <p className="text-black font-semibold text-[15px] leading-[25px] font-Montserrat pb-1">
                                  Mar 28, 2024
                                </p>
                                <span className=" text-black font-medium  text-[12px] leading-[16px] font-Montserrat inline-block px-0">
                                  <b>12:30 AM</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={EnvigadoIcon}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                              Envigado
                            </p>
                          </div>
                        </div>
                        <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                          <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                            See Prediction
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoccerPrediction;
