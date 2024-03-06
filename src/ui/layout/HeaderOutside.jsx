import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Navbar, Button, Modal } from "flowbite-react";
import { logo } from "../../assets/images/images";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble, FaFacebookF, FaUsers } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BiSolidUser } from "react-icons/bi";

const HeaderOutside = () => {
  return (
    <div className="header_section max-w-6xl mx-auto px-0 lg:px-0 py-3 bg-transparent">
      <Navbar fluid rounded className="bg-transparent">
        <Link className="w-28" to="/">
          <img alt="Logo" src={logo} />
        </Link>
        <div className="flex md:order-2 items-center">
          <>
            <div className="flex items-center">
              <BiSolidUser className="text-gray-400 text-xl mr-1" />
              <Link className="text-sm font-medium text-gray-400 mr-4 my-2 hover:text-[#2aa9e1]">
                Login
              </Link>
            </div>
            <div>
              <ul className="flex justify-center items-center">
                <li>
                  <Link className="text-[#acb4b6] text-base hover:text-[#2aa9e1] mx-1 block">
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link className="text-[#acb4b6] text-base hover:text-[#2aa9e1] mx-1 block">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link className="text-[#acb4b6] text-base hover:text-[#2aa9e1] mx-1 block">
                    <FaDribbble />
                  </Link>
                </li>
                <li>
                  <Link className="text-[#acb4b6] text-base hover:text-[#2aa9e1] mx-1 block">
                    <TfiYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="lg:bg-transparent">
          <li>
            <NavLink to="/predictions">Predictions</NavLink>
          </li>
          <li>
            <NavLink to="/faqs">FAQs</NavLink>
          </li>
          <li>
            <NavLink to="/comparisons">Comparisons</NavLink>
          </li>
          <li>
            <NavLink to="/news-blog">News & Blog</NavLink>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderOutside;
