import React from "react";
import Banner from "./Banner";
import HomeBannerMatchStartTime from "./HomeBannerMatchStartTime";
import SoccerPrediction from "./SoccerPrediction";
import LastMatchResult from "./LastMatchResult";
import { Footer } from "flowbite-react";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeBannerMatchStartTime />
      <SoccerPrediction />
      <LastMatchResult />
    </div>
  );
};

export default Home;
