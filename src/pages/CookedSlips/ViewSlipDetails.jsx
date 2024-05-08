import { CiUnlock } from "react-icons/ci";
import { dollerIcon, logoIcon } from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSlipInfo, getslipDetails } from "../../reducers/CookedSlipSlice";
import { Link, useNavigate } from "react-router-dom";

const ViewSlipDetails = ({ id }) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { slipInfo, singleSlip, isLoading } = useSelector(
    (state) => state.cookedSlips
  );
  const [Slipid, setSlipId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      timeZone: 'Europe/London',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const matchStartTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: 'Europe/London',
    };
    return date.toLocaleTimeString(undefined, options);
  };
  const formatStartDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: 'Europe/London',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formatStartTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: 'Europe/London',
    };
    return date.toLocaleTimeString(undefined, options);
  };
  const formatEndDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: 'Europe/London',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formatEndTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: 'Europe/London',
    };
    return date.toLocaleTimeString(undefined, options);
  };

  const slipinfo = (id) => {
    navigate("/slip-info", {
      state: { id: id },
    });
    console.log("slipinfoid: ", id);
  };
  return (
    <>
      {isLoading === true ? (
        <>
          <div className="text-center">
            <div role="status">
              <img src={logoIcon} alt="loading.." className="loader" />
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:flex justify-between items-center mb-6">
            <h2
              className={`font-Montserrat text-[23px] leading-[25px] font-bold mb-1 ${
                themeMode === "light" ? "text-[#191D23]" : "text-white"
              }`}
            >
              Cooked Slip #{id}
            </h2>

            <button
              onClick={() => slipinfo(id)}
              className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full"
            >
              <CiUnlock className="text-base mr-0.5" />
              View Slip Details
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
              <div></div>
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
                          themeMode === "light"
                            ? "text-[#191D23]"
                            : "text-white"
                        }`}
                      >
                        {matches?.homeTeamName} vrs {matches?.awayTeamName}
                      </h3>
                      <span
                        className={`font-Montserrat text-[12px] leading-[18px] font-medium block ${
                          themeMode === "light"
                            ? "text-[#191D23]"
                            : "text-white"
                        }`}
                      >
                        {matches?.leagueName} |{" "}
                        {matchStartDate(matches?.startsOn)}{" "}
                        {matchStartTime(matches?.startsOn)}
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ViewSlipDetails;
