import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOddsSlips } from "../reducers/CookedSlipSlice"

export const useDateTimeSlip = (date) => {
    const dispatch = useDispatch()
    const { oddsData } = useSelector((state) => state.cookedSlips)

    let dateList = []
    let timeList = [];
    if (oddsData && oddsData.length) {
        oddsData.forEach((item) => {
            let dateString = item?.start_time;
            date = new Date(dateString)
            let months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "Jul",
                "Aug",
                "Sept",
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
            dateList.push({
                label: formattedDate,
            });
            //get time
            let hours = date?.getHours();
            let minutes = date?.getMinutes();
            let ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? "0" + minutes : minutes;

            let formattedTime = hours + ":" + minutes + " " + ampm;
            console.log("tim", formattedTime);
            timeList.push({
                value: formattedTime,
            });

        });
    }

    useEffect(() => {
        dispatch(getOddsSlips(date));
    }, []);
    return [dateList, timeList];

}

// export const useTimeList = (date) => {
//     const dispatch = useDispatch();
//     const { oddsData } = useSelector((state) => state.cookedSlips)

//     let timeList = [];

//     if (oddsData && oddsData.length) {
//         oddsData.forEach((item) => {
//             console.log(item, "odd");
//             let dateString = item?.start_time;
//             console.log("str", dateString);
//             let date = new Date(dateString);
//             // Get time
//             let hours = date?.getHours();
//             let minutes = date?.getMinutes();
//             let ampm = hours >= 12 ? "PM" : "AM";
//             hours = hours % 12;
//             hours = hours ? hours : 12;
//             minutes = minutes < 10 ? "0" + minutes : minutes;

//             let formattedTime = hours + ":" + minutes + " " + ampm;
//             console.log("tim", formattedTime);
//             timeList.push({
//                 label: formattedTime,
//             });
//         });
//     }

//     useEffect(() => {
//         dispatch(getOddsSlips(date));
//     }, []);
//     return timeList;
// };