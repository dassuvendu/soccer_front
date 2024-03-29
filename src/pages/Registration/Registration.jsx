import { Modal, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { PlaycopeLogoPopup } from "../../assets/images/images";
import { AiOutlineLogout } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { registerUser } from "../../reducers/authSlice";

const Registration = ({ openRegisterModal, setOpenRegisterModal, setOpenLoginModal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = () => {
        setOpenLoginModal(true);
        setOpenRegisterModal(false);
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

    function onSubmit(data) {
        dispatch(registerUser(data))
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
            Object.keys(currentUser).length
        ) {
            navigate("/choose-plan");
            setOpenLoginModal(false);
            setOpenRegisterModal(false);
        }
    }, [currentUser]);

    const goChoosePlanHandler = () => {
        setOpenRegisterModal(false);
        navigate("/choose-plan");
    };

    return (
        <>
            {/* {/ Register Modal start here /} */}
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
                            <div className="w-full md:w-6/12 flex md:pr-4 mb-4 md:mb-0 justify-center items-center">
                                <img
                                    src={PlaycopeLogoPopup}
                                    alt="PlaycopeLogoPopup"
                                    className="rounded-xl w-32 md:w-72 opacity-80"
                                />
                            </div>
                            <div className="w-full md:w-6/12 md:pl-4">
                                <div className="text-center">
                                    <AiOutlineLogout className="mx-auto mb-4 h-14 w-14 text-gray-400" />
                                    <h3 className="mb-5 text-xl font-bold text-black">
                                        Register to <span className="text-[#2aa9e1]">PlayCope</span>
                                    </h3>
                                    <form className="flex max-w-md flex-col gap-4 text-left" onSubmit={handleSubmit(onSubmit)}>
                                        <div>
                                            {/* <TextInput
                                                id="name"
                                                type="name"
                                                placeholder="Your name"
                                                autoComplete="off"
                                            /> */}
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
                                                <small className="text-red-600">
                                                    {errors.first_name.message}
                                                </small>
                                            )}
                                        </div>
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
                                        <button
                                            // onClick={goChoosePlanHandler}
                                            type="submit"
                                            className="w-full text-[14px] py-2.5 rounded-[8px] text-white font-medium create_character_btn"
                                            disabled={loading}
                                        >
                                            {/* Submit */}
                                            {loading ? "Wait ..." : "Register"}
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
            {/* {/ Register Modal end here /} */}
        </>
    )
}

export default Registration;