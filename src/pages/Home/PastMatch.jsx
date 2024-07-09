import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPastFixtures } from "../../reducers/PredictionsSlice";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
// import { Spinner } from "flowbite-react";
import PastMatchModal from "./PastMatchModal";
import { logoIcon } from "../../assets/images/images";

export const PastMatch = () => {
  const { pastFix, isLoading } = useSelector((state) => state.prediction);

  const Items = pastFix?.data?.slice(0, 6);
  console.log("Item", Items);
  // console.log("y", Items);
  const { lastResult } = useSelector((state) => state.prediction);

  const today = new Date();
  // const todayFormatted = today.toISOString().split("T")[0];
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterdayFormatted = yesterday.toISOString().split("T")[0];

  const dispatch = useDispatch();
  const [loadingData, setLoadingData] = useState(false);
  const [homeLoader, setHomeLoader] = useState(true);

  useEffect(() => {
    dispatch(getPastFixtures({ last: 6, status: "FT" })).then((res) => {
      // console.log("res", res);
      if (res?.payload?.status === true) {
        setLoadingData(true);
        setHomeLoader(false);
      } else {
        setLoadingData(false);
        setHomeLoader(true);
      }
    });
  }, []);

  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
      weekday: "short",
      timeZone: "Europe/London",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Europe/London",
    };
    return date.toLocaleDateString("en-US", options);
  };
  const [openViewDetailsModal, setOpenViewDetailsModal] = useState(false);
  const [homeId, setHomeId] = useState(null);
  const [awayId, setAwayId] = useState(null);
  const [timeStamp, setTimeStamp] = useState(null);
  const [fixturesId, setFixturesId] = useState(null);

  const openViewDetailsModalHandle = (id) => {
    //  console.log("det",id);
    setHomeId(id.split(":")[1]);
    setAwayId(id.split(":")[2]);
    setTimeStamp(id.split(":")[3]);
    const fixtureId = id.split(":")[0];
    setFixturesId(fixtureId);
    setOpenViewDetailsModal(true);
  };

  const handleModalClose = () => {
    setOpenViewDetailsModal(false);
    setHomeId(null);
    setAwayId(null);
    setTimeStamp(null);
    setFixturesId(null);
  };

  return (
    <div>
      <div className="pt-4">
        {!isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(Items) &&
              Items?.map((data) => {
                return (
                  <div className="bg-white rounded-2xl shadow-xl" key={data.id}>
                    <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
                      <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                        Match Details
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                          Friendlies | {formatDay(data?.fixture?.timestamp)},
                        </p>
                        <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                          {formatDate(data?.fixture?.timestamp)} UTC
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
                              <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                                Score
                              </p>
                              <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                                <b>
                                  {data?.goals?.home} - {data?.goals?.away}
                                </b>
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
                          onClick={() =>
                            openViewDetailsModalHandle(
                              `${data?.fixture?.id}:${data?.teams?.home?.id}:${data?.teams?.away?.id}:${data?.fixture?.timestamp}`
                            )
                          }
                        >
                          View Details
                          <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="text-center">
            <div role="status">
              <img src={logoIcon} alt="loading.." className="loader" />

              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <PastMatchModal
        openViewDetailsModal={openViewDetailsModal}
        timeStamp={timeStamp}
        fixturesId={fixturesId}
        onClose={handleModalClose}
        homeId={homeId}
        awayId={awayId}
      />
    </div>
  );
};
