import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSlipInfo } from "../../reducers/CookedSlipSlice";
import { Table } from "flowbite-react";
import { MdMoreHoriz } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const SlipInfo = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { slipInfo, isLoading } = useSelector((state) => state.cookedSlips);
  const location = useLocation();
  let id;
  if (location?.state?.id) {
    id = location?.state?.id;
  }
  console.log("location", location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSlipInfo({ id: id }));
  }, []);
  console.log("slip Info: ", slipInfo?.data);

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

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2
          className={`font-Montserrat text-[23px] leading-[25px] font-bold mb-1 ${themeMode === "light" ? "text-[#191D23]" : "text-white"
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
              className={`font-Montserrat text-[20px] leading-[24px] font-semibold mb-1 ${themeMode === "light" ? "text-[#191D23]" : "text-white"
                }`}
            >
              {slipInfo?.data?.count} Matches
            </h2>
          </div>
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Odds
            </p>
            <h2
              className={`font-Montserrat text-[20px] leading-[24px] font-semibold mb-1 ${themeMode === "light" ? "text-[#191D23]" : "text-white"
                }`}
            >
              {slipInfo?.data?.odds}
            </h2>
          </div>
          <div>
            <p
              className={`font-Montserrat text-[14px] leading-[18px] font-medium mb-1 ${themeMode === "light" ? "text-[#191D23]" : "text-white"
                }`}
            >
              Risk Level
            </p>
            {slipInfo?.data?.risk === "medium" ? (
              <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
                {slipInfo?.data?.risk} risk
              </span>
            ) : slipInfo?.data?.risk === "low" ? (
              <span className="text-[16px] leading-[30px] font-medium text-black bg-[#22E810] py-0 px-3 inline-block rounded-full">
                {slipInfo?.data?.risk} risk
              </span>
            ) : (
              <span className="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                {slipInfo?.data?.risk} risk
              </span>
            )}
          </div>
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Strategy
            </p>
            <h3
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${themeMode === "light" ? "text-[#191D23]" : "text-white"
                }`}
            >
              {slipInfo?.data?.strategy}
            </h3>
          </div>
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Max Stake
            </p>
            <h3
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${themeMode === "light" ? "text-[#191D23]" : "text-white"
                }`}
            >
              {slipInfo?.data?.maxStake}
            </h3>
          </div>
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Starts On
            </p>
            <h3
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${themeMode === "light" ? "text-[#191D23]" : "text-white"
                }`}
            >
              {formatStartDate(slipInfo?.data?.startsOn)}{" "}
              {formatStartTime(slipInfo?.data?.startsOn)}
            </h3>
          </div>
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Ends On
            </p>
            <h3
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${themeMode === "light" ? "text-[#191D23]" : "text-white"
                }`}
            >
              {formatEndDate(slipInfo?.data?.endsOn)}{" "}
              {formatEndTime(slipInfo?.data?.endsOn)}
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
                  className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                    } text-[16px]  ${themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
                    } font-medium capitalize w-[34%]`}
                >
                  Match
                </Table.HeadCell>
                <Table.HeadCell
                  className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                    } text-[16px] ${themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
                    } font-medium capitalize w-[17%]`}
                >
                  Advice
                </Table.HeadCell>

                <Table.HeadCell
                  className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                    } text-[16px] ${themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
                    } font-medium capitalize w-[17%]`}
                ></Table.HeadCell>
                <Table.HeadCell
                  className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                    } text-[16px] ${themeMode === "light" ? "text-[#787a7d]" : "text-[#96A5B8]"
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
                    {slipInfo?.data?.items?.map((predict) => {
                      return (
                        <>
                          <Table.Row
                            className={`${themeMode === "light"
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
                                      className={`font-Montserrat font-bold text-[13px] leading-[13px] ${themeMode === "light"
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
                            <Table.Cell className="w-[17%]">
                              <span className=" text-black font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                                {predict?.advice}
                              </span>
                            </Table.Cell>
                            <Table.Cell className="w-[5%]">
                              <span
                                className={`text-base font-bold ${themeMode === "light"
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
                            </Table.Cell>

                            <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                              <MdMoreHoriz
                              // onClick={() =>
                              //   viewDetailsModalHandler(
                              //     predict?.fixture_id,
                              //     predict?.teams?.home?.id,
                              //     predict?.teams?.away?.id,
                              //     predict?.fixture_date
                              //   )
                              // }
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
      </Tabs>
    </>
  );
};
export default SlipInfo;
