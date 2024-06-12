import React, { useEffect } from "react";
import Banner from "./Banner";
import HomeBannerMatchStartTime from "./HomeBannerMatchStartTime";
import SoccerPrediction from "./SoccerPrediction";
import LastMatchResult from "./LastMatchResult";
import { Footer } from "flowbite-react";
import SelectPlan from "./SelectPlan";
import { useDispatch, useSelector } from "react-redux";
import CountdownTimer from "./CountTimer";
import { ToastContainer } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      <Helmet>
        <title>
          Playcope Analytics AI | Football Match Prediction and Statistics
        </title>
        <meta
          name="description"
          content="Playcope provides free football tips and predictions, free analysis, football forms and statistics, the latest results and league tables, and much more."
        />
      </Helmet>
      <ToastContainer />
      <Banner />
      <HomeBannerMatchStartTime />
      <SoccerPrediction />
      {/* <LastMatchResult /> */}
      <SelectPlan />
      {/* <CountdownTimer/> */}
    </div>
  );
};

export default Home;
