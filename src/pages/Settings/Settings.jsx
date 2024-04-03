import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  requestPredictionBanner,
  settingBanner,
  userFace,
} from "../../assets/images/images";
import { Button, FileInput, TextInput } from "flowbite-react";
import { FaRegCopy } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import { editProfile } from "../../reducers/profileSlice";
const Settings = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(editProfile());
  }, [dispatch]);
  console.log("user Profile: ", profile?.details);
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-screen py-4 mb-16">
        <div className="flex justify-between mb-8">
          <h1
            className={`${
              themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
            } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
          >
            Settings
          </h1>
          <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            Match Predictions <FiArrowRight className="text-white ml-0.5" />
          </Link>
        </div>
        {/* Banner start here */}
        <div
          className="bg-right-top bg-no-repeat rounded-xl bg-cover mb-6"
          style={{ backgroundImage: `url(${requestPredictionBanner})` }}
        >
          <div className="w-full md:w-9/12 py-14 pl-10 pr-2">
            <h1 className="font-Bebas text-4xl tracking-normal text-white mb-2">
              Referral Link
            </h1>
            <div className="md:flex items-center mb-5">
              <div className="copy_link_box bg-black rounded-full max-w-sm flex justify-between mr-4 mb-4 md:mb-0">
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
              <h3 className="text-white text-[24px] leading-[24px] font-medium">
                Total Referrals : 12
              </h3>
            </div>
            <p className="text-white text-[16px] leading-[24px] font-medium">
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
        <div className="md:flex">
          <div
            className={`w-full md:w-5/12 ${
              themeMode === "light" ? "bg-white" : "bg-[#191D23]"
            } rounded-md p-5 shadow-xl`}
          >
            <div className="flex justify-between items-center border-b border-[#DCDCDC] pb-3 mb-3">
              <h3
                className={`text-[20px]  ${
                  themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                } font-medium`}
              >
                Overview
              </h3>
              <button>
                <AiFillEdit
                  className={`${
                    themeMode === "light"
                      ? "text-[#2aa9e1] hover:text-black"
                      : "text-white"
                  } text-[28px] hover:text-[#2aa9e1]`}
                />
              </button>
            </div>
            <div className="flex items-center border-b border-[#DCDCDC] pb-3 mb-6">
              <div className="mr-4">
                <img src={userFace} alt="userFace" className="rounded-full" />
              </div>
              <div>
                <p
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[19px] leading-[20px] text-medium`}
                >
                  {profile?.details?.first_name}
                </p>
                <p className="text-[#898989] text-[14px]">
                  {" "}
                  {profile?.details?.username}
                </p>
                <p
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-medium`}
                >
                  Licence :
                </p>
              </div>
            </div>
            <div>
              <div className="flex mb-4">
                <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-medium w-4/12`}
                >
                  Contact phone
                </div>
                <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-normal w-8/12`}
                >
                  +62 087867654670
                </div>
              </div>
              <div className="flex mb-4">
                <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-medium w-4/12`}
                >
                  Address
                </div>
                <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-normal w-8/12`}
                >
                  23 Main Street, Anytown, USA 12345
                </div>
              </div>
              <div className="flex mb-0">
                <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-medium w-4/12`}
                >
                  Time Zone
                </div>
                <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-normal w-8/12`}
                >
                  Jakarta (GMT+7)
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full md:w-7/12 ${
              themeMode === "light" ? "bg-white" : "bg-[#191D23]"
            } rounded-md p-5 md:ml-4 mt-4 md:mt-0 shadow-xl`}
          >
            <div className="flex justify-between items-center border-b border-[#DCDCDC] pb-3 mb-3">
              <h3
                className={`text-[20px]  ${
                  themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                } font-medium`}
              >
                Signin Methos
              </h3>
            </div>
            <div className="border-b border-[#DCDCDC] pb-3 pt-0 mb-3">
              <p
                className={`${
                  themeMode === "light" ? "text-black" : "text-white"
                } text-[15px] text-normal pb-0`}
              >
                Email Address
              </p>
              <p className="text-[#898989] text-[14px]">eureka88@email.com</p>
            </div>
            <div className="border-b border-[#DCDCDC] pb-0 pt-0 mb-0 flex items-center">
              <div className="w-9/12">
                <p
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[15px] text-normal pb-0`}
                >
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
