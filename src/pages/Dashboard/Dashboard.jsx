import { Link, useNavigate } from "react-router-dom";
import { BuyTokenIcon, logoIcon } from "../../assets/images/images";
import { FiArrowRight } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { getLeagues } from "../../reducers/LeagueSlice";
import { editProfile } from "../../reducers/profileSlice";
// import { useUuid } from "../../hooks/useUuid";
import { logout } from "../../reducers/authSlice";
import { getUid } from "../../reducers/uuidSlice";

const Dashboard = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { isloadingEditProfile } = useSelector((state) => state.profile);
  const { league } = useSelector((state) => state.league);
  const { valid } = useSelector((state) => state.uuid);
  console.log("api",valid?.data);
  // console.log("jk2",valid?.data);
  const [loadingdash, setLoadingDash] = useState(true);
  const [api, setApi] = useState(true);
  const dispatch = useDispatch();
  const subscribed = JSON.parse(
    localStorage.getItem("isSubscribed")
  )?.isSubscribed;

  // const [ Id ] = useUuid()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUid({}))
  },[dispatch])

  const uuid = localStorage.getItem('uuid')

  useEffect(() => {
    if (valid?.data === uuid) {
      console.log("local", typeof uuid);
      console.log("api", typeof valid?.data);
      dispatch(editProfile());
    }
   
      if (valid?.data !== uuid) {
        // console.log("hio");
        // dispatch(logout());
        // navigate("/")
      }
     // 1000 milliseconds = 1 second

  }, [valid, uuid]);



  useEffect(() => {
    if (valid?.data === uuid) {
      dispatch(getLeagues({ ids: "39,140,135,78,61,2" })).then((res) => {
        if (res?.payload?.status === true) {
          setLoadingDash(false);
          setApi(false);
        }
      });
    }
   else{
    // dispatch(logout());
   }
  }, [dispatch, api,valid,uuid]);

  const { profile } = useSelector((state) => state.profile);

  return (
    <div className="dark wrapper_area max-w-7xl my-0 mx-auto px-0">
      {isloadingEditProfile ? (
        <div>
          <img src={logoIcon} alt="loading.." className="loader" />
        </div>
      ) : (
        <>
          {/* {subscribed === null ||
            subscribed === undefined ||
            subscribed === "cancel" ? (
            <div>
              <div className="text-[#FF0000] font-medium text-base text-center">
                Please subscribe for using our application
              </div>
            </div>
          ) : ( */}
          <div className="w-full h-full pt-4 mb-0">
            <div className="md:flex justify-between mb-0">
              <h1
                className={`${themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                  } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
              >
                Hi, {profile?.details?.first_name !== null ? (profile?.details?.first_name.toString().split(" ")[0]) : ("")}
              </h1>
            </div>

            {/* Actions section start here  */}
            <div className="mb-10">
              <h2
                className={`${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                  } text-[20px] md:text-[27px] leading-[40px] font-medium pb-1 md:pb-3`}
              >
                Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-t from-[#04fca0] to-[#07abee] rounded-lg py-5 px-5">
                  <div className="flex justify-between mb-4">
                    <h2 className="text-white text-[25px] leading-[40px] font-semibold">
                      Coped slips
                    </h2>
                    <span className="text-white text-[20px] leading-[40px] font-normal">
                      New
                    </span>
                  </div>
                  <p className="text-white text-[15px] leading-[22px] font-normal mb-5">
                    Explore different slips containing multiple matches
                  </p>
                  <div
                    className={` ${themeMode === "light" ? "bg-white" : "bg-black"
                      } hover:bg-gray-800 inline-block rounded-full mb-2`}
                  >
                    <Link
                      to="/coped-slips"
                      className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent"
                    >
                      Explore Slips{" "}
                      <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-t from-[#03faa1] to-[#3b5998] rounded-lg py-5 px-5">
                  <div className="flex justify-between mb-4">
                    <h2 className="text-white text-[25px] leading-[40px] font-semibold">
                      Predictions
                    </h2>
                  </div>
                  <p className="text-white text-[15px] leading-[22px] font-normal mb-5">
                    Browse matches happening today from any league.
                  </p>
                  <div
                    className={` ${themeMode === "light" ? "bg-white" : "bg-black"
                      } hover:bg-gray-800 inline-block rounded-full mb-2`}
                  >
                    <Link
                      to="/match-prediction"
                      className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent"
                    >
                      See Predictions
                      <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-t from-[#12a4ee] to-[#fdca40] rounded-lg py-5 px-5">
                  <div className="flex justify-between mb-4">
                    <h2 className="text-white text-[25px] leading-[40px] font-semibold">
                      Statistics
                    </h2>
                  </div>
                  <p className="text-white text-[15px] leading-[22px] font-normal mb-5">
                    Browse matches happening tomorrow from any league.
                  </p>
                  <div
                    className={` ${themeMode === "light" ? "bg-white" : "bg-black"
                      } hover:bg-gray-800 inline-block rounded-full mb-2`}
                  >
                    <Link
                      to="/statistics"
                      className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[44px] from-[#fdca40] via-[#93b990] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent"
                    >
                      See Statistics
                      <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Actions section ends here */}
            </div>

            {/* Explore Matches section start here  */}
            <div className="mb-0">
              <h2
                className={`${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                  } text-[20px] md:text-[27px] leading-[25px] md:leading-[40px] font-medium pb-3`}
              >
                Explore Matches from your Favorite Leagues
              </h2>
              {!loadingdash ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {league?.data?.map((data) => (
                    <Link
                      to={`/match-prediction/${data.league.id}`}
                      key={data.id}
                    >
                      <div
                        className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                          } rounded-md pt-10 pb-5 px-2 text-center border-b-4 border-[#2aa9e1] shadow-xl`}
                      >
                        {themeMode === "light" ? (
                          <img
                            src={data.league.logo}
                             
                            alt={data.league.name}
                            className="mb-4 inline-block"
                          />
                        ) : (
                          <img
                            src={data.league.logo}
                            alt={data.league.name}
                            className="mb-4 inline-block"
                          />
                        )}
                        <h3
                          className={`font-Montserrat ${themeMode === "light"
                            ? "text-black"
                            : "text-white"
                            } font-bold text-[16px] leading-[20px] mb-2`}
                        >
                          {`${data.league.name.slice(0, 14)}`}
                        </h3>
                        <p className="text-[#8EA2AB] text-[12px] leading-[20px]">
                          {data.country.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center">
                  <div role="status">
                    <img src={logoIcon} alt="loading.." className="loader" />
                    {/* <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg> */}
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Explore Matches section ends here */}

            {/* Actions section ends here */}

            {/* Explore Matches section start here  */}

            {/* Explore Matches section ends here */}
          </div>
          {/* )} */}
        </>
      )}
    </div>
  );
};

export default Dashboard;
