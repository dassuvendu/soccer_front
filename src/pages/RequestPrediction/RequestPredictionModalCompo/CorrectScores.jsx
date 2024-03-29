import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../../Auth/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { getCheck, getUnlockCheck } from '../../../reducers/CheckUnlockSlice'

export const CorrectScores = ({isfixturesId}) => {
const {isLoading} = useSelector((state) => state.IsunLock)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const token = localStorage.getItem("userToken");
  const [check,setCheck] = useState(false)
  const [isUnlock,setIsUnlock] = useState(false)
  // console.log("is",isUnlock);
  const [message , setMessage] = useState()
  console.log(message);

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

{isLoading === true && 
  <p className='text-red-600 flex justify-center  mb-10'>
       Checking..
     </p>
}

  </div>
  )
}
