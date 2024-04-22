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
  const { comparisons, isLoading } = useSelector(
    (state) => state.teamComparision
  );
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
      {isLoading ? (
        <div class="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
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
                        <Progress
                          progress={44}
                          className="Progress_bar_right"
                        />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {/* team1 */}

              <div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-Bebas tracking-normal text-xl text-black font-medium">
                      Formation
                    </h3>
                    <p className="text-base text-black font-medium">
                      {comparisons[0]?.left_team_formation}
                    </p>
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
                    <p className="text-base text-black font-medium">
                      {comparisons[0]?.right_team_formation}
                    </p>
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
                              {awayReult?.goals?.home} -{" "}
                              {awayReult?.goals?.away}
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
        </>
      )}
      {/* bottom part ends here */}
    </div>
  );
};

export default ViewComparisonDetails;
