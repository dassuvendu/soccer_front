import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../Auth/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getCheck, getUnlockCheck } from "../../../reducers/CheckUnlockSlice";
import { useProbability } from "../../../hooks/useProbability";

export const PredictionCorrectScores = ({ isfixturesId }) => {
  const { isLoading } = useSelector((state) => state.IsunLock);
  const { teamResult, predict, h2h } = useSelector((state) => state.prediction);
  console.log(teamResult);

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

 const probabilities = useProbability({averageGoal})



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
        setAverageGoals(teamResult?.home?.last_5?.goals?.for?.total);
      }
      if (teamResult?.away?.id === winnerTeamId) {
        setTeamLogo(teamResult?.away?.logo);
        setALogohide(true);
        setHLogohide(false);
        setAverageGoals(teamResult?.home?.last_5?.goals?.for?.total);
      }
    }
  }, [teamResult, winnerTeamId, hLogohide, aLogohide]);

 
 

  return (
    <div>
      
      {isLoading === true && check === false && (
        <p className="text-red-600 flex justify-center  mb-10">Please Wait...</p>
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
                  {aLogohide && <img src={teamLogo} alt="sd" width={60} height={60}/>}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-b border-gray-300 py-3">
                <div className="text-center">
                  <h3 className="text-black text-base">
                    {teamResult?.home?.last_5?.goals?.for?.total}
                  </h3>
                </div>

                <div className="text-center">
                  <h3 className="font-Bebas text-xl tracking-normal text-black text-center mb-4 ">
                    Average Goals
                  </h3>
                </div>

                <div className="text-center">
                  <h3 className="text-black text-base">
                    {teamResult?.away?.last_5?.goals?.for?.total}
                  </h3>
                </div>
              </div>

              <div>
                <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-4 mt-4">
                  Correct Scores
                </h4>
                {h2h?.map((goal,index) => (
                  <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
                    <div className="text-center">
                      <h3 className="text-black text-base">
                        {goal?.goals?.home}
                      </h3>
                    </div>
                    
                    <div className="text-center">
                   
                      <div className="bg-[#2aa9e1] py-2 rounded-full mb-4">
                    
                        <h3 className="text-black text-base">
                        {probabilities && probabilities[index]?.probability}
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
            <div className="mt-8">
              <button className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
                Add to Pridiction slip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
