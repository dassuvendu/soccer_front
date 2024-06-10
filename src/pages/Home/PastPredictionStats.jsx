import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const PastPredictionStats = () => {
  const { lastResult } = useSelector((state) => state.prediction);
  console.log("last", lastResult);
  //   const {isLoading} = useSelector((state) => state.IsunLock)

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

  return (
    <div>
      {/* { check &&  */}
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
                win {res?.predictions?.winner?.name}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-Bebas text-xl tracking-normal text-[#08a1f8] text-center mb-4 mt-4">
                Advice
              </h4>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 py-3">
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
                  <div className="text-right pl-2 md:pl-0">
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
                  <div className="text-right pl-2 md:pl-0">
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
      </div>
      {/* } */}
    </div>
  );
};
