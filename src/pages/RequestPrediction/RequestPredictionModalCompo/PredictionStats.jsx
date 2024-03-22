import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const PredictionStats = ({isUnlock}) => {
  const { lastResult } = useSelector((state) => state.prediction);

  const [lossHPercent, setLossHPercent] = useState();
  const [lossAPercent, setLossAPercent] = useState();

  useEffect(() => {
    if (
      lastResult &&
      lastResult.data &&
      lastResult.data.length > 0
    ) {
      let data = lastResult?.data[0];
      let fullPercent = 100
      let homeWinPercent = data?.predictions?.percent?.home
      let awayWinPercent = data?.predictions?.percent?.away
      let Hpoint = homeWinPercent.split('%')[0]
      let Apoint = awayWinPercent.split('%')[0]
      let lossHResult = fullPercent - Hpoint
      let lossAResult = fullPercent - Apoint
      setLossHPercent(lossHResult)
      setLossAPercent(lossAResult)
    }

  }, [lastResult]);

  
  return (
     <div>
      {!isUnlock ?
      <div className="flex justify-center mt-10">
        <button  
        type="button" 
        class="text-white bg-blue-700 
        hover:bg-blue-800 font-medium 
        rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
        >
          Unlock Prediction
          </button>
      </div>
      :
      <div className='hidden'>

      
      {lastResult?.data?.map((res) => (

        <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3" key={res.id}>

          <div className="text-center pt-10">
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
              {res?.predictions?.advice}
            </p>
          </div>
          <div className="text-center pt-10">
            <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-0 mt-4">
              Over/Under
            </h4>
            <p className="text-base text-[#08a1f8] font-medium">
              {res?.predictions?.under_over}
            </p>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
        {lastResult?.data?.map((res) => (
          <>
            <div className="text-center pt-10">
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

            <div className="text-center pt-10">
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

      <div className="mt-8">
        <button className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
          Add to Pridiction slip
        </button>
      </div>

      </div>
      }
    </div>
  )
}
