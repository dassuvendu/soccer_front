import React from "react";
import { dcUnitedIcon, fcDallaIcon } from "../../assets/images/images";

const HomeBannerMatchStartTime = () => {
  return (
    <div className="mt-20 mb-[20px] relative z-10 md:px-4 lg:px-0">
      <div className="max-full mx-auto">
        <div className="md:flex justify-center items-center">
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <img src={fcDallaIcon} alt="fcDallaIcon" />
            <div className="ml-2 text-right">
              <h2 className="font-Bebas text-[#18191b] text-3xl tracking-normal">
                FC Dallas
              </h2>
              <p className="text-[#9c9da1] text-[12px] italic">
                Major League Soccer
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mx-16 mb-4 md:mb-0">
            <ul className="flex justify-center items-center">
              <li className="text-center mx-2">
                <div className="flex justify-center items-center">
                  <span className="bg-[#282828] mr-0.5 font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                    8
                  </span>
                  <span className="bg-[#282828] font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                    8
                  </span>
                </div>
                <p className="text-[#282828] text-[10px] pt-0.5">Days</p>
              </li>
              :
              <li className="text-center mx-2">
                <div className="flex justify-center items-center">
                  <span className="bg-[#282828] mr-0.5 font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                    1
                  </span>
                  <span className="bg-[#282828] font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                    8
                  </span>
                </div>
                <p className="text-[#282828] text-[10px] pt-0.5">Hours</p>
              </li>
              :
              <li className="text-center mx-2">
                <div className="flex justify-center items-center">
                  <span className="bg-[#282828] mr-0.5 font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                    5
                  </span>
                  <span className="bg-[#282828] font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                    9
                  </span>
                </div>
                <p className="text-[#282828] text-[10px] pt-0.5">Minutes</p>
              </li>
              :
              <li className="text-center mx-2">
                <div className="flex justify-center items-center">
                  <span className="bg-[#282828] mr-0.5 font-Bebas font-medium tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] px-2 pt-2.5 pb-0">
                    4
                  </span>
                  <span className="bg-[#282828] font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                    7
                  </span>
                </div>
                <p className="text-[#282828] text-[10px] pt-0.5">Seconds</p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="mr-2 text-left">
              <h2 className="font-Bebas text-[#18191b] text-3xl tracking-normal">
                D.C.United
              </h2>
              <p className="text-[#9c9da1] text-[12px] italic">
                Major League Soccer
              </p>
            </div>
            <img src={dcUnitedIcon} alt="dcUnitedIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerMatchStartTime;
