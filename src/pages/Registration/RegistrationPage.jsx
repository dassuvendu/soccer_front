import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { bannerImgTwo, PlaycopeLogoPopup } from "../../assets/images/images";
import { AiOutlineLogout } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { registerUser, verifyOtp } from "../../reducers/authSlice";
import { useGoogleLogin } from "@react-oauth/google";
// import { editProfile } from "../../reducers/profileSlice";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet";

const RegistrationPage = ({ setOpenLoginModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [openLoginModal, setOpenLoginModal] = useState(false);
  const tokenObject = JSON.parse(localStorage.getItem("regToken"));
  const token = tokenObject?.token;
  console.log("token", token);

  const loginHandler = () => {
    setOpenLoginModal(true);
    // setOpenRegisterModal(false);
  };

  const {
    error: validationErrors,
    currentUser,
    loading,
  } = useSelector((state) => state?.auth);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const [tsr, setTsr] = useState("");

  useEffect(() => {
    const uid = uuidv4();
    setTsr(uid);
  }, []);

  function onSubmit(data) {
    if (currentUser && Object.keys(currentUser).length) {
      console.log("body: ", data);
      dispatch(verifyOtp(data)).then(() => {
        reset();
      });
      localStorage.setItem("userToken", JSON.stringify({ token: token }));
      //localStorage.removeItem("regToken");
      // navigate("/choose-plan");
      // navigate("/dashboard");

      //   setOpenRegisterModal(false);
      //   setOpenLoginModal(false);
    } else {
      dispatch(
        registerUser({
          email: data?.email,
          first_name: data?.first_name,
          password: data?.password,
          uuid: tsr,
        })
      );
      localStorage.setItem("uuid", tsr);
    }
  }

  useEffect(() => {
    if (validationErrors != null && Object.keys(validationErrors).length) {
      Object.keys(validationErrors).forEach((fieldname) => {
        setError(fieldname, {
          type: "manual",
          message: validationErrors[fieldname][0],
        });
      });
    }
  }, [validationErrors, setError]);

  useEffect(() => {
    if (
      currentUser &&
      Object.keys(currentUser).length &&
      currentUser.otp_verified
    ) {
      localStorage.setItem("userToken", JSON.stringify({ token: token }));
      localStorage.removeItem("regToken");
      navigate("/choose-plan");
      // navigate("/dashboard");
      //   setOpenLoginModal(false);
      //   setOpenRegisterModal(false);
    }
  }, [currentUser.otp_verified]);

  const goChoosePlanHandler = () => {
    // setOpenRegisterModal(false);
    navigate("/choose-plan");
  };
  const [check, setCheck] = useState(false);

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };
  // console.log(check);

  const handleClick = () => {
    navigate("/terms-of-service");
    // setOpenRegisterModal(false);
    // setOpenLoginModal(false);
  };

  const dataProtectionPolicyHandleClick = () => {
    navigate("/data-protection-policy");
    // setOpenRegisterModal(false);
    // setOpenLoginModal(false);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      localStorage.setItem("googleAccessToken", codeResponse.access_token);
      navigate("/google-redirect");
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <>
      <Helmet>
        <title>Playcope - Register</title>
        <meta name="description" content="Register" />
      </Helmet>
      <div className="py-10 lg:py-12 px-8 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-8">
            <img src={bannerImgTwo} alt="bannerImgTwo" />
          </div>
          {/* {/ Register Modal start here /} */}

          <div className="md:flex items-center pt-6">
            {/* <div className="w-full md:w-6/12 flex md:pr-4 mb-4 md:mb-0 justify-center items-center">
              <img
                src={PlaycopeLogoPopup}
                alt="PlaycopeLogoPopup"
                className="rounded-xl w-32 md:w-72 opacity-80"
              />
            </div> */}
            <div className="w-full md:w-6/12 mx-auto bg-white p-10 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center items-center">
                  <AiOutlineLogout className="mx-7 mb-4 h-14 w-14 text-gray-400 text" />
                </div>
                <h3 className="mb-5 text-xl font-bold text-black">
                  Register to <span className="text-[#2aa9e1]">PlayCope</span>
                </h3>
                <form
                  className="flex w-full flex-col gap-5 text-left"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <TextInput
                      id="name"
                      type="name"
                      placeholder="Your name"
                      autoComplete="off"
                      {...register("first_name", {
                        required: "Name is required",
                        maxLength: 30,
                      })}
                    />
                    {errors?.first_name?.message && (
                      <h6 className="text-sm text-[red]">{`${"*"} ${
                        errors.first_name.message
                      }`}</h6>
                    )}
                  </div>
                  <div>
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
                      <h6 className="text-sm text-[red]">{`${"*"} ${
                        errors.email.message
                      }`}</h6>
                    )}
                  </div>
                  <div>
                    <TextInput
                      id="password1"
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors?.password?.message && (
                      <h6 className="text-sm text-[red]">{`${"*"} ${
                        errors.password.message
                      }`}</h6>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="agree"
                      onChange={handleCheck}
                      checked={check}
                    />
                    <Label htmlFor="agree" className="flex text-xs">
                      I have read and agreed to the&nbsp;
                      <Link
                        onClick={handleClick}
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Terms of Service
                      </Link>
                      &nbsp;&&nbsp;
                      <Link
                        onClick={dataProtectionPolicyHandleClick}
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Privacy Statement
                      </Link>
                    </Label>
                  </div>
                  {currentUser && Object.keys(currentUser).length ? (
                    <>
                      <p className="text-sm text-red-600 mb-3">
                        You will receive your OTP code in your email.
                      </p>
                      <div className="form-group">
                        <input
                          type="text"
                          name="otp"
                          {...register("otp", {
                            required: "Otp is required",
                          })}
                          className="w-full h-12 px-5 mb-3 text-base border border-solid rounded-full border-slate-400"
                          placeholder="Enter Your OTP"
                        />
                        {errors?.otp?.message && (
                          <h6 className="text-sm text-[red]">{`${"*"} ${
                            errors.otp.message
                          }`}</h6>
                        )}
                      </div>
                      {check ? (
                        <button
                          type="submit"
                          className="w-full text-[14px] py-2.5 rounded-[8px] bg-[#d86d3f] text-white font-medium create_character_btn"
                          disabled={!check || loading}
                        >
                          {loading ? "Wait ..." : "Submit"}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="w-full text-[14px] py-2.5 rounded-[8px] bg-[#7fc5e4] text-white font-medium uppercase"
                          disabled
                        >
                          {loading ? "Wait ..." : "Submit"}
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      {check ? (
                        <button
                          // onClick={goChoosePlanHandler}
                          type="submit"
                          className="w-full text-[14px] py-2.5 rounded-[8px] text-white font-medium create_character_btn"
                          disabled={!check || loading}
                        >
                          {/* Submit */}
                          {loading ? "Wait ..." : "Register"}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="w-full text-[14px] py-2.5 rounded-[8px] bg-[#7fc5e4] text-white font-medium uppercase"
                          disabled
                        >
                          {loading ? "Wait ..." : "Register"}
                        </button>
                      )}
                    </>
                  )}
                </form>
                <p className="py-4 text-center mx-6">OR</p>
                {check ? (
                  <button
                    onClick={() => googleLogin()}
                    className="flex justify-center items-center
                   bg-gray-100 border border-gray-300 w-full shadow-xl py-1.5 
                   uppercase rounded-lg text-sm font-bold hover:bg-gray-200"
                  >
                    <FcGoogle className="text-3xl" />
                    Google
                  </button>
                ) : (
                  <button
                    disabled
                    className="flex justify-center items-center
                      bg-[#d0d3d4] border border-gray-300 w-full shadow-xl py-1.5 
                      uppercase rounded-lg text-sm font-bold opacity-60"
                  >
                    <FcGoogle className="text-3xl" />
                    Google
                  </button>
                )}
                <p className="py-4 text-sm font-medium text-black">
                  Already have an account?
                  <Link
                    onClick={loginHandler}
                    className="text-[#2aa9e1] hover:text-black ml-1"
                  >
                    Sign in
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>

          {/* {/ Register Modal end here /} */}
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
