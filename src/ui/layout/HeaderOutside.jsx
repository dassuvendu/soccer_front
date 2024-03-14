import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Navbar, Button, Modal, TextInput } from "flowbite-react";
import { loginImg, logo } from "../../assets/images/images";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble, FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BiSolidUser } from "react-icons/bi";
import {
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, registerUser } from "../../reducers/authSlice";

const HeaderOutside = () => {
  const { isLoggedIn, message, error, loading } = useSelector(state => state.auth);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { register: registerReg, handleSubmit: handleSubmitReg, formState: { errors: errorsReg }, getValues: getValuesReg, reset: resetReg } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [message, isLoggedIn])

  const loginHandler = () => {
    setOpenRegisterModal(false);
    setOpenLoginModal(true);
  };
  const registerHandler = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
  };

  const onSubmit = (data) => {
    dispatch(login(data));
    isLoggedIn && !error && navigate("/dashboard", { replace: true });
  };
  const onSubmitReg = (data) => {
    dispatch(registerUser(data));
    false && resetReg()
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
                  <form className="flex max-w-md flex-col gap-4 text-left" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <TextInput
                        id="email"
                        type="email"
                        placeholder="Your email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format",
                          },
                        })}
                      />
                      {errors?.email?.message && (
                        <h6 className="text-rose-500">{errors.email.message}</h6>
                      )}
                    </div>
                    <div>
                      <TextInput
                        id="password"
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      {errors?.password?.message && (
                        <h6 className="text-rose-500">{errors.password.message}</h6>
                      )}
                    </div>
                    {error && (
                      <h6 className="text-rose-500">{message}</h6>
                    )}
                    <Button
                      className="create_character_btn w-full"
                      type="submit"
                    >
                      {loading ? "wait..." : "Login"}
                    </Button>
                  </form>
                  <p className="py-4">OR</p>
                  <Link
                    className="flex justify-center items-center bg-gray-100 border border-gray-300 w-full shadow-xl py-1.5 uppercase rounded-lg text-sm font-bold hover:bg-gray-200"
                  // onClick={() => googleLogin()}
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
                  <h3 className="mb-5 text-xl font-bold text-black">
                    Register to <span className="text-[#2aa9e1]">PlayCope</span>
                  </h3>
                  <form className="flex max-w-md flex-col gap-4 text-left" onSubmit={handleSubmitReg(onSubmitReg)}>
                    <div>
                      <TextInput
                        id="name"
                        type="name"
                        placeholder="Your name"
                        autoComplete="off"
                        {...registerReg("name", {
                          required: "Name is required",
                        })}
                      />
                      {errorsReg?.name?.message && (
                        <h6 className="text-rose-500">{errorsReg.name.message}</h6>
                      )}
                    </div>
                    <div>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Your email"
                        {...registerReg("email", {
                          required: "email is required",
                        })}
                      />
                      {errorsReg?.email?.message && (
                        <h6 className="text-rose-500">{errorsReg.email.message}</h6>
                      )}
                      {error && (
                        <h6 className="text-rose-500">{error?.email && error?.email[0]}</h6>
                      )}
                    </div>
                    <div>
                      <TextInput
                        id="password1"
                        type="password"
                        placeholder="Password"
                        {...registerReg("password", {
                          required: "password is required",
                        })}
                      />
                      {errorsReg?.password?.message && (
                        <h6 className="text-rose-500">{errorsReg.password.message}</h6>
                      )}
                    </div>
                    <div>
                      <TextInput
                        id="password1"
                        type="password"
                        placeholder="Confirm Password"
                        {...registerReg("cPassword", {
                          required: "confirm password is required",
                          validate: (value) => value === getValuesReg("password") || 'confirm passwords do not match',

                        })}
                      />
                      {errorsReg?.cPassword?.message && (
                        <h6 className="text-rose-500">{errorsReg.cPassword.message}</h6>
                      )}
                    </div>
                    {error && (
                      <h6 className="text-rose-500">{error?.message}</h6>
                    )}
                    <button
                      type="submit"
                      className="w-full text-[14px] py-2.5 rounded-[8px] text-white font-medium create_character_btn"
                    >
                      {loading ? "wait..." : "Submit"}
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
