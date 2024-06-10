import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Modal, Spinner } from "flowbite-react";
import { LastResult } from "../../reducers/PredictionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { PastPredictionStats } from "./PastPredictionStats";
import { logoIcon } from "../../assets/images/images";

const PastMatchModal = ({
  openViewDetailsModal,
  onClose,
  homeId,
  awayId,
  fixturesId,
  timeStamp,
}) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { lastResult } = useSelector((state) => state.prediction);

  const [homeData, setHomeData] = useState();
  const [awayData, setAwayData] = useState();
  const [homeDataImg, setHomeDataImg] = useState();
  const [awayDataImg, setAwayDataImg] = useState();
  const [homeName, setHomeName] = useState();
  const [awayName, setAwayName] = useState();
  const [modalData, setModalData] = useState();
  const [modalLoader, setModalLoader] = useState(true);
  const [isfixturesId, setIsFixturesId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsFixturesId(fixturesId);
  }, [dispatch, fixturesId]);

  const handleModal = () => {
    onClose();
  };

  useEffect(() => {
    if (fixturesId) {
      dispatch(LastResult({ fixture: fixturesId })).then((res) => {
        if (res?.payload?.status === true) {
          setModalLoader(false);
          setModalData(res?.payload?.data);
        } else {
          setModalLoader(true);
        }
      });
    }
  }, [dispatch, fixturesId]);

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

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };
    return date.toLocaleTimeString("en-US", options);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
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
                        {formatDate(timeStamp)}
                      </h3>
                      <h3 className="text-black text-[18px] leading-[24px] font-medium">
                        {formatTime(timeStamp)}
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
                    <TabList className="tab_bar w-full">
                      <Tab>Prediction Statistics</Tab>
                    </TabList>
                    {!modalLoader && modalData ? (
                      <>
                        <TabPanel>
                          <PastPredictionStats isfixturesId={isfixturesId} />
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

export default PastMatchModal;
