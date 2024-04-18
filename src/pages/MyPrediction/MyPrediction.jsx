import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { TextInput, Table, Spinner, Button } from "flowbite-react";
import { MdMoreHoriz } from "react-icons/md";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useDispatch, useSelector } from "react-redux";
import { getPredictions } from "../../reducers/MyPredictionSlice";
import Login from "../Auth/Login/Login";
import { PredictionRequestModal } from "./PredictionCompo/PredictionRequestModal";
import { LastResult } from "../../reducers/PredictionsSlice";
import { recentPredictions } from "../../reducers/RecentPredictionSlice";

const MyPrediction = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { fetchedPredictions, isLoading } = useSelector(
    (state) => state.myPredictions
  );
  const { recent } = useSelector((state) => state.recentPredicts);

  console.log("recent: ", recent?.data);
  const { teamResult } = useSelector((state) => state.prediction);
  console.log("team", teamResult);
  const [fixturesId, setFixturesId] = useState();
  const [homeId, setHomeId] = useState();
  const [awayId, setAwayId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [itemsPerPage] = useState(10);
  const [timeStamp, setTimeStamp] = useState(null);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [searchPage, setSearchPage] = useState(null);
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const token = localStorage.getItem("userToken");
  console.log("token: ", token);
  useEffect(() => {
    // const hasRenderedBefore = localStorage.getItem('hasRendered',false);
    if (token && currentPage === 1) {
      dispatch(
        getPredictions({
          page_number: currentPage,
          items_per_page: itemsPerPage,
        })
      );
      // localStorage.setItem('hasRendered', true);
    }
  }, [currentPage, itemsPerPage, token, dispatch]);

  useEffect(() => {
    if (token) {
      console.log("total data: ", fetchedPredictions?.total_data);
      setTotalPages(Math.ceil(fetchedPredictions?.total_data / itemsPerPage));
    }
  }, [fetchedPredictions, itemsPerPage]);
  // const fetchData = (page) => {
  //   dispatch(
  //     getPredictions({
  //       page_number: page,
  //       items_per_page: itemsPerPage,
  //     })
  //   );
  // };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(
      getPredictions({
        page_number: page,
        items_per_page: itemsPerPage,
      })
    );
  };
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const GotoPagehandle = (e) => {
    const newPageNumber = parseInt(e.target.value);
    setSearchPage(newPageNumber);
  };
  const SearchHandle = () => {
    paginate(searchPage);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const renderedPageNumbers = [];
    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
      renderedPageNumbers.push(
        <li key={i}>
          <Button
            onClick={() => handlePageChange(i)}
            className={`mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white ${
              currentPage === i ? "bg-[#0053CD]" : ""
            }`}
          >
            {i}
          </Button>
        </li>
      );
    }
    return renderedPageNumbers;
  };
  const viewDetailsModalHandler = (id, hid, aid, timeId) => {
    setFixturesId(id);
    setHomeId(hid);
    setAwayId(aid);
    setTimeStamp(timeId);
    setOpenDetailsModal(true);
    console.log("fixture id: ", id);
    console.log("home id: ", hid);
    console.log("away id: ", aid);
    console.log("time id: ", timeId);
  };
  const handleModalClose = () => {
    setOpenDetailsModal(false);
  };
  console.log("prediction: ", fetchedPredictions?.data);

  // const [percentage, setPercentage] = useState();

  // useEffect(() => {
  //   dispatch(LastResult({ fixture: 1174181 }));
  // }, []);
  // useEffect(() => {
  //   if (teamResult?.home?.league?.goals?.for) {
  //     console.log("per :", teamResult?.home?.league?.goals?.for?.minute);

  //     const data = teamResult?.home?.league?.goals?.for?.minute;

  //     const percentages = Object.values(data).map((item) => item.percentage);

  //     console.log("per :", percentages[0]);
  //     setPercentage(percentages[1]);
  //   }
  // }, [teamResult]);

  // useEffect(() => {
  //   const addedAt = new Date();
  //   const sortedData = fetchedPredictions?.data?.map((item, index) => {

  //     return index.sort((a, b) => b - a); // Sorting logic
  //   });
  //   console.log("Sorted Data:", sortedData);
  // }, [fetchedPredictions]);
  // const [sortedData, setSortedData] = useState([]);

  // useEffect(() => {
  //   if (fetchedPredictions && fetchedPredictions.data) {
  //     const dataCopy = [...fetchedPredictions.data]; // Create a copy of the array
  //     const sortedData = dataCopy.reverse(); // Reverse the copy
  //     setSortedData(sortedData); // Set the sorted data in state
  //   }
  // }, [fetchedPredictions]);

  // console.log("Sorted Data:", sortedData);

  const recentHandle = () => {
    dispatch(
      recentPredictions({
        page_number: currentPage,
        items_per_page: itemsPerPage,
        recent_predictions: true,
      })
    );
  };

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
          } rounded-md`}
        >
          {/* Tab section start here */}
          <Tabs className="tab_section">
            <div className="md:flex justify-between items-center">
              <TabList>
                <Tab>All Prediction</Tab>
                <Tab onClick={recentHandle}>Recently</Tab>
                <Tab>Cooked Slip</Tab>
                <Tab>Failed Prediction</Tab>
              </TabList>
              <div className="mr-4 mb-4 ml-4 md:ml-0 md:mb-0">
                {/* <Link
                  className={`${
                    themeMode === "light" ? "bg-[#E1E1E1]" : "bg-[#0d0f11]"
                  } border border-[#9db4e1] w-[180px] hover:bg-[#2854b7]  ${
                    themeMode === "light" ? "text-black" : "text-[#C8C8C8]"
                  } hover:text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-medium rounded-3xl flex items-center`}
                >
                  <img src={icSortIcon} alt="BuyTokenIcon" className="mr-1" />
                  Apply Filter{" "}
                  <BsChevronDown className="text-[#08a1f8] ml-1 text-[18px]" />
                </Link> */}
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
                    ></Table.HeadCell>
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
                    {isLoading ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4">
                          <div role="status">
                            <svg
                              aria-hidden="true"
                              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                            </svg>
                            <span className="sr-only">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      <>
                        {fetchedPredictions?.data?.map((predict) => {
                          return (
                            <>
                              <Table.Row
                                className={`${
                                  themeMode === "light"
                                    ? "bg-white"
                                    : "bg-[#191D23]"
                                } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                              >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                                  <div className="flex items-center">
                                    <div className="flex items-center">
                                      {/* <img
                                        // src={predict?.teams?.home?.logo}
                                        // alt={predict?.teams?.home?.name}
                                        className="mr-2"
                                        height={35}
                                        width={35}
                                      /> */}
                                      <div>
                                        <p
                                          className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                            themeMode === "light"
                                              ? "text-black"
                                              : "text-white"
                                          }`}
                                        >
                                          {predict?.fixture_vrs}
                                        </p>
                                        <span className="text-[#8EA2AB] text-[9px]">
                                          {/* {predict?.teams?.home?.name},{" "}
                                          {predict?.league?.country} */}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="text-[12px] text-white px-6">
                                      {/* VS */}
                                    </div>
                                    <div className="flex items-center">
                                      <div>
                                        <p
                                          className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                            themeMode === "light"
                                              ? "text-black"
                                              : "text-white"
                                          }`}
                                        >
                                          {/* {predict?.teams?.away?.name} */}
                                        </p>
                                        <span className="text-[#8EA2AB] text-[9px]">
                                          {/* {predict?.teams?.away?.name},{" "}
                                          {predict?.league?.country} */}
                                        </span>
                                      </div>
                                      {/* <img
                                        src={predict?.teams?.away?.logo}
                                        alt={predict?.teams?.away?.name}
                                        className="ml-2"
                                        height={35}
                                        width={35}
                                      /> */}
                                    </div>
                                  </div>
                                </Table.Cell>
                                <Table.Cell className="w-[17%]">
                                  <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                                    {/* {predict?.goals?.home}-
                                    {predict?.goals?.away} */}
                                    {predict?.fixture_score}
                                  </span>
                                </Table.Cell>
                                <Table.Cell className="w-[17%]">
                                  <span
                                    className={`text-base font-bold ${
                                      themeMode === "light"
                                        ? "text-black"
                                        : "text-white"
                                    }`}
                                  >
                                    {predict?.over_under_line}
                                  </span>
                                </Table.Cell>
                                <Table.Cell className="w-[5%]">
                                  <span
                                    className={`text-base font-bold ${
                                      themeMode === "light"
                                        ? "text-black"
                                        : "text-white"
                                    }`}
                                  >
                                    <span>
                                      {predict?.fixture_status === "failed" ? (
                                        <>
                                          <span>
                                            <svg
                                              className="w-6 h-6 text-red-500"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18 17.94 6M18 18 6.06 6"
                                              />
                                            </svg>
                                          </span>
                                        </>
                                      ) : predict?.fixture_status ===
                                        "success" ? (
                                        <>
                                          <span>
                                            <svg
                                              className="w-6 h-6 text-green-500"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 11.917 9.724 16.5 19 7.5"
                                              />
                                            </svg>
                                          </span>
                                        </>
                                      ) : (
                                        <></>
                                      )}{" "}
                                    </span>
                                  </span>
                                </Table.Cell>
                                <Table.Cell className="w-[10%]">
                                  <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                                    {predict?.accuracy}%
                                  </span>
                                </Table.Cell>
                                <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                                  <MdMoreHoriz
                                    onClick={() =>
                                      viewDetailsModalHandler(
                                        predict?.fixture_id,
                                        predict?.teams?.home?.id,
                                        predict?.teams?.away?.id,
                                        predict?.fixture_date
                                      )
                                    }
                                  />
                                </Table.Cell>
                              </Table.Row>
                            </>
                          );
                        })}
                      </>
                    )}
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
                      Under Over
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    ></Table.HeadCell>
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
                    {recent?.data?.map((recentData) => {
                      return (
                        <>
                          <Table.Row
                            className={`${
                              themeMode === "light"
                                ? "bg-white"
                                : "bg-[#191D23]"
                            } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                              <div className="flex items-center">
                                <div className="flex items-center">
                                  {/* <img
                                        // src={predict?.teams?.home?.logo}
                                        // alt={predict?.teams?.home?.name}
                                        className="mr-2"
                                        height={35}
                                        width={35}
                                      /> */}
                                  <div>
                                    <p
                                      className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                        themeMode === "light"
                                          ? "text-black"
                                          : "text-white"
                                      }`}
                                    >
                                      {recentData?.fixture_vrs}
                                    </p>
                                    <span className="text-[#8EA2AB] text-[9px]">
                                      {/* {predict?.teams?.home?.name},{" "}
                                          {predict?.league?.country} */}
                                    </span>
                                  </div>
                                </div>
                                <div className="text-[12px] text-white px-6">
                                  {/* VS */}
                                </div>
                                <div className="flex items-center">
                                  <div>
                                    <p
                                      className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                        themeMode === "light"
                                          ? "text-black"
                                          : "text-white"
                                      }`}
                                    >
                                      {/* {predict?.teams?.away?.name} */}
                                    </p>
                                    <span className="text-[#8EA2AB] text-[9px]">
                                      {/* {predict?.teams?.away?.name},{" "}
                                          {predict?.league?.country} */}
                                    </span>
                                  </div>
                                  {/* <img
                                        src={predict?.teams?.away?.logo}
                                        alt={predict?.teams?.away?.name}
                                        className="ml-2"
                                        height={35}
                                        width={35}
                                      /> */}
                                </div>
                              </div>
                            </Table.Cell>
                            <Table.Cell className="w-[17%]">
                              <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                                {/* {predict?.goals?.home}-
                                    {predict?.goals?.away} */}
                                {recentData?.fixture_score}
                              </span>
                            </Table.Cell>
                            <Table.Cell className="w-[17%]">
                              <span
                                className={`text-base font-bold ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                {recentData?.over_under_line}
                              </span>
                            </Table.Cell>
                            <Table.Cell className="w-[5%]">
                              <span
                                className={`text-base font-bold ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                <span>
                                  {recentData?.fixture_status === "failed" ? (
                                    <>
                                      <span>
                                        <svg
                                          className="w-6 h-6 text-red-500"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18 17.94 6M18 18 6.06 6"
                                          />
                                        </svg>
                                      </span>
                                    </>
                                  ) : recentData?.fixture_status ===
                                    "success" ? (
                                    <>
                                      <span>
                                        <svg
                                          className="w-6 h-6 text-green-500"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 11.917 9.724 16.5 19 7.5"
                                          />
                                        </svg>
                                      </span>
                                    </>
                                  ) : (
                                    <></>
                                  )}{" "}
                                </span>
                              </span>
                            </Table.Cell>
                            <Table.Cell className="w-[10%]">
                              <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                                {recentData?.accuracy}%
                              </span>
                            </Table.Cell>
                            <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                              <MdMoreHoriz
                                onClick={() =>
                                  viewDetailsModalHandler(
                                    recentData?.fixture_id,
                                    recentData?.teams?.home?.id,
                                    recentData?.teams?.away?.id,
                                    recentData?.fixture_date
                                  )
                                }
                              />
                            </Table.Cell>
                          </Table.Row>
                        </>
                      );
                    })}
                  </Table.Body>
                </Table>
              </div>
              {/* Table ends here */}
            </TabPanel>
            <TabPanel>
              {/* Table start here */}
              {/* <div className="overflow-x-auto bg-transparent">
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
              </div> */}
              {/* Table ends here */}
            </TabPanel>
            <TabPanel>
              {/* Table start here */}
              {/* <div className="overflow-x-auto bg-transparent">
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
              </div> */}
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
              Showing {(currentPage - 1) * itemsPerPage + 1 || 0} to{" "}
              {currentPage * itemsPerPage || 0} of{" "}
              {fetchedPredictions?.total_data || 0} entries
            </p>
          </div>
          <div className="min-w-[450px]">
            <div className="md:flex justify-between items-center">
              <div className="mr-[30px] mb-2 md:mb-0 flex justify-center items-center">
                <ul className="flex">
                  <li>
                    <Button
                      onClick={() => handlePageChange(1)}
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                    >
                      <BsChevronDoubleLeft />
                    </Button>
                  </li>
                  <li>
                    <Button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                    >
                      <BsChevronLeft />
                    </Button>
                  </li>
                  {/* {pageNumbers.slice(0, 5).map((pageNumber) => (
                    <li key={pageNumber}>
                      <Button
                        onClick={() => handlePageChange(pageNumber)}
                        className={`mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white ${
                          currentPage === pageNumber ? "bg-[#0868f4]" : ""
                        }`}
                      >
                        {pageNumber}
                      </Button>
                    </li>
                  ))} */}
                  {renderPageNumbers()}
                  {/* <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      1
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      2
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      3
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      23
                    </Link>
                  </li> */}
                  <li>
                    <Button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                    >
                      <BsChevronRight />
                    </Button>
                  </li>
                  <li>
                    <Button
                      onClick={() => handlePageChange(totalPages)}
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                    >
                      <BsChevronDoubleRight />
                    </Button>
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
                  onChange={GotoPagehandle}
                />
                <button
                  className="flex items-center text-[12px] text-[#0053CD] hover:text-white font-bold"
                  onClick={SearchHandle}
                >
                  Go <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination section ends here */}
      </div>
      <PredictionRequestModal
        openDetailsModal={openDetailsModal}
        onClose={handleModalClose}
        fixturesId={fixturesId}
        timeStamp={timeStamp}
        homeId={homeId}
        awayId={awayId}
      />
    </div>
  );
};

export default MyPrediction;
