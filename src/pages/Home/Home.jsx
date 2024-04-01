import React, { useEffect } from "react";
import Banner from "./Banner";
import HomeBannerMatchStartTime from "./HomeBannerMatchStartTime";
import SoccerPrediction from "./SoccerPrediction";
import LastMatchResult from "./LastMatchResult";
import { Footer } from "flowbite-react";
import SelectPlan from "./SelectPlan";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  // const { fixtures } = useSelector((state) => state.prediction);
  // console.log("fix",fixtures);

  //  const dispatch = useDispatch()

  // const newdate = new Date();
  // const changeDateformate = newdate.toISOString().split("T")[0];
  
  // useEffect(()=>{
  //  dispatch(getFixtures({ date: changeDateformate }))
  // },[dispatch])

  // const matchStartTime = '2024-04-01T00:00:00';
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
