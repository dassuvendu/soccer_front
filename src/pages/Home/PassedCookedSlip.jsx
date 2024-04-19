import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { getOddsSlips } from "../../reducers/CookedSlipSlice";

export const PassedCookedSlip = () => {
  const { oddsData, isLoading } = useSelector((state) => state.cookedSlips);
  const date = new Date();
  console.log("date: ", date);
  const newDate = date.toISOString().split("T")[0];
  console.log("newDate: ", newDate);
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOddsSlips({ date: newDate }));
  }, []);
  console.log("odds: ", oddsData);

  return (
    <div className="pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-5 shadow-xl">
          <div className="flex justify-between items-center mb-5">
            <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
              #45678
            </p>
            <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
              High Risk
            </span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                3.03 Odds
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                5 Matches
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Strategy
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Double, Single
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                2278 Matches
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                1:30 PM
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Ends On
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                6:00 PM
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-0">
            <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
              <FaEye className="text-base mr-1" />
              View Slip Details
            </button>
            <div className="text-right flex items-center">
              <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                Passed
              </p>
              <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-xl">
          <div className="flex justify-between items-center mb-5">
            <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
              #45678
            </p>
            <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
              High Risk
            </span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                3.03 Odds
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                5 Matches
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Strategy
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Double, Single
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                2278 Matches
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                1:30 PM
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Ends On
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                6:00 PM
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-0">
            <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
              <FaEye className="text-base mr-1" />
              View Slip Details
            </button>
            <div className="text-right flex items-center">
              <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                Passed
              </p>
              <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-xl">
          <div className="flex justify-between items-center mb-5">
            <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
              #45678
            </p>
            <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
              High Risk
            </span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                3.03 Odds
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                5 Matches
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Strategy
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Double, Single
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                2278 Matches
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                1:30 PM
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Ends On
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                6:00 PM
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-0">
            <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
              <FaEye className="text-base mr-1" />
              View Slip Details
            </button>
            <div className="text-right flex items-center">
              <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                Passed
              </p>
              <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-xl">
          <div className="flex justify-between items-center mb-5">
            <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
              #45678
            </p>
            <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
              High Risk
            </span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                3.03 Odds
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                5 Matches
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Strategy
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Double, Single
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                2278 Matches
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                1:30 PM
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Ends On
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                6:00 PM
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-0">
            <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
              <FaEye className="text-base mr-1" />
              View Slip Details
            </button>
            <div className="text-right flex items-center">
              <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                Passed
              </p>
              <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-xl">
          <div className="flex justify-between items-center mb-5">
            <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
              #45678
            </p>
            <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
              High Risk
            </span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                3.03 Odds
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                5 Matches
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Strategy
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Double, Single
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                2278 Matches
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                1:30 PM
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Ends On
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                6:00 PM
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-0">
            <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
              <FaEye className="text-base mr-1" />
              View Slip Details
            </button>
            <div className="text-right flex items-center">
              <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                Passed
              </p>
              <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-xl">
          <div className="flex justify-between items-center mb-5">
            <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
              #45678
            </p>
            <span class="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
              High Risk
            </span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[23px] leading-[25px] font-bold text-[#191D23]">
                3.03 Odds
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-semibold text-[#191D23]">
                5 Matches
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Strategy
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Double, Single
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                2278 Matches
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                1:30 PM
              </span>
            </div>
            <div className="text-right">
              <p className="font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600">
                Ends On
              </p>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23]">
                Wed, 27 Mar, 2024
              </span>
              <span className="font-Montserrat text-[16px] leading-[18px] font-medium text-[#191D23] block">
                6:00 PM
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-0">
            <button className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full">
              <FaEye className="text-base mr-1" />
              View Slip Details
            </button>
            <div className="text-right flex items-center">
              <p className="font-Montserrat text-[16px] leading-[20px] font-bold text-[#191D23]">
                Passed
              </p>
              <TiTick className="font-Montserrat text-[18px] leading-[25px] font-bold text-green-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
