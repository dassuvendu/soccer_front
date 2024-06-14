import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFixtures } from "../../reducers/PredictionsSlice";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Login from "../Auth/Login/Login";
import { logoIcon } from "../../assets/images/images";

export const UpcomingMatch = () => {
  const { fixtures, isLoading } = useSelector((state) => state.prediction);
  const [apiCalled, setApiCalled] = useState(false);

  const Item =
    Array.isArray(fixtures?.data) &&
    fixtures?.data?.filter((item) => {
      const fixtureDate = new Date(item?.fixture?.date);
      const currentUTCTime = new Date().toISOString();

      fixtureDate.setMinutes(
        fixtureDate.getMinutes() + fixtureDate.getTimezoneOffset()
      );
      const currentUTCTimeWithoutMs = currentUTCTime.split(".")[0] + "Z";

      return fixtureDate > new Date(currentUTCTimeWithoutMs);
    });

  // console.log("Items", Item);

  const Items = Array.isArray(fixtures?.data)
    ? fixtures?.data?.slice(0, 6)
    : [];

  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  const dispatch = useDispatch();
  const [loadingData, setLoadingData] = useState(false);
  const [homeLoader, setHomeLoader] = useState(true);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const loginHandler = () => {
    setOpenRegisterModal(false);
    setOpenLoginModal(true);
  };
  const registerHandler = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
  };

  useEffect(() => {
    dispatch(getFixtures({ date: todayFormatted })).then((res) => {
      if (res?.payload?.status === true) {
        setLoadingData(true);
        setHomeLoader(false);
      } else {
        setLoadingData(false);
        setHomeLoader(true);
      }
    });
  }, [todayFormatted]);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Europe/London",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "Europe/London",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="pt-4">
      {!isLoading ? (
        Items?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Items?.map((data) => (
              <div className="bg-white rounded-2xl shadow-xl" key={data.id}>
                <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                  <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                    Matches
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                      {formatDate(data?.fixture?.timestamp)}
                    </p>
                    <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                      {formatTime(data?.fixture?.timestamp)}
                    </p>
                  </div>
                </div>
                <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
                  <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                    <div className="text-center">
                      <img
                        src={data?.teams?.home?.logo}
                        alt={data?.teams?.home?.name}
                        className="inline-block mb-2"
                        width={58}
                        height={58}
                      />
                      <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                        {data?.teams?.home?.name}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <div>
                        <div className="mb-4 text-center">
                          <p className="text-black font-semibold text-[15px] leading-[25px] font-Montserrat pb-1">
                            {formatDate(data?.fixture?.timestamp)}
                          </p>
                          <span className=" text-black font-medium  text-[12px] leading-[16px] font-Montserrat inline-block px-0">
                            <b>{formatTime(data?.fixture?.timestamp)}</b>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <img
                        src={data?.teams?.away?.logo}
                        alt={data?.teams?.away?.name}
                        className="inline-block mb-2"
                        width={58}
                        height={58}
                      />
                      <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                        {data?.teams?.away?.name}
                      </p>
                    </div>
                  </div>
                  <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
                    <Link
                      className="w-full font-Syne font-bold flex items-center justify-center
                   px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] 
                   bg-gradient-to-r bg-clip-text text-transparent"
                      onClick={loginHandler}
                    >
                      Match Details
                      <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p>No upcoming matches found.</p>
          </div>
        )
      ) : (
        <div className="text-center">
          <div role="status">
            <img src={logoIcon} alt="loading.." className="loader" />
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <Login
        openLoginModal={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
      />
    </div>
  );
};
