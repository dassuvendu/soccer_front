import { Spinner, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RequestModal } from "./RequestModal";
import { useDateList, useTimeList } from "../../../hooks/useDateTimeHooks";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { getFixtures } from "../../../reducers/PredictionsSlice";

const RequestPredictionList = ({ errorMessage }) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { fixtures } = useSelector((state) => state.prediction);
  const [openViewDetailsModal, setOpenViewDetailsModal] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [teamId, setTeamId] = useState('');
  const [hometeamId, setHomeTeamId] = useState(null);
  const [awayteamId, setAwayTeamId] = useState(null);
 


  const viewDetailsModalHandler = (id) => {
    setTeamId(id);
    const concatenatedString = teamId
    const parts = concatenatedString.split(":");
    const homeID = parts[0];
    const awayID = parts[1];
    setHomeTeamId(homeID)
    setAwayTeamId(awayID)
    setOpenViewDetailsModal(true);
  };
  const handleModalClose = () => {
    setOpenViewDetailsModal(false);
  };
  //date formate
  const newdate = new Date();
  const changeDateformate = newdate.toISOString().split("T")[0];

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFixtures({ date: changeDateformate })).then(() => {
      setLoadingData(false);
      setHide(true);
    });
  }, [dispatch]);

  const [matchDateList] = useDateList({ date: changeDateformate });

  const [matchTimeList] = useTimeList({ date: changeDateformate });

  useEffect(() => {
    setDate(matchDateList);
    setTime(matchTimeList);
  }, [fixtures]);

  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const itemsPerPage = 9;
  const [searchPage, setSearchPage] = useState(null);

  const currentItems = fixtures.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(fixtures.length / itemsPerPage);

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
    <div>
      {!loadingData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {error ? (
            <div>No Data Found</div>
          ) : (
            <>
              {currentItems.map((dat) => (
                <div
                  key={dat.id}
                  className={`${
                    themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } rounded-2xl shadow-xl`}
                >
                  <div
                    className={`flex justify-between items-center ${
                      themeMode === "light" ? "bg-[#2aa9e1]" : "bg-[#2E3B4D]"
                    } px-5 py-3 rounded-t-2xl h-16`}
                  >
                    <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                      {dat?.league?.name}
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                        {date?.label}
                      </p>
                      <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                        {time?.label}
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
                            themeMode === "light" ? "text-black" : "text-white"
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
                              {dat?.fixture?.venue?.name.length > 30
                                ? dat?.fixture?.venue?.name.substring(0, 30) +
                                  "..."
                                : dat?.fixture?.venue?.name}
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
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          {dat?.teams?.away?.name}
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
                          viewDetailsModalHandler(`${dat?.teams?.home?.id}:${dat?.teams?.away?.id}`)
                        }
                      >
                        View Prediction{" "}
                        <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      ) : (
        <div className="text-center">
          <Spinner
            color="warning"
            aria-label="Warning spinner example"
            size="lg"
          />
          <span className="pl-3">Loading...</span>
        </div>
      )}

      {/* pagination start */}
      {hide && !error && (
        <div className="md:flex justify-between mt-8">
          <div className="mb-2 md:mb-0 text-center">
            <p
              className={`${
                themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
              } text-xs`}
            >
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, fixtures.length)} of{" "}
              {fixtures.length} entries
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
                          currentPage === pageNumber ? "bg-[#015de4]" : ""
                        }`}
                        onClick={() => handlePageChange()}
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
      {/* modal section start here */}
      <RequestModal
        openViewDetailsModal={openViewDetailsModal}
        onClose={handleModalClose}
        homeTeamId={hometeamId}
        awayteamId={awayteamId}
      />
      {/* modal section ends here */}
    </div>
  );
};

export default RequestPredictionList;
