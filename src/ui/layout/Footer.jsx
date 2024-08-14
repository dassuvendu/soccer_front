import React, { useEffect, useState } from "react";
import { FaDribbble, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { footerArrow, footerFootball } from "../../assets/images/images";

import AOS from "aos";
import "aos/dist/aos.css";
import { HiChevronUp } from "react-icons/hi2";

const Footer = () => {
  // Top Scroll start here
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  // Top Scroll ends here

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#18191b] pt-0 lg:pt-0 pb-0 px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="footer_bottom text-center py-[40px]">
          <div className="flex justify-center items-center mb-6">
            <img src={footerArrow} alt="footerArrow" />
          </div>
          <div className="flex justify-center items-center mb-8">
            <img src={footerFootball} alt="footerFootball" />
          </div>
          <div className="text-center mb-4">
            <ul className="md:flex justify-center items-center">
              <li>
                <Link
                  className="text-[#2aa9e1] text-[14px] hover:text-white px-2"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#2aa9e1] text-[14px] hover:text-white px-2"
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#2aa9e1] text-[14px] hover:text-white px-2"
                  to="/data-protection-policy"
                >
                  Data Protection Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#2aa9e1] text-[14px] hover:text-white px-2"
                  to="/refund-cancellation-policy"
                >
                  Refund Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#2aa9e1] text-[14px] hover:text-white px-2"
                  to="/terms-of-service"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#2aa9e1] text-[14px] hover:text-white px-2"
                  to="/faqs"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#2aa9e1] text-[14px] hover:text-white px-2"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-[#9ea5a7] text-[15px] mb-6">
            <span className="text-white">PlayCope Ltd</span> © 2024 All Rights
            Reserved.
          </p>
          <div>
            <ul className="flex justify-center items-center">
              <li>
                <Link
                  to="http://x.com/playcope"
                  className="text-[#acb4b6] text-2xl hover:text-[#2aa9e1] mx-2 block"
                >
                  <FaXTwitter />
                </Link>
              </li>

              <li>
                <Link
                  to="https://www.instagram.com/playcope/"
                  className="text-[#acb4b6] text-2xl hover:text-[#2aa9e1] mx-2 block"
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        //className="animate-bounce"
        style={{
          display: visible ? "inline" : "none",
          position: "fixed",
          bottom: "40px",
          right: "20px",
          border: "none",
          background: "none",
          zIndex: 5,
        }}
      >
        <HiChevronUp
          className="text-[#2aa9e1] hover:text-[#030304]"
          size={35}
        />
      </button>
    </div>
  );
};

export default Footer;
