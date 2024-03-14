import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../../assets/images/images";

const Login = () => {
  const navigate = useNavigate();
  const signinHandler = () => {
    navigate("/dashboard");
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
          <form>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-base text-left md:text-xl font-bold text-blue-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div class="mb-6">
              <div className="flex justify-between">
                <label
                  for="password"
                  class="block mb-2 text-base md:text-xl font-bold text-blue-900"
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
                class="bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5"
                required
              />
            </div>
            <div class="flex justify-between mb-6">
              <div className="flex items-center">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-blue-900 rounded bg-gray-50 focus:ring-3 focus:ring-blue-900"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-base font-medium text-blue-900"
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
              onClick={signinHandler}
              type="submit"
              class="text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full px-5 py-2.5 text-center"
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
