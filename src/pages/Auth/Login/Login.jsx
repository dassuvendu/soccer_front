import { Link, useNavigate } from "react-router-dom";
import { PlaycopeLogoPopup, logo } from "../../../assets/images/images";
import Registration from "../../Registration/Registration";
import { FcGoogle } from "react-icons/fc";
import { Button, Modal, TextInput } from "flowbite-react";
import { AiOutlineLogin } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login, resetAfterLoggedIn } from "../../../reducers/authSlice";

const Login = ({ openLoginModal, setOpenLoginModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const signinHandler = () => {
  //   navigate("/dashboard");
  // };
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const registerHandler = () => {
    setOpenRegisterModal(true);
  };

  const { message, isLoggedIn, error } = useSelector((state) => state.auth);
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (error && message) {
      setErrorMessage(message);
      const timeoutId = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    } else if (isLoggedIn) {
      dispatch(resetAfterLoggedIn());
      navigate("/dashboard");
      setOpenLoginModal(false);
    }
  }, [message, error, isLoggedIn]);

  return (

    // <div className="my-0 lg:my-0 mx-4 lg:mx-0 flex justify-center items-center h-screen">
    //   <div className="w-full max-w-lg my-0 mx-auto">
    //     <div className="text-center mb-8">
    //       <img className="inline-block" src={logo} />
    //     </div>
    //     <h1 className="text-3xl md:text-4xl text-teal-400 font-bold text-center pb-5">
    //       Log In
    //     </h1>
    //     <p className="text-base md:text-lg text-blue-900 font-medium text-center pb-8">
    //       Welcome back! Please enter your details.
    //     </p>
    //     <div className="login_area">
    //       <form>
    //         <div class="mb-6">
    //           <label
    //             for="email"
    //             class="block mb-2 text-base text-left md:text-xl font-bold text-blue-900 dark:text-white"
    //           >
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             id="email"
    //             class="bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5"
    //             placeholder="Enter your email address"
    //             required
    //           />
    //         </div>
    //         <div class="mb-6">
    //           <div className="flex justify-between">
    //             <label
    //               for="password"
    //               class="block mb-2 text-base md:text-xl font-bold text-blue-900"
    //             >
    //               Password
    //             </label>
    //             <div className="block md:hidden">
    //               <Link
    //                 className="text-base md:text-xl text-teal-400 font-bold hover:text-teal-500"
    //                 to="/forgot-password"
    //               >
    //                 Forgot Password?
    //               </Link>
    //             </div>
    //           </div>
    //           <input
    //             placeholder="Enter your password"
    //             type="password"
    //             id="password"
    //             class="bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5"
    //             required
    //           />
    //         </div>
    //         <div class="flex justify-between mb-6">
    //           <div className="flex items-center">
    //             <div class="flex items-center h-5">
    //               <input
    //                 id="remember"
    //                 type="checkbox"
    //                 value=""
    //                 class="w-4 h-4 border border-blue-900 rounded bg-gray-50 focus:ring-3 focus:ring-blue-900"
    //                 required
    //               />
    //             </div>
    //             <label
    //               for="remember"
    //               class="ml-2 text-base font-medium text-blue-900"
    //             >
    //               Remember me!
    //             </label>
    //           </div>
    //           <div className="hidden md:block">
    //             <Link
    //               className="text-teal-400 font-medium hover:text-teal-500"
    //               to="/forgot-password"
    //             >
    //               Forgot Password?
    //             </Link>
    //           </div>
    //         </div>
    //         <button
    //           onClick={signinHandler}
    //           type="submit"
    //           class="text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full px-5 py-2.5 text-center"
    //         >
    //           Sign In
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <>
      {/* {/ Login Modal starts here /} */}
      <Modal
        show={openLoginModal}
        size="5xl"
        onClose={() => setOpenLoginModal(false)}
        popup
      >
        <Modal.Header className="absolute right-0 top-0" />
        <Modal.Body>
          <div className="md:flex items-center pt-6">
            <div className="w-full md:w-6/12 flex md:pr-4 mb-4 md:mb-0 justify-center items-center">
              <img
                src={PlaycopeLogoPopup}
                alt="PlaycopeLogoPopup"
                className="rounded-xl w-32 md:w-72 opacity-80"
              />
            </div>
            <div className="w-full md:w-6/12 md:pl-4">
              <div className="text-center">
                <AiOutlineLogin className="mx-auto mb-4 h-14 w-14 text-gray-400" />
                <h3 className="mb-5 text-xl font-bold text-black">
                  Welcome to <span className="text-[#2aa9e1]">PlayCope</span>
                </h3>
                <form className="flex max-w-md flex-col gap-4 text-left" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    {/* <TextInput
                      id="email1"
                      type="email"
                      placeholder="Your email"
                    /> */}
                    <TextInput
                      id="email1"
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
                      <h6 className="text-danger">{errors.email.message}</h6>
                    )}
                  </div>
                  <div>
                    {/* <TextInput
                      id="password1"
                      type="password"
                      placeholder="Password"
                    /> */}
                    <TextInput
                      id="password1"
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors?.password?.message && (
                      <h6 className="text-danger">{errors.password.message}</h6>
                    )}
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
      {/* {/ Login Modal ends here /} */}

      {/* registration start*/}
      <Registration
        openRegisterModal={openRegisterModal}
        setOpenRegisterModal={setOpenRegisterModal}
        setOpenLoginModal={setOpenLoginModal}
      />

      {/* registration ends*/}
    </>
  );
};

export default Login;

