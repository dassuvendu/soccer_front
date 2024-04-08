import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../Auth/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getCheck, getUnlockCheck } from "../../../reducers/CheckUnlockSlice";
import { useProbability } from "../../../hooks/useProbability";
import { Spinner } from "flowbite-react";

export const CorrectScores = ({ isfixturesId }) => {
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
  const [averagePercentage, setAveragePercentage] = useState(null);

 const probabilities = useProbability({averageGoal})

 useEffect(() => {
  if (teamResult?.home?.league?.goals?.for) {
    console.log("per :", teamResult?.home?.league?.goals?.for?.minute);

    const data = teamResult?.home?.league?.goals?.for?.minute;

    const percentages = Object.values(data).map((item) => item.percentage);

    console.log("per :", percentages);
    setAveragePercentage(percentages);
  }
}, [teamResult]);

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
      setCheck(true)
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


 

  return (
    <div>
      {isUnlock === false && check === false && isLoading === false ? (
  <>
    <div className="flex justify-center mt-10">
      <button
        type="button"
        class="text-white bg-blue-700 
hover:bg-blue-800 font-medium 
rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
        onClick={handleClick}
      >
        Unlock Prediction
      </button>
    </div>
    {/* <p className='text-red-600 flex justify-center'>
   {message}
 </p> */}
  </>
) : (
  null
)}


      {isLoading === true && check === false && (
        <>
         <div className="flex justify-center text-center mt-6">
        <Spinner color="success" aria-label="Center-aligned" size="md" />
        <span>
        <p className="text-red-600 flex justify-center mb-10 pl-2"> Checking..</p>
        </span>
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
                  {aLogohide && <img src={teamLogo} alt="sd"/>}
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
                        {averagePercentage[index] !== null ? (averagePercentage[index]):('N/A')}
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
