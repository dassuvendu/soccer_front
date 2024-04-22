import { Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RequestModal } from "./RequestModal";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import {
  getFixtures,
  getleagueByid,
} from "../../../reducers/PredictionsSlice";
import { logoIcon } from "../../../assets/images/images";

const RequestPredictionListId = ({ errorMessage,rid,season,sendData }) => {
    // console.log(rid);
    // console.log("Td2",sendData);
    const { seasons } = useSelector((state) => state.prediction);
    const seasonCopy=[...seasons]
     const sortedSeasons =Array.isArray(seasonCopy) && seasonCopy?.sort((a, b) => b.year - a.year);
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { fixtures } = useSelector((state) => state.prediction);

  const [openViewDetailsModal, setOpenViewDetailsModal] = useState(false);
  
  const [homeId, setHomeId] = useState(null);
  const [awayId, setAwayId] = useState(null);
  const [timeStamp, setTimeStamp] = useState(null)
  const [fixturesId, setFixturesId] = useState(null)

  const viewDetailsModalHandler = (id) => {
    //  console.log("det",id);
    setHomeId(id.split(":")[1]);
    setAwayId(id.split(":")[2]);
    setTimeStamp(id.split(":")[3])
    const fixtureId = id.split(":")[0];
    setFixturesId(fixtureId)
    setOpenViewDetailsModal(true);
  };

  const handleModalClose = () => {
    setOpenViewDetailsModal(false);
  };

  const [loadingData, setLoadingData] = useState(true);
  const [hide, setHide] = useState(false);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    if (errorMessage === 400) {
      setError(true);
    } else {
      setError(false);
    }
  }, [errorMessage]);



