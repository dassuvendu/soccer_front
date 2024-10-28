import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Registration from "../Registration/Registration";
import Login from "../Auth/Login/Login";
import { bannerImgFive, bannerImgFour } from "../../assets/images/images";

const SelectPlan = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const RegisterModal = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
  };

  useEffect(() => {
    // console.log("openLoginModal",openLoginModal);
    // console.log("openRegisterModal",openRegisterModal);
  }, [openLoginModal, openRegisterModal]);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="py-16 flex justify-center items-center gap-8">
          <div className="w-3/12 md:flex justify-between px-4 md:px-5 py-10 shadow-xl bg-[#2aa9e1] rounded-md">
            <div className="w-full">
              <div className="hidden md:block w-full mb-6">
                <img
                  src={bannerImgFour}
                  alt="bannerImgFour"
                  className="rounded-xl w-full inline-block"
                />
              </div>
              <h2 className="font-Bebas text-white pb-5 text-2xl lg:text-[35px] tracking-normal mb-2 text-center">
                Choose full features plan
              </h2>
              <div className="text-center">
                <h3 className="text-xl text-white font-bold mb-4">
                  <span className="text-black pr-1">₦5,000</span> Monthly only
                </h3>
                <button className="text-base font-medium bg-[#18191b] hover:bg-[#2aa9e1] text-white text-center rounded-lg w-full block border-2 py-2 hover:border-white border-[#18191b]">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-3/12 md:flex justify-between px-4 md:px-5 py-10 shadow-xl bg-[#2aa9e1] rounded-md">
            <div className="w-full">
              <div className="hidden md:block w-full mb-6">
                <img
                  src={bannerImgFive}
                  alt="bannerImgFive"
                  className="rounded-xl w-full inline-block"
                />
              </div>
              <h2 className="font-Bebas text-white pb-5 text-2xl lg:text-[35px] tracking-normal mb-2 text-center">
                Choose free <br></br> plan
              </h2>
              <div className="text-center">
                <h3 className="text-xl text-white font-bold mb-4">
                  <span className="text-black pr-1">Limit:</span> 5 predictions
                  / day
                </h3>
                <button className="text-base font-medium bg-[#18191b] hover:bg-[#2aa9e1] text-white text-center rounded-lg w-full block border-2 py-2 hover:border-white border-[#18191b]">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white py-4">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="max-w-7xl mx-auto"
        >
          <div className="md:flex justify-between items-center max-w-2xl mx-auto text-center">
            <h3 className="font-Bebas py-5 text-5xl tracking-normal mb-0 text-center text-[#2aa9e1]">
              <span className="text-black font-bold pr-2">₦5,000</span>
              monthly only
            </h3>
            <Link
              onClick={RegisterModal}
              className="text-base font-medium inline-block px-8 hover:bg-[#18191b] text-[#2aa9e1] text-center border-2 py-2 border-[#2aa9e1] hover:border-[#18191b]"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div> */}
      {openRegisterModal && (
        <Registration
          openRegisterModal={openRegisterModal}
          setOpenRegisterModal={setOpenRegisterModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}

      {openLoginModal && (
        <Login
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
    </>
  );
};

export default SelectPlan;
