import { Modal, Spinner, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDateList, useTimeList } from "../../../hooks/useDateTimeHooks";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { DeportivoPastoIcon } from "../../../assets/images/images/";
import { PredictionStats } from "../RequestPredictionModalCompo/PredictionStats";
import { CorrectScores } from "../RequestPredictionModalCompo/CorrectScores";
import { getCheck } from "../../../reducers/CheckUnlockSlice";
import { LastResult } from "../../../reducers/PredictionsSlice";

export const RequestModal = ({
  openViewDetailsModal,
  onClose,
  homeId,
  awayId,
  fixturesId,
}) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { lastResult, h2h } = useSelector((state) => state.prediction);
  const { fixtures } = useSelector((state) => state.prediction);
  const [homeData, setHomeData] = useState();
  const [awayData, setAwayData] = useState();
  const [homeDataImg, setHomeDataImg] = useState();
  const [awayDataImg, setAwayDataImg] = useState();
  const [homeName, setHomeName] = useState();
  const [awayName, setAwayName] = useState();
  const [matchDateList] = useDateList();
  const [matchTimeList] = useTimeList();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [modalLoader, setModalLoader] = useState(true);
  const [isfixturesId, setIsFixturesId] = useState(null)
  


  const [isUnlock, setIsUnlock] = useState(false);

  const dispatch = useDispatch();
  const { fetchedPredictions } = useSelector((state) => state.myPredictions);
  // const token = localStorage.getItem("userToken");
  // console.log("token: ", token);
  // useEffect(() => {
  //   if (token) {
  //     dispatch(getPredictions());
  //   } else {
  //     console.log("Unauthorize");
  //   }
  // }, []);
  // console.log("prediction: ",);

  useEffect(() => {
   setIsFixturesId(fixturesId)
  }, [dispatch,fixturesId]);

  useEffect(()=>{
    dispatch(LastResult({ fixture: fixturesId })).then((res) => {
      if (res?.payload?.status === true) {
        setModalLoader(false);
        setModalData(res?.payload?.data);
        // dispatch(Formation({ fixture: fixturesId }));
      } else {
        setModalLoader(true);
      }
    });
  }, [dispatch, fixturesId]);

  useEffect(() => {
    setDate(matchDateList);
    setTime(matchTimeList);
  }, [fixtures]);

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
    setModalData(null);
    setHomeDataImg(null);
    setAwayDataImg(null);
    setHomeName(null);
    setAwayName(null);
  };

  return (
    <div>
      {openViewDetailsModal && (
        <Modal
          show={openViewDetailsModal}
          size="7xl"
          onClose={handleModal}
          popup
        >
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
                        {date?.label}
                      </h3>
                      <h3 className="text-black text-[18px] leading-[24px] font-medium">
                        {time?.label}
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
                      <Tab>Correct Scores</Tab>
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
                                  {h2h?.map((goal) => (
                                    <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
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
                                <div className="flex justify-between items-center">
                                  <div>
                                    <ul className="flex items-center">
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
                                    <ul className="flex items-center">
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
                          <div>
                            <h4 className="font-Bebas text-2xl tracking-normal text-black text-center mb-4 mt-4">
                              Select Aucas's Formation
                            </h4>
                            <div className="max-w-5xl mx-auto">
                              <Tabs className="team_comparisions_tab_section">
                                <TabList className="tab_bar">
                                  <Tab>4-3-3</Tab>
                                  <Tab>5-3-2</Tab>
                                  <Tab>4-2-3-1</Tab>
                                  <Tab>4-4-2</Tab>
                                  <Tab>3-3-3-1</Tab>
                                  <Tab>3-2-4-1</Tab>
                                </TabList>
                                <TabPanel>
                                  <div className="py-4">
                                    <h3 class="text-[#2aa9e1] text-[18px] leading-[24px] font-medium text-center">
                                      Custom formation
                                    </h3>
                                    <div className="max-w-xl mx-auto my-4 flex">
                                      <TextInput
                                        id="text"
                                        type="text"
                                        className="mr-2 w-full"
                                      />
                                      <button
                                        className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[40px] h-[40px] font-bold rounded-3xl flex items-center font-Syne"
                                        type="submit"
                                      >
                                        Apply
                                      </button>
                                    </div>
                                    <div className="max-w-3xl mx-auto my-8">
                                      <div className="border-y border-gray-300 py-3 px-4 flex justify-between items-center">
                                        <div className="text-center flex items-center">
                                          <img
                                            src={DeportivoPastoIcon}
                                            alt="DeportivoPastoIcon"
                                            className="inline-block mr-2 w-12"
                                          />
                                          <p
                                            className={`font-Syne text-[15px] leading-[20px] font-bold ${
                                              themeMode === "light"
                                                ? "text-black"
                                                : "text-white"
                                            }`}
                                          >
                                            Aucas
                                          </p>
                                        </div>
                                        <p
                                          className={`font-Syne text-[15px] leading-[20px] font-bold ${
                                            themeMode === "light"
                                              ? "text-black"
                                              : "text-white"
                                          }`}
                                        >
                                          4-4-2
                                        </p>
                                      </div>
                                      <div className="my-4 flex justify-center items-center">
                                        {/* <canvas id="formationCanvas" width="800" height="400"></canvas> */}
                                      </div>
                                    </div>
                                  </div>
                                </TabPanel>
                                <TabPanel>2</TabPanel>
                                <TabPanel>3</TabPanel>
                                <TabPanel>4</TabPanel>
                                <TabPanel>5</TabPanel>
                                <TabPanel>6</TabPanel>
                              </Tabs>
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <PredictionStats isUnlock={isUnlock} />
                        </TabPanel>

                        <TabPanel>
                          <CorrectScores isUnlock={isUnlock} />
                        </TabPanel>
                      </>
                    ) : (
                      <div className="text-center mt-40 mb-80">
                        <Spinner color="success" size="xl" />
                        <span className="pl-3 ">Loading...</span>
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
