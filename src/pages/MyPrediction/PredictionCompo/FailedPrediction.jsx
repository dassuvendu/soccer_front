import { Button, Table, TextInput } from "flowbite-react";
import {
//   BarcelonaIcon,
//   BayernMunichIcon,
  logoIcon,
} from "../../../assets/images/images";
import { MdMoreHoriz } from "react-icons/md";
import { PredictionRequestModal } from "./PredictionRequestModal";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPredictions } from "../../../reducers/MyPredictionSlice";
import { logout } from "../../../reducers/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUid } from "../../../reducers/uuidSlice";

export const FailedPrediction = ({ themeMode, token }) => {
  const { fetchedPredictions, isLoading } = useSelector(
    (state) => state.myPredictions
  );
  const { valid } = useSelector((state) => state.uuid);
  const [fixturesId, setFixturesId] = useState();
  const [homeId, setHomeId] = useState();
  const [awayId, setAwayId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [hide, setHide] = useState(true);
  const [itemsPerPage] = useState(10);
  const [searchPage, setSearchPage] = useState(null);
  const [timeStamp, setTimeStamp] = useState(null);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [error, setError] = useState(null);
  const [predic,setPredic] = useState()
  const dispatch = useDispatch();

  const uuid = localStorage.getItem('uuid')
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getUid({}))
        if (uuid !== valid?.data) {
            dispatch(logout())
            navigate('/') 
        }
    },5000);
    return () => clearTimeout(timer);
  }, [valid, uuid, dispatch]);

  useEffect(() => {
    if (token) {
      console.log("total data: ", fetchedPredictions?.total_data);
      setTotalPages(Math.ceil(fetchedPredictions?.total_data / itemsPerPage));
    }
  }, [fetchedPredictions, itemsPerPage]);

  useEffect(() => {
   const failedPredic = fetchedPredictions?.data?.filter((data) => data?.fixture_status === 'failed')
   console.log("faild",failedPredic);
   setPredic(failedPredic)
  },[fetchedPredictions])
  useEffect(() => {
    if (token && currentPage) {
      dispatch(getUid({}))
      dispatch(
        getPredictions({
          page_number: currentPage,
          items_per_page: itemsPerPage,
        })
      ).then((res) => {
        console.log(res);
        if (
          res?.payload?.message ===
          "Something went wrong. Please try again later"
        ) {
          setError(res?.payload?.message);
        }
      });
    }
  }, [currentPage, itemsPerPage, token, dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(
      getPredictions({
        page_number: page,
        items_per_page: itemsPerPage,
      })
    ).then((res) => {
      console.log(res);
      if (
        res?.payload?.message === "Something went wrong. Please try again later"
      ) {
        setError(res?.payload?.message);
      }
    });
  };

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
        <li key={i} className="page">
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

  useEffect(() => {
    if (
        fetchedPredictions?.total_data > 10
      ) {
        setHide(true);
      } else if (
          fetchedPredictions?.total_data < 10
      ) {
        setHide(false);
      } else {
      setHide(false);
    }
  }, [predic]);

  return (
    <div>
      <div className="overflow-x-auto bg-transparent">
        <Table hoverable>
          <Table.Head className="border-b border-[#2b2f35]">
            <Table.HeadCell
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } text-[16px]  ${
                themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
              } font-medium capitalize w-[34%]`}
            >
              Match
            </Table.HeadCell>
            <Table.HeadCell
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } text-[16px] ${
                themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
              } font-medium capitalize w-[17%]`}
            >
              Score
            </Table.HeadCell>
            <Table.HeadCell
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } text-[16px] ${
                themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
              } font-medium capitalize w-[17%]`}
            >
              Over Under
            </Table.HeadCell>
            <Table.HeadCell
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } text-[16px] ${
                themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
              } font-medium capitalize w-[17%]`}
            >
              Accuracy
            </Table.HeadCell>
            <Table.HeadCell
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } text-[16px] ${
                themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
              } font-medium capitalize w-[15%]`}
            >
              More
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {isLoading ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  <div className="text-center">
                    <div role="status">
                      <img src={logoIcon} alt="loading.." className="loader" />
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </td>
              </tr>
            ) : (
                <>
                {Array.isArray(predic) &&
                predic?.length > 0 && !error ? (
                    predic?.map((predict) => {
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
                                  <span className="text-[#8EA2AB] text-[9px]"></span>
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
                                {predict?.fixture_status ===
                                "failed" && (
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
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M6 18 17.94 6M18 18 6.06 6"
                                        />
                                      </svg>
                                    </span>
                                  </>
                                ) 
                            }
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
                  })
                ) : (
                  <>
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        <div className="text-center">
                          <div>
                            {error ?
                            <p>
                           {error}
                          </p>
                          :
                            <p>
                              You have not made any predictions to show
                            </p>
                            }
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                )}
              </>
            )}
            {/* <Table.Row
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
                    </Table.Row> */}
          </Table.Body>
        </Table>
      </div>
      {hide && (
        <div className="md:flex justify-between items-center mt-8">
          <div className="mb-2 md:mb-0 text-center">
            <p
              className={`${
                themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
              } text-xs`}
            >
              Showing {(currentPage - 1) * itemsPerPage + 1 || 0} to{" "}
              {currentPage * itemsPerPage || 0} of{" "}
              {predic?.total_data || 0} entries
            </p>
          </div>
          <div className="min-w-[450px]">
            <div className="md:flex justify-between items-center">
              <div className="mr-[30px] mb-2 md:mb-0 flex justify-center items-center">
                <ul className="flex">
                  <li className="page">
                    <Button
                      onClick={() => handlePageChange(1)}
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                      disabled={currentPage === 1}
                    >
                      <BsChevronDoubleLeft />
                    </Button>
                  </li>
                  <li className="page">
                    <Button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                    >
                      <BsChevronLeft />
                    </Button>
                  </li>

                  {renderPageNumbers()}

                  <li className="page">
                    <Button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                    >
                      <BsChevronRight />
                    </Button>
                  </li>
                  <li className="page">
                    <Button
                      onClick={() => handlePageChange(totalPages)}
                      className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                      disabled={currentPage === totalPages}
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
