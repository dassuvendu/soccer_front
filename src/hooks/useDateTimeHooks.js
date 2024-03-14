import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFixtures } from "../reducers/PredictionsSlice";

export const useDateList = (date) => {
  const dispatch = useDispatch();
  const { fixtures } = useSelector((state) => state.prediction);

  let matchDateList = []

  if (fixtures && fixtures.length) {
    fixtures.forEach((item) => {
      let dateString = item?.fixture.date;
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

  if (fixtures && fixtures.length) {
    fixtures.forEach((item) => {
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

