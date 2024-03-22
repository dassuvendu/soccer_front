import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../../Auth/Login/Login'

export const CorrectScores = ({isUnlock}) => {

  const navigate = useNavigate()

  const handleClick = () =>{
   
  }
  return (
    <div>
    
    {!isUnlock ?
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
:
    <div className='hidden'>
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
