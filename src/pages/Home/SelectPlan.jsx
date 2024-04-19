import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registration from "../Registration/Registration";

const SelectPlan = () => {

  const [openRegisterModal,setOpenRegisterModal] = useState(false)

  const RegisterModal = () =>{
    setOpenRegisterModal(true)
  }
  const RegisterCloseModal = () =>{
    setOpenRegisterModal(false)
  }
  return (
    <div className="bg-white py-4">
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="max-w-6xl mx-auto"
      >
        <div className="md:flex justify-between items-center max-w-2xl mx-auto text-center">
          <h3 className="font-Bebas py-5 text-5xl tracking-normal mb-0 text-center text-[#2aa9e1]">
            10$ monthly only
          </h3>
          <Link
            // to="/payment"
            onClick={RegisterModal}
            className="text-base font-medium inline-block px-8 hover:bg-[#18191b] text-[#2aa9e1] text-center border-2 py-2 border-[#2aa9e1] hover:border-[#18191b]"
          >
            Subscribe Now
          </Link>
          <Registration openRegisterModal={openRegisterModal} setOpenRegisterModal={RegisterCloseModal}/>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
