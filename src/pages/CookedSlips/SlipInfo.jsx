import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSlipInfo, getslipDetails } from "../../reducers/CookedSlipSlice";
import { Table } from "flowbite-react";
import { MdMoreHoriz } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { logoIcon } from "../../assets/images/images";
import { PredictionRequestModal } from "../MyPrediction/PredictionCompo/PredictionRequestModal";

const SlipInfo = () => {
  const [fixturesId, setFixturesId] = useState();
  const [homeId, setHomeId] = useState();
  const [awayId, setAwayId] = useState();
  const [timeStamp, setTimeStamp] = useState(null);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { isLoading, singleSlip } = useSelector((state) => state.cookedSlips);
  const location = useLocation();
  let id;
  if (location?.state?.id) {
    id = location?.state?.id;
  }
  console.log("location", location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getslipDetails({ id: id }));
  }, [dispatch]);
  console.log("slip Info:", singleSlip?.data);

  const matchStartDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const matchStartTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };
    return date.toLocaleTimeString(undefined, options);
  };
  const formatStartDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formatStartTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };
    return date.toLocaleTimeString(undefined, options);
  };
  const formatEndDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formatEndTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };
    return date.toLocaleTimeString(undefined, options);
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
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2
          className={`font-Montserrat text-[23px] leading-[25px] font-bold mb-1 ${
            themeMode === "light" ? "text-[#191D23]" : "text-white"
          }`}
        >
          Slip #{id}
        </h2>
      </div>
      <div className="mb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Matches
            </p>
            <h2
              className={`font-Montserrat text-[20px] leading-[24px] font-semibold mb-1 ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              {singleSlip?.data?.count} Matches
            </h2>
          </div>
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Odds
            </p>
            <h2
              className={`font-Montserrat text-[20px] leading-[24px] font-semibold mb-1 ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              {singleSlip?.data?.odds}
            </h2>
          </div>
          <div>
            <p
              className={`font-Montserrat text-[14px] leading-[18px] font-medium mb-1 ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              Risk Level
            </p>
            {singleSlip?.data?.risk === "medium" ? (
              <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
                {singleSlip?.data?.risk} risk
              </span>
            ) : singleSlip?.data?.risk === "low" ? (
              <span className="text-[16px] leading-[30px] font-medium text-black bg-[#22E810] py-0 px-3 inline-block rounded-full">
                {singleSlip?.data?.risk} risk
              </span>
            ) : (
              <span className="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                {singleSlip?.data?.risk} risk
              </span>
            )}
          </div>
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Strategy
            </p>
            <h3
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              {singleSlip?.data?.strategy}
            </h3>
          </div>
          {/* <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Max Stake
            </p>
            <h3
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              {slipInfo?.data?.maxStake}
            </h3>
          </div> */}
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Starts On
            </p>
            <h3
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              {formatStartDate(singleSlip?.data?.startsOn)}{" "}
              {formatStartTime(singleSlip?.data?.startsOn)}
            </h3>
          </div>
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Ends On
            </p>
            <h3
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              {formatEndDate(singleSlip?.data?.endsOn)}{" "}
              {formatEndTime(singleSlip?.data?.endsOn)}
            </h3>
          </div>
        </div>
      </div>
      <Tabs className="tab_section">
        <div className="md:flex justify-between items-center">
          <TabList>
            <Tab>Match And Strategy</Tab>
          </TabList>
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
                    themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
                  } font-medium capitalize w-[34%]`}
                >
                  Match
                </Table.HeadCell>
                {/* <Table.HeadCell
                  className={`${
                    themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } text-[16px] ${
                    themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
                  } font-medium capitalize w-[17%]`}
                >
                  Advice
                </Table.HeadCell> */}

                {/* <Table.HeadCell
                  className={`${
                    themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } text-[16px] ${
                    themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
                  } font-medium capitalize w-[17%]`}
                ></Table.HeadCell> */}
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
                          <img
                            src={logoIcon}
                            alt="loading.."
                            className="loader"
                          />
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <>
                    {singleSlip?.data?.items?.map((predict) => {
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
                                    src={BayernMunichIcon}
                                    alt="BayernMunichIcon"
                                    className="mr-2"
                                  /> */}
                                  <div>
                                    <p
                                      className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                        themeMode === "light"
                                          ? "text-black"
                                          : "text-white"
                                      }`}
                                    >
                                      {predict?.homeTeamName} VS{" "}
                                      {predict?.awayTeamName}
                                    </p>
                                    <span className="text-[#8EA2AB] text-[9px]">
                                      {predict?.leagueName}|
                                      {matchStartDate(predict?.startsOn)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Table.Cell>
                            {/* <Table.Cell className="w-[17%]">
                              <span className=" text-black font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                                {predict?.advice}
                              </span>
                            </Table.Cell> */}
                            {/* <Table.Cell className="w-[5%]">
                              <span
                                className={`text-base font-bold ${
                                  themeMode === "light"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                <span>
                                  {predict?.passed === false ? (
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
                                  ) : predict?.passed === true ? (
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
                            </Table.Cell> */}

                            <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                              <MdMoreHoriz
                                onClick={() =>
                                  viewDetailsModalHandler(
                                    predict?.fixtureId,
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
          <PredictionRequestModal
            openDetailsModal={openDetailsModal}
            onClose={handleModalClose}
            fixturesId={fixturesId}
            timeStamp={timeStamp}
            homeId={homeId}
            awayId={awayId}
          />
        </TabPanel>
      </Tabs>
    </>
  );
};
export default SlipInfo;
