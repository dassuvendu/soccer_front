import React from "react";
import { bannerImgOne, soccerBannerText } from "../../assets/images/images";

const Banner = () => {
  return (
    <div className="relative">
      <div className="py-[100px] flex justify-center items-center">
        <img src={soccerBannerText} alt="soccerBannerText" />
      </div>
      <div className="absolute left-0 top-0 w-full">
        <div className="flex justify-center items-center">
          <img src={bannerImgOne} alt="bannerImgOne" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
