import { Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../../reducers/authSlice";
// import { forgotPasswordIcon, logo } from "../../../assets/images/images";

const ForgotPassword = ({ openForgotPasswordModal, setOpenForgotPasswordModal }) => {

  const dispatch = useDispatch();
  const { loading, message } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (email) => {
    dispatch(forgotPassword(email));
  }

  return (
    <>
      {/* <div className="my-0 md:my-16 lg:my-0 mx-4 lg:mx-0 flex justify-center items-center h-screen">
      <div className="w-full max-w-lg my-0 mx-auto">
        <div className="text-center mb-4">
          <img className="inline-block w-44" src={forgotPasswordIcon} />
        </div>
        <h1 className="text-3xl md:text-4xl text-teal-400 font-bold text-center pb-5">
          Forgot your password?
        </h1>
        <p className="text-base md:text-lg text-blue-900 font-medium text-center pb-8">
          No worries, we got you covered.
        </p>
        <div className="login_area">
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-base md:text-xl font-bold text-blue-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5"
                placeholder="Enter your email address"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full px-5 py-2.5 text-center"
            >
              Reset Password
            </button>
            <div className="block text-center mt-3">
              <Link
                className="text-sm text-teal-400 font-medium hover:text-teal-500"
                to="/"
              >
                Back to Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div> */}

      <Modal
        show={openForgotPasswordModal}
        onClose={() => setOpenForgotPasswordModal(false)}
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
                    Forgot Password
                  </h2>
                  <p className="text-center text-sm text-neutral-600 pb-4">
                    Please enter your mail id below
                  </p>
                  <form
                    id="forgotPasswordForm"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        autoComplete="off"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors?.email?.message && (
                        <h6 className="text-danger text-red-500">
                          {errors.email.message}
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
      </Modal>
    </>
  );
};

export default ForgotPassword;
