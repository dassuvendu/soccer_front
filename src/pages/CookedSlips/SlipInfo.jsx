import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSlipInfo } from "../../reducers/CookedSlipSlice";
import { Table, Tabs } from "flowbite-react";
import { MdMoreHoriz } from "react-icons/md";
import { Tab, TabList, TabPanel } from "react-tabs";

const SlipInfo = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { slipInfo, isLoading } = useSelector((state) => state.cookedSlips);
  const location = useLocation();
  const { id } = location.state;
  console.log("location", location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSlipInfo({ id: id }));
  }, []);
  console.log("slip Info: ", slipInfo?.data);

  //   const matchStartDate = (dateString) => {
  //     const options = {
  //       weekday: "short",
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //       timeZone: "UTC",
  //     };
  //     return new Date(dateString).toLocaleDateString(undefined, options);
  //   };
  //   const matchStartTime = (timestamp) => {
  //     const date = new Date(timestamp);
  //     const options = {
  //       hour: "numeric",
  //       minute: "numeric",
  //       hour12: true,
  //       timeZone: "UTC",
  //     };
  //     return date.toLocaleTimeString(undefined, options);
  //   };
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
              {slipInfo?.data?.count} Matches
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
              {slipInfo?.data?.odds}
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
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
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
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
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
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
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
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              {formatEndDate(slipInfo?.data?.endsOn)}{" "}
              {formatEndTime(slipInfo?.data?.endsOn)}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default SlipInfo;
