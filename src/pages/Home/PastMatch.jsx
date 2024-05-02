import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPastFixtures } from "../../reducers/PredictionsSlice";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
// import { Spinner } from "flowbite-react";
import PastMatchModal from "./PastMatchModal";
import {logoIcon} from "../../assets/images/images";

export const PastMatch = () => {
  const { pastFix,isLoading  } = useSelector((state) => state.prediction);

  const Items = pastFix ?.data?.slice(0, 6);
  console.log("y", Items);

  const today = new Date();
  // const todayFormatted = today.toISOString().split("T")[0];
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterdayFormatted = yesterday.toISOString().split("T")[0];

  const dispatch = useDispatch();
  const [loadingData, setLoadingData] = useState(false);
  const [homeLoader, setHomeLoader] = useState(true);

  useEffect(() => {
        dispatch(getPastFixtures({ date: yesterdayFormatted })).then((res) => {
          console.log("res",res);
          if (res?.payload?.status === true) {
            setLoadingData(true);
            setHomeLoader(false);
          } else {
            setLoadingData(false);
            setHomeLoader(true);
          }
        })
   
  }, [yesterdayFormatted]);

  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
      weekday: "short",
      timeZone: 'UTC'
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
      timeZone: 'UTC'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
            {Array.isArray(Items) && Items?.map((data) => (
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
                      {formatDate(data?.fixture?.timestamp)}
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
                        <div className="mb-4 text-center">
                          <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                            Prediction
                          </p>
                          <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                            <b>2 - 0</b>
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
                    <Link className="w-full font-Syne font-bold flex items-center justify-center 
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
            ))}
            {/* <div className="bg-white rounded-2xl shadow-xl">
        <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
          <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
            Match Details
          </div>
          <div className="text-right">
            <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
              Friendlies | Wednesday,
            </p>
            <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
              March 27, 2024 2:30 AM
            </p>
          </div>
        </div>
        <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
          <div className="grid grid-cols-3 gap-4 mb-4 h-32">
            <div className="text-center">
              <img
                src={DeportivoPastoIcon}
                alt="DeportivoPastoIcon"
                className="inline-block mb-2"
                width={58}
                height={58}
              />
              <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                Deportivo Pasto
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <div className="mb-4 text-center">
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                    Score
                  </p>
                  <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                    <b>2 - 0</b>
                  </span>
                </div>
                <div className="mb-4 text-center">
                  <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                    Prediction
                  </p>
                  <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                    <b>2 - 0</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src={EnvigadoIcon}
                alt="EnvigadoIcon"
                className="inline-block mb-2"
                width={58}
                height={58}
              />
              <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                Envigado
              </p>
            </div>
          </div>
          <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
            <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
              View Details
              <FiArrowRight className="text-[#08a5f5] ml-0.5" />
            </Link>
          </div>
        </div>
      </div> */}
          </div>
        ) : (
          <div className="text-center">
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
