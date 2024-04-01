import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFixtures } from '../../reducers/PredictionsSlice';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useDateList, useTimeList } from '../../hooks/useDateTimeHooks';
import { useHomeTimeHook } from '../../hooks/useHomeTimeHook';
import { useHomeDateHook } from '../../hooks/useHomeDateHook';

export const PastMatch = () => {

const { fixtures } = useSelector((state) => state.prediction);

  const Items = fixtures?.data?.slice(0,6)
  console.log("y",Items);

  const [date, setYDate] = useState(null);
console.log("d",date);
  const day = date?.label.toString().split(',')[0]
  const newDate = date?.label.toString().split(',')[1]
  const year = date?.label.toString().split(',')[2]
  const dateFormate = newDate + "," + year ;
  console.log("y",dateFormate);

  const [time, setYTime] = useState(null);
  console.log("t",time);

  const [loadingData, setLoadingData] = useState(true);
  const [hide, setHide] = useState(false);

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const yesterdayFormatted = yesterday.toISOString().split("T")[0];
 
  const yesterdayTime = yesterday.toISOString().split("T")[1];
  const yesterdayTimeFormatted = yesterdayTime.split(".")[0];
console.log(yesterdayTimeFormatted);
  const dispatch = useDispatch()

  const [matchDateList] = useHomeDateHook(yesterdayFormatted);

    const [matchTimeList] = useHomeTimeHook(yesterdayTimeFormatted);
         


    useEffect(() => {
        dispatch(getFixtures({ date: yesterdayFormatted })).then((res) => {
          
          if (res?.payload?.status === true) {
            setLoadingData(false);
            setHide(true);
          } else {
            setLoadingData(true);
            setHide(false);
          }
        });
      }, [yesterdayFormatted]);
 

useEffect(() =>{
    setYDate(matchDateList);
    setYTime(matchTimeList);
},[fixtures])

const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
      day: '2-digit', // Day of the month (e.g., 01, 02, etc.)
      month: 'long', // Full month name (e.g., January, February, etc.)
      year: 'numeric', // Full year (e.g., 2004)
      hour: 'numeric', // Hour in 12-hour format (e.g., 1, 2, ... 12)
      minute: 'numeric', // Minutes (e.g., 00, 01, ... 59)
      hour12: true, // Use 12-hour clock format
    };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <div>  
        <div className="pt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {Items?.map((data)=>(
      <div className="bg-white rounded-2xl shadow-xl">
        <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
          <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
            Match Details
          </div>
          <div className="text-right">
            <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
              Friendlies | {day},
            </p>
            <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
            {formatDate(data?.fixture?.timestamp)}
            </p>
          </div>
        </div>
        
 <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
 <div className="grid grid-cols-3 gap-4 mb-4 h-32">
   <div className="text-center">
     <img
       src={data?.teams?.home?.logo}
       alt={data?.teams?.home?.name}
       className="inline-block mb-2"
       width={58}
       height={58}
     />
     <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
     {data?.teams?.home?.name}
     </p>
   </div>
   <div className="flex justify-center items-center">
     <div>
       <div className="mb-4 text-center">
         <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
           Score
         </p>
         <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
           <b>{data?.goals?.home} - {data?.goals?.away}</b>
         </span>
       </div>
       <div className="mb-4 text-center">
         <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
           Prediction
         </p>
         <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
           <b>2 - 0</b>
         </span>
       </div>
     </div>
   </div>
   <div className="text-center">
     <img
       src={data?.teams?.away?.logo}
       alt={data?.teams?.away?.name}
       className="inline-block mb-2"
       width={58}
       height={58}
     />
     <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
     {data?.teams?.away?.name}
     </p>
   </div>
 </div>
 <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
   <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
     View Details
     <FiArrowRight className="text-[#08a5f5] ml-0.5" />
   </Link>
 </div>
</div>
      
       
      </div>
        ))}
      {/* <div className="bg-white rounded-2xl shadow-xl">
        <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-2xl h-16">
          <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
            Match Details
          </div>
          <div className="text-right">
            <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
              Friendlies | Wednesday,
            </p>
            <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
              March 27, 2024 2:30 AM
            </p>
          </div>
        </div>
        <div className="pt-6 pb-4 px-3 border-2 border-gray-800 rounded-b-2xl">
          <div className="grid grid-cols-3 gap-4 mb-4 h-32">
            <div className="text-center">
              <img
                src={DeportivoPastoIcon}
                alt="DeportivoPastoIcon"
                className="inline-block mb-2"
                width={58}
                height={58}
              />
              <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                Deportivo Pasto
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <div className="mb-4 text-center">
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                    Score
                  </p>
                  <span className="bg-gray-800 text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                    <b>2 - 0</b>
                  </span>
                </div>
                <div className="mb-4 text-center">
                  <p className="text-[#08a5f5] font-semibold text-[12px] leading-[16px] font-Montserrat pb-1">
                    Prediction
                  </p>
                  <span className="bg-[#08a5f5] text-white font-medium text-[15px] leading-[25px] font-Montserrat inline-block px-4 py-0 rounded">
                    <b>2 - 0</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src={EnvigadoIcon}
                alt="EnvigadoIcon"
                className="inline-block mb-2"
                width={58}
                height={58}
              />
              <p className="font-Syne text-[14px] leading-[20px] font-bold text-black">
                Envigado
              </p>
            </div>
          </div>
          <div className="block rounded-full text-center mb-0 bg-gray-800 hover:bg-black">
            <Link className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
              View Details
              <FiArrowRight className="text-[#08a5f5] ml-0.5" />
            </Link>
          </div>
        </div>
      </div> */}
     
     
     
      
    </div>
  </div>
  </div>
  )
}
