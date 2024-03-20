import React from "react";
import { DeportivoPastoIcon, EnvigadoIcon } from "../../assets/images/images";

const ViewTeamInformationDetails = () => {
  return (
    <div className="pt-2 pb-2">
      <h2 className="font-Bebas text-3xl tracking-normal text-[#2aa9e1] mb-4">
        View Team Information Details
      </h2>

      <div className="mt-8">
        <div className="mb-2">
          <h3 className="font-Bebas text-xl tracking-normal">Statistics</h3>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="border border-[#d1d5db] p-4 rounded-xl flex">
            <div>
              <h3 className="font-Bebas text-xl tracking-normal pb-2">Goals</h3>
              <div className="flex">
                <div className="flex items-center mr-8">
                  <h2 className="text-[#2aa9e1] text-[28px] leading-[28px] font-semibold mr-4">
                    For
                  </h2>
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Home
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    0
                  </h3>
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Away
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    0
                  </h3>
                </div>
                <div className="flex items-center mr-8">
                  <h2 className="text-[#2aa9e1] text-[28px] leading-[28px] font-semibold mr-4">
                    Against
                  </h2>
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Home
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    0
                  </h3>
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Away
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    0
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-[#d1d5db] p-4 rounded-xl flex">
            <div>
              <h3 className="font-Bebas text-xl tracking-normal pb-2">
                Streak
              </h3>
              <div className="flex">
                <div className="flex items-center mr-8">
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Wins
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    0
                  </h3>
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Loses
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    0
                  </h3>
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Draws
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    0
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-2">
          <h3 className="font-Bebas text-xl tracking-normal">Clean Sheet</h3>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="border border-[#d1d5db] p-4 rounded-xl flex items-center justify-center">
            <p className="text-black text-[14px] leading-[24px] font-medium">
              Wins
            </p>
            <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Home
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Away
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-2">
          <h3 className="font-Bebas text-xl tracking-normal">Fixtures</h3>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="border border-[#d1d5db] p-4 rounded-xl flex items-center justify-center">
            <p className="text-black text-[14px] leading-[24px] font-medium">
              Wins
            </p>
            <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Home
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Away
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
          </div>
          <div className="border border-[#d1d5db] p-4 rounded-xl flex items-center justify-center">
            <p className="text-black text-[14px] leading-[24px] font-medium">
              Wins
            </p>
            <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Home
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Away
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
          </div>
          <div className="border border-[#d1d5db] p-4 rounded-xl flex items-center justify-center">
            <p className="text-black text-[14px] leading-[24px] font-medium">
              Wins
            </p>
            <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Home
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Away
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
          </div>
          <div className="border border-[#d1d5db] p-4 rounded-xl flex items-center justify-center">
            <p className="text-black text-[14px] leading-[24px] font-medium">
              Wins
            </p>
            <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Home
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
            <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
              Away
            </p>
            <h3 className="text-black text-[35px] leading-[35px] font-medium">
              0
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-Bebas text-xl tracking-normal">
          Recent Encounters
        </h3>
        <div>
          <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
            <div className="text-center flex justify-center items-center">
              <img
                src={DeportivoPastoIcon}
                alt="DeportivoPastoIcon"
                className="inline-block"
              />
            </div>
            <div className="text-center col-span-2">
              <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                Sun, 10th Mar 2024
              </h3>
              <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                <span className="text-[#2aa9e1]">
                  At Estadio Olímpico Metropolitano,
                </span>{" "}
                Liga Nacional
              </p>
              <div className="bg-[#2aa9e1] py-2 rounded-full">
                <h3 className="text-white text-base">2 - 0</h3>
              </div>
            </div>
            <div className="text-center flex justify-center items-center">
              <img
                src={EnvigadoIcon}
                alt="EnvigadoIcon"
                className="inline-block"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
            <div className="text-center flex justify-center items-center">
              <img
                src={DeportivoPastoIcon}
                alt="DeportivoPastoIcon"
                className="inline-block"
              />
            </div>
            <div className="text-center col-span-2">
              <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                Sun, 10th Mar 2024
              </h3>
              <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                <span className="text-[#2aa9e1]">
                  At Estadio Olímpico Metropolitano,
                </span>{" "}
                Liga Nacional
              </p>
              <div className="bg-[#2aa9e1] py-2 rounded-full">
                <h3 className="text-white text-base">2 - 0</h3>
              </div>
            </div>
            <div className="text-center flex justify-center items-center">
              <img
                src={EnvigadoIcon}
                alt="EnvigadoIcon"
                className="inline-block"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
            <div className="text-center flex justify-center items-center">
              <img
                src={DeportivoPastoIcon}
                alt="DeportivoPastoIcon"
                className="inline-block"
              />
            </div>
            <div className="text-center col-span-2">
              <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                Sun, 10th Mar 2024
              </h3>
              <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                <span className="text-[#2aa9e1]">
                  At Estadio Olímpico Metropolitano,
                </span>{" "}
                Liga Nacional
              </p>
              <div className="bg-[#2aa9e1] py-2 rounded-full">
                <h3 className="text-white text-base">2 - 0</h3>
              </div>
            </div>
            <div className="text-center flex justify-center items-center">
              <img
                src={EnvigadoIcon}
                alt="EnvigadoIcon"
                className="inline-block"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
            <div className="text-center flex justify-center items-center">
              <img
                src={DeportivoPastoIcon}
                alt="DeportivoPastoIcon"
                className="inline-block"
              />
            </div>
            <div className="text-center col-span-2">
              <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                Sun, 10th Mar 2024
              </h3>
              <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                <span className="text-[#2aa9e1]">
                  At Estadio Olímpico Metropolitano,
                </span>{" "}
                Liga Nacional
              </p>
              <div className="bg-[#2aa9e1] py-2 rounded-full">
                <h3 className="text-white text-base">2 - 0</h3>
              </div>
            </div>
            <div className="text-center flex justify-center items-center">
              <img
                src={EnvigadoIcon}
                alt="EnvigadoIcon"
                className="inline-block"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
            <div className="text-center flex justify-center items-center">
              <img
                src={DeportivoPastoIcon}
                alt="DeportivoPastoIcon"
                className="inline-block"
              />
            </div>
            <div className="text-center col-span-2">
              <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                Sun, 10th Mar 2024
              </h3>
              <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                <span className="text-[#2aa9e1]">
                  At Estadio Olímpico Metropolitano,
                </span>{" "}
                Liga Nacional
              </p>
              <div className="bg-[#2aa9e1] py-2 rounded-full">
                <h3 className="text-white text-base">2 - 0</h3>
              </div>
            </div>
            <div className="text-center flex justify-center items-center">
              <img
                src={EnvigadoIcon}
                alt="EnvigadoIcon"
                className="inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTeamInformationDetails;
