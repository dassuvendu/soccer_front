export const useReqPredicDateHook = (date) => {
    let predicDate = [];

    if (date && date.length) {
        date.forEach((item) => {
        let dateString = item?.fixture?.date;
        let date = new Date(dateString);
        let timezone = 'UTC'; // Change this to the desired timezone
  
        let options = {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          timeZone: timezone,
        };
    
        let formattedDate = date.toLocaleString('en-US', options);
        // formatted date
          predicDate.push({
          label: formattedDate,
        });
        
      });
    }
  
    return predicDate;
  };

  export const useTimeList = (time) => {

    let predicTime = [];

    if (time && time?.length) {
      time?.forEach((item) => {
        
        let timeString = item?.fixture?.date;
        console.log("ty",timeString);
        let newDate = new Date(timeString);
        let newTime = newDate.toISOString().split("T")[1].slice(0,8);
        console.log("me", newTime);
        //Get time
        let hours = newDate.toISOString().split("T")[1].slice(0,2);
        let minutes = newDate.toISOString().split("T")[1].slice(0,1);
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
  
        let formattedTime = hours + ":" + minutes + " " + ampm;
        predicTime.push({
          label: formattedTime,
        });
      });
    }
  
    return predicTime;
  };
  
  