import { Modal, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDateList, useTimeList } from "../../../hooks/useDateTimeHooks";

export const RequestModal = ({
  openViewDetailsModal,
  onClose,
  modalLoader,
  modalData,
  homeId,
  awayId
}) => {

  const themeMode = useSelector((state) => state.darkmode.mode);
  const { lastHomeResult } = useSelector((state) => state.prediction);
  const { lastAwayResult } = useSelector((state) => state.prediction);
  const { fixtures } = useSelector((state) => state.prediction);
  const [homeData, setHomeData] = useState();
  const [awayData, setAwayData] = useState();

  const [matchDateList] = useDateList();
  const [matchTimeList] = useTimeList();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  console.log(time);

  const [homeResult, setHomeResult] = useState();
  console.log(homeResult);
  const [awayResult, setAwayResult] = useState();


  useEffect(() => {
    setDate(matchDateList);
    setTime(matchTimeList);
  }, [fixtures]);

  useEffect(() => {
    if (
      lastHomeResult &&
      lastHomeResult.data &&
      lastHomeResult.data.length > 0
    ) {
      let data = lastHomeResult?.data[0];
      setHomeData(data);

      lastHomeResult?.data.forEach((data) => {
        const id = data?.teams?.home?.id
        setHomeResult(id)
      })
    }

  }, [lastHomeResult]);

  useEffect(() => {
    if (
      lastAwayResult &&
      lastAwayResult.data &&
      lastAwayResult.data.length > 0
    ) {
      let data = lastAwayResult?.data[0];
      setAwayData(data);
    }
  }, [lastAwayResult]);

  const handleModal = () => {
    onClose();
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
                      src={homeData?.teams?.home?.logo}
                      alt="DeportivoPastoIcon"
                      className="inline-block mb-2"
                    />
                    <p
                      className={`font-Syne text-[15px] leading-[20px] font-bold ${themeMode === "light" ? "text-black" : "text-white"
                        }`}
                    >
                      {homeData?.teams?.home?.name}
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
                      src={awayData?.teams?.away?.logo}
                      alt="EnvigadoIcon"
                      className="inline-block mb-2"
                    />
                    <p
                      className={`font-Syne text-[15px] leading-[20px] font-bold ${themeMode === "light" ? "text-black" : "text-white"
                        }`}
                    >
                      {awayData?.teams?.away?.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                {!modalLoader && modalData ? (
                  <div>
                    <div className="grid grid-cols-2 gap-8 ">
                      {/* team1 */}
                      <div>
                        <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-4 mt-4">
                          Home History
                        </h4>
                        {lastHomeResult?.data?.map((data) => (
                          <div
                            className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3"
                            key={data?.id}
                          >
                            <div className="text-center">
                              <img
                                src={data?.teams?.home?.logo}
                                alt="DeportivoPastoIcon"
                                className="inline-block mb-2 w-10"
                              />
                            </div>
                            <div className="text-center">
                              <div className="bg-[#2aa9e1] py-2 rounded-full">
                                <h3 className="text-white text-base">
                                  {data?.goals.home}-{data?.goals.away}
                                </h3>
                              </div>
                            </div>
                            <div className="text-center">
                              <img
                                src={data?.teams?.away?.logo}
                                alt="EnvigadoIcon"
                                className="inline-block mb-2 w-10"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* team2 */}

                      <div>
                        <h4 className="font-Bebas text-xl tracking-normal text-black mb-4 text-center mb-4 mt-4">
                          Away History
                        </h4>
                        {lastAwayResult.data?.map((data) => (
                          <div
                            className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3"
                            key={data.id}
                          >
                            <div className="text-center">
                              <img
                                src={data?.teams?.home?.logo}
                                alt="DeportivoPastoIcon"
                                className="inline-block mb-2 w-10"
                              />
                            </div>
                            <div className="text-center">
                              <div className="bg-[#2aa9e1] py-2 rounded-full">
                                <h3 className="text-white text-base">
                                  {data?.goals?.home}-{data?.goals?.away}
                                </h3>
                              </div>
                            </div>
                            <div className="text-center">
                              <img
                                src={data?.teams?.away?.logo}
                                alt="EnvigadoIcon"
                                className="inline-block mb-2 w-10"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-0">
                      <h4 className="font-Bebas text-xl tracking-normal text-black mb-4">
                        Last 5 matches
                      </h4>
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
                            {lastHomeResult?.data?.map((resH) => {
                              const homeTeamId = resH.teams.home.id;
                              const awayTeamId = resH.teams.away.id;

                              let homeTeamWinner;
                              if (homeId == homeTeamId) {
                                homeTeamWinner = resH.teams.home.winner;
                              }

                              if (homeId == awayTeamId) {
                                homeTeamWinner = resH.teams.away.winner;
                              }

                              return (
                                <>
                                  {homeTeamWinner === true &&
                                    <li className="ml-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                                      W
                                    </li>
                                  }
                                  {homeTeamWinner === false &&
                                    <li className="ml-1.5 bg-[#ff0808] text-[14px] text-white px-2 rounded">
                                      L
                                    </li>
                                  }
                                  {homeTeamWinner === null &&
                                    <li className="ml-1.5 bg-[#2e2c2c] text-[14px] text-white px-2 rounded">
                                      D
                                    </li>
                                  }
                                </>
                              );
                            })}
                          </ul>
                        </div>
                        <div>
                          <ul className="flex items-center">
                            {lastAwayResult?.data?.map((res) => {
                              const homeTeamId = res.teams.home.id;
                              const awayTeamId = res.teams.away.id;

                              let awayTeamWinner;
                              if (awayId == homeTeamId) {
                                awayTeamWinner = res.teams.home.winner;
                              }

                              if (awayId == awayTeamId) {
                                awayTeamWinner = res.teams.away.winner;
                              }

                              return (
                                <>
                                  {awayTeamWinner === true &&
                                    <li className="ml-1.5 bg-[#08a1f8] text-[14px] text-white px-2 rounded">
                                      W
                                    </li>
                                  }
                                  {awayTeamWinner === false &&
                                    <li className="ml-1.5 bg-[#ff0808] text-[14px] text-white px-2 rounded">
                                      L
                                    </li>
                                  }
                                  {awayTeamWinner === null &&
                                    <li className="ml-1.5 bg-[#2e2c2c] text-[14px] text-white px-2 rounded">
                                      D
                                    </li>
                                  }
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
                ) : (
                  <div className="text-center mt-40 mb-80">
                    <Spinner
                      color="success"
                      size="xl"
                    />
                    <span className="pl-3 ">Loading...</span>
                  </div>
                )}
              </div>


            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};
