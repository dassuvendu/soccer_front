import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ActiveBG,
  BarcelonaIcon,
  BayernMunichIcon,
  BuyTokenIcon,
  HighAccuracyBG,
  InactiveBG,
  LowAccuracyBG,
  TotalMatchesBG,
  logoIcon,
} from "../../assets/images/images";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useDispatch, useSelector } from "react-redux";
import { Table, TextInput } from "flowbite-react";
import { MdMoreHoriz } from "react-icons/md";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { getStatistics } from "../../reducers/StatisticsSlice";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { getUid } from "../../reducers/uuidSlice";
import { toast } from "react-toastify";
import { logout } from "../../reducers/authSlice";

const Statistics = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { statistics, isLoading } = useSelector((state) => state.statistics);
  const { valid } = useSelector((state) => state.uuid);

  const dispatch = useDispatch();
  const uuid = localStorage.getItem('uuid')
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUid({}))
  },[dispatch])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getUid({})).then((res) =>{
        if (res?.payload?.data === undefined) {
          toast.error('Your session has expired !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
        if (uuid !== valid?.data) {
            dispatch(logout())
            navigate('/') 
        }
    },5000);
    return () => clearTimeout(timer);
  }, [valid, uuid, dispatch]);

  useEffect(() => {
    dispatch(getStatistics({}));
  }, []);
  console.log("get statistics", statistics);
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="flex justify-between mb-4">
          <h1
            className={`${
              themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
            } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
          >
            Statistics
          </h1>
          {/* <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            <img src={BuyTokenIcon} alt="BuyTokenIcon" className="mr-1" />
            Buy Tokens <FiArrowRight className="text-white ml-0.5" />
          </Link> */}
        </div>
        {/* Statistics graph start here */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div
            className="bg-center bg-no-repeat bg-cover md:bg-contain p-[15px] w-full md:w-[210px] h-full md:h-[131px] rounded-xl"
            style={{ backgroundImage: `url(${HighAccuracyBG})` }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-white text-[14px] font-semibold">
                High Accuracy
              </h2>
              <p className="text-white text-[11px] font-normal flex items-center">
                <FiArrowUpRight className="text-xs" />{" "}
                {Array.isArray(statistics?.data) &&
                  statistics?.data[0]?.percentage_high_accuracy.toFixed(2)}
                %
              </p>
            </div>
            <h3 className="text-white text-[24px] font-medium">
              {isLoading ? (
                <div className="text-center">
                <div role="status">
                  <img src={logoIcon} alt="loading.." className="loader_stats" />
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
              ) : (
                Array.isArray(statistics?.data) &&
                statistics?.data[0]?.high_accuracy
              )}
            </h3>
          </div>
          <div
            className="bg-center bg-no-repeat bg-cover md:bg-contain p-[15px] w-full md:w-[210px] h-full md:h-[131px] rounded-xl"
            style={{ backgroundImage: `url(${LowAccuracyBG})` }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-white text-[14px] font-semibold">
                Low Accuracy
              </h2>
              <p className="text-white text-[11px] font-normal flex items-center">
                <FiArrowUpRight className="text-xs" />{" "}
                {Array.isArray(statistics?.data) &&
                  statistics?.data[0]?.percentage_low_accuracy.toFixed(2)}
                %
              </p>
            </div>
            <h3 className="text-white text-[24px] font-medium">
              {isLoading ? (
                  <div className="text-center">
                  <div role="status">
                    <img src={logoIcon} alt="loading.." className="loader_stats" />
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
              ) : (
                Array.isArray(statistics?.data) &&
                statistics?.data[0]?.low_accuracy
              )}
            </h3>
          </div>
          <div
            className="bg-center bg-no-repeat bg-cover md:bg-contain p-[15px] w-full md:w-[210px] h-full md:h-[131px] rounded-xl"
            style={{ backgroundImage: `url(${ActiveBG})` }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-white text-[14px] font-semibold">Active</h2>
              <p className="text-white text-[11px] font-normal flex items-center">
                {/* <FiArrowUpRight className="text-xs" /> */}
              </p>
            </div>
            <h3 className="text-white text-[24px] font-medium">
              {isLoading ? (
                  <div className="text-center">
                  <div role="status">
                    <img src={logoIcon} alt="loading.." className="loader_stats" />
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
              ) : (
                Array.isArray(statistics?.data) && statistics?.data[0]?.active
              )}
            </h3>
          </div>
          <div
            className="bg-center bg-no-repeat bg-cover md:bg-contain p-[15px] w-full md:w-[210px] h-full md:h-[131px] rounded-xl"
            style={{ backgroundImage: `url(${InactiveBG})` }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-white text-[14px] font-semibold">Inactive</h2>
              <p className="text-[11px] font-normal flex items-center text-[#ff0000]">
                {/* <FiArrowUpRight className="text-xs" /> */}
              </p>
            </div>
            <h3 className="text-white text-[24px] font-medium">
              {isLoading ? (
                  <div className="text-center">
                  <div role="status">
                    <img src={logoIcon} alt="loading.." className="loader_stats" />
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
              ) : (
                Array.isArray(statistics?.data) && statistics?.data[0]?.inactive
              )}
            </h3>
          </div>
          <div
            className="bg-center bg-no-repeat bg-cover md:bg-contain p-[15px] w-full md:w-[210px] h-full md:h-[131px] rounded-xl"
            style={{ backgroundImage: `url(${TotalMatchesBG})` }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-white text-[14px] font-semibold">
                Total Matches
              </h2>
              <p className="text-white text-[11px] font-normal flex items-center">
                {/* <FiArrowUpRight className="text-xs" /> */}
              </p>
            </div>
            <h3 className="text-white text-[24px] font-medium">
              {isLoading ? (
                  <div className="text-center">
                  <div role="status">
                    <img src={logoIcon} alt="loading.." className="loader_stats" />
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
              ) : (
                Array.isArray(statistics?.data) &&
                statistics?.data[0]?.total_matches
              )}
            </h3>
          </div>
        </div>
        {/* Statistics graph ends here */}

        <div className="mt-8">
          <ul className="mt-2 mb-2 flex flex justify-between items-center gap-2 pl-0">
            {/* <!-- Menu Item Manage Users --> */}
            <li className="mb-0">
              <NavLink
                to="/Stats-comparisions"
                className="text-[16px] px-4 py-1.5 rounded-full bg-[#2aa9e1] flex justify-between items-center font-semibold text-white hover:text-black"
              >
                <RiTeamLine className="text-3xl mr-1" />
                Stats Comparisions
              </NavLink>
            </li>
            {/* <!-- Menu Item Manage Users --> */}

            {/* <!-- Menu Item Manage Users --> */}
            <li className="mb-0">
              <NavLink
                to="/player-comparisions"
                className="text-[16px] px-4 py-1.5 rounded-full bg-[#2aa9e1] flex justify-between items-center font-semibold text-white hover:text-black"
              >
                <AiOutlineTeam className="text-3xl ml-1" />
                Player Comparisions
              </NavLink>
            </li>
            {/* <!-- Menu Item Manage Users --> */}
          </ul>
        </div>

        {/* Statistics list section start here */}
        <div className="mt-[60px]">
          <div className="md:flex justify-between items-center mb-[25px]">
            <div className="mb-4 md:mb-0">
              <h2
                className={`${
                  themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                } font-Bebas text-[32px] tracking-normal mb-0`}
              >
                {/* Today's Predictions */}
              </h2>
              <p
                className={`${
                  themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                } text-[16px] font-normal mb-0`}
              >
                {/* Showing all predictions requested today,February 18, 2024 */}
              </p>
            </div>
            <div
              className={` ${
                themeMode === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-black hover:bg-gray-800"
              } border border-[#08a5f5] inline-block rounded-full mb-0`}
            >
              {/* <Link className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[47px] h-[47px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                See all Predictions{" "} 
                 <FiArrowRight className="text-[#08a5f5] ml-0.5" />
              </Link> */}
            </div>
          </div>
          <div>
            {/* Table start here */}
            <div className="overflow-x-auto bg-transparent">
              {/* <Table hoverable>
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
              </Table> */}
            </div>
            {/* Table ends here */}
          </div>
        </div>
        {/* Statistics list section ends here */}
        {/* Pagination section start here */}
        {/* <div className="md:flex justify-between items-center mt-8">
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
        </div> */}
        {/* Pagination section ends here */}
      </div>
    </div>
  );
};

export default Statistics;
