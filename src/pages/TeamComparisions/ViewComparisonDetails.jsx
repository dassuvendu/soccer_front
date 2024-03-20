import React from "react";
import { Modal, Spinner, Progress } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeportivoPastoIcon,
  EnvigadoIcon,
  fieldOne,
  fieldTwo,
} from "../../assets/images/images";
import { CompTeams } from "../../reducers/TeamComparisonSlice";
import {
  LastAwayResult,
  LastHomeResult,
} from "../../reducers/PredictionsSlice";

const ViewComparisonDetails = ({ id1, id2 }) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { comparisons } = useSelector((state) => state.teamComparision);
  const { lastHomeResult } = useSelector((state) => state.prediction);
  const { lastAwayResult } = useSelector((state) => state.prediction);
  const dispatch = useDispatch();
  console.log("team1id Modal: ", id1);
  console.log("team2id Modal: ", id2);
  useEffect(() => {
    dispatch(LastHomeResult({ team: id1, last: 5 }));
    dispatch(LastAwayResult({ team: id2, last: 5 }));
  }, [dispatch, dispatch]);
  console.log("lastHome: ", lastHomeResult);
  console.log("lastaway: ", lastHomeResult);
  useEffect(() => {
    dispatch(CompTeams({ h2h: `${id1}-${id2}` }));
  }, [dispatch]);
  console.log("comparison teams: ", comparisons[0]?.left_team_details[0]?.name);
  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="pt-2 pb-2">
      <h2 className="font-Bebas text-3xl tracking-normal text-[#2aa9e1] mb-4">
        View Comparison Details
      </h2>

      {/* top part start here */}
      <div className="pt-6 pb-4 px-3 mb-4 border-b border-gray-300">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <img
              src={comparisons[0]?.left_team_details[0]?.logo}
              alt={comparisons[0]?.left_team_details[0]?.name}
              className="inline-block mb-2"
            />
            <p
              className={`font-Syne text-[15px] leading-[20px] font-bold ${
                themeMode === "light" ? "text-black" : "text-white"
              }`}
            >
              {comparisons[0]?.left_team_details[0]?.name}
            </p>
          </div>

          <div className="flex justify-center items-center text-center">
            <div>
              <h3 className="text-[#2aa9e1] text-[18px] leading-[24px] font-medium">
                View Comparison Details
              </h3>
            </div>
          </div>

          <div className="text-center">
            <img
              src={comparisons[0]?.right_team_details[0]?.logo}
              alt={comparisons[0]?.right_team_details[0]?.name}
              className="inline-block mb-2"
            />
            <p
              className={`font-Syne text-[15px] leading-[20px] font-bold ${
                themeMode === "light" ? "text-black" : "text-white"
              }`}
            >
              {comparisons[0]?.right_team_details[0]?.name}
            </p>
          </div>
        </div>
      </div>
      {/* top part ends here */}

      {/* mid part start here */}
      <div className="pt-6 pb-4 px-3 mb-4 border-b border-gray-300">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <img
              src={comparisons[0]?.left_team_details[0]?.logo}
              alt={comparisons[0]?.left_team_details[0]?.name}
              className="inline-block mb-2 w-10"
            />
            <p
              className={`font-Syne text-[13px] leading-[13px] font-bold ${
                themeMode === "light" ? "text-black" : "text-white"
              }`}
            >
              {comparisons[0]?.left_team_details[0]?.name}
            </p>
          </div>

          <div className="text-center col-span-2">
            <div className="mb-10">
              <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                Attack
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-left">
                    {comparisons[0]?.comparison[0]?.left_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[0]?.left_team_percent
                      }
                      className="Progress_bar_left"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    {comparisons[0]?.comparison[0]?.right_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[0]?.right_team_percent
                      }
                      className="Progress_bar_right"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                Defense
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-left">
                    {comparisons[0]?.comparison[1]?.left_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[1]?.left_team_percent
                      }
                      className="Progress_bar_left"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    {comparisons[0]?.comparison[1]?.right_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[1]?.right_team_percent
                      }
                      className="Progress_bar_right"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                Head to Head
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-left">
                    {comparisons[0]?.comparison[2]?.left_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[2]?.left_team_percent
                      }
                      className="Progress_bar_left"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    {comparisons[0]?.comparison[2]?.right_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[2]?.right_team_percent
                      }
                      className="Progress_bar_right"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                Form
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-left">
                    {comparisons[0]?.comparison[3]?.left_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[3]?.left_team_percent
                      }
                      className="Progress_bar_left"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    {comparisons[0]?.comparison[3]?.right_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[3]?.right_team_percent
                      }
                      className="Progress_bar_right"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                Goals
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-left">
                    {comparisons[0]?.comparison[4]?.left_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[4]?.left_team_percent
                      }
                      className="Progress_bar_left"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    {comparisons[0]?.comparison[4]?.right_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[4]?.right_team_percent
                      }
                      className="Progress_bar_right"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                Total
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-left">
                    {comparisons[0]?.comparison[5]?.left_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[5]?.left_team_percent
                      }
                      className="Progress_bar_left"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    {comparisons[0]?.comparison[5]?.right_team_percent}%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress
                      progress={
                        comparisons[0]?.comparison[5]?.right_team_percent
                      }
                      className="Progress_bar_right"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                Poisson Distribution
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-left">
                    56%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={56} className="Progress_bar_left" />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    44%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={44} className="Progress_bar_right" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <img
              src={comparisons[0]?.right_team_details[0]?.logo}
              alt={comparisons[0]?.right_team_details[0]?.name}
              className="inline-block mb-2 w-10"
            />
            <p
              className={`font-Syne text-[13px] leading-[13px] font-bold ${
                themeMode === "light" ? "text-black" : "text-white"
              }`}
            >
              {comparisons[0]?.right_team_details[0]?.name}
            </p>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="border border-[#d1d5db] p-4 rounded-xl flex items-center justify-center">
            <p className="text-black text-[18px] leading-[24px] font-medium">
              Played
            </p>
            <h3 className="text-[#2aa9e1] text-[50px] leading-[50px] font-medium px-4">
              {comparisons[0]?.total_matches_played}
            </h3>{" "}
            <p className="text-[#868686] text-[18px] leading-[24px] font-medium px-6">
              Draws
            </p>{" "}
            <h3 className="text-black text-[50px] leading-[50px] font-medium">
              {comparisons[0]?.draws_count}
            </h3>
          </div>
          <div className="bg-[#2aa9e1] p-4 rounded-xl flex items-center justify-center">
            <img
              src={comparisons[0]?.left_team_details[0]?.logo}
              alt={comparisons[0]?.left_team_details[0]?.name}
              className="inline-block mb-0"
            />
            <p className="text-black text-[18px] leading-[24px] font-medium ml-4">
              Total Wins
            </p>
            <h3 className="text-white text-[50px] leading-[50px] font-medium px-4">
              {comparisons[0]?.left_team_wins}
            </h3>{" "}
          </div>
          <div className="bg-[#2aa9e1] p-4 rounded-xl flex items-center justify-center">
            <img
              src={comparisons[0]?.right_team_details[0]?.logo}
              alt={comparisons[0]?.right_team_details[0]?.name}
              className="inline-block mb-0"
            />
            <p className="text-black text-[18px] leading-[24px] font-medium ml-4">
              Total Wins
            </p>
            <h3 className="text-white text-[50px] leading-[50px] font-medium px-4">
              {comparisons[0]?.right_team_wins}
            </h3>{" "}
          </div>
        </div>
        {/*  */}
      </div>
      {/* mid part ends here */}

      {/* bottom part start here */}
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-8 ">
          {/* team1 */}

          <div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <h3 className="font-Bebas tracking-normal text-xl text-black font-medium">
                  Formation
                </h3>
                <p className="text-base text-black font-medium">4-4-2</p>
              </div>
              <img
                src={fieldOne}
                alt="fieldOne"
                className="w-full rounded-xl"
              />
            </div>
            <h4 className="font-Bebas text-xl tracking-normal text-black mb-4 text-center mt-4">
              Recent Encounters
            </h4>
            {lastHomeResult?.data?.map((homeResults) => {
              return (
                <>
                  <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
                    <div className="text-center flex justify-center items-center">
                      <img
                        src={homeResults?.teams?.home?.logo}
                        alt={homeResults?.teams?.home?.name}
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                    <div className="text-center col-span-2">
                      <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                        {formatDate(homeResults?.fixture?.date)}
                      </h3>
                      <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                        <span className="text-[#2aa9e1]">
                          {homeResults?.fixture?.venue?.name}
                        </span>{" "}
                        {homeResults?.league?.name}
                      </p>
                      <div className="bg-[#2aa9e1] py-2 rounded-full">
                        <h3 className="text-white text-base">
                          {homeResults?.goals?.home} -{" "}
                          {homeResults?.goals?.away}
                        </h3>
                      </div>
                    </div>
                    <div className="text-center flex justify-center items-center">
                      <img
                        src={homeResults?.teams?.away?.logo}
                        alt={homeResults?.teams?.away?.name}
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/* team2 */}

          <div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <h3 className="font-Bebas tracking-normal text-xl text-black font-medium">
                  Formation
                </h3>
                <p className="text-base text-black font-medium">4-4-2</p>
              </div>
              <img
                src={fieldTwo}
                alt="fieldTwo"
                className="w-full rounded-xl"
              />
            </div>
            <h4 className="font-Bebas text-xl tracking-normal text-black mb-4 text-center mt-4">
              Recent Encounters
            </h4>
            {lastAwayResult?.data?.map((awayReult) => {
              return (
                <>
                  <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
                    <div className="text-center flex justify-center items-center">
                      <img
                        src={awayReult?.teams?.home?.logo}
                        alt={awayReult?.teams?.home?.name}
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                    <div className="text-center col-span-2">
                      <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                        {formatDate(awayReult?.fixture?.date)}
                      </h3>
                      <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                        <span className="text-[#2aa9e1]">
                          {awayReult?.fixture?.venue?.name}
                        </span>{" "}
                        {awayReult?.league?.name}
                      </p>
                      <div className="bg-[#2aa9e1] py-2 rounded-full">
                        <h3 className="text-white text-base">
                          {awayReult?.goals?.home} - {awayReult?.goals?.away}
                        </h3>
                      </div>
                    </div>
                    <div className="text-center flex justify-center items-center">
                      <img
                        src={awayReult?.teams?.away?.logo}
                        alt={awayReult?.teams?.away?.logo}
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* bottom part ends here */}
    </div>
  );
};

export default ViewComparisonDetails;
