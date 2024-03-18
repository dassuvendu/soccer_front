import React from "react";
import { Modal, Spinner, Progress } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  DeportivoPastoIcon,
  EnvigadoIcon,
  fieldOne,
  fieldTwo,
} from "../../assets/images/images";

const ViewComparisonDetails = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
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
              src={DeportivoPastoIcon}
              alt="DeportivoPastoIcon"
              className="inline-block mb-2"
            />
            <p
              className={`font-Syne text-[15px] leading-[20px] font-bold ${
                themeMode === "light" ? "text-black" : "text-white"
              }`}
            >
              Hoppers
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
              src={EnvigadoIcon}
              alt="EnvigadoIcon"
              className="inline-block mb-2"
            />
            <p
              className={`font-Syne text-[15px] leading-[20px] font-bold ${
                themeMode === "light" ? "text-black" : "text-white"
              }`}
            >
              All Saints United
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
              src={DeportivoPastoIcon}
              alt="DeportivoPastoIcon"
              className="inline-block mb-2 w-10"
            />
            <p
              className={`font-Syne text-[13px] leading-[13px] font-bold ${
                themeMode === "light" ? "text-black" : "text-white"
              }`}
            >
              Hoppers
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
                    38%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={38} className="Progress_bar_left" />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    63%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={63} className="Progress_bar_right" />
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
                    50%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={50} className="Progress_bar_left" />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    50%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={50} className="Progress_bar_right" />
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
                    0%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={0} className="Progress_bar_left" />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    100%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={100} className="Progress_bar_right" />
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
                    38%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={38} className="Progress_bar_left" />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    63%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={63} className="Progress_bar_right" />
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
                    33%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={33} className="Progress_bar_left" />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    67%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={67} className="Progress_bar_right" />
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
                    43.0%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={43} className="Progress_bar_left" />
                  </div>
                </div>
                <div>
                  <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat pb-1 text-right">
                    57.4%
                  </p>
                  <div className="text-base font-medium dark:text-white">
                    <Progress progress={57} className="Progress_bar_right" />
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
              src={EnvigadoIcon}
              alt="EnvigadoIcon"
              className="inline-block mb-2 w-10"
            />
            <p
              className={`font-Syne text-[13px] leading-[13px] font-bold ${
                themeMode === "light" ? "text-black" : "text-white"
              }`}
            >
              All Saints United
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
              1
            </h3>{" "}
            <p className="text-[#868686] text-[18px] leading-[24px] font-medium px-6">
              Draws
            </p>{" "}
            <h3 className="text-black text-[50px] leading-[50px] font-medium">
              0
            </h3>
          </div>
          <div className="bg-[#2aa9e1] p-4 rounded-xl flex items-center justify-center">
            <img
              src={DeportivoPastoIcon}
              alt="DeportivoPastoIcon"
              className="inline-block mb-0"
            />
            <p className="text-black text-[18px] leading-[24px] font-medium ml-4">
              Total Wins
            </p>
            <h3 className="text-white text-[50px] leading-[50px] font-medium px-4">
              0
            </h3>{" "}
          </div>
          <div className="bg-[#2aa9e1] p-4 rounded-xl flex items-center justify-center">
            <img
              src={EnvigadoIcon}
              alt="EnvigadoIcon"
              className="inline-block mb-0"
            />
            <p className="text-black text-[18px] leading-[24px] font-medium ml-4">
              Total Wins
            </p>
            <h3 className="text-white text-[50px] leading-[50px] font-medium px-4">
              1
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
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
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
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
              <div className="text-center flex justify-center items-center">
                <img
                  src={DeportivoPastoIcon}
                  alt="DeportivoPastoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
              <div className="text-center col-span-2">
                <h3 class="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                  Tue, 12 March, 2024
                </h3>
                <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                  <span className="text-[#2aa9e1]">
                    At Stadion Central'nyj,
                  </span>{" "}
                  First League
                </p>
                <div className="bg-[#2aa9e1] py-2 rounded-full">
                  <h3 className="text-white text-base">3 - 0</h3>
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <img
                  src={EnvigadoIcon}
                  alt="EnvigadoIcon"
                  className="inline-block mb-2 w-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom part ends here */}
    </div>
  );
};

export default ViewComparisonDetails;
