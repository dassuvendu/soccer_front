import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  earnIcon,
  inviteIcon,
  requestPredictionBanner,
  settingBanner,
  userFace,
} from "../../assets/images/images";
import { Button, FileInput, TextInput } from "flowbite-react";
import { FaRegCopy } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import { editProfile } from "../../reducers/profileSlice";
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "../Auth/ChangePassword/ChangePassword";
import { ReferModal } from "./ReferModal";
import { logout } from "../../reducers/authSlice";
import { getUid } from "../../reducers/uuidSlice";

const Settings = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { profile } = useSelector((state) => state.profile);
  console.log("pr", profile);
  const { valid } = useSelector((state) => state.uuid);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openReferModal, setOpenReferModal] = useState(false);
  const [refCount, setRefCount] = useState();
  console.log("n", refCount);
  const navigate = useNavigate();
  const uuid = localStorage.getItem("uuid");

  const updateHandler = () => {
    setOpenUpdateModal(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(editProfile());
  }, [dispatch]);

  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
  const handleChangePassword = () => {
    setOpenChangePasswordModal(true);
  };

  const userId = localStorage.getItem("userId");
  console.log("ul", userId);
  const encodedUserId = encodeURIComponent(userId);
  // const uId = userId?.split(':')[1]
  // console.log("ul1",uId);

  const refId = localStorage.getItem("ref_id");

  const handleRefModal = () => {
    setOpenReferModal(true);
  };
  useEffect(() => {
    console.log(openReferModal);
  }, [openReferModal]);

  useEffect(() => {
    dispatch(getUid({}));
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getUid({}));
      if (uuid !== valid?.data) {
        dispatch(logout());
        navigate("/");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [valid, uuid, dispatch]);

  useEffect(() => {
    if (profile && profile?.details && profile?.details?.ref_count === null) {
      setRefCount(0);
    } else if (
      profile &&
      profile?.details &&
      typeof profile?.details?.ref_count === "number"
    ) {
      setRefCount(profile?.details?.ref_count);
    }
  }, [profile]);

  const subscribed = JSON.parse(localStorage.getItem('isSubscribed'))?.isSubscribed;
  console.log("subscribed", subscribed)

  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full py-4 mb-0">
        <div className="flex justify-between mb-8">
          <h1
            className={`${themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
              } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
          >
            Settings
          </h1>
          {/* <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            Match Predictions <FiArrowRight className="text-white ml-0.5" />
          </Link> */}
        </div>
        {/* Banner start here */}
        <div
          className="bg-right-top bg-no-repeat rounded-xl bg-cover mb-6"
          style={{ backgroundImage: `url(${requestPredictionBanner})` }}
        >
          <div className="w-full md:w-9/12 py-14 pl-10 pr-2">
            {/* <h1 className="font-Bebas text-4xl tracking-normal text-white mb-2">
              Referral Link
            </h1> */}
            {/* <div className="md:flex items-center mb-5">
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
            </div> */}
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
        <div className="md:flex mb-6">
          <div
            className={`w-full md:w-5/12 ${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } rounded-md p-5 shadow-xl`}
          >
            <div className="flex justify-between items-center border-b border-[#DCDCDC] pb-3 mb-3">
              <h3
                className={`text-[20px]  ${themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                  } font-medium`}
              >
                Overview
              </h3>
              <button onClick={updateHandler}>
                <AiFillEdit
                  className={`${themeMode === "light"
                    ? "text-[#2aa9e1] hover:text-black"
                    : "text-white"
                    } text-[28px] hover:text-[#2aa9e1]`}
                />
              </button>
            </div>
            <div className="flex items-center border-b border-[#DCDCDC] pb-3 mb-4">
              <div>
                {/* <img
                  className="w-10 h-10 rounded-full"
                  src={profile?.details?.avatar}
                  alt={profile?.details?.first_name}
                /> */}
              </div>
              <div>
                <p
                  className={`${themeMode === "light" ? "text-black" : "text-white"
                    } text-[19px] leading-[20px] text-medium`}
                >
                  {profile?.details?.first_name}
                </p>

                <p className="text-[#898989] text-[14px] pt-1">
                  {" "}
                  {profile?.details?.username}
                </p>
                {/* <p
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-medium`}
                >
                  Licence :
                </p> */}
              </div>
            </div>
            <div>
              <div className="flex pb-4 mb-4 border-b border-[#DCDCDC]">
                <div
                  className={`${themeMode === "light" ? "text-black" : "text-white"
                    } text-[14px] text-medium w-4/12`}
                >
                  Contact phone
                </div>
                <div
                  className={`${themeMode === "light" ? "text-black" : "text-white"
                    } text-[14px] text-normal w-8/12`}
                >
                  {profile?.details?.mobile}
                </div>
              </div>
              <div className="flex mb-4 border-b border-[#DCDCDC] pb-4">
                <div
                  className={`${themeMode === "light" ? "text-black" : "text-white"
                    } text-[14px] text-medium w-4/12`}
                >
                  {/* Address */}Gender
                </div>
                <div
                  className={`${themeMode === "light" ? "text-black" : "text-white"
                    } text-[14px] text-normal w-8/12`}
                >
                  {/* 23 Main Street, Anytown, USA 12345 */}
                  {profile?.details?.gender}
                </div>
              </div>
              <div>
                {/* <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-medium w-12/12 mb-4`}
                >
                  Share the your referral link below with your friends:
                </div> */}
                {/* <div
                  className={`${
                    themeMode === "light" ? "text-black" : "text-white"
                  } text-[14px] text-normal w-8/12 flex`}
                >
                  <TextInput
                    id="base"
                    type="text"
                    sizing="md"
                    className="w-8/12"
                    value={`${
                      import.meta.env.VITE_FRONT_BASE_URL
                    }${"/signup/ReferRegistration/"}${encodedUserId}?=${refId}`}
                    readOnly
                  />
                  <button
                    type="button"
                    data-modal-target="course-modal"
                    data-modal-toggle="course-modal"
                    className="text-white bg-black hover:bg-[#2880DA] border-gray-200 focus:ring-4 
                    focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                    inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 
                    dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 h-10 ml-4"
                    onClick={handleRefModal}
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z" />
                    </svg>
                    Share
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className={`w-full md:w-7/12 ${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } rounded-md p-5 md:ml-4 mt-4 md:mt-0 shadow-xl`}
          >
            <div className="flex justify-between items-center border-b border-[#DCDCDC] pb-3 mb-3">
              <h3
                className={`text-[20px]  ${themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                  } font-medium`}
              >
                Signin Methos
              </h3>
            </div>
            <div className="border-b border-[#DCDCDC] pb-3 pt-0 mb-3">
              <p
                className={`${themeMode === "light" ? "text-black" : "text-white"
                  } text-[15px] text-normal pb-0`}
              >
                Email Address
              </p>
              <p className="text-[#898989] text-[14px]">
                {profile?.details?.email}
              </p>
            </div>
            <div className="border-b border-[#DCDCDC] pb-0 pt-0 mb-0 flex items-center">
              <div className="w-7/12 lg:w-9/12">
                <p
                  className={`${themeMode === "light" ? "text-black" : "text-white"
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
              <div className="w-5/12 lg:w-3/12">
                <button
                  className="border border-[#2880DA] text-[12px] bg-black hover:bg-[#2880DA] text-white leading-[30px] px-3 rounded-md"
                  onClick={handleChangePassword}
                >
                  Change Password
                </button>
              </div>
            </div>
            <div className="mt-4 rounded-md p-4 flex justify-between items-center">
              <div className="flex">
                <p
                  className={`${themeMode === "light" ? "text-black" : "text-white"
                    } text-[17px] text-normal pb-0`}
                >
                  Number of referrals :
                </p>
              </div>
              <div>
                <p
                  className={`${themeMode === "light" ? "text-black" : "text-white"
                    } text-[17px] text-normal pb-0`}
                >
                  {refCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pb-10">
          <div
            className={`w-full md:w-5/12 ${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } rounded-md p-5 shadow-xl`}
          >
            <h3 className="text-[20px]  text-[#2aa9e1] font-medium text-center pb-2">
              Refer Friends And Earn 20% Commission
            </h3>
            <p className="text-[#898989] text-[14px] text-center pb-2">
              If you enjoy using Playcope, share your referral link and get paid
              for every eligible purchase
            </p>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 my-6">
              <div className="border border-[#2aa9e1] rounded-md text-center p-4 bg-[#fcfcfd]">
                <img
                  src={inviteIcon}
                  alt="inviteIcon"
                  className="w-20 inline-block mb-4"
                />
                <p className="text-black text-[14px] font-bold text-center pb-2">
                  Invite Friends
                </p>
                <span className="text-[#898989] text-[14px] text-center pb-2">
                  Share your referral link with your friends, family, and
                  colleagues
                </span>
              </div>
              <div className="border border-[#2aa9e1] rounded-md text-center p-4 bg-[#fcfcfd]">
                <img
                  src={earnIcon}
                  alt="earnIcon"
                  className="w-20 inline-block mb-4"
                />
                <p className="text-black text-[14px] font-bold text-center pb-2">
                  Earn Commission
                </p>
                <span className="text-[#898989] text-[14px] text-center pb-2">
                  Get paid on each eligible purchase from your link
                </span>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/referral"
                className="border border-[#2880DA] text-[12px] bg-[#2880DA] hover:bg-black text-white leading-[30px] px-3 rounded-md inline-block"
              >
                Refer a Friend
              </Link>
            </div>
          </div>
          {subscribed === null || subscribed === undefined || subscribed === "cancel" ? (
            <div className="w-full ml-4 md:w-7/12">
              fgfgfg
            </div>
          ) : (
            <div className="w-full ml-4 md:w-7/12">
            </div>
          )}
        </div>

        {openChangePasswordModal && (
          <ChangePassword
            openChangePasswordModal={openChangePasswordModal}
            setOpenChangePasswordModal={setOpenChangePasswordModal}
          />
        )}

        {/* Setting edit section ends here */}
        <UpdateProfile
          openUpdateModal={openUpdateModal}
          setOpenUpdateModal={setOpenUpdateModal}
        />
      </div>

      <ReferModal
        openReferModal={openReferModal}
        setOpenReferModal={setOpenReferModal}
      />
    </div>
  );
};

export default Settings;
