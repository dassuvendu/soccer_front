import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postpredictions } from "../reducers/PredictionsSlice";

export const UseReqPredicDateHook = () => {
    const dispatch = useDispatch();
    const { prediction } = useSelector((state) => state.prediction)

    let predicDate = [];

  
    if (prediction && prediction.length) {
        prediction.forEach((item) => {
        let dateString = item?.h2h.fixture?.date;
        let date = new Date(dateString);
        let months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        let day = date?.getDate();
        let monthIndex = date?.getMonth();
        let year = date?.getFullYear();
  
        let daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let dayOfWeekIndex = date?.getDay();
        let dayOfWeek = daysOfWeek[dayOfWeekIndex];
        // formatted date
        let formattedDate =
          dayOfWeek + ", " + day + " " + months[monthIndex] + ", " + year;
          predicDate.push({
          label: formattedDate,
        });
      });
    }
  
    useEffect(() => {
        dispatch(postpredictions({ "fixture": 198772 }))
      }, [dispatch])
  
    return predicDate;
  };