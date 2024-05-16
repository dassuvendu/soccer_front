import React from "react";
import { bannerImgFour } from "../../assets/images/images";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";

const ContactUs = () => {
  return (
    <>
      <div className="py-10 lg:py-12 px-8 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-8">
            <img src={bannerImgFour} alt="" />
          </div>
          <h2 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-8 text-[#232a34]">
            Contact Us
          </h2>
          <div className="mb-4 flex items-center">
            <p className="text-[#2aa9e1] mr-2">
              <BsTelephoneInboundFill />
            </p>
            <p className="font-normal pb-0">+2347070741335</p>
          </div>
          <div className="mb-4 flex items-center">
            <p className="text-[#2aa9e1] mr-2">
              <IoMdMail />
            </p>
            <p className="font-normal pb-0">Support@playcope.com</p>
          </div>
          <div className="mb-4 flex items-start">
            <p className="text-[#2aa9e1] mr-2">
              <ImLocation />
            </p>
            <p className="font-normal pb-0">
              Ste C50 <br></br> Cabana Suites Continental Hotel <br></br> Zone 4{" "}
              <br></br>
              Abuja, Nigeria
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
