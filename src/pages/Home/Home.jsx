import React from "react";
import Banner from "./Banner";
import HomeBannerMatchStartTime from "./HomeBannerMatchStartTime";
import SoccerPrediction from "./SoccerPrediction";
import LastMatchResult from "./LastMatchResult";
import { Footer } from "flowbite-react";
import SelectPlan from "./SelectPlan";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeBannerMatchStartTime />
      <SoccerPrediction />
      {/* <LastMatchResult /> */}
      <SelectPlan />
    </div>
  );
};

export default Home;
