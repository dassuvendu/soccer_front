import React from "react";
import {
  ColumbusCrewIcon,
  HoustonDynamoIcon,
} from "../../assets/images/images";

const LastMatchResult = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-Bebas text-2xl md:text-5xl tracking-normal text-center mb-4 text-[#232a34]">
          Last Match Result
        </h2>
        {/* Last Match Result start here */}
        <div className="mt-10 mb-[20px]">
          <div className="max-full mx-auto">
            <div className="flex justify-center items-center">
              <div className="flex items-center">
                <img src={ColumbusCrewIcon} alt="ColumbusCrewIcon" />
                <div className="ml-3 text-right">
                  <h2 className="font-Bebas text-[#18191b] text-3xl tracking-normal">
                    Columbus Crew CS
                  </h2>
                  <p className="text-[#9c9da1] text-[12px] italic">Angola</p>
                </div>
              </div>
              <div className="mx-16 text-center">
                <p className="text-[#9c9da1] text-[14px] italic mb-4">
                  05 Apr 13:45
                </p>
                <h3 className="font-Bebas text-2xl md:text-6xl tracking-normal text-center mb-3 text-[#2aa9e1]">
                  2 - 1
                </h3>
                <p className="text-[#9c9da1] text-[14px] italic mb-4">
                  Barracuda Championship <br></br> Silverado Resort
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-left">
                  <h2 className="font-Bebas text-[#18191b] text-3xl tracking-normal">
                    Houston Dynamo
                  </h2>
                  <p className="text-[#9c9da1] text-[12px] italic">Comoros</p>
                </div>
                <img src={HoustonDynamoIcon} alt="HoustonDynamoIcon" />
              </div>
            </div>
          </div>
        </div>
        {/* Last Match Result ends here */}
        {/* Last Match Result list start here */}
        <div>
          <h3 className="font-Bebas text-white text-2xl text-center bg-[#18191b] tracking-normal py-4">
            next matches
          </h3>
          <div className="grid grid-cols-2 gap-0">
            <ul className="bg-[#f7f7f7] px-8 py-2 border border-[#e6e7e7] border-t-0">
              <li className="flex">
                <div className="font-Bebas text-center pr-5 text-[#18191b]">
                  <span className="text-[45px] leading-[45px] block">05</span>
                  <span className="text-[15px] leading-[15px] block">
                    April
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 mx-10">
                    <img src={ColumbusCrewIcon} alt="ColumbusCrewIcon" />
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-right font-semibold text-[#18191b]">
                    Columbus Crew CS
                  </div>
                  <div className="font-Bebas text-xl text-center text-[#2aa9e1] mx-5">
                    VS
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-left font-semibold text-[#18191b]">
                    Houston Dynamo
                  </div>
                  <div className="w-10 mx-10">
                    <img src={HoustonDynamoIcon} alt="HoustonDynamoIcon" />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="bg-[#f7f7f7] px-8 py-2 border border-[#e6e7e7] border-t-0">
              <li className="flex">
                <div className="font-Bebas text-center pr-5 text-[#18191b]">
                  <span className="text-[45px] leading-[45px] block">06</span>
                  <span className="text-[15px] leading-[15px] block">
                    April
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 mx-10">
                    <img src={ColumbusCrewIcon} alt="ColumbusCrewIcon" />
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-right font-semibold text-[#18191b]">
                    Orlando City SC
                  </div>
                  <div className="font-Bebas text-xl text-center text-[#2aa9e1] mx-5">
                    VS
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-left font-semibold text-[#18191b]">
                    Houston Dynamo
                  </div>
                  <div className="w-10 mx-10">
                    <img src={HoustonDynamoIcon} alt="HoustonDynamoIcon" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-0">
            <ul className="bg-[#f7f7f7] px-8 py-2 border border-[#e6e7e7] border-t-0">
              <li className="flex">
                <div className="font-Bebas text-center pr-5 text-[#18191b]">
                  <span className="text-[45px] leading-[45px] block">05</span>
                  <span className="text-[15px] leading-[15px] block">
                    April
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 mx-10">
                    <img src={ColumbusCrewIcon} alt="ColumbusCrewIcon" />
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-right font-semibold text-[#18191b]">
                    Columbus Crew CS
                  </div>
                  <div className="font-Bebas text-xl text-center text-[#2aa9e1] mx-5">
                    VS
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-left font-semibold text-[#18191b]">
                    Houston Dynamo
                  </div>
                  <div className="w-10 mx-10">
                    <img src={HoustonDynamoIcon} alt="HoustonDynamoIcon" />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="bg-[#f7f7f7] px-8 py-2 border border-[#e6e7e7] border-t-0">
              <li className="flex">
                <div className="font-Bebas text-center pr-5 text-[#18191b]">
                  <span className="text-[45px] leading-[45px] block">06</span>
                  <span className="text-[15px] leading-[15px] block">
                    April
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 mx-10">
                    <img src={ColumbusCrewIcon} alt="ColumbusCrewIcon" />
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-right font-semibold text-[#18191b]">
                    Orlando City SC
                  </div>
                  <div className="font-Bebas text-xl text-center text-[#2aa9e1] mx-5">
                    VS
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-left font-semibold text-[#18191b]">
                    Houston Dynamo
                  </div>
                  <div className="w-10 mx-10">
                    <img src={HoustonDynamoIcon} alt="HoustonDynamoIcon" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-0">
            <ul className="bg-[#f7f7f7] px-8 py-2 border border-[#e6e7e7] border-t-0">
              <li className="flex">
                <div className="font-Bebas text-center pr-5 text-[#18191b]">
                  <span className="text-[45px] leading-[45px] block">05</span>
                  <span className="text-[15px] leading-[15px] block">
                    April
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 mx-10">
                    <img src={ColumbusCrewIcon} alt="ColumbusCrewIcon" />
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-right font-semibold text-[#18191b]">
                    Columbus Crew CS
                  </div>
                  <div className="font-Bebas text-xl text-center text-[#2aa9e1] mx-5">
                    VS
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-left font-semibold text-[#18191b]">
                    Houston Dynamo
                  </div>
                  <div className="w-10 mx-10">
                    <img src={HoustonDynamoIcon} alt="HoustonDynamoIcon" />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="bg-[#f7f7f7] px-8 py-2 border border-[#e6e7e7] border-t-0">
              <li className="flex">
                <div className="font-Bebas text-center pr-5 text-[#18191b]">
                  <span className="text-[45px] leading-[45px] block">06</span>
                  <span className="text-[15px] leading-[15px] block">
                    April
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 mx-10">
                    <img src={ColumbusCrewIcon} alt="ColumbusCrewIcon" />
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-right font-semibold text-[#18191b]">
                    Orlando City SC
                  </div>
                  <div className="font-Bebas text-xl text-center text-[#2aa9e1] mx-5">
                    VS
                  </div>
                  <div className="w-[80px] text-[15px] leading-[20px] text-left font-semibold text-[#18191b]">
                    Houston Dynamo
                  </div>
                  <div className="w-10 mx-10">
                    <img src={HoustonDynamoIcon} alt="HoustonDynamoIcon" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Last Match Result list ends here */}
      </div>
    </div>
  );
};

export default LastMatchResult;