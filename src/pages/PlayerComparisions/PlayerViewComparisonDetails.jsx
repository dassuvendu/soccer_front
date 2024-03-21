import React from "react";
import { Modal, Spinner, Progress } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  DeportivoPastoIcon,
  EnvigadoIcon,
  fieldOne,
  fieldTwo,
  playerCompareOne,
  playerCompareTwo,
} from "../../assets/images/images";

const PlayerViewComparisonDetails = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { playerFDetails, playerSDetails } = useSelector(
    (state) => state.playerComparision
  );
  console.log(playerFDetails.response);
  return (
    <div className="pt-2 pb-2">
      <h2 className="font-Bebas text-3xl tracking-normal text-[#2aa9e1] mb-4">
        View Player Comparison Details
      </h2>

      {/* top part start here */}
      <div className="pt-6 pb-4 px-3 mb-4 border-b border-gray-300">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {playerFDetails?.response?.map((ply) => (
            <div className="text-center">
              <img
                src={ply?.player?.photo}
                alt={ply?.player?.name}
                className="inline-block mb-2 w-20"
              />
              <p
                className={`font-Syne text-[15px] leading-[20px] font-bold ${
                  themeMode === "light" ? "text-black" : "text-white"
                }`}
              >
                {ply?.player?.name}
              </p>
            </div>
          ))}
          <div className="flex justify-center items-center text-center">
            <div>
              <h3 className="text-[#2aa9e1] text-[18px] leading-[24px] font-medium">
                View Player Comparison Details
              </h3>
            </div>
          </div>
          {playerSDetails?.response?.map((ply) => (
            <div className="text-center">
              <img
                src={ply?.player?.photo}
                alt={ply?.player?.name}
                className="inline-block mb-2 w-20"
              />
              <p
                className={`font-Syne text-[15px] leading-[20px] font-bold ${
                  themeMode === "light" ? "text-black" : "text-white"
                }`}
              >
                {ply?.player?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* top part ends here */}

      {/* mid part start here */}
      <div className="pt-6 pb-4 px-3 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {playerFDetails?.response?.map((ply) => (
            <div className="text-center">
              <img
                src={ply?.player?.photo}
                alt={ply?.player?.name}
                className="inline-block mb-2 w-10"
              />
              <p
                className={`font-Syne text-[13px] leading-[13px] font-bold ${
                  themeMode === "light" ? "text-black" : "text-white"
                }`}
              >
                {ply?.player?.name}
              </p>
            </div>
          ))}
          <div className="text-center col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {playerFDetails?.response?.map((ply) => (
                <div>
                  <h3 className="text-base text-black font-semibold pb-10 underline">
                    Player Details
                  </h3>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      firstname:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.firstname}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      lastname:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.lastname}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      Name:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.name}
                    </p>
                  </div>

                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      Age:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.age}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      date:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.birth?.date}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      height:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.height}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      weight:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.weight}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      nationality:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.nationality}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      country:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.birth?.country}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      place:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.birth?.place}
                    </p>
                  </div>
                  {/* <div className="flex mb-4">
                  <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                    Match Played:
                  </p>
                  <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                    50
                  </p>
                </div>
                <div className="flex mb-4">
                  <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                    Total Goal:
                  </p>
                  <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                    65
                  </p>
                </div> */}
                </div>
              ))}
              {playerSDetails?.response?.map((ply) => (
                <div>
                  <h3 className="text-base text-black font-semibold pb-10 underline">
                    Player Details
                  </h3>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      firstname:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.firstname}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      lastname:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.lastname}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      Name:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.name}
                    </p>
                  </div>

                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      Age:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.age}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      date:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.birth?.date}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      height:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.height}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      weight:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.weight}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      nationality:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.nationality}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      country:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.birth?.country}
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <p className="text-[#2aa9e1] font-semibold text-[13px] leading-[16px] font-Montserrat pb-0 pr-2">
                      place:
                    </p>
                    <p className="text-black font-semibold text-[13px] leading-[16px] font-Montserrat pb-0">
                      {ply?.player?.birth?.place}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {playerSDetails?.response?.map((ply) => (
            <div className="text-center">
              <img
                src={ply?.player?.photo}
                alt={ply?.player?.name}
                className="inline-block mb-2 w-10"
              />
              <p
                className={`font-Syne text-[13px] leading-[13px] font-bold ${
                  themeMode === "light" ? "text-black" : "text-white"
                }`}
              >
                {ply?.player?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* mid part ends here */}
    </div>
  );
};

export default PlayerViewComparisonDetails;