const today = new Date();
today.setFullYear(today.getFullYear());
const todayFormatted = today.toISOString().split("T")[0];
console.log("Td",todayFormatted);
const Year = todayFormatted.toString().split('-')[0]


  const dispatch = useDispatch();



  useEffect(() => {
    // if (sendDate ) {
    //   dispatch(getFixtures({date : sendDate,league: rid, season:Year})).then((res) => {
    //     if (res?.payload?.status === true) {
    //       setLoadingData(false);
    //       setHide(true);
    //     } else{
    //       setLoadingData(false);
    //       setHide(false);
    //     }
    //   });
    // }else if (season) {
    //   dispatch(getFixtures({date : sendDate,league: rid, season:season})).then((res) => {
    //     if (res?.payload?.status === true) {
    //       setLoadingData(false);
    //       setHide(true);
    //     } else{
    //       setLoadingData(false);
    //       setHide(false);
    //     }
    //   });
    // } 
    dispatch(getleagueByid({league : rid}))
      
    if (sendData) {
      const leaugeId = parseInt(rid)
      dispatch(getFixtures({date : sendData,league: leaugeId, season:sortedSeasons[0]?.year})).then((res) => {
        if (res?.payload?.status === true) {
          setLoadingData(false);
         
          setError(false);
        }
        else {
          setLoadingData(false);
        
          setError(true);
        }
      });
    }else
     {const leaugeId = parseInt(rid)
      dispatch(getFixtures({date : todayFormatted,league: leaugeId, season:sortedSeasons[0]?.year})).then((res) => {
        if (res?.payload?.status === true) {
          setLoadingData(false);
          
          setError(false);
        }
        else {
          setLoadingData(false);
          
          setError(true);
        }
      });
    }
    
  }, [dispatch,rid,Year,todayFormatted,season,sendData]);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
     // Convert Unix timestamp to milliseconds
    const options = {
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: 'UTC'
    };
    
    return date.toLocaleDateString("en-US", options);
    
  };
 
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: 'UTC'
    };
    return date.toLocaleDateString("en-US", options);
  };


  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const itemsPerPage = 9;
  const [searchPage, setSearchPage] = useState(null);

  const currentItems = fixtures?.data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log("fixtures",currentItems);
  const isDataFound = currentItems && currentItems.length > 0;

  const totalPages = fixtures?.data
    ? Math.ceil(fixtures.data.length / itemsPerPage)
    : isDataFound;

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

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  useEffect(() =>{
    if (Array.isArray(currentItems)&&currentItems.length > 8) {
      setHide(true);
    }else if (Array.isArray(currentItems)&&currentItems.length < 8) {
      setHide(false);
    }else{
      setHide(false);
    }
  },[currentItems])
  return (
    <div>
      {!loadingData ? (
        <div>
          {error ? (
            <div className="w-full">
              <div
                className={`${
                  themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
                } text-2xl flex justify-center items-center`}
              >
                No Data Found
              </div>
            </div>
          ) : (
            <>
              {currentItems && currentItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentItems.map((dat) => (
                    <div
                      key={dat.id}
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } rounded-2xl shadow-xl`}
                    >
                      <div
                        className={`flex justify-between items-center ${
                          themeMode === "light"
                            ? "bg-[#2aa9e1]"
                            : "bg-[#2E3B4D]"
                        } px-5 py-3 rounded-t-2xl h-16`}
                      >
                        <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                          {dat?.league?.name}
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                          {formatDate(dat?.fixture?.timestamp)}
                          </p>
                          <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                          {formatTime(dat?.fixture?.timestamp)}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`pt-6 pb-4 px-3 border-2  ${
                          themeMode === "light"
                            ? "border-[#2aa9e1]"
                            : "border-[#2E3B4D]"
                        } rounded-b-2xl`}
                      >
                        <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                          <div className="text-center">
                            <img
                              src={dat?.teams?.home?.logo}
                              alt="DeportivoPastoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p
                              className={`font-Syne text-[14px] leading-[20px] font-bold ${
                                themeMode === "light"
                                  ? "text-black"
                                  : "text-white"
                              }`}
                            >
                              {dat?.teams?.home?.name}
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className="mb-4 text-center">
                              <p
                                className={`${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                              >
                                Venue
                              </p>
                              <span
                                className={`${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                } font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-0`}
                              >
                                <b>
                                  {dat?.fixture?.venue?.name?.length > 30
                                    ? dat?.fixture?.venue?.name.substring(
                                        0,
                                        30
                                      ) + "..."
                                    : dat?.fixture?.venue?.name.slice(0,15)}
                                </b>
                              </span>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              src={dat?.teams?.away?.logo}
                              alt="EnvigadoIcon"
                              className="inline-block mb-2"
                              width={58}
                              height={58}
                            />
                            <p
                              className={`font-Syne text-[14px] leading-[20px] font-bold ${
                                themeMode === "light"
                                  ? "text-black"
                                  : "text-white"
                              }`}
                            >
                              {dat?.teams?.away?.name?.slice(0,15)}
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
                            className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent"
                            onClick={() =>
                              viewDetailsModalHandler(
                                `${dat?.fixture?.id}:${dat?.teams?.home?.id}:${dat?.teams?.away?.id}:${dat?.fixture?.timestamp}`
                              )
                            }
                          >
                            View Prediction{" "}
                            <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className=" w-full">
                  <div
                    className={`${
                      themeMode === "light"
                        ? "text-[#0d0f11]"
                        : "text-[#989ca0]"
                    } text-2xl flex justify-center items-center`}
                  >
                    No More Data
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
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
      )}

      {/* pagination start */}
      {hide && !error && (
        <div className="md:flex justify-between mt-8">
          <div className="mb-2 md:mb-0 text-center">
            {isDataFound ? (
              <p
                className={`${
                  themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
                } text-xs`}
              >
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, fixtures?.data?.length)}{" "}
                of {fixtures?.data?.length} entries
              </p>
            ) : (
              <p
                className={`${
                  themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
                } text-xs`}
              >
                Showing {(currentPage - 0) * itemsPerPage + 0} to{" "}
                {Math.min(currentPage * itemsPerPage, fixtures?.data?.length)}{" "}
                of {fixtures?.data?.length} entries
              </p>
            )}
          </div>
          <div className="md:min-w-[450px]">
            <div className="md:flex justify-between items-center">
              <div className="md:mr-[30px] mb-2 md:mb-0 flex justify-center items-center">
                <ul className="flex">
                  <li>
                    <Link
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] 
                      flex justify-center items-center rounded-full text-[12px] text-white"
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
                        className={`mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0863ea] border border-white hover:border-[#0053CD] 
                        flex justify-center items-center rounded-full text-[12px] text-white focus:bg-[#0053CD] 
                        ${
                          currentPage === pageNumber ? "bg-[#0053CD]" : "black"
                        }`}
                        onClick={() => handlePageChange(pageNumber)}
                      >
                        {pageNumber}
                      </Link>
                    </li>
                  ))}
                  <li>
                    {isDataFound && (
                      <Button
                        className="mr-1 w-[32px] h-[32px] bg-black 
                        hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center 
                        items-center rounded-full text-[12px] text-white"
                        color="#0053CD"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={!hide}
                      >
                        <BsChevronRight />
                      </Button>
                    )}
                  </li>

                  <li>
                    <Button
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                      onClick={() => setCurrentPage(totalPages)}
                      disabled={!hide}
                      color="#0053CD"
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
      )}
      {/* modal section start here */}
      <RequestModal
        openViewDetailsModal={openViewDetailsModal}
        fixturesId={fixturesId}
        timeStamp={timeStamp}
        onClose={handleModalClose}
        homeId={homeId}
        awayId={awayId}
      />
      {/* modal section ends here */}
    </div>
  );
};

export default RequestPredictionListId;
