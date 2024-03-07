import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Navbar, Button, Modal, TextInput } from "flowbite-react";
import { loginImg, logo } from "../../assets/images/images";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble, FaFacebookF, FaUsers } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BiSolidUser } from "react-icons/bi";
import {
  AiOutlineGoogle,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const HeaderOutside = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const loginHandler = () => {
    setOpenRegisterModal(false);
    setOpenLoginModal(true);
  };
  const registerHandler = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
  };
  return (
    <div className="header_section max-w-6xl mx-auto px-0 lg:px-0 py-2 md:py-3 bg-transparent">
      <Navbar fluid rounded className="bg-transparent">
        <Link className="w-16 md:w-28" to="/">
          <img alt="Logo" src={logo} />
        </Link>
        <div className="flex md:order-2 items-center">
          <>
            <div className="flex items-center">
              <BiSolidUser className="text-gray-400 text-xl mr-1" />
              <Link
                onClick={loginHandler}
                className="text-sm font-medium text-gray-400 mr-4 my-2 hover:text-[#2aa9e1]"
              >
                Login
              </Link>
            </div>
            <div className="top_social">
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
        <Navbar.Collapse className="lg:bg-transparent main_menu">
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
      {/* Login Modal start here */}
      {openLoginModal && (
        <Modal
          show={openLoginModal}
          size="5xl"
          onClose={() => setOpenLoginModal(false)}
          popup
        >
          <Modal.Header className="absolute right-0 top-0" />
          <Modal.Body>
            <div className="md:flex items-center pt-6">
              <div className="w-full md:w-6/12 flex md:pr-4 mb-4 md:mb-0">
                <img src={loginImg} className="rounded-xl" />
              </div>
              <div className="w-full md:w-6/12 md:pl-4">
                <div className="text-center">
                  <AiOutlineLogin className="mx-auto mb-4 h-14 w-14 text-gray-400" />
                  <h3 className="mb-5 text-xl font-bold text-black">
                    Welcome to <span className="text-[#2aa9e1]">PlayCope</span>
                  </h3>
                  <form className="flex max-w-md flex-col gap-4 text-left">
                    <div>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <TextInput
                        id="password1"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <Button
                      className="create_character_btn w-full"
                      type="submit"
                    >
                      Login
                    </Button>
                  </form>
                  <p className="py-4">OR</p>
                  <Link
                    className="flex justify-center items-center bg-gray-100 border border-gray-300 w-full shadow-xl py-1.5 uppercase rounded-lg text-sm font-bold hover:bg-gray-200"
                    onClick={() => googleLogin()}
                  >
                    <FcGoogle className="text-3xl" />
                    Google
                  </Link>
                  <p className="py-4 text-sm font-medium text-black">
                    If you have not an account, please{" "}
                    <Link
                      onClick={registerHandler}
                      className="text-[#2aa9e1] hover:text-black"
                    >
                      Register
                    </Link>{" "}
                    here.
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      {/* Login Modal ends here */}

      {/* Register Modal start here */}
      {openRegisterModal && (
        <Modal
          show={openRegisterModal}
          size="5xl"
          onClose={() => setOpenRegisterModal(false)}
          popup
        >
          <Modal.Header className="absolute right-0 top-0" />
          <Modal.Body>
            <div className="md:flex items-center pt-6">
              <div className="w-full md:w-6/12 flex md:pr-4 mb-4 md:mb-0">
                <img src={loginImg} className="rounded-xl" />
              </div>
              <div className="w-full md:w-6/12 md:pl-4">
                <div className="text-center">
                  <AiOutlineLogout className="mx-auto mb-4 h-14 w-14 text-gray-400" />
                  <h3 className="mb-5 text-2xl font-bold text-black">
                    Register to <span className="text-[#2aa9e1]">PlayCope</span>
                  </h3>
                  <form className="flex max-w-md flex-col gap-4 text-left">
                    <div>
                      <TextInput
                        id="name"
                        type="name"
                        placeholder="Your name"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <TextInput
                        id="password1"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-[14px] py-2.5 rounded-[8px] text-white font-medium create_character_btn"
                    >
                      Submit
                    </button>
                  </form>
                  <p className="py-4">OR</p>
                  <Link className="flex justify-center items-center bg-gray-100 border border-gray-300 w-full shadow-xl py-1.5 uppercase rounded-lg text-sm font-bold hover:bg-gray-200">
                    <FcGoogle className="text-3xl" />
                    Google
                  </Link>
                  <p className="py-4 text-sm font-medium text-black">
                    If you have an account, please{" "}
                    <Link
                      onClick={loginHandler}
                      className="text-[#2aa9e1] hover:text-black"
                    >
                      Login
                    </Link>{" "}
                    here.
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      {/* Register Modal ends here */}
    </div>
  );
};

export default HeaderOutside;
