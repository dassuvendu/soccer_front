import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BuyTokenIcon } from "../../assets/images/images";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Label } from "flowbite-react";

const TeamComparisions = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-screen py-4">
        <div className="flex justify-between mb-8">
          <h1
            className={`${
              themeMode === "light" ? "text-[#0d0f11]" : "text-white"
            } font-Syne text-4xl font-bold mb-2`}
          >
            Team Comparisions
          </h1>
          <Link className="bg-[#08a1f8] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            Request Predictions <FiArrowRight className="text-white ml-0.5" />
          </Link>
        </div>
        <div className="bg-[#191D23] rounded-xl py-[60px]">
          <div className="max-w-2xl mx-auto">
            <Tabs className="team_comparisions_tab_section">
              <TabList>
                <Tab>Past Matches</Tab>
                <Tab>Single Team Info</Tab>
              </TabList>
              <TabPanel>
                <div>
                  <h2 className="font-Syne text-[33px] font-bold text-white">
                    Compare Teams
                  </h2>
                  <p className="font-Montserrat text-[19px] leading-[25px] font-medium text-white">
                    View statistics, head to head information, team analysis and
                    simple predictions
                  </p>
                  <div className="mt-8">
                    <div className="mb-4">
                      <Label className="text-[14px] font-medium text-white pb-1 block">
                        Eearch for First Team
                      </Label>
                      <div className="relative w-full bg-[#151718] rounded-[25px] p-1 flex border border-[#606060]">
                        <input
                          type="text"
                          id="simple-search"
                          className="ml-3 h-[40px] bg-transparent text-[#606060] border-0 text-[14px] focus:ring-[#151718] focus:border-[#151718] block w-ful ps- p-0 w-full"
                          placeholder="First Team"
                          required
                        />
                        <div className="flex items-center px-3 pointer-events-none w-[40px] h-[40px] rounded-full">
                          <svg
                            className="w-5 h-5 text-[#606060]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <Label className="text-[14px] font-medium text-white pb-1 block">
                        Search for Second Team
                      </Label>
                      <div className="relative w-full bg-[#151718] rounded-[25px] p-1 flex border border-[#606060]">
                        <input
                          type="text"
                          id="simple-search"
                          className="ml-3 h-[40px] bg-transparent text-[#606060] border-0 text-[14px] focus:ring-[#151718] focus:border-[#151718] block w-ful ps- p-0 w-full"
                          placeholder="Second Team"
                          required
                        />
                        <div className="flex items-center px-3 pointer-events-none w-[40px] h-[40px] rounded-full">
                          <svg
                            className="w-5 h-5 text-[#606060]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button className="bg-[#08A1F8] rounded-full text-[18px] leading-[50px] w-full text-white hover:bg-[#2854b7] mt-4">
                      View comparison
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-6">
                  <p className="text-white pb-4 text-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p className="text-white pb-4 text-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>{" "}
                  <p className="text-white pb-4 text-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComparisions;
