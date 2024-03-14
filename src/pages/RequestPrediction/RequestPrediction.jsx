import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  requestPredictionBanner,
} from "../../assets/images/images";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getFixtures } from "../../reducers/PredictionsSlice";
import { useDateList, useTimeList } from "../../hooks/useDateTimeHooks";
import { Pagination } from "./RequestComponents/Pagination";
import { SearchCompo } from "./RequestComponents/SearchCompo";
import { Prediction } from "./RequestComponents/Prediction";
import { Spinner } from "flowbite-react";
import { RequestModal } from "./RequestComponents/RequestModal";


const RequestPrediction = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { fixtures } = useSelector((state) => state.prediction);
const topten = fixtures.slice(0,9)
console.log(topten);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [openViewDetailsModal, setOpenViewDetailsModal] = useState(false);

  const viewDetailsModalHandler = () => {
    setOpenViewDetailsModal(true);
  };
  const handleModalClose = () => {
    setOpenViewDetailsModal(false);
    
  };
  const dispatch = useDispatch();

  //date formate
  const newdate = new Date();
  const changeDateformate = newdate.toISOString().split("T")[0];

  useEffect(() => {
    dispatch(getFixtures({ date: changeDateformate })).then(()=>{
      setLoadingData(false)
    })
  }, [dispatch]);

  const [matchDateList] = useDateList({ date: changeDateformate });

  const [matchTimeList] = useTimeList({ date: changeDateformate });

  useEffect(() => {
    setDate(matchDateList);
    setTime(matchTimeList);
  }, [fixtures]);

  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full py-4">
        <div
          className="bg-right-top bg-no-repeat rounded-xl bg-cover mb-6"
          style={{ backgroundImage: `url(${requestPredictionBanner})` }}
        >
          <div className="w-full md:w-5/12 py-24 pl-14">
            <h1 className="font-Bebas text-5xl tracking-normal text-white mb-4">
              Match Predictions
            </h1>
            <p className="text-white text-[18px] leading-[24px] font-medium">
              Explore different slips containing multiple matches for best odds.
            </p>
          </div>
        </div>
        <div className="md:flex justify-between items-center mb-6 w:6/12">
          <SearchCompo loadingData={setLoadingData}/>
         <Prediction/>
        </div>
      </div>

      {/* Request Predictions list start here */}
  {!loadingData?
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
        {topten.map((dat) => (
          <div
          key={dat.id}
            className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
              } rounded-2xl shadow-xl`}
          >
            <div
              className={`flex justify-between items-center ${themeMode === "light" ? "bg-[#2aa9e1]" : "bg-[#2E3B4D]"
                } px-5 py-3 rounded-t-2xl h-16`}
            >
              <div className="text-white font-bold text-[16px] leading-[20px] font-Montserrat">
                {dat?.league?.name}
              </div>
              <div className="text-right">
                <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                  {date?.label}
                </p>
                <p className="text-white font-medium text-[12px] leading-[16px] font-Montserrat">
                  {time?.label}
                </p>
              </div>
            </div>
            <div
              className={`pt-6 pb-4 px-3 border-2  ${themeMode === "light" ? "border-[#2aa9e1]" : "border-[#2E3B4D]"
                } rounded-b-2xl`}
            >
              <div className="grid grid-cols-3 gap-4 mb-4 h-32">
                <div className="text-center">
                  <img
                    src={dat?.teams?.home?.logo}
                    alt="DeportivoPastoIcon"
                    className="inline-block mb-2"
                    width={58}
                    height={58}
                  />
                  <p
                    className={`font-Syne text-[15px] leading-[20px] font-bold ${themeMode === "light" ? "text-black" : "text-white"
                      }`}
                  >
                    {dat?.teams?.home?.name}
                  </p>
                </div>
                <div>
                  <div className="mb-4 text-center">
                    <p
                      className={`${themeMode === "light" ? "text-black" : "text-white"
                        } font-semibold text-[12px] leading-[16px] font-Montserrat pb-1`}
                    >
                      Venue
                    </p>
                    <span className=" text-black font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-0">
                      <b>{dat?.fixture?.venue?.name}</b>
                    </span>
                  </div>

                </div>
                <div className="text-center">
                  <img
                    src={dat?.teams?.away?.logo}
                    alt="EnvigadoIcon"
                    className="inline-block mb-2"
                    width={58}
                    height={58}
                  />
                  <p
                    className={`font-Syne text-[15px] leading-[20px] font-bold ${themeMode === "light" ? "text-black" : "text-white"
                      }`}
                  >
                    {dat?.teams?.away?.name}
                  </p>
                </div>
              </div>
              <div
                className={` ${themeMode === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-black hover:bg-gray-800"
                  } block rounded-full text-center mb-0`}
              >
                <Link 
                className="w-full font-Syne font-bold flex items-center justify-center px-4 py-0 text-[15px] leading-[44px] from-[#03faa1] via-[#06c5d5] to-[#08a5f5] bg-gradient-to-r bg-clip-text text-transparent"
                onClick={viewDetailsModalHandler}
                >
                  View Prediction <FiArrowRight className="text-[#08a5f5] ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      :
      <div className="text-center">
       <Spinner color="warning" aria-label="Warning spinner example" size="lg" />
      <span className="pl-3">Loading...</span>
      </div>
     
}
      {/* Request Predictions list ends here */}

      {/* Pagination section start here */}
      <div className="md:flex justify-between mt-8">
        <Pagination />
      </div>
      {/* Pagination section ends here */}

      {/* modal section start here */}
       <RequestModal openViewDetailsModal={openViewDetailsModal} onClose={handleModalClose}/>
      {/* modal section ends here */}
    </div>
  );
};

export default RequestPrediction;
