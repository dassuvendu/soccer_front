import { Modal, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../reducers/authSlice";
import { PlaycopeLogoPopup } from "../../../assets/images/images";

const ChangePassword = ({ openChangePasswordModal, setOpenChangePasswordModal }) => {

    const dispatch = useDispatch();
    const { loading, message } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(resetPassword(data));
    }


    return (
        <>
            {/* <Modal
                show={openChangePasswordModal}
                onClose={() => setOpenChangePasswordModal(false)}
            >
                <Modal.Header className="border-0 p-0 m-0 absolute z-10 right-1 top-1">
                    &nbsp;
                </Modal.Header>
                <Modal.Body className="p-0 m-0">
                    <div className="modal-box relative">
                        <div className="flex w-full max-w-7xl">
                            <div className="w-full p-4 bg-[#f6f5f3] rounded-2xl">
                                <div className="px-3 py-4 lg:py-8">
                                    <h2 className="text-3xl text-center mb-4 text-[#639aba] font-bold">
                                        Change Password
                                    </h2>
                                    <form
                                        id="changePasswordForm"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-3"
                                                id="old_password"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter old password"
                                                autoComplete="off"
                                                {...register("old_password", {
                                                    required: "Old password is required",
                                                })}
                                            />
                                            {errors?.old_password?.message && (
                                                <h6 className="text-danger text-red-500">
                                                    {errors.old_password.message}
                                                </h6>
                                            )}

                                            <input
                                                type="text"
                                                className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-3"
                                                id="password"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter new password"
                                                autoComplete="off"
                                                {...register("password", {
                                                    required: "New password is required",
                                                })}
                                            />
                                            {errors?.password?.message && (
                                                <h6 className="text-danger text-red-500">
                                                    {errors.password.message}
                                                </h6>
                                            )}

                                            <input
                                                type="text"
                                                className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-3"
                                                id="confirm_password"
                                                aria-describedby="emailHelp"
                                                placeholder="Confirm the password you entered"
                                                autoComplete="off"
                                                {...register("confirm_password", {
                                                    required: "Confirm password is required",
                                                })}
                                            />
                                            {errors?.confirm_password?.message && (
                                                <h6 className="text-danger text-red-500">
                                                    {errors.confirm_password.message}
                                                </h6>
                                            )}

                                        </div>
                                        <button
                                            type="submit"
                                            className="rounded-full text-sm mb-0 uppercase h-11 bg-[#639aba] w-full text-white hover:bg-[#75b1d3]"
                                            disabled={loading}
                                        >
                                            {loading ? "Wait..." : "Send"}
                                        </button>

                                        <div className="text-center text-green-400 font-bold mt-2">{message}</div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}

            <Modal
                show={openChangePasswordModal}
                size="5xl"
                onClose={() => setOpenChangePasswordModal(false)}
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
                                    Change <span className="text-[#2aa9e1]">Password</span>
                                </h3>
                                <form
                                    className="flex max-w-md flex-col gap-4 text-left"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div>
                                        <TextInput
                                            id="old_password"
                                            type="text"
                                            placeholder="Enter your old password"

                                            {...register("old_password", {
                                                required: "Old password is required",
                                            })}
                                        />
                                        {errors?.old_password?.message && (
                                            <small className="text-red-600">
                                                {errors.old_password.message}
                                            </small>
                                        )}
                                    </div>
                                    <div>
                                        <TextInput
                                            id="password"
                                            type="text"
                                            placeholder="Enter your new password"
                                            {...register("password", {
                                                required: "New password is required",
                                            })}
                                        />
                                        {errors?.password?.message && (
                                            <h6 className="text-danger">{errors.password.message}</h6>
                                        )}
                                    </div>
                                    <div>
                                        <TextInput
                                            id="confirm_password"
                                            type="text"
                                            placeholder="Confirm new password"
                                            {...register("confirm_password", {
                                                required: "Confirm password is required",
                                            })}
                                        />
                                        {errors?.confirm_password?.message && (
                                            <h6 className="text-danger">
                                                {errors.confirm_password?.message}
                                            </h6>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-[14px] py-2.5 rounded-[8px] text-white font-medium create_character_btn"
                                        disabled={loading}
                                    >
                                        {loading ? "Wait..." : "Change"}
                                    </button>


                                    <div className="text-center text-green-400 font-bold mt-2"> {message}  </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ChangePassword;