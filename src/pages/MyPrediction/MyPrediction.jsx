import React from "react";
import { Link } from "react-router-dom";
import {
  BarcelonaIcon,
  BayernMunichIcon,
  BuyTokenIcon,
  MyPredictionsbanner,
  icSortIcon,
  requestPredictionBanner,
} from "../../assets/images/images";
import { FiArrowRight } from "react-icons/fi";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { TextInput, Table } from "flowbite-react";
import { MdMoreHoriz } from "react-icons/md";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useSelector } from "react-redux";

const MyPrediction = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
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
          className={` ${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
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
                  className={`${
                    themeMode === "light" ? "bg-[#E1E1E1]" : "bg-[#0d0f11]"
                  } border border-[#9db4e1] w-[180px] hover:bg-[#2854b7]  ${
                    themeMode === "light" ? "text-black" : "text-[#C8C8C8]"
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

            <TabPanel>
              {/* Table start here */}
              <div className="overflow-x-auto bg-transparent">
                <Table hoverable>
                  <Table.Head className="border-b border-[#2b2f35]">
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px]  ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[34%]`}
                    >
                      Match
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Score
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Over Under
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Accuracy
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[15%]`}
                    >
                      More
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              {/* Table ends here */}
            </TabPanel>
            <TabPanel>
              {/* Table start here */}
              <div className="overflow-x-auto bg-transparent">
                <Table hoverable>
                  <Table.Head className="border-b border-[#2b2f35]">
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px]  ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[34%]`}
                    >
                      Match
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Score
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Over Under
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Accuracy
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[15%]`}
                    >
                      More
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              {/* Table ends here */}
            </TabPanel>
            <TabPanel>
              {/* Table start here */}
              <div className="overflow-x-auto bg-transparent">
                <Table hoverable>
                  <Table.Head className="border-b border-[#2b2f35]">
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px]  ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[34%]`}
                    >
                      Match
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Score
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Over Under
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Accuracy
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[15%]`}
                    >
                      More
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              {/* Table ends here */}
            </TabPanel>
            <TabPanel>
              {/* Table start here */}
              <div className="overflow-x-auto bg-transparent">
                <Table hoverable>
                  <Table.Head className="border-b border-[#2b2f35]">
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px]  ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[34%]`}
                    >
                      Match
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Score
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Over Under
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    >
                      Accuracy
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[15%]`}
                    >
                      More
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={BayernMunichIcon}
                              alt="BayernMunichIcon"
                              className="mr-2"
                            />
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Bayern Munich
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Munich, Germany
                              </span>
                            </div>
                          </div>
                          <div className="text-[12px] text-white px-6">VS</div>
                          <div className="flex items-center">
                            <div>
                              <p
                                className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                Barcelona
                              </p>
                              <span className="text-[#8EA2AB] text-[9px]">
                                Barcelona, Spain
                              </span>
                            </div>
                            <img
                              src={BarcelonaIcon}
                              alt="BarcelonaIcon"
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span
                          className={`text-base font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          5/10
                        </span>
                      </Table.Cell>
                      <Table.Cell className="w-[17%]">
                        <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                          0-2
                        </span>
                      </Table.Cell>
                      <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                        <MdMoreHoriz />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              {/* Table ends here */}
            </TabPanel>
          </Tabs>
          {/* Tab section ends here */}
        </div>
        {/* My Prediction section ends here */}
        {/* Pagination section start here */}
        <div className="md:flex justify-between items-center mt-8">
          <div className="mb-2 md:mb-0 text-center">
            <p
              className={`${
                themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
              } text-xs`}
            >
              Showing 1 to 8 of 200 entries
            </p>
          </div>
          <div className="min-w-[450px]">
            <div className="md:flex justify-between items-center">
              <div className="mr-[30px] mb-2 md:mb-0 flex justify-center items-center">
                <ul className="flex">
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      <BsChevronDoubleLeft />
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      <BsChevronLeft />
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      23
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      <BsChevronRight />
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      <BsChevronDoubleRight />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <p
                  className={`text-[12px] ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                  } mr-1.5`}
                >
                  Go to page
                </p>
                <TextInput
                  id="small"
                  type="text"
                  sizing="sm"
                  className="go_page w-[50px] mr-1.5"
                />
                <button className="flex items-center text-[12px] text-[#0053CD] hover:text-white font-bold">
                  Go <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination section ends here */}
      </div>
    </div>
  );
};

export default MyPrediction;
