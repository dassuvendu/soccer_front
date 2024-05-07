import React, { useEffect, useState } from "react";
import { FaDribbble, FaFacebookF } from "react-icons/fa";
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
    <div className="bg-[#18191b] pt-12 lg:pt-24 pb-0 px-8 lg:px-0">
      <div className="max-w-6xl mx-auto">
        {/* <div className="footer_top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h3 className="font-Bebas text-xl text-white tracking-normal pb-4">
              About Us
            </h3>
            <p className="text-[#8a8a8f] text-[14px] pb-4">
              Donec metus augue, dapibus eget nulla at, tempor efficitur sapien.
            </p>
            <p className="text-[#8a8a8f] text-[14px] pb-4">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla vel risus ipsum. Donec
              mollis, sem sit amet dignissim varius, tortor felis condimentum
              ante.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <h3 className="font-Bebas text-xl text-white tracking-normal pb-4">
              Latest News
            </h3>
            <ul>
              <li className="pb-2">
                <Link className="text-[#f3f3f3] text-[14px] font-semibold hover:text-[#2aa9e1]">
                  To Prevent Brain Damage, Soccer Players Should Keep ‘Head
                  Counts’
                </Link>
              </li>
              <li className="pb-2">
                <Link className="text-[#f3f3f3] text-[14px] font-semibold hover:text-[#2aa9e1]">
                  Alex Morgan to Hold First Youth Soccer Camp
                </Link>
              </li>
              <li className="pb-2">
                <Link className="text-[#f3f3f3] text-[14px] font-semibold hover:text-[#2aa9e1]">
                  U.S. Soccer Players Feel More Welcome in England
                </Link>
              </li>
              <li className="pb-2">
                <Link className="text-[#f3f3f3] text-[14px] font-semibold hover:text-[#2aa9e1]">
                  Soccer Players to Lead Strawberry Parade
                </Link>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <h3 className="font-Bebas text-xl text-white tracking-normal pb-4">
              Tags
            </h3>
            <ul>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  goals
                </Link>
              </li>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  matches
                </Link>
              </li>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  match results
                </Link>
              </li>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  news
                </Link>
              </li>
              <li className="inline-block mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  players
                </Link>
              </li>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  post format
                </Link>
              </li>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  results
                </Link>
              </li>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  soccer
                </Link>
              </li>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  sponsors
                </Link>
              </li>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  store
                </Link>
              </li>
              <li className="inline-block mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  teams
                </Link>
              </li>
              <li className="inline-block  mb-4 mr-2">
                <Link className="text-[#909194] text-[13px] capitalize font-medium border border-[#47484b] rounded px-5 py-1.5 hover:bg-[#f3f3f3] hover:text-black">
                  tournaments
                </Link>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-duration="2500">
            <h3 className="font-Bebas text-xl text-white tracking-normal pb-4">
              Recent Comments
            </h3>
            <p className="text-[#f3f3f3] text-[14px] font-semibold mb-3">
              Douglas Adams on Ordem Ciento Siccer Ball
            </p>
            <p className="text-[#f3f3f3] text-[14px] font-semibold mb-3">
              Douglas Adams on Phatal II Dynamic Fit FG
            </p>
            <p className="text-[#f3f3f3] text-[14px] font-semibold mb-3">
              Douglas Adams on Strike Soccer Ball
            </p>
            <p className="text-[#f3f3f3] text-[14px] font-semibold mb-3">
              Douglas Adams on Nike Hupervenom Phantom 2 FG
            </p>
          </div>
        </div> */}

        <div className="footer_bottom text-center py-[40px]">
          <div className="flex justify-center items-center mb-6">
            <img src={footerArrow} alt="footerArrow" />
          </div>
          <div className="flex justify-center items-center mb-8">
            <img src={footerFootball} alt="footerFootball" />
          </div>
          <div className="text-center mb-4">
            <ul className="flex justify-center items-center">
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
                  to="/faqs"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-[#9ea5a7] text-[15px] mb-6">
            <span className="text-white">PlayCope</span> © 2024 All Rights
            Reserved.
          </p>
          <div>
            <ul className="flex justify-center items-center">
              <li>
                <Link className="text-[#acb4b6] text-2xl hover:text-[#2aa9e1] mx-2 block">
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link className="text-[#acb4b6] text-2xl hover:text-[#2aa9e1] mx-2 block">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link className="text-[#acb4b6] text-2xl hover:text-[#2aa9e1] mx-2 block">
                  <FaDribbble />
                </Link>
              </li>
              <li>
                <Link className="text-[#acb4b6] text-2xl hover:text-[#2aa9e1] mx-2 block">
                  <TfiYoutube />
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
