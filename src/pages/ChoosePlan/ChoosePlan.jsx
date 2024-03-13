import React from "react";
import Plan from "../ChoosePlan/plan";
import { bannerImgTwo } from "../../assets/images/images";

const ChoosePlan = () => {
  return (
    <>
      <div className="relative px-8 lg:px-0">
        <div className="pt-[20px] pb-[20px] flex justify-center items-center">
          <img
            src={bannerImgTwo}
            alt="bannerImgTwo"
            className="w-full md:w-8/12 lg:w-4/12"
          />
        </div>
        <div className="absolute left-0 top-32 w-full">
          <h2 className="font-Bebas text-4xl md:text-8xl tracking-normal text-center mb-4 text-[#2aa9e1]">
            Choose Plan
          </h2>
        </div>
      </div>
      <div className="py-10 lg:py-24 px-8 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <Plan />
        </div>
      </div>
    </>
  );
};

export default ChoosePlan;
