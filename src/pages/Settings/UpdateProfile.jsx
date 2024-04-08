import { Modal, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { PlaycopeLogoPopup } from "../../assets/images/images";
import { AiOutlineLogout } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Updateprofile, editProfile } from "../../reducers/profileSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = ({ openUpdateModal, setOpenUpdateModal }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  function onSubmit(data) {
    dispatch(Updateprofile(data)).then((response) => {
      console.log("resp: ", response?.payload?.status_code);
      if (response?.payload?.status_code === 200) {
        toast.success(response?.payload?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
      }
      dispatch(editProfile());
    });
  }
  return (
    <>
      <ToastContainer />
      {openUpdateModal && (
        <Modal
          show={openUpdateModal}
          size="5xl"
          onClose={() => setOpenUpdateModal(false)}
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
                  <h3 className="mb-5 text-xl font-bold text-black">
                    Update <span className="text-[#2aa9e1]">Profile</span>
                  </h3>
                  <form
                    className="flex max-w-md flex-col gap-4 text-left"
                    onSubmit={handleSubmit(onSubmit)}
                  >
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
                        defaultValue={profile?.details?.first_name}
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
                        defaultValue={profile?.details?.email}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message:
                              "Entered value does not match email format",
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
                        id="phone"
                        type="tel"
                        placeholder="Mobile"
                        defaultValue={profile?.details?.mobile}
                        {...register("mobile", {
                          required: "Mobile Number is required",
                        })}
                      />
                      {errors?.mobile?.message && (
                        <h6 className="text-danger">
                          {errors.mobile?.message}
                        </h6>
                      )}
                    </div>
                    <div>
                      {/* <TextInput
                                        id="password1"
                                        type="password"
                                        placeholder="Password"
                                    /> */}
                      <TextInput
                        id="gender"
                        type="tel"
                        placeholder="Gender"
                        defaultValue={profile?.details?.gender}
                        {...register("gender", {
                          required: "Gender Number is required",
                        })}
                      />
                      {errors?.gender?.message && (
                        <h6 className="text-danger">
                          {errors.gender?.message}
                        </h6>
                      )}
                    </div>
                    <button
                      // onClick={goChoosePlanHandler}
                      type="submit"
                      className="w-full text-[14px] py-2.5 rounded-[8px] text-white font-medium create_character_btn"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default UpdateProfile;
