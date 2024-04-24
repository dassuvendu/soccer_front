import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../Auth/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getCheck, getUnlockCheck } from "../../../reducers/CheckUnlockSlice";
import { useProbability } from "../../../hooks/useProbability";
import { LastResult } from "../../../reducers/PredictionsSlice";
import { Spinner } from "flowbite-react";
import { logoIcon } from "../../../assets/images/images";

export const PredictionCorrectScores = ({ isfixturesId }) => {
  const { isLoading } = useSelector((state) => state.IsunLock);
  const { teamResult, predict, h2h } = useSelector((state) => state.prediction);
  console.log(teamResult);

  const matches = h2h.slice(0, 6);
  // console.log("mat",matches);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const token = localStorage.getItem("userToken");
  const [check, setCheck] = useState(false);
  const [isUnlock, setIsUnlock] = useState(false);
  // console.log("is",isUnlock);
  const [message, setMessage] = useState();
  const [teamLogo, setTeamLogo] = useState();
  console.log("logo", teamLogo);

  const [hLogohide, setHLogohide] = useState(false);
  const [aLogohide, setALogohide] = useState(false);

  const [averageGoal, setAverageGoals] = useState(null);

  const [percentage, setPercentage] = useState();
  console.log("percentageKeys", percentage);

  const probabilities = useProbability({ averageGoal });

  useEffect(() => {
    dispatch(getCheck({ fixture: isfixturesId })).then((res) => {
      console.log(res);
      setCheck(res?.payload?.status);
      setMessage(res.payload.message);
    });
  }, [dispatch, isfixturesId]);

  const handleClick = () => {
    dispatch(getUnlockCheck({ fixture: isfixturesId })).then((res) => {
      setIsUnlock(res.payload.status);
      setCheck(true);
    });
  };
  const winnerTeamId = predict?.winner?.id;
  console.log("kl", winnerTeamId);

  useEffect(() => {
    if (teamResult) {
      if (teamResult?.home?.id === winnerTeamId) {
        setTeamLogo(teamResult?.home?.logo);
        setHLogohide(true);
        setALogohide(false);
        setAverageGoals(teamResult?.home?.last_5?.goals?.for?.average);
      }
      if (teamResult?.away?.id === winnerTeamId) {
        setTeamLogo(teamResult?.away?.logo);
        setALogohide(true);
        setHLogohide(false);
        setAverageGoals(teamResult?.away?.last_5?.goals?.for?.average);
      }
    }
  }, [teamResult, winnerTeamId, hLogohide, aLogohide]);

  useEffect(() => {
    if (teamResult?.home?.league?.goals?.for) {
      console.log("per :", teamResult?.home?.league?.goals?.for?.minute);

      const data = teamResult?.home?.league?.goals?.for?.minute;

      const percentages = Object.values(data).map((item) => item.percentage);

      console.log("per :", percentages);
      setPercentage(percentages);
    }
  }, [teamResult]);

  return (
    <div>
      {isLoading === true && check === false && (
        <>
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
        </>
      )}

      {check && (
        <div className="mb-4">
          <div>
            <div className="grid grid-cols-1 gap-8 ">
              <div className="grid grid-cols-3 mt-10 gap-4 border-b border-gray-300 py-3">
                <div className="text-center">
                  {hLogohide && <img src={teamLogo} alt="sd" />}
                </div>
                <div className="text-center">
                  <h3 className="font-Bebas text-xl tracking-normal text-black text-center mb-4 ">
                    Winner
                  </h3>
                </div>
                <div className="text-center">
                  {aLogohide && <img src={teamLogo} alt="sd" />}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-b border-gray-300 py-3">
                <div className="text-center">
                  <h3 className="text-black text-base">
                    {teamResult?.home?.last_5?.goals?.for?.average}
                  </h3>
                </div>

                <div className="text-center">
                  <h3 className="font-Bebas text-xl tracking-normal text-black text-center mb-4 ">
                    Average Goals
                  </h3>
                </div>

                <div className="text-center">
                  <h3 className="text-black text-base">
                    {teamResult?.away?.last_5?.goals?.for?.average}
                  </h3>
                </div>
              </div>

              <div>
                <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-4 mt-4">
                  Correct Scores
                </h4>
                {matches?.map((goal, index) => (
                  <div
                    className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3"
                    key={index}
                  >
                    <div className="text-center">
                      <h3 className="text-black text-base">
                        {goal?.goals?.home}
                      </h3>
                    </div>

                    <div className="text-center">
                      <div className="bg-[#2aa9e1] py-2 rounded-full mb-4">
                        <h3 className="text-black text-base">
                          {percentage[index] !== null
                            ? percentage[index]
                            : "N/A"}
                        </h3>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-black text-base">
                        {goal?.goals?.away}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="mt-8">
              <button className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
                Add to Pridiction slip
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};
