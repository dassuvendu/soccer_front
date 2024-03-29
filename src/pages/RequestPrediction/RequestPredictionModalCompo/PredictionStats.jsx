import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCheck, getUnlockCheck } from '../../../reducers/CheckUnlockSlice';
import { useNavigate } from 'react-router-dom';

export const PredictionStats = ({isfixturesId}) => {
  const { lastResult } = useSelector((state) => state.prediction);
  const {isLoading} = useSelector((state) => state.IsunLock)

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

  const {status} = useSelector((state)=> state.IsunLock)
  const navigate = useNavigate()

  // const token = localStorage.getItem("userToken");

  const [isUnlock,setIsUnlock] = useState(false)
  
  const [check,setCheck] = useState(false)

  const [message , setMessage] = useState()
  console.log(message);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCheck({fixture: isfixturesId })).then((res) => {
      console.log(res);
      setCheck(res?.payload?.status)
      setMessage(res.payload.message)
    })
    },[dispatch,isfixturesId])

  const handleClick = () =>{
   dispatch(getUnlockCheck({fixture: isfixturesId })).then((res)=>{
    setIsUnlock(res.payload.status);
    navigate('/my-prediction')
   })
      
}

  return (
     <div>
    
    {isUnlock === false && 
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
}
{isLoading === true && check === false &&
  <p className='text-red-600 flex justify-center  mb-10'>
       Checking..
     </p>
}
    </div>
   
  )
}
