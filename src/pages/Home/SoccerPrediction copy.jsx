import React, { useEffect } from "react";
import { reventNews01, teamIcon01 } from "../../assets/images/images";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
const SoccerPrediction = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#2aa9e1] py-10 lg:py-24 px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="bg-white rounded p-6"
          >
            <h2 className="font-Bebas text-3xl tracking-normal pb-3">
              Recent News
            </h2>
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={reventNews01}
                  alt="reventNews01"
                  className="w-[60px] h-[64px]"
                />
                <div className="ml-3">
                  <Link className="text-black hover:text-[#2aa9e1] text-[15px] leading-[15px] font-medium">
                    Alex Morgan to Hold First Youth Soccer Camp
                  </Link>
                  <ul className="flex items-center">
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium italic">
                      Mark Doe
                    </li>
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium mx-2">
                      |
                    </li>
                    <li>
                      <Link className="text-[#2aa9e1] hover:text-black text-[14px] leading-[14px] font-medium italic">
                        April 6, 2016
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={reventNews01}
                  alt="reventNews01"
                  className="w-[60px] h-[64px]"
                />
                <div className="ml-3">
                  <Link className="text-black hover:text-[#2aa9e1] text-[15px] leading-[15px] font-medium">
                    U.S. Soccer Players Feel More Welcome in England
                  </Link>
                  <ul className="flex items-center">
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium italic">
                      Mark Doe
                    </li>
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium mx-2">
                      |
                    </li>
                    <li>
                      <Link className="text-[#2aa9e1] hover:text-black text-[14px] leading-[14px] font-medium italic">
                        April 6, 2016
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={reventNews01}
                  alt="reventNews01"
                  className="w-[60px] h-[64px]"
                />
                <div className="ml-3">
                  <Link className="text-black hover:text-[#2aa9e1] text-[15px] leading-[15px] font-medium">
                    Soccer Players to Lead Strawberry Parade
                  </Link>
                  <ul className="flex items-center">
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium italic">
                      Mark Doe
                    </li>
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium mx-2">
                      |
                    </li>
                    <li>
                      <Link className="text-[#2aa9e1] hover:text-black text-[14px] leading-[14px] font-medium italic">
                        April 6, 2016
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={reventNews01}
                  alt="reventNews01"
                  className="w-[60px] h-[64px]"
                />
                <div className="ml-3">
                  <Link className="text-black hover:text-[#2aa9e1] text-[15px] leading-[15px] font-medium">
                    2 Soccer Players Suspended
                  </Link>
                  <ul className="flex items-center">
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium italic">
                      Mark Doe
                    </li>
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium mx-2">
                      |
                    </li>
                    <li>
                      <Link className="text-[#2aa9e1] hover:text-black text-[14px] leading-[14px] font-medium italic">
                        April 6, 2016
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center mb-0">
                <img
                  src={reventNews01}
                  alt="reventNews01"
                  className="w-[60px] h-[64px]"
                />
                <div className="ml-3">
                  <Link className="text-black hover:text-[#2aa9e1] text-[15px] leading-[15px] font-medium">
                    Soccer Players Head to France
                  </Link>
                  <ul className="flex items-center">
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium italic">
                      Mark Doe
                    </li>
                    <li className="text-[#babbbf] text-[14px] leading-[14px] font-medium mx-2">
                      |
                    </li>
                    <li>
                      <Link className="text-[#2aa9e1] hover:text-black text-[14px] leading-[14px] font-medium italic">
                        April 6, 2016
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className="bg-white rounded-t p-6">
              <h2 className="font-Bebas text-3xl tracking-normal pb-3">
                League Table
              </h2>
              <div>
                <div className="flex items-center mb-5">
                  <ul className="flex items-center w-full">
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      1
                    </li>
                    <li className="w-2/12">
                      <img src={teamIcon01} alt="teamIcon01" />
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Liverpool
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Liverpool
                    </li>
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      40
                    </li>
                  </ul>
                </div>
                <div className="flex items-center mb-5">
                  <ul className="flex items-center w-full">
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      2
                    </li>
                    <li className="w-2/12">
                      <img src={teamIcon01} alt="teamIcon01" />
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Valenciaca
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Valencia
                    </li>
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      38
                    </li>
                  </ul>
                </div>
                <div className="flex items-center mb-5">
                  <ul className="flex items-center w-full">
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      3
                    </li>
                    <li className="w-2/12">
                      <img src={teamIcon01} alt="teamIcon01" />
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Prestige
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Montreal
                    </li>
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      36
                    </li>
                  </ul>
                </div>
                <div className="flex items-center mb-5">
                  <ul className="flex items-center w-full">
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      4
                    </li>
                    <li className="w-2/12">
                      <img src={teamIcon01} alt="teamIcon01" />
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Real Madrid
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Real Madrid
                    </li>
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      36
                    </li>
                  </ul>
                </div>
                <div className="flex items-center mb-5">
                  <ul className="flex items-center w-full">
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      5
                    </li>
                    <li className="w-2/12">
                      <img src={teamIcon01} alt="teamIcon01" />
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Millenium Utd
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Houston
                    </li>
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      34
                    </li>
                  </ul>
                </div>
                <div className="flex items-center mb-5">
                  <ul className="flex items-center w-full">
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      6
                    </li>
                    <li className="w-2/12">
                      <img src={teamIcon01} alt="teamIcon01" />
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Chelsea
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Los Angeles
                    </li>
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      33
                    </li>
                  </ul>
                </div>
                <div className="flex items-center mb-5">
                  <ul className="flex items-center w-full">
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      7
                    </li>
                    <li className="w-2/12">
                      <img src={teamIcon01} alt="teamIcon01" />
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Cannon
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Chicago
                    </li>
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      33
                    </li>
                  </ul>
                </div>
                <div className="flex items-center mb-5">
                  <ul className="flex items-center w-full">
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      8
                    </li>
                    <li className="w-2/12">
                      <img src={teamIcon01} alt="teamIcon01" />
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      Soccer Club
                    </li>
                    <li className="w-4/12 text-black text-[15px] leading-[15px] font-medium">
                      New York
                    </li>
                    <li className="w-1/12 text-black text-[15px] leading-[15px] font-medium">
                      32
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Link className="bg-[#18191b] hover:bg-white text-white hover:text-[#2aa9e1] text-base font-medium uppercase py-4 block text-center">
                View full table
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="md:col-span-2 lg:col-span-1"
          >
            <h2 className="soccer_prediction font-Bebas text-white py-5 text-6xl lg:text-8xl tracking-normal mb-6">
              Soccer Prediction
            </h2>
            <p className="text-[15px] text-white pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ornare augue ullamcorper urna facilisis feugiat. Etiam quis nunc
              id mi luctus tincidunt non eu eros.
            </p>
            <p className="text-[15px] text-white pb-5">
              Aliquam suscipit dictum orci, quis finibus justo gravida vitae.
              Donec orci felis, posuere et congue et, sollicitudin ac dui.
            </p>
            <Link className="text-base font-medium hover:bg-[#18191b] text-white text-center w-full block border-2 py-2 border-white hover:border-[#18191b]">
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoccerPrediction;
