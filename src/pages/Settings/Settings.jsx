import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { settingBanner, userFace } from "../../assets/images/images";
import { Button, FileInput, TextInput } from "flowbite-react";
import { FaRegCopy } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
const Settings = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="flex justify-between mb-8">
          <h1
            className={`${
              themeMode === "light" ? "text-[#0d0f11]" : "text-white"
            } font-Syne text-4xl font-bold mb-2`}
          >
            Settings
          </h1>
          <Link className="bg-[#08a1f8] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            Request Predictions <FiArrowRight className="text-white ml-0.5" />
          </Link>
        </div>
        {/* Banner start here */}
        <div
          className="bg-right-top bg-no-repeat rounded-xl bg-cover mb-6"
          style={{ backgroundImage: `url(${settingBanner})` }}
        >
          <div className="w-9/12 py-6 pl-10 pr-2">
            <h1 className="font-Syne text-4xl font-bold text-black mb-4">
              Referral Link
            </h1>
            <div className="flex items-center mb-5">
              <div className="copy_link_box bg-black rounded-full max-w-sm flex mr-4">
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="www.soccersm.ai/w/LJx-zVx"
                />
                <Button type="submit">
                  <FaRegCopy className="mr-1" /> Copy
                </Button>
              </div>
              <h3 className="text-black text-[24px] leading-[24px] font-medium">
                Total Referrals : 12
              </h3>
            </div>
            <p className="text-black text-[16px] leading-[24px] font-medium">
              Get ready for some easy wins! Just refer as many friends as you
              can, and you'll score free tokens for making predictions. Have
              your pals use your referral link when signing up, and when they
              snag tokens, you can check out and cash in on your well-deserved
              rewards. It's a breeze!
            </p>
          </div>
        </div>
        {/* Banner ends here */}
        {/* Setting edit section start here */}
        <div className="flex">
          <div className="w-5/12 bg-[#191D23] rounded-md p-5">
            <div className="flex justify-between items-center border-b border-[#DCDCDC] pb-3 mb-3">
              <h3 className="text-[20px] text-white font-normal">Overview</h3>
              <button>
                <AiFillEdit className="text-white text-[28px] hover:text-[#08a1f8]" />
              </button>
            </div>
            <div className="flex items-center border-b border-[#DCDCDC] pb-3 mb-6">
              <div className="mr-4">
                <img src={userFace} alt="userFace" className="rounded-full" />
              </div>
              <div>
                <p className="text-white text-[19px] leading-[20px] text-medium">
                  Eureka Seken
                </p>
                <p className="text-[#898989] text-[14px]">eureka88@email.com</p>
                <p className="text-white text-[14px] text-normal">
                  Licence : #45678
                </p>
              </div>
            </div>
            <div>
              <div className="flex mb-4">
                <div className="text-white text-[14px] text-normal w-4/12">
                  Contact phone
                </div>
                <div className="text-white text-[14px] text-normal w-8/12">
                  +62 087867654670
                </div>
              </div>
              <div className="flex mb-4">
                <div className="text-white text-[14px] text-normal w-4/12">
                  Address
                </div>
                <div className="text-white text-[14px] text-normal w-8/12">
                  23 Main Street, Anytown, USA 12345
                </div>
              </div>
              <div className="flex mb-0">
                <div className="text-white text-[14px] text-normal w-4/12">
                  Time Zone
                </div>
                <div className="text-white text-[14px] text-normal w-8/12">
                  Jakarta (GMT+7)
                </div>
              </div>
            </div>
          </div>
          <div className="w-7/12 bg-[#191D23] rounded-md p-5 ml-4">
            <div className="flex justify-between items-center border-b border-[#DCDCDC] pb-3 mb-3">
              <h3 className="text-[20px] text-white font-normal">
                Signin Methos
              </h3>
            </div>
            <div className="border-b border-[#DCDCDC] pb-3 pt-0 mb-3">
              <p className="text-white text-[15px] text-normal pb-0">
                Email Address
              </p>
              <p className="text-[#898989] text-[14px]">eureka88@email.com</p>
            </div>
            <div className="border-b border-[#DCDCDC] pb-0 pt-0 mb-0 flex items-center">
              <div className="w-9/12">
                <p className="text-white text-[15px] text-normal pb-1">
                  Password
                </p>
                <TextInput
                  id="base"
                  type="password"
                  sizing="md"
                  placeholder="********"
                  className="password_box"
                />
              </div>
              <div className="w-3/12">
                <button className="border border-[#2880DA] text-[12px] bg-black hover:bg-[#2880DA] text-white leading-[30px] px-3 rounded-md">
                  Change Password
                </button>
              </div>
            </div>
            <div className="mt-4 bg-black rounded-md p-4 flex justify-between items-center">
              <div className="flex">
                <MdVerifiedUser className="text-[#70B6C1] text-2xl mr-2" />
                <p className="text-white text-[16px]">Secure Your Account</p>
              </div>
              <div>
                <button className="bg-[#2880DA] text-white text-[14px] leading-[28px] rounded-md px-4 hover:bg-gray-400">
                  Enable
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Setting edit section ends here */}
      </div>
    </div>
  );
};

export default Settings;
