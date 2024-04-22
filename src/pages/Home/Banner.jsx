import React from "react";
import {
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
  soccerBannerText,
} from "../../assets/images/images";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    autoplay: true,
    // autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative px-8 lg:px-0">
      <div className="pt-[70px] pb-[40px] md:py-[100px] flex justify-center items-center">
        <img src={soccerBannerText} alt="soccerBannerText" />
      </div>
      <div className="absolute left-0 top-[20px] md:top-[20px] w-full px-8 lg:px-0">
        <Slider {...settings} className="mx-auto overflow-hidden">
          <div className="text-center">
            <img src={bannerImgOne} alt="bannerImgOne" />
          </div>
          <div className="text-center">
            <img src={bannerImgTwo} alt="bannerImgTwo" />
          </div>
          <div className="text-center">
            <img src={bannerImgThree} alt="bannerImgThree" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
