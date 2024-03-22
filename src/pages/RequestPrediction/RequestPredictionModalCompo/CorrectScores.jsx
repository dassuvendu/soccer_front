import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../../Auth/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { getCheck } from '../../../reducers/CheckUnlockSlice'

export const CorrectScores = ({isfixturesId}) => {

const {status} = useSelector((state)=> state.IsunLock)
  // const navigate = useNavigate()

  // const token = localStorage.getItem("userToken");

  const [isUnlock,setIsUnlock] = useState(false)
  console.log("is",isUnlock);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCheck({fixture: isfixturesId })).then((res) => {
      if (res?.payload?.status === false) {
        setIsUnlock(false)
      }
    },[dispatch,isfixturesId])
  },[dispatch,isfixturesId])
  const handleClick = () =>{
    // let access = 592872
    // dispatch(getCheck({fixture: access})).then((res) => {
    //   if (res?.payload?.status === true) {
        setIsUnlock(true)
      
  
}
  return (
    <div>
    
    {!isUnlock &&
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
       <p className='text-red-600 flex justify-center'>
       {status?.message}
     </p>
     </>
}
{isUnlock &&
    <div >
    <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
      <div className="text-center pt-10">
        <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-0 mt-4">
          Outcome
        </h4>
        <p className="text-base text-[#08a1f8] font-medium">
          Win, Mushuc Runa SC
        </p>
      </div>
      <div className="text-center">
        <h4 className="font-Bebas text-xl tracking-normal text-[#08a1f8] text-center mb-4 mt-4">
          Advice
        </h4>
      </div>
      <div className="text-center pt-10">
        <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-0 mt-4">
          Over/Under
        </h4>
        <p className="text-base text-[#08a1f8] font-medium">
          Under 4.5
        </p>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4 mb-4 border-b border-gray-300 py-3">
      <div className="text-center pt-10">
        <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-0 mt-4">
          Outcome
        </h4>
        <p className="text-base text-[#08a1f8] font-medium">
          Win, Mushuc Runa SC
        </p>
      </div>
      <div className="text-center">
        <h4 className="font-Bebas text-xl tracking-normal text-[#08a1f8] text-center mb-4 mt-4">
          Chances
        </h4>
      </div>
      <div className="text-center pt-10">
        <h4 className="font-Bebas text-xl tracking-normal text-black text-center mb-0 mt-4">
          Over/Under
        </h4>
        <p className="text-base text-[#08a1f8] font-medium">
          Under 4.5
        </p>
      </div>
    </div>
  </div>
}
  </div>
  )
}
