import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFixtures } from "../reducers/PredictionsSlice";

export const useDateList = (date) => {
  const dispatch = useDispatch();
  const { fixtures } = useSelector((state) => state.prediction);

  let matchDateList = []

  if (fixtures?.data && fixtures?.data?.length) {
    fixtures?.data?.forEach((item) => {
      let dateString = item?.fixture.date;
      let date = new Date(dateString);
  
      // Define the timezone (e.g., 'UTC', 'America/New_York', etc.)
      let timezone = 'UTC'; // Change this to the desired timezone
  
      let options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: timezone,
      };
  
      let formattedDate = date.toLocaleString('en-US', options);
  
      matchDateList.push({
        label: formattedDate,
      });
    });
  }
  
  useEffect(() => {
    dispatch(getFixtures(date));
  }, []);

  return matchDateList;
};

export const useTimeList = (time) => {
  const dispatch = useDispatch();
  const { fixtures } = useSelector((state) => state.prediction);

  let matchTimeList = [];

  if (fixtures?.data && fixtures?.data?.length) {
    fixtures?.data?.forEach((item) => {
      let dateString = item.fixture.date;
      let date = new Date(dateString);
      // Get time
      let hours = date?.getHours();
      let minutes = date?.getMinutes();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;

      let formattedTime = hours + ":" + minutes + " " + ampm;
      matchTimeList.push({
        label: formattedTime,
      });
    });
  }

  useEffect(() => {
    dispatch(getFixtures(time));
  }, []);

  return matchTimeList;
};

