import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postpredictions } from "../reducers/PredictionsSlice";

export const useReqPredicDateHook = () => {
    const dispatch = useDispatch();
    const { prediction } = useSelector((state) => state.prediction)

    let predicDate = [];

  
    if (prediction && prediction.length) {
        prediction.forEach((item) => {
        let dateString = item?.h2h.fixture?.date;
        let date = new Date(dateString);
        let months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let day = date?.getDate();
        let monthIndex = date?.getMonth();
        let year = date?.getFullYear();
  
        let daysOfWeek = [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
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