import { Link } from "react-router-dom";
import { logo } from "../../../assets/images/images";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../../reducers/authSlice";
// import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const signInHandler = () => {
  //   navigate("/dashboard", { replace: true });
  // };
  const onSubmit = (data) => {
    // console.log(data)
    dispatch(login(data));
  };

  return (
    <div className="my-0 lg:my-0 mx-4 lg:mx-0 flex justify-center items-center h-screen">
      <div className="w-full max-w-lg my-0 mx-auto">
        <div className="text-center mb-8">
          <img className="inline-block" src={logo} />
        </div>
        <h1 className="text-3xl md:text-4xl text-teal-400 font-bold text-center pb-5">
          Log In
        </h1>
        <p className="text-base md:text-lg text-blue-900 font-medium text-center pb-8">
          Welcome back! Please enter your details.
        </p>
        <div className="login_area">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-base text-left md:text-xl font-bold text-blue-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5"
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
            <div className="mb-6">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="block mb-2 text-base md:text-xl font-bold text-blue-900"
                >
                  Password
                </label>
                <div className="block md:hidden">
                  <Link
                    className="text-base md:text-xl text-teal-400 font-bold hover:text-teal-500"
                    to="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <input
                placeholder="Enter your password"
                type="password"
                id="password"
                className="bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors?.password?.message && (
                <h6 className="text-rose-500">{errors.password.message}</h6>
              )}
            </div>
            <div className="flex justify-between mb-6">
              <div className="flex items-center">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-blue-900 rounded bg-gray-50 focus:ring-3 focus:ring-blue-900"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-base font-medium text-blue-900"
                >
                  Remember me!
                </label>
              </div>
              <div className="hidden md:block">
                <Link
                  className="text-teal-400 font-medium hover:text-teal-500"
                  to="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              // onClick={signInHandler}
              type="submit"
              className="text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full px-5 py-2.5 text-center"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
