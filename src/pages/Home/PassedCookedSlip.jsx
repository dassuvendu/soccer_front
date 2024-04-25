import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { getOddsSlips } from "../../reducers/CookedSlipSlice";
import { logoIcon } from "../../assets/images/images";

export const PassedCookedSlip = () => {
  const [filterData, setFilterData] = useState([]);
  const { oddsData, isLoading } = useSelector((state) => state.cookedSlips);
  const dispatch = useDispatch();
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const utcDate = today.toISOString().split("T")[0];
  console.log("utcDate: ", utcDate);
  useEffect(() => {
    dispatch(getOddsSlips({ date: utcDate }));
  }, []);
  console.log("HomePageSlip: ", oddsData);
  const filtered = oddsData?.filter((item) => item.passed === true);
  // setFilterData(filtered);
  console.log("filterData: ", filtered);

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
    <div className="pt-4">
      {isLoading === true ? (
        <div className="text-center">
          <div role="status">
            <img src={logoIcon} alt="loading.." className="loader" />

            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(filtered) && filtered?.length > 0 ? (
            filtered?.map((odds) => {
              return (
                <>
                  <div className="bg-white rounded-lg p-5 shadow-xl">
                    <div className="flex justify-between items-center mb-5">
                      <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                        #{odds?.id}
                      </p>
                      {/* <span className="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                      High Risk
                    </span> */}
                      {odds?.risk === "medium" ? (
                        <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
                          {odds?.risk} risk
                        </span>
                      ) : odds?.risk === "low" ? (
                        <span className="text-[16px] leading-[30px] font-medium text-black bg-[#22E810] py-0 px-3 inline-block rounded-full">
                          {odds?.risk} risk
                        </span>
                      ) : (
                        <span className="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                          {odds?.risk} risk
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                          {odds?.odds} Odds
                        </p>
                        <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                          {odds?.count} Matches
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                          Strategy
                        </p>
                        <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                          {odds?.strategy}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                          {odds?.count} Matches
                        </p>
                        <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                          {formatStartDate(odds?.startsOn)}
                        </span>
                        <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                          {formatStartTime(odds?.startsOn)}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                          Ends On
                        </p>
                        <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                          {formatEndDate(odds?.endsOn)}
                        </span>
                        <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                          {formatEndTime(odds?.endsOn)}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-0">
                      <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
                        <FaEye className="text-base mr-1" />
                        View Slip Details
                      </button>
                      <div className="text-right flex items-center">
                        {odds?.passed === true ? (
                          <>
                            <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                              Passed
                            </p>
                            <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <div className="col-span-full flex justify-center items-center">
                <div className={"text-2xl flex justify-center items-center"}>
                  No Data Found
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
