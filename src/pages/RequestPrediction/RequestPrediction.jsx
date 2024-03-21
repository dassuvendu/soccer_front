import { requestPredictionBanner } from "../../assets/images/images";
import { SearchCompo } from "./RequestComponents/SearchCompo";
import { Prediction } from "./RequestComponents/Prediction";
import RequestPredictionList from "./RequestComponents/RequestPredictionList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RequestPrediction = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (data) => {
    setErrorMessage(data);
  };
  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);

  let { rid } = useParams();



  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full py-4">
        <div
          className="bg-right-top bg-no-repeat rounded-xl bg-cover mb-6"
          style={{ backgroundImage: `url(${requestPredictionBanner})` }}
        >
          <div className="w-full md:w-5/12 py-28 pl-14">
            <h1 className="font-Bebas text-5xl tracking-normal text-white mb-4">
              Match Predictions
            </h1>
            <p className="text-white text-[18px] leading-[24px] font-medium">
              Explore multiple matches for best insights
            </p>
          </div>
        </div>
        <div className="lg:flex justify-between items-center mb-6 w:6/12">
          <SearchCompo onError={handleError} rid={rid}/>
          <Prediction />
        </div>
      </div>

      {/* Request Predictions list start here */}
      <RequestPredictionList errorMessage={errorMessage} />
      {/* Request Predictions list ends here */}

      {/* Pagination section start here */}
    </div>
  );
};

export default RequestPrediction;
