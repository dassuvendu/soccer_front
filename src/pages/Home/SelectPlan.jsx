import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Registration from "../Registration/Registration";
import Login from "../Auth/Login/Login";

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
      <div className="bg-white py-4">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="max-w-7xl mx-auto"
        >
          <div className="md:flex justify-between items-center max-w-2xl mx-auto text-center">
            <h3 className="font-Bebas py-5 text-5xl tracking-normal mb-0 text-center text-[#2aa9e1]">
              <span className="text-black font-medium mb-0 line-through text-4xl">
                $9.89
              </span>{" "}
              <span className="text-black font-bold pr-2">$5</span>
              monthly only
            </h3>
            <Link
              // to="/payment"
              onClick={RegisterModal}
              className="text-base font-medium inline-block px-8 hover:bg-[#18191b] text-[#2aa9e1] text-center border-2 py-2 border-[#2aa9e1] hover:border-[#18191b]"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
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
