import React from "react";
import { bannerImgFour } from "../../assets/images/images";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Playcope - Contact Us</title>
        <meta name="description" content="Contact Us" />
      </Helmet>
      <div className="py-10 lg:py-12 px-8 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-8">
            <img src={bannerImgFour} alt="bannerImgFour" />
          </div>
          <h1 className="font-Bebas text-4xl md:text-5xl tracking-normal text-center mb-8 text-[#232a34]">
            Contact Us
          </h1>
          <div className="mb-4 flex items-center">
            <p className="text-[#2aa9e1] mr-2">
              <BsTelephoneInboundFill />
            </p>
            <p className="font-normal pb-0 hover:text-[#2aa9e1]">
              <Link to="tel:+2347070741335">+2347070741335</Link>
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <p className="text-[#2aa9e1] mr-2">
              <IoMdMail />
            </p>
            <p
              className="font-normal pb-0 cursor-pointer hover:text-[#2aa9e1]"
              onClick={() => (window.location = "mailto:Support@playcope.com")}
            >
              Support@playcope.com
            </p>
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
