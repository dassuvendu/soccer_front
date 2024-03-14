import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DeportivoPastoIcon,
  EnvigadoIcon,
  icSortIcon,
  requestPredictionBanner,
} from "../../assets/images/images";
import { Datepicker, Button, Modal, TextInput } from "flowbite-react";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { HiTemplate } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

import { useSelector } from "react-redux";

const RequestPrediction = () => {
  const [openViewDetailsModal, setOpenViewDetailsModal] = useState(false);
  const viewDetailsModalHandler = () => {
    setOpenViewDetailsModal(true);
  };

  const themeMode = useSelector((state) => state.darkmode.mode);
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full py-4">
        <div
          className="bg-right-top bg-no-repeat rounded-xl bg-cover mb-6"
          style={{ backgroundImage: `url(${requestPredictionBanner})` }}
        >
          <div className="w-full md:w-5/12 py-24 pl-14">
            <h1 className="font-Bebas text-5xl tracking-normal text-white mb-4">
              Match Predictions
            </h1>
            <p className="text-white text-[18px] leading-[24px] font-medium">
              Explore different slips containing multiple matches for best odds.
            </p>
          </div>
        </div>
        <div className="md:flex justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <p
              className={`text-[14px] leading-[20px] font-medium ${
                themeMode === "light" ? "text-[#0d0f11]" : "text-white"
              } pb-2`}
            >
              Select Date
            </p>
            <div
              className={` ${
                themeMode === "light"
                  ? "date_picker_box_light"
                  : "date_picker_box"
              }`}
            >
              <Datepicker />
            </div>
          </div>
          <Link
            className={`${
              themeMode === "light" ? "bg-[#E1E1E1]" : "bg-[#0d0f11]"
            } w-[180px] border border-[#9db4e1] hover:bg-[#2854b7] ${
              themeMode === "light" ? "text-black" : "text-[#C8C8C8]"
            } hover:text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-medium rounded-3xl flex items-center`}
          >
            <HiTemplate className="text-xl mr-1" />
            Prediction Slip
          </Link>
        </div>
      </div>
      {/* Request Predictions list start here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } rounded-2xl shadow-xl`}
        >
          <div
            className={`flex justify-between items-center ${
              themeMode === "light" ? "bg-[#2aa9e1]" : "bg-[#2E3B4D]"
            } px-5 py-3 rounded-t-2xl`}
          >
            <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
              Kick Off
            </div>
            <div className="text-right">
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                Tue, 13 February, 2024
              </p>
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                6:40 AM
              </p>
            </div>
          </div>
          <div
            className={`pt-6 pb-4 px-3 border-2  ${
              themeMode === "light" ? "border-[#2aa9e1]" : "border-[#2E3B4D]"
            } rounded-b-2xl`}
          >
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Deportivo Pasto
                </p>
              </div>
              <div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Score
                  </p>
                  <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Prediction
                  </p>
                  <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Envigado
                </p>
              </div>
            </div>
            <div
              className={` ${
                themeMode === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-black hover:bg-gray-800"
              } block rounded-full text-center mb-0`}
            >
              <Link
                onClick={viewDetailsModalHandler}
                className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent"
              >
                View Details <FiArrowRight className="text-[#08a5f5] ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } rounded-2xl shadow-xl`}
        >
          <div
            className={`flex justify-between items-center ${
              themeMode === "light" ? "bg-[#2aa9e1]" : "bg-[#2E3B4D]"
            } px-5 py-3 rounded-t-2xl`}
          >
            <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
              Kick Off
            </div>
            <div className="text-right">
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                Tue, 13 February, 2024
              </p>
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                6:40 AM
              </p>
            </div>
          </div>
          <div
            className={`pt-6 pb-4 px-3 border-2  ${
              themeMode === "light" ? "border-[#2aa9e1]" : "border-[#2E3B4D]"
            } rounded-b-2xl`}
          >
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Deportivo Pasto
                </p>
              </div>
              <div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Score
                  </p>
                  <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Prediction
                  </p>
                  <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Envigado
                </p>
              </div>
            </div>
            <div
              className={` ${
                themeMode === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-black hover:bg-gray-800"
              } block rounded-full text-center mb-0`}
            >
              <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                View Details <FiArrowRight className="text-[#08a5f5] ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } rounded-2xl shadow-xl`}
        >
          <div
            className={`flex justify-between items-center ${
              themeMode === "light" ? "bg-[#2aa9e1]" : "bg-[#2E3B4D]"
            } px-5 py-3 rounded-t-2xl`}
          >
            <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
              Kick Off
            </div>
            <div className="text-right">
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                Tue, 13 February, 2024
              </p>
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                6:40 AM
              </p>
            </div>
          </div>
          <div
            className={`pt-6 pb-4 px-3 border-2  ${
              themeMode === "light" ? "border-[#2aa9e1]" : "border-[#2E3B4D]"
            } rounded-b-2xl`}
          >
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Deportivo Pasto
                </p>
              </div>
              <div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Score
                  </p>
                  <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Prediction
                  </p>
                  <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Envigado
                </p>
              </div>
            </div>
            <div
              className={` ${
                themeMode === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-black hover:bg-gray-800"
              } block rounded-full text-center mb-0`}
            >
              <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                View Details <FiArrowRight className="text-[#08a5f5] ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } rounded-2xl shadow-xl`}
        >
          <div
            className={`flex justify-between items-center ${
              themeMode === "light" ? "bg-[#2aa9e1]" : "bg-[#2E3B4D]"
            } px-5 py-3 rounded-t-2xl`}
          >
            <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
              Kick Off
            </div>
            <div className="text-right">
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                Tue, 13 February, 2024
              </p>
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                6:40 AM
              </p>
            </div>
          </div>
          <div
            className={`pt-6 pb-4 px-3 border-2  ${
              themeMode === "light" ? "border-[#2aa9e1]" : "border-[#2E3B4D]"
            } rounded-b-2xl`}
          >
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Deportivo Pasto
                </p>
              </div>
              <div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Score
                  </p>
                  <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Prediction
                  </p>
                  <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Envigado
                </p>
              </div>
            </div>
            <div
              className={` ${
                themeMode === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-black hover:bg-gray-800"
              } block rounded-full text-center mb-0`}
            >
              <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                View Details <FiArrowRight className="text-[#08a5f5] ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } rounded-2xl shadow-xl`}
        >
          <div
            className={`flex justify-between items-center ${
              themeMode === "light" ? "bg-[#2aa9e1]" : "bg-[#2E3B4D]"
            } px-5 py-3 rounded-t-2xl`}
          >
            <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
              Kick Off
            </div>
            <div className="text-right">
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                Tue, 13 February, 2024
              </p>
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                6:40 AM
              </p>
            </div>
          </div>
          <div
            className={`pt-6 pb-4 px-3 border-2  ${
              themeMode === "light" ? "border-[#2aa9e1]" : "border-[#2E3B4D]"
            } rounded-b-2xl`}
          >
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Deportivo Pasto
                </p>
              </div>
              <div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Score
                  </p>
                  <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Prediction
                  </p>
                  <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Envigado
                </p>
              </div>
            </div>
            <div
              className={` ${
                themeMode === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-black hover:bg-gray-800"
              } block rounded-full text-center mb-0`}
            >
              <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                View Details <FiArrowRight className="text-[#08a5f5] ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } rounded-2xl shadow-xl`}
        >
          <div
            className={`flex justify-between items-center ${
              themeMode === "light" ? "bg-[#2aa9e1]" : "bg-[#2E3B4D]"
            } px-5 py-3 rounded-t-2xl`}
          >
            <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
              Kick Off
            </div>
            <div className="text-right">
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                Tue, 13 February, 2024
              </p>
              <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                6:40 AM
              </p>
            </div>
          </div>
          <div
            className={`pt-6 pb-4 px-3 border-2  ${
              themeMode === "light" ? "border-[#2aa9e1]" : "border-[#2E3B4D]"
            } rounded-b-2xl`}
          >
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Deportivo Pasto
                </p>
              </div>
              <div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Score
                  </p>
                  <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
                <div className="mb-4 text-center">
                  <p
                    className={`${
                      themeMode === "light" ? "text-black" : "text-white"
                    } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                  >
                    Prediction
                  </p>
                  <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2"
                />
                <p
                  className={`font-Syne text-[15px] leading-[20px] font-bold ${
                    themeMode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Envigado
                </p>
              </div>
            </div>
            <div
              className={` ${
                themeMode === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-black hover:bg-gray-800"
              } block rounded-full text-center mb-0`}
            >
              <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                View Details <FiArrowRight className="text-[#08a5f5] ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Request Predictions list ends here */}
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

      {/* Login Modal start here */}
      {openViewDetailsModal && (
        <Modal
          show={openViewDetailsModal}
          size="4xl"
          onClose={() => setOpenViewDetailsModal(false)}
          popup
        >
          <Modal.Header className="absolute right-0 top-0" />
          <Modal.Body>
            <div className="pt-8 pb-2">
              <h2 className="font-Bebas text-3xl tracking-normal text-[#2aa9e1] mb-4">
                Match Details
              </h2>
              <div className="pt-6 pb-4 px-3 mb-4 border-b border-gray-300">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <img
                      src={DeportivoPastoIcon}
                      alt="DeportivoPastoIcon"
                      className="inline-block mb-2"
                    />
                    <p
                      className={`font-Syne text-[15px] leading-[20px] font-bold ${
                        themeMode === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Deportivo Pasto
                    </p>
                  </div>
                  <div className="flex justify-center items-center text-center">
                    <div>
                      <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                        Kick Off
                      </p>
                      <h3 className="text-[#2aa9e1] text-[18px] leading-[24px] font-medium">
                        Tue, 12 March, 2024
                      </h3>
                      <h3 className="text-black text-[18px] leading-[24px] font-medium">
                        1:30 PM
                      </h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <img
                      src={EnvigadoIcon}
                      alt="EnvigadoIcon"
                      className="inline-block mb-2"
                    />
                    <p
                      className={`font-Syne text-[15px] leading-[20px] font-bold ${
                        themeMode === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Envigado
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-Bebas text-xl tracking-normal text-black mb-4">
                  History
                </h4>
                <div>
                  <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
                    <div className="text-center">
                      <img
                        src={DeportivoPastoIcon}
                        alt="DeportivoPastoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                    <div className="text-center">
                      <div className="bg-[#2aa9e1] py-2 rounded-full">
                        <h3 className="text-white text-base">0 - 1</h3>
                      </div>
                    </div>
                    <div className="text-center">
                      <img
                        src={EnvigadoIcon}
                        alt="EnvigadoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
                    <div className="text-center">
                      <img
                        src={DeportivoPastoIcon}
                        alt="DeportivoPastoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                    <div className="text-center">
                      <div className="bg-[#2aa9e1] py-2 rounded-full">
                        <h3 className="text-white text-base">3 - 2</h3>
                      </div>
                    </div>
                    <div className="text-center">
                      <img
                        src={EnvigadoIcon}
                        alt="EnvigadoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
                    <div className="text-center">
                      <img
                        src={DeportivoPastoIcon}
                        alt="DeportivoPastoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                    <div className="text-center">
                      <div className="bg-[#2aa9e1] py-2 rounded-full">
                        <h3 className="text-white text-base">1 - 1</h3>
                      </div>
                    </div>
                    <div className="text-center">
                      <img
                        src={EnvigadoIcon}
                        alt="EnvigadoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
                    <div className="text-center">
                      <img
                        src={DeportivoPastoIcon}
                        alt="DeportivoPastoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                    <div className="text-center">
                      <div className="bg-[#2aa9e1] py-2 rounded-full">
                        <h3 className="text-white text-base">3 - 1</h3>
                      </div>
                    </div>
                    <div className="text-center">
                      <img
                        src={EnvigadoIcon}
                        alt="EnvigadoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
                    <div className="text-center">
                      <img
                        src={DeportivoPastoIcon}
                        alt="DeportivoPastoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                    <div className="text-center">
                      <div className="bg-[#2aa9e1] py-2 rounded-full">
                        <h3 className="text-white text-base">3 - 3</h3>
                      </div>
                    </div>
                    <div className="text-center">
                      <img
                        src={EnvigadoIcon}
                        alt="EnvigadoIcon"
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-0">
                <h4 className="font-Bebas text-xl tracking-normal text-black mb-4">
                  Last 5 matches
                </h4>
                <div className="flex justify-between items-center">
                  <div>
                    <ul className="flex items-center">
                      <li>
                        <img
                          src={DeportivoPastoIcon}
                          alt="DeportivoPastoIcon"
                          className="inline-block mb-0 w-8"
                        />
                      </li>
                      <li className="ml-1.5 bg-[#ff0000] text-[14px] text-white px-2 rounded">
                        L
                      </li>
                      <li className="ml-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                        W
                      </li>
                      <li className="ml-1.5 bg-[#1f2937] text-[14px] text-white px-2 rounded">
                        D
                      </li>
                      <li className="ml-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                        W
                      </li>
                      <li className="ml-1.5 bg-[#1f2937] text-[14px] text-white px-2 rounded">
                        D
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex items-center">
                      <li className="mr-1.5 bg-[#1f2937] text-[14px] text-white px-2 rounded">
                        D
                      </li>
                      <li className="mr-1.5 bg-[#ff0000] text-[14px] text-white px-2 rounded">
                        L
                      </li>
                      <li className="mr-1.5 bg-[#ff0000] text-[14px] text-white px-2 rounded">
                        L
                      </li>
                      <li className="mr-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                        W
                      </li>
                      <li className="mr-1.5 bg-[#ff0000] text-[14px] text-white px-2 rounded">
                        L
                      </li>
                      <li>
                        <img
                          src={EnvigadoIcon}
                          alt="EnvigadoIcon"
                          className="inline-block mb-2 w-8"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      {/* Login Modal ends here */}
    </div>
  );
};

export default RequestPrediction;
