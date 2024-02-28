import React from "react";
import { Link } from "react-router-dom";
import {
  BuyTokenIcon,
  dollerIcon,
  icSortIcon,
} from "../../assets/images/images";
import { FiArrowRight } from "react-icons/fi";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { Datepicker, TextInput, Dropdown } from "flowbite-react";
import { CiUnlock } from "react-icons/ci";
const CookedSlips = () => {
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="flex justify-between mb-10">
          <div>
            <h1 className="font-Syne text-4xl font-bold text-white mb-2">
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
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-[14px] leading-[20px] font-medium text-white pb-2">
              Start and End Date
            </p>
            <div className="date_picker_box">
              <Datepicker />
            </div>
          </div>
          <Link className="bg-[#0d0f11] border border-[#9db4e1] hover:bg-[#2854b7] text-[#C8C8C8] hover:text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-medium rounded-3xl flex items-center">
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

        {/* Cooked Slips list start here */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#191D23] rounded-lg p-5">
            <div className="flex justify-between items-center mb-5">
              <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                #45678
              </p>
              <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
                Medium Risk
              </span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white mb-1">
                  3.03 Odds
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-white">
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Strategy
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  5 Matches
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Ends On
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  9:30 PM
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-0">
              <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                <CiUnlock className="text-base mr-0.5" />
                Unlock Slip
              </button>
              <div className="text-right flex items-center">
                <img src={dollerIcon} alt="dollerIcon" className="mr-1.5" />
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white">
                  4 Tokens
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#191D23] rounded-lg p-5">
            <div className="flex justify-between items-center mb-5">
              <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                #45678
              </p>
              <span className="text-[16px] leading-[30px] font-medium text-white bg-red-600 py-0 px-3 inline-block rounded-full">
                Hight Risk
              </span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white mb-1">
                  3.03 Odds
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-white">
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Strategy
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  5 Matches
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Ends On
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  9:30 PM
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-0">
              <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                <CiUnlock className="text-base mr-0.5" />
                Unlock Slip
              </button>
              <div className="text-right flex items-center">
                <img src={dollerIcon} alt="dollerIcon" className="mr-1.5" />
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white">
                  4 Tokens
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#191D23] rounded-lg p-5">
            <div className="flex justify-between items-center mb-5">
              <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                #45678
              </p>
              <span className="text-[16px] leading-[30px] font-medium text-black bg-[#22E810] py-0 px-3 inline-block rounded-full">
                Low Risk
              </span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white mb-1">
                  3.03 Odds
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-white">
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Strategy
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  5 Matches
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Ends On
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  9:30 PM
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-0">
              <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                <CiUnlock className="text-base mr-0.5" />
                Unlock Slip
              </button>
              <div className="text-right flex items-center">
                <img src={dollerIcon} alt="dollerIcon" className="mr-1.5" />
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white">
                  4 Tokens
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#191D23] rounded-lg p-5">
            <div className="flex justify-between items-center mb-5">
              <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                #45678
              </p>
              <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
                Medium Risk
              </span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white mb-1">
                  3.03 Odds
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-white">
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Strategy
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  5 Matches
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Ends On
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  9:30 PM
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-0">
              <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                <CiUnlock className="text-base mr-0.5" />
                Unlock Slip
              </button>
              <div className="text-right flex items-center">
                <img src={dollerIcon} alt="dollerIcon" className="mr-1.5" />
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white">
                  4 Tokens
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#191D23] rounded-lg p-5">
            <div className="flex justify-between items-center mb-5">
              <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                #45678
              </p>
              <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
                Medium Risk
              </span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white mb-1">
                  3.03 Odds
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-white">
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Strategy
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  5 Matches
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Ends On
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  9:30 PM
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-0">
              <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                <CiUnlock className="text-base mr-0.5" />
                Unlock Slip
              </button>
              <div className="text-right flex items-center">
                <img src={dollerIcon} alt="dollerIcon" className="mr-1.5" />
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white">
                  4 Tokens
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#191D23] rounded-lg p-5">
            <div className="flex justify-between items-center mb-5">
              <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                #45678
              </p>
              <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
                Medium Risk
              </span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white mb-1">
                  3.03 Odds
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-white">
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Strategy
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  5 Matches
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 mb-1">
                  Ends On
                </p>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white block">
                  Feb 18, 2024
                </span>
                <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-white">
                  9:30 PM
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-0">
              <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                <CiUnlock className="text-base mr-0.5" />
                Unlock Slip
              </button>
              <div className="text-right flex items-center">
                <img src={dollerIcon} alt="dollerIcon" className="mr-1.5" />
                <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-white">
                  4 Tokens
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Cooked Slips list start here */}
        {/* Pagination section start here */}
        <div className="flex justify-between mt-8">
          <div>
            <p className="text-[#989ca0] text-xs">
              Showing 1 to 8 of 200 entries
            </p>
          </div>
          <div className="min-w-[450px]">
            <div className="flex justify-between items-center">
              <div className="mr-[30px]">
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
              <div className="flex items-center">
                <p className="text-[12px] text-white mr-1.5">Go to page</p>
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

export default CookedSlips;
