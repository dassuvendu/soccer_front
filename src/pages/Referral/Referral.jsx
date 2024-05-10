import React from "react";
import { Link } from "react-router-dom";
import { earnIcon, inviteIcon } from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, Select, TextInput } from "flowbite-react";
import { BsCopy, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaPinterest } from "react-icons/fa6";

export const Referral = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-screen py-4 mb-16">
        <div className="flex justify-between mb-8">
          <h1
            className={`${
              themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
            } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
          >
            Referral
          </h1>
        </div>

        {/* Setting edit section start here */}
        <div className="md:flex mb-6">
          <div className="w-full md:w-6/12 ">
            <div
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } rounded-md p-5 shadow-xl mb-6`}
            >
              <div className="flex justify-between items-center pb-0 mb-3">
                <h3
                  className={`text-[20px]  ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                  } font-medium`}
                >
                  Invite your friends through email
                </h3>
              </div>
              <div className="py-4">
                <div>
                  <TextInput
                    id="base"
                    type="email"
                    sizing="md"
                    placeholder="Enter email address"
                  />
                </div>
                <button className="mt-4 border border-[#2880DA] text-[14px] bg-black hover:bg-[#2880DA] text-white leading-[38px] px-6 rounded-md">
                  Invite
                </button>
              </div>
            </div>
            <div
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } rounded-md p-5 shadow-xl mb-6`}
            >
              <div className="flex justify-between items-center pb-0 mb-3">
                <h3
                  className={`text-[20px]  ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                  } font-medium`}
                >
                  Commission payout
                </h3>
              </div>
              <div className="py-4">
                <div className="border border-[#dadada] rounded-md py-4 text-center">
                  <h3 className="text-[#2aa9e1] text-2xl font-semibold">$0</h3>
                  <p className="text-[#7e859f] text-base">Approvel rewards</p>
                </div>
              </div>
              <div className="flex gap-4 w-full mt-4">
                <div className="w-11/12">
                  <Select id="countries" required>
                    <option>Select reward method</option>
                    <option>method 01</option>
                    <option>method 02</option>
                    <option>method 03</option>
                  </Select>
                </div>
                <button className=" border border-[#2880DA] text-[14px] bg-black hover:bg-[#2880DA] text-white leading-[38px] px-6 rounded-md">
                  Add
                </button>
              </div>
            </div>
            <div
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } rounded-md p-5 shadow-xl`}
            >
              <div className="py-4">
                <div className=" rounded-md py-4 ">
                  <h3 className="text-[#2aa9e1] text-2xl font-semibold">$0</h3>
                  <p className="text-[#7e859f] text-base">
                    Your total amount you have earned by referring friend to
                    Playcope
                  </p>
                </div>
                <button className="mt-4 border border-[#2880DA] text-[14px] bg-black hover:bg-[#2880DA] text-white leading-[38px] px-6 rounded-md">
                  Check your progress
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 ">
            <div
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } rounded-md p-5 md:ml-4 mt-4 md:mt-0 shadow-xl mb-6`}
            >
              <div className="flex justify-between items-center pb-0 mb-3">
                <h3
                  className={`text-[20px]  ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                  } font-medium`}
                >
                  Share through social media
                </h3>
              </div>
              <div className="bg-[#f9fafb] py-4 flex justify-center items-center rounded-md">
                <p>http://localhost:5174/referral</p>
                <Link className="text-[#2aa9e1] ml-3 hover:text-black">
                  <BsCopy />
                </Link>
              </div>
              <div className="py-6">
                <ul className="flex justify-center items-center">
                  <Link className="text-[#2aa9e1] text-2xl hover:text-black mx-2">
                    <FaFacebookF />
                  </Link>
                  <Link className="text-[#2aa9e1] text-2xl hover:text-black mx-2">
                    <BsTwitter />
                  </Link>
                  <Link className="text-[#2aa9e1] text-2xl hover:text-black mx-2">
                    <BsLinkedin />
                  </Link>
                  <Link className="text-[#2aa9e1] text-2xl hover:text-black mx-2">
                    <BsWhatsapp />
                  </Link>
                  <Link className="text-[#2aa9e1] text-2xl hover:text-black mx-2">
                    <FaPinterest />
                  </Link>
                </ul>
              </div>
            </div>
            <div
              className={`${
                themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } rounded-md p-5 md:ml-4 mt-4 md:mt-0 shadow-xl mb-6`}
            >
              <div className="flex justify-between items-center pb-0 mb-3">
                <h3
                  className={`text-[20px]  ${
                    themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                  } font-medium`}
                >
                  Criteria for new referrals
                </h3>
              </div>
              <p
                className={`text-[14px]  ${
                  themeMode === "light" ? "text-black" : "text-white"
                } font-medium pb-2`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p
                className={`text-[14px]  ${
                  themeMode === "light" ? "text-black" : "text-white"
                } font-medium pb-2`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p
                className={`text-[14px]  ${
                  themeMode === "light" ? "text-black" : "text-white"
                } font-medium pb-2`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <Link
                to="/terms-of-service"
                className="mt-4 border border-[#2880DA] text-[14px] bg-black hover:bg-[#2880DA] text-white leading-[38px] px-6 rounded-md inline-block"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
