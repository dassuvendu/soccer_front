import { Link } from "react-router-dom";
import {
  BuyTokenIcon,
  LaLiya,
  LigueIcon,
  PremierLeague,
  SerieA,
  UEFAChampionsLeagueIcon,
  dashboardcard01,
  dashboardcard02,
} from "../../assets/images/images";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  return (
    <div className="dark wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="flex justify-between mb-4">
          <h1
            className={`${
              themeMode === "light" ? "text-[#0d0f11]" : "text-white"
            } font-Syne text-4xl font-bold mb-2`}
          >
            Hi Johns Valina
          </h1>
          <Link className="bg-[#08a1f8] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            <img src={BuyTokenIcon} alt="BuyTokenIcon" className="mr-1" />
            Buy Tokens <FiArrowRight className="text-white ml-0.5" />
          </Link>
        </div>

        {/* Dashboard section start here  */}
        <div className="mb-10">
          <h2
            className={`${
              themeMode === "light" ? "text-[#0d0f11]" : "text-white"
            } text-[27px] leading-[40px] font-medium pb-3`}
          >
            Dashboard
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="bg-center bg-no-repeat bg-contain p-[30px] max-w-[545px]"
              style={{ backgroundImage: `url(${dashboardcard01})` }}
            >
              <div className="flex justify-between pb-6">
                <h3 className="text-white text-[28px] leading-[40px] font-semibold">
                  Your Tokens
                </h3>
                <p className="text-[31px] leading-[40px] font-normal text-[#50E3C2] flex items-center">
                  <FiArrowUpRight className="text-4xl" /> +132%
                </p>
              </div>
              <h4 className="text-[#50E3C2] text-[78px] leading-[78px] font-semibold pb-2">
                6
              </h4>
              <span className="text-white text-[20px] leading-[40px] font-medium">
                Tokens are for requesting predictions
              </span>
            </div>
            <div
              className="bg-center bg-no-repeat bg-contain p-[30px] max-w-[545px]"
              style={{ backgroundImage: `url(${dashboardcard02})` }}
            >
              <div className="flex justify-between pb-6">
                <h3 className="text-white text-[28px] leading-[40px] font-semibold">
                  Daily Free Tokens
                </h3>
                <p className="text-[31px] leading-[40px] font-normal text-[#50E3C2] flex items-center">
                  <FiArrowUpRight className="text-4xl" /> +132%
                </p>
              </div>
              <h4 className="text-[#F9AE52] text-[78px] leading-[78px] font-semibold pb-2">
                4{" "}
                <span className="text-[#F9AE52] text-[27px] leading-[40px] font-medium italic">
                  (Remaining Quota)
                </span>
              </h4>
              <span className="text-white text-[20px] leading-[40px] font-medium">
                You get 4 free tokens daily!
              </span>
            </div>
          </div>
        </div>
        {/* Dashboard section ends here */}

        {/* Actions section start here  */}
        <div className="mb-10">
          <h2
            className={`${
              themeMode === "light" ? "text-[#0d0f11]" : "text-white"
            } text-[27px] leading-[40px] font-medium pb-3`}
          >
            Actions
          </h2>
          <div className="grid grid-cols-3 gap-4">
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
              <div className="bg-black hover:bg-gray-800 inline-block rounded-full mb-2">
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
              <div className="bg-black hover:bg-gray-800 inline-block rounded-full mb-2">
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
              <div className="bg-black hover:bg-gray-800 inline-block rounded-full mb-2">
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
            className={`${
              themeMode === "light" ? "text-[#0d0f11]" : "text-white"
            } text-[27px] leading-[40px] font-medium pb-3`}
          >
            Explore Matches from your Favorite Leagues
          </h2>
          <div className="grid grid-cols-6 gap-3">
            <div className="bg-[#191D23] rounded-md pt-10 pb-5 px-2 text-center border-b-4 border-[#08a1f8]">
              <img
                src={UEFAChampionsLeagueIcon}
                alt="UEFAChampionsLeagueIcon"
                className="mb-4 inline-block"
              />
              <h3 className="font-Montserrat text-white font-bold text-[16px] leading-[20px] mb-2">
                UEFA Champions League
              </h3>
              <p className="text-[#8EA2AB] text-[12px] leading-[20px]">World</p>
            </div>
            <div className="bg-[#191D23] rounded-md pt-10 pb-5 px-2 text-center border-b-4 border-[#08a1f8]">
              <img
                src={PremierLeague}
                alt="PremierLeague"
                className="mb-4 inline-block"
              />
              <h3 className="font-Montserrat text-white font-bold text-[16px] leading-[20px] mb-2">
                Premier <br></br> League
              </h3>
              <p className="text-[#8EA2AB] text-[12px] leading-[20px]">
                England
              </p>
            </div>
            <div className="bg-[#191D23] rounded-md pt-10 pb-5 px-2 text-center border-b-4 border-[#08a1f8]">
              <img src={LaLiya} alt="LaLiya" className="mb-4 inline-block" />
              <h3 className="font-Montserrat text-white font-bold text-[16px] leading-[20px] mb-8">
                La Liya
              </h3>
              <p className="text-[#8EA2AB] text-[12px] leading-[20px]">Spain</p>
            </div>
            <div className="bg-[#191D23] rounded-md pt-10 pb-5 px-2 text-center border-b-4 border-[#08a1f8]">
              <img src={SerieA} alt="SerieA" className="mb-4 inline-block" />
              <h3 className="font-Montserrat text-white font-bold text-[16px] leading-[20px] mb-8">
                Serie A
              </h3>
              <p className="text-[#8EA2AB] text-[12px] leading-[20px]">Italy</p>
            </div>
            <div className="bg-[#191D23] rounded-md pt-10 pb-5 px-2 text-center border-b-4 border-[#08a1f8]">
              <img
                src={LigueIcon}
                alt="UEFAChampionsLeagueIcon"
                className="mb-6 inline-block"
              />
              <h3 className="font-Montserrat text-white font-bold text-[16px] leading-[20px] mb-8">
                Ligue 1
              </h3>
              <p className="text-[#8EA2AB] text-[12px] leading-[20px]">
                France
              </p>
            </div>
            <div className="bg-[#191D23] rounded-md pt-10 pb-5 px-2 text-center border-b-4 border-[#08a1f8]">
              <img
                src={LigueIcon}
                alt="UEFAChampionsLeagueIcon"
                className="mb-6 inline-block"
              />
              <h3 className="font-Montserrat text-white font-bold text-[16px] leading-[20px] mb-8">
                Ligue 1
              </h3>
              <p className="text-[#8EA2AB] text-[12px] leading-[20px]">
                France
              </p>
            </div>
          </div>
        </div>
        {/* Explore Matches section ends here */}
      </div>
    </div>
  );
};

export default Dashboard;
