import React, { useEffect, useState } from "react";
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
import { Datepicker, TextInput, Dropdown, Spinner } from "flowbite-react";
import { CiUnlock } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getOddsSlips } from "../../reducers/CookedSlipSlice";
import { useDateTimeSlip } from "../../hooks/useDateTimeSlip";
import { useDateTimeSlipEnd } from "../../hooks/useDateTimeSlipEnd";
const CookedSlips = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { oddsData, isLoading } = useSelector((state) => state.cookedSlips);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);
  const dispatch = useDispatch();
  const dates = new Date();
  const timeZoneOffset = dates.getTimezoneOffset();
  dates.setMinutes(dates.getMinutes() + timeZoneOffset);
  const newDate = dates.toISOString().split("T")[0];
  const [dateList, timeList] = useDateTimeSlip({ date: newDate });
  const [dateListEnd, timeListEnd] = useDateTimeSlipEnd({ date: newDate });
  const [selectedDate, setSelectedDate] = useState(null);
  console.log("dateList", dateList);
  console.log("timelist", timeList);
  const [hide, setHide] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setDate(dateList);
    setTime(timeList);
  }, [oddsData]);
  useEffect(() => {
    setDateEnd(dateListEnd);
    setTimeEnd(timeListEnd);
  }, [oddsData]);
  console.log("End Date: ", dateListEnd);
  console.log("End Time: ", timeListEnd);

  const handleDateChange = (date) => {
    setDate(date);
    fetchData(date);
  };
  const formatDate = (date) => {
    // Get date in YYYY-MM-DD format
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const fetchData = (date) => {
    // console.log("date", date);
    // const timeZoneOffset = date.getTimezoneOffset();
    // dates.setMinutes(date.getMinutes() + timeZoneOffset);
    // const newDate = date.toISOString().split("T")[0];
    // dispatch(getOddsSlips({ date: newDate }));
    // console.log("odds data", newDate);
    const formattedDate = formatDate(date);
    // Dispatch action to get data for the selected date
    dispatch(getOddsSlips({ date: formattedDate }));
  };
  useEffect(() => {
    if (selectedDate) {
      fetchData(selectedDate);
    }
  }, [selectedDate]);
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const itemsPerPage = 6;
  const [searchPage, setSearchPage] = useState(null);

  const currentItems = oddsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(oddsData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const GotoPagehandle = (e) => {
    const newPageNumber = parseInt(e.target.value);
    setSearchPage(newPageNumber);
  };
  const SearchHandle = () => {
    paginate(searchPage);
  };
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="md:flex justify-between mb-4 md:mb-10">
          <div className="mb-4 md:mb-0">
            <h1
              className={`${
                themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
              } font-Bebas text-2xl md:text-5xl tracking-normal mb-1`}
            >
              Coped slips
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
        <div className="md:flex justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <p
              className={`text-[14px] leading-[20px] font-medium ${
                themeMode === "light" ? "text-[#0d0f11]" : "text-white"
              } pb-2`}
            >
              Start and End Date
            </p>
            <div
              className={` ${
                themeMode === "light"
                  ? "date_picker_box_light"
                  : "date_picker_box"
              }`}
            >
              <Datepicker onSelectedDateChanged={handleDateChange} />
            </div>
          </div>
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

        {/* Cooked Slips list start here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <div className="text-center">
              <Spinner
                color="warning"
                aria-label="Warning spinner example"
                size="lg"
              />
            </div>
          ) : (
            <>
              {Array.isArray(currentItems) && currentItems.length > 0 ? (
                currentItems?.map((odds, index) => {
                  return (
                    <>
                      <div
                        className={`bg-[#191D23] ${
                          themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                        } rounded-lg p-5 shadow-xl`}
                      >
                        <div className="flex justify-between items-center mb-5">
                          <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                            #{odds?.match_id}
                          </p>
                          {odds?.risk_category === "Medium Risk" ? (
                            <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
                              {odds?.risk_category}
                            </span>
                          ) : odds?.risk_category === "Low Risk" ? (
                            <span className="text-[16px] leading-[30px] font-medium text-black bg-[#22E810] py-0 px-3 inline-block rounded-full">
                              {odds?.risk_category}
                            </span>
                          ) : (
                            <span className="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                              {odds?.risk_category}
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center mb-5">
                          <div>
                            <p
                              className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }  mb-1`}
                            >
                              {odds?.odds} Odds
                            </p>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-semibold ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            >
                              {odds?.matches_count} Matches
                            </span>
                          </div>
                          <div className="text-right">
                            <p
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                                themeMode === "light"
                                  ? "text-[#2aa9e1]"
                                  : "text-gray-600"
                              } mb-1`}
                            >
                              Strategy
                            </p>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            >
                              {odds?.strategy}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-5">
                          <div>
                            <p
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                                themeMode === "light"
                                  ? "text-[#2aa9e1]"
                                  : "text-gray-600"
                              } mb-1`}
                            >
                              {odds?.matches_count} Matches
                            </p>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              } block`}
                            >
                              {dateList[index]?.label}
                            </span>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            >
                              {timeList[index]?.value}
                            </span>
                          </div>
                          <div className="text-right">
                            <p
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                                themeMode === "light"
                                  ? "text-[#2aa9e1]"
                                  : "text-gray-600"
                              } mb-1`}
                            >
                              Ends On
                            </p>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              } block`}
                            >
                              {dateListEnd[index]?.label}
                            </span>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            >
                              {timeListEnd[index]?.value}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-0">
                          <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                            <CiUnlock className="text-base mr-0.5" />
                            Unlock Slip
                          </button>
                          <div className="text-right flex items-center">
                            <img
                              src={dollerIcon}
                              alt="dollerIcon"
                              className="mr-1.5"
                            />
                            <p
                              className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            >
                              4 Tokens
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <div className="text-center text-white mt-4">
                    <p
                      className={`text-[14px] leading-[20px] font-medium ${
                        themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                      } pb-2`}
                    >
                      No data Found
                    </p>
                  </div>
                </>
              )}
            </>
          )}

          {/* <div
            className={`bg-[#191D23] ${
              themeMode === "light" ? "bg-white" : "bg-[#191D23]"
            } rounded-lg p-5 shadow-xl`}
          >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }  mb-1`}
                >
                  3.03 Odds
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-semibold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Strategy
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  5 Matches
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Ends On
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  4 Tokens
                </p>
              </div>
            </div>
          </div> */}
          {/* <div
            className={`bg-[#191D23] ${
              themeMode === "light" ? "bg-white" : "bg-[#191D23]"
            } rounded-lg p-5 shadow-xl`}
          >
            <div className="flex justify-between items-center mb-5">
              <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                #45678
              </p>
              <span className="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                Hight Risk
              </span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }  mb-1`}
                >
                  3.03 Odds
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-semibold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Strategy
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  5 Matches
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Ends On
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  4 Tokens
                </p>
              </div>
            </div>
          </div> */}
          {/* <div
            className={`bg-[#191D23] ${
              themeMode === "light" ? "bg-white" : "bg-[#191D23]"
            } rounded-lg p-5 shadow-xl`}
          >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }  mb-1`}
                >
                  3.03 Odds
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-semibold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Strategy
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  5 Matches
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Ends On
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  4 Tokens
                </p>
              </div>
            </div>
          </div> */}
          {/* <div
            className={`bg-[#191D23] ${
              themeMode === "light" ? "bg-white" : "bg-[#191D23]"
            } rounded-lg p-5 shadow-xl`}
          >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }  mb-1`}
                >
                  3.03 Odds
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-semibold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Strategy
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  5 Matches
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Ends On
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  4 Tokens
                </p>
              </div>
            </div>
          </div> */}
          {/* <div
            className={`bg-[#191D23] ${
              themeMode === "light" ? "bg-white" : "bg-[#191D23]"
            } rounded-lg p-5 shadow-xl`}
          >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }  mb-1`}
                >
                  3.03 Odds
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-semibold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Strategy
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  5 Matches
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Ends On
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  4 Tokens
                </p>
              </div>
            </div>
          </div> */}
          {/* <div
            className={`bg-[#191D23] ${
              themeMode === "light" ? "bg-white" : "bg-[#191D23]"
            } rounded-lg p-5 shadow-xl`}
          >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }  mb-1`}
                >
                  3.03 Odds
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-semibold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  5 Matches
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Strategy
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  Double, Single
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  5 Matches
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  6:30 PM
                </span>
              </div>
              <div className="text-right">
                <p
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-gray-600"
                  } mb-1`}
                >
                  Ends On
                </p>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  } block`}
                >
                  Feb 18, 2024
                </span>
                <span
                  className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
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
                <p
                  className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                    themeMode === "light" ? "text-[#191D23]" : "text-white"
                  }`}
                >
                  4 Tokens
                </p>
              </div>
            </div>
          </div> */}
        </div>
        {/* Cooked Slips list start here */}
        {/* Pagination section start here */}
        {/* <div className="md:flex justify-between items-center mt-8">
          <div className="mb-2 md:mb-0 text-center">
            <p
              className={`${
                themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
              } text-xs`}
            >
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, oddsData.length)} of{" "}
              {oddsData.length} entries
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
        {!error && (
          <div className="md:flex justify-between mt-8">
            <div className="mb-2 md:mb-0 text-center">
              <p
                className={`${
                  themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
                } text-xs`}
              >
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, oddsData.length)} of{" "}
                {oddsData.length} entries
              </p>
            </div>
            <div className="min-w-[450px]">
              <div className="md:flex justify-between items-center">
                <div className="mr-[30px] mb-2 md:mb-0 flex justify-center items-center">
                  <ul className="flex">
                    <li>
                      <Link
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                        onClick={() => paginate(1)}
                      >
                        <BsChevronDoubleLeft />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                        onClick={() =>
                          handlePageChange(Math.max(currentPage - 1, 1))
                        }
                      >
                        <BsChevronLeft />
                      </Link>
                    </li>
                    {pageNumbers.slice(0, 5).map((pageNumber) => (
                      <li key={pageNumber}>
                        <Link
                          className={`mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white ${
                            currentPage === pageNumber ? "bg-[#0868f4]" : ""
                          }`}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </Link>
                      </li>
                    ))}

                    <li>
                      <Link
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        <BsChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                        onClick={() => setCurrentPage(totalPages)}
                      >
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
        )}
        {/* Pagination section ends here */}
      </div>
    </div>
  );
};

export default CookedSlips;
