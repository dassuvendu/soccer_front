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
          <div class="text-center">
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
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
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
