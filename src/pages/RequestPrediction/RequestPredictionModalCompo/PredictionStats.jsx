import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCheck, getUnlockCheck } from "../../../reducers/CheckUnlockSlice";
import { logoIcon } from "../../../assets/images/images";

export const PredictionStats = ({ isfixturesId }) => {
  const { lastResult } = useSelector((state) => state.prediction);
  const { isLoading } = useSelector((state) => state.IsunLock);

  const [lossHPercent, setLossHPercent] = useState();
  const [lossAPercent, setLossAPercent] = useState();

  useEffect(() => {
    if (lastResult && lastResult.data && lastResult.data.length > 0) {
      let data = lastResult?.data[0];
      let fullPercent = 100;
      let homeWinPercent = data?.predictions?.percent?.home;
      let awayWinPercent = data?.predictions?.percent?.away;
      let Hpoint = homeWinPercent.split("%")[0];
      let Apoint = awayWinPercent.split("%")[0];
      let lossHResult = fullPercent - Hpoint;
      let lossAResult = fullPercent - Apoint;
      setLossHPercent(lossHResult);
      setLossAPercent(lossAResult);
    }
  }, [lastResult]);

  // const token = localStorage.getItem("userToken");

  const [isUnlock, setIsUnlock] = useState(false);

  const [check, setCheck] = useState(false);

  const [message, setMessage] = useState();
  console.log(message);

  const dispatch = useDispatch();

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

  return (
    <div>
      {isUnlock === false && check === false && isLoading === false ? (
        <>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="text-white bg-blue-700 
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
      ) : null}
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
        <div>
          {lastResult?.data?.map((res) => (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3"
              key={res.id}
            >
              <div className="text-center md:pt-10">
                <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-0 mt-4">
                  Outcome
                </h4>
                <p className="text-base text-[#08a1f8] font-medium">
                  win,{res?.predictions?.winner?.name}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-Bebas text-xl tracking-normal text-[#08a1f8] text-center mb-4 mt-4">
                  Advice
                </h4>
                <p className="text-base text-[#08a1f8] font-medium">
                  {res?.predictions?.advice?.toString()?.split("-")}
                </p>
              </div>
              <div className="text-center md:pt-10">
                <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-0 mt-4">
                  Over/Under
                </h4>
                <p className="text-base text-[#08a1f8] font-medium">
                  {res?.predictions?.under_over?.toString()?.split("-")}
                </p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
            {lastResult?.data?.map((res) => (
              <>
                <div className="text-center md:pt-10">
                  <div className="flex justify-between px-4">
                    <div className="text-left">
                      <p className="text-base text-[#08a1f8] font-medium">
                        Win
                      </p>
                      <p className="text-base text-[#08a1f8] font-medium">
                        Lose
                      </p>
                      <p className="text-base text-[#08a1f8] font-medium">
                        Win/Draw
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-base text-black font-medium">
                        {res?.predictions?.percent?.home}
                      </p>
                      <p className="text-base text-black font-medium">
                        {lossHPercent}%
                      </p>
                      <p className="text-base text-black font-medium">
                        {lossAPercent}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-Bebas text-xl tracking-normal text-[#08a1f8] text-center mb-4 mt-4">
                    Chances
                  </h4>
                  <div>
                    <h4 className="font-Bebas text-xl tracking-normal text-[#08a1f8] text-center mb-0 mt-4">
                      Draw
                    </h4>
                    <p className="text-base text-black font-medium">
                      {res?.predictions?.percent?.draw}
                    </p>
                  </div>
                </div>

                <div className="text-center md:pt-10">
                  <div className="flex justify-between px-4">
                    <div className="text-left">
                      <p className="text-base text-[#08a1f8] font-medium">
                        Win
                      </p>
                      <p className="text-base text-[#08a1f8] font-medium">
                        Lose
                      </p>
                      <p className="text-base text-[#08a1f8] font-medium">
                        Win/Draw
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-base text-black font-medium">
                        {res?.predictions?.percent?.away}
                      </p>
                      <p className="text-base text-black font-medium">
                        {lossAPercent}%
                      </p>
                      <p className="text-base text-black font-medium">
                        {lossHPercent}%
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* <div className="mt-8">
        <button className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
          Add to Pridiction slip
        </button>
      </div> */}
        </div>
      )}
    </div>
  );
};
