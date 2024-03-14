import { Link } from "react-router-dom";
import {
  BuyTokenIcon,
  LaLiya,
  LigueIcon,
  PremierLeague,
  SerieA,
  UEFAChampionsLeagueDarkIcon,
  UEFAChampionsLeagueIcon,
  dashboardcard01,
  dashboardcard02,
} from "../../assets/images/images";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getLeagues } from "../../reducers/LeagueSlice";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";



const Dashboard = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { league } = useSelector((state) => state.league)
  const [loadingdash, setLoadingDash] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLeagues({})).then(()=>{
      setLoadingDash(false)
    })
  }, [dispatch])

  return (
    <div className="dark wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-screen py-4 mb-16">
        <div className="md:flex justify-between mb-4">
          <h1
            className={`${themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
              } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
          >
            Hi Johns Valina
          </h1>
          <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            <img src={BuyTokenIcon} alt="BuyTokenIcon" className="mr-1" />
            Buy Tokens <FiArrowRight className="text-white ml-0.5" />
          </Link>
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
                Explore different slips containing multiple matches for best
                odds.
              </p>
              <div
                className={` ${themeMode === "light" ? "bg-white" : "bg-black"
                  } hover:bg-gray-800 inline-block rounded-full mb-2`}
              >
                <Link className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                  Explore Slips{" "}
                  <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-t from-[#03faa1] to-[#3b5998] rounded-lg py-5 px-5">
              <div className="flex justify-between mb-4">
                <h2 className="text-white text-[25px] leading-[40px] font-semibold">
                  Today's Predictions
                </h2>
              </div>
              <p className="text-white text-[15px] leading-[22px] font-normal mb-5">
                Browse matches happening today from any league.
              </p>
              <div
                className={` ${themeMode === "light" ? "bg-white" : "bg-black"
                  } hover:bg-gray-800 inline-block rounded-full mb-2`}
              >
                <Link className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                  See Predictions
                  <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-t from-[#12a4ee] to-[#fdca40] rounded-lg py-5 px-5">
              <div className="flex justify-between mb-4">
                <h2 className="text-white text-[25px] leading-[40px] font-semibold">
                  Tomorrow's Predictions
                </h2>
              </div>
              <p className="text-white text-[15px] leading-[22px] font-normal mb-5">
                Browse matches happening tomorrow from any league.
              </p>
              <div
                className={` ${themeMode === "light" ? "bg-white" : "bg-black"
                  } hover:bg-gray-800 inline-block rounded-full mb-2`}
              >
                <Link className="font-Syne font-bold flex items-center px-4 py-0 text-[15px] leading-[44px] from-[#fdca40] via-[#93b990] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent">
                  See Predictions
                  <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Actions section ends here */}

        {/* Explore Matches section start here  */}
        <div className="mb-10">
          <h2
            className={`${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
              } text-[20px] md:text-[27px] leading-[25px] md:leading-[40px] font-medium pb-3`}
          >
            Explore Matches from your Favorite Leagues
          </h2>
          {!loadingdash?
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {league.map((data) => (
              <div
                className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } rounded-md pt-10 pb-5 px-2 text-center border-b-4 border-[#2aa9e1] shadow-xl`}
                key={data.id}

              >
                {themeMode === "light" ? (
                  <img
                    src={data.league.logo}
                    alt="UEFAChampionsLeagueDarkIcon"
                    className="mb-4 inline-block"
                  />
                ) : (
                  <img
                    src={data.league.logo}
                    alt="UEFAChampionsLeagueIcon"
                    className="mb-4 inline-block"
                  />
                )}
                <h3
                  className={`font-Montserrat ${themeMode === "light" ? "text-black" : "text-white"
                    } font-bold text-[16px] leading-[20px] mb-2`}
                >
                  {data.league.name}
                </h3>
                <p className="text-[#8EA2AB] text-[12px] leading-[20px]">{data.country.name}</p>
              </div>
            ))}

          </div>
          :
          <div className="text-center">
          <Spinner color="pink" aria-label="Warning spinner example" size="lg" />
         <span className="pl-3">Loading...</span>
         </div>
}
        </div>
        {/* Explore Matches section ends here */}
      </div>
    </div>
  );
};

export default Dashboard;
