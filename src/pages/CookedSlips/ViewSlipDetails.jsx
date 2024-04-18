import { CiUnlock } from "react-icons/ci";
import { dollerIcon } from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getslipDetails } from "../../reducers/CookedSlipSlice";

const ViewSlipDetails = ({ id }) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { singleSlip } = useSelector((state) => state.cookedSlips);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getslipDetails({ id: id }));
  }, []);
  console.log("slip details", singleSlip?.data);
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
          className={`font-Montserrat text-[23px] leading-[25px] font-bold mb-1 ${
            themeMode === "light" ? "text-[#191D23]" : "text-white"
          }`}
        >
          Cooked Slip #{id}
        </h2>
        <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
          <CiUnlock className="text-base mr-0.5" />
          Unlock Slip
        </button>
      </div>
      <div className="mb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Odds & Matches
            </p>
            <h2
              className={`font-Montserrat text-[20px] leading-[24px] font-semibold mb-1 ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              {singleSlip?.data?.odds}
            </h2>
            <h3
              className={`font-Montserrat text-[16px] leading-[18px] font-medium block ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              {singleSlip?.data?.count} Matches
            </h3>
          </div>
          <div>
            <p
              className={`font-Montserrat text-[14px] leading-[18px] font-medium mb-1 ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              Risk Level
            </p>
            {/* <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
              Medium Risk
            </span> */}
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
          <div>
            {/* <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-1">
              Tokens Required
            </p> */}
            {/* <div className="text-right flex items-center">
              <img src={dollerIcon} alt="dollerIcon" className="mr-1.5" />
              <p
                className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                  themeMode === "light" ? "text-[#191D23]" : "text-white"
                }`}
              >
                {singleSlip?.data?.cost} Tokens
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="font-Montserrat text-[14px] leading-[18px] font-medium text-[#2aa9e1] mb-4">
          Matches
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {singleSlip?.data?.items?.map((matches) => {
            return (
              <>
                <div className="mb-2">
                  <h3
                    className={`font-Montserrat text-[16px] leading-[18px] font-medium mb-1 ${
                      themeMode === "light" ? "text-[#191D23]" : "text-white"
                    }`}
                  >
                    {matches?.homeTeamName} vrs {matches?.awayTeamName}
                  </h3>
                  <span
                    className={`font-Montserrat text-[12px] leading-[18px] font-medium block ${
                      themeMode === "light" ? "text-[#191D23]" : "text-white"
                    }`}
                  >
                    {matches?.leagueName} | {matchStartDate(matches?.startsOn)}{" "}
                    {matchStartTime(matches?.startsOn)}
                  </span>
                </div>
              </>
            );
          })}

          {/* <div className="mb-2">
            <h3 className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23] mb-1">
              Al Nasr vrs Shabab Al Ahli Dubai
            </h3>
            <span className="font-Montserrat text-[12px] leading-[18px] font-medium text-[#191D23] block">
              Pro League | Wednesday, April 17, 2024 10:00 PM
            </span>
          </div> */}
          {/* <div className="mb-2">
            <h3 className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23] mb-1">
              FC Porto vrs Guimaraes
            </h3>
            <span className="font-Montserrat text-[12px] leading-[18px] font-medium text-[#191D23] block">
              Taça de Portugal | Thursday, April 18, 2024 12:45 AM
            </span>
          </div> */}
          {/* <div className="mb-2">
            <h3 className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23] mb-1">
              Palestino vrs Huachipato
            </h3>
            <span className="font-Montserrat text-[12px] leading-[18px] font-medium text-[#191D23] block">
              Primera División | Thursday, April 18, 2024 1:00 AM
            </span>
          </div> */}
          {/* <div className="mb-2">
            <h3 className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23] mb-1">
              Al Nasr vrs Shabab Al Ahli Dubai
            </h3>
            <span className="font-Montserrat text-[12px] leading-[18px] font-medium text-[#191D23] block">
              Pro League | Wednesday, April 17, 2024 10:00 PM
            </span>
          </div> */}
          {/* <div className="mb-2">
            <h3 className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23] mb-1">
              FC Porto vrs Guimaraes
            </h3>
            <span className="font-Montserrat text-[12px] leading-[18px] font-medium text-[#191D23] block">
              Taça de Portugal | Thursday, April 18, 2024 12:45 AM
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default ViewSlipDetails;
