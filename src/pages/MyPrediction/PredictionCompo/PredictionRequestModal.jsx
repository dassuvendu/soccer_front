import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useDateList, useTimeList } from "../../../hooks/useDateTimeHooks";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { LastResult } from "../../../reducers/PredictionsSlice";
import {
  getAFormation,
  getAPlayers,
  getHFormation,
  getHPlayers,
} from "../../../reducers/formationSlice";
// import { PredictionFormatation } from "../PredictionModal/PredictionFormatation";
import { MyPredictionStats } from "../PredictionModal/MyPredictionStats";
import { PredictionCorrectScores } from "../PredictionModal/PredictionCorrectScores";
import PredictionTeamFormation from "../PredictionModal/PredictionTeamFormation";
import { logoIcon } from "../../../assets/images/images";
import { getUid } from "../../../reducers/uuidSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../reducers/authSlice";

export const PredictionRequestModal = ({
  openDetailsModal,
  onClose,
  fixturesId,
  timeStamp,
}) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { lastResult, h2h } = useSelector((state) => state.prediction);
  const { Hplayers } = useSelector((state) => state.formation);
  const { Aplayers } = useSelector((state) => state.formation);
  const { valid } = useSelector((state) => state.uuid);
  const [homeData, setHomeData] = useState();
  const [awayData, setAwayData] = useState();
  const [homeDataImg, setHomeDataImg] = useState();
  const [awayDataImg, setAwayDataImg] = useState();
  const [homeName, setHomeName] = useState();
  const [awayName, setAwayName] = useState();
  const [modalData, setModalData] = useState(null);
  const [modalLoader, setModalLoader] = useState(true);
  const [isfixturesId, setIsFixturesId] = useState(null);
  const [homeId,setHomeId] = useState()
  const [awayId,setawayId] = useState()
  const [error,setError] = useState()
  const dispatch = useDispatch();

  const uuid = localStorage.getItem('uuid')
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getUid({}))
        if (uuid !== valid?.data) {
            dispatch(logout())
            navigate('/') 
        }
    },5000);
    return () => clearTimeout(timer);
  }, [valid, uuid, dispatch]);
  
  useEffect(() => {
    setIsFixturesId(fixturesId);
  }, [fixturesId]);

  useEffect(()=>{
    const home = Array.isArray(lastResult?.data) && lastResult?.data[0]?.teams?.home?.id
    // console.log("h",home);
    setHomeId(home)
    const away = Array.isArray(lastResult?.data) && lastResult?.data[0]?.teams?.away?.id
    // console.log("a",away);
    setawayId(away)
  },[lastResult])
  useEffect(() => {
    dispatch(LastResult({ fixture: fixturesId })).then((res) => {
      if (res?.payload?.status === true) {
        setModalLoader(false);
        setModalData(res?.payload?.data);
        Promise.all[
          (dispatch(getHFormation({ fixture: fixturesId, team: homeId })),
          dispatch(getHPlayers({ fixture: fixturesId, team: homeId })),
          dispatch(getAFormation({ fixture: fixturesId, team: awayId })),
          dispatch(getAPlayers({ fixture: fixturesId, team: awayId }))
        )
        ];
      }
      else if (res?.payload?.message === 'Something went wrong. Please try again later') {
        setError(res?.payload?.message)
      }
       else {
        setModalLoader(true);
      }

    });
  }, [dispatch, fixturesId, homeId, awayId]);
  useEffect(() => {
    if (lastResult && lastResult.data && lastResult.data.length > 0) {
      let data = lastResult?.data[0];
      setHomeData(data);
      setAwayData(data);
      let homeImgData;
      let homeName;
      let awayImgData;
      let awayName;
      if (data?.teams?.home?.id == data?.teams?.home?.id) {
        homeImgData = data?.teams?.home?.logo;
        homeName = data?.teams?.home?.name;
      } else if (data?.teams?.away?.id == data?.teams?.away?.id) {
        homeImgData = data?.teams?.away?.logo;
        homeName = data?.teams?.away?.name;
      }

      if (data?.teams?.away?.id == data?.teams?.away?.id) {
        awayImgData = data?.teams?.away?.logo;
        awayName = data?.teams?.away?.name;
      } else if (data?.teams?.home?.id == data?.teams?.home?.id) {
        awayImgData = data?.teams?.home?.logo;
        awayName = data?.teams?.home?.name;
      }
      setHomeDataImg(homeImgData);
      setHomeName(homeName);
      setAwayDataImg(awayImgData);
      setAwayName(awayName);
    }
  }, [lastResult]);

  const handleModal = () => {
    onClose();
  };

  // const formatTime = (timestamp) => {
  //   const date = new Date(timestamp * 1000);
  //   const options = {
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true,
  //   };
  //   return date.toLocaleTimeString("en-US", options);
  // };

  // const formatDate = (timestamp) => {
  //   const date = new Date(timestamp * 1000);
  //   const options = {
  //     day: "2-digit",
  //     month: "short",
  //     year: "numeric",
  //   };
  //   return date.toLocaleDateString("en-US", options);
  // };

  return (
    <div>
      {openDetailsModal && (
        <Modal show={openDetailsModal} size="7xl" onClose={handleModal} popup>
          <Modal.Header className="absolute right-0 top-0" />

          <Modal.Body>
            <div className="pt-8 pb-2">
              <h2 className="font-Bebas text-3xl tracking-normal text-[#2aa9e1] mb-4">
                Match Details
              </h2>

              <div className="pt-6 pb-4 px-3 mb-4 border-b border-gray-300">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <img
                      src={homeDataImg}
                      alt={homeName}
                      className="inline-block mb-2"
                    />

                    <p
                      className={`font-Syne text-[15px] leading-[20px] font-bold ${
                        themeMode === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      {homeName}
                    </p>
                  </div>

                  <div className="flex justify-center items-center text-center">
                    <div>
                      <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                        Kick Off
                      </p>
                      <h3 className="text-[#2aa9e1] text-[18px] leading-[24px] font-medium">
                        {timeStamp}
                      </h3>
                      <h3 className="text-black text-[18px] leading-[24px] font-medium">
                        {/* {formatTime(timeStamp)} */}
                      </h3>
                    </div>
                  </div>

                  <div className="text-center">
                    <img
                      src={awayDataImg}
                      alt={awayName}
                      className="inline-block mb-2"
                    />
                    <p
                      className={`font-Syne text-[15px] leading-[20px] font-bold ${
                        themeMode === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      {awayName}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={` ${
                  themeMode === "light" ? "bg-[#ffffff]" : "bg-[#191D23]"
                } rounded-xl p-0`}
              >
                <div className="max-w-5xl mx-auto">
                  <Tabs className="team_comparisions_tab_section">
                    <TabList className="tab_bar">
                      <Tab>History</Tab>
                      <Tab>Formation</Tab>
                      <Tab>Prediction Statistics</Tab>
                      <Tab>Prediction Scores</Tab>
                    </TabList>
                    {!modalLoader && modalData ? (
                      <>
                        <TabPanel>
                          <div className="mb-4">
                            <div>
                              <div className="grid grid-cols-1 gap-8 ">
                                {/* team1 */}
                                <div>
                                  <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-4 mt-4">
                                    Home History
                                  </h4>
                                  {h2h?.map((goal,index) => (
                                    <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3" key={index}>
                                      <div className="text-center">
                                        <img
                                          src={goal?.teams?.home?.logo}
                                          alt="DeportivoPastoIcon"
                                          className="inline-block mb-2 w-10"
                                        />
                                      </div>
                                      <div className="text-center">
                                        <div className="bg-[#2aa9e1] py-2 rounded-full mb-4">
                                          <h3 className="text-white text-base">
                                            {goal?.goals?.home}-
                                            {goal?.goals?.away}
                                          </h3>
                                        </div>
                                      </div>
                                      <div className="text-center">
                                        <img
                                          src={goal?.teams?.away?.logo}
                                          alt="EnvigadoIcon"
                                          className="inline-block mb-2 w-10"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="mb-0">
                                {/* <h4 className="font-Bebas text-xl tracking-normal text-black mb-4">
                                  Last 5 matches
                                </h4> */}
                                <div className="md:flex justify-between items-center">
                                  <div className="mb-4 md:mb-0">
                                    <ul className="flex items-center justify-center">
                                      <li>
                                        <img
                                          src={homeData?.teams?.home?.logo}
                                          alt="DeportivoPastoIcon"
                                          className="inline-block mb-2 w-8"
                                        />
                                      </li>
                                      {h2h?.map((resH) => {
                                        const homeTeamId =
                                          resH?.teams?.home?.id;
                                        const awayTeamId =
                                          resH?.teams?.away?.id;

                                        let homeTeamWinner;
                                        if (homeId == homeTeamId) {
                                          homeTeamWinner =
                                            resH?.teams?.home?.winner;
                                        }

                                        if (homeId == awayTeamId) {
                                          homeTeamWinner =
                                            resH?.teams?.away?.winner;
                                        }

                                        return (
                                          <>
                                            {homeTeamWinner === true && (
                                              <li className="ml-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                                                W
                                              </li>
                                            )}
                                            {homeTeamWinner === false && (
                                              <li className="ml-1.5 bg-[#ff0808] text-[14px] text-white px-2 rounded">
                                                L
                                              </li>
                                            )}
                                            {homeTeamWinner === null && (
                                              <li className="ml-1.5 bg-[#2e2c2c] text-[14px] text-white px-2 rounded">
                                                D
                                              </li>
                                            )}
                                          </>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div>
                                    <ul className="flex items-center justify-center">
                                      {h2h?.map((res) => {
                                        const awayTeamId = res?.teams?.away?.id;
                                        const homeTeamId = res?.teams?.home?.id;

                                        let awayTeamWinner;
                                        if (awayId == homeTeamId) {
                                          awayTeamWinner =
                                            res?.teams?.home?.winner;
                                        }

                                        if (awayId == awayTeamId) {
                                          awayTeamWinner =
                                            res?.teams?.away?.winner;
                                        }

                                        return (
                                          <>
                                            {awayTeamWinner === true && (
                                              <li className="ml-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                                                W
                                              </li>
                                            )}
                                            {awayTeamWinner === false && (
                                              <li className="ml-1.5 bg-[#ff0808] text-[14px] text-white px-2 rounded">
                                                L
                                              </li>
                                            )}
                                            {awayTeamWinner === null && (
                                              <li className="ml-1.5 bg-[#2e2c2c] text-[14px] text-white px-2 rounded">
                                                D
                                              </li>
                                            )}
                                          </>
                                        );
                                      })}
                                      <li>
                                        <img
                                          src={awayData?.teams?.away?.logo}
                                          alt="EnvigadoIcon"
                                          className="inline-block mb-2 w-8 ml-2"
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPanel>

                        <TabPanel>
                          <PredictionTeamFormation
                            Hplayers={Hplayers}
                            Aplayers={Aplayers}
                          />
                        </TabPanel>
                        <TabPanel>
                          <MyPredictionStats isfixturesId={isfixturesId} />
                        </TabPanel>

                        <TabPanel>
                          <PredictionCorrectScores
                            isfixturesId={isfixturesId}
                          />
                        </TabPanel>
                      </>
                    ) : (
                      <div className="text-center">
                   
                        <div role="status">
                          <img
                            src={logoIcon}
                            alt="loading.."
                            className="loader"
                          />
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
                  </Tabs>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};
