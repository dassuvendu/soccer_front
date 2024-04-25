import { useEffect, useState } from "react";
// import { dcUnitedIcon, fcDallaIcon } from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { getFixtures } from "../../reducers/PredictionsSlice";

const HomeBannerMatchStartTime = () => {

  const { fixtures } = useSelector((state) => state.prediction);

  const [time, setTime] = useState('');
  
  // const formateTime = time.toString().split("+")[0]
  // console.log("next time",formateTime);
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00', period: 'AM' });
  // console.log("coun",countdown);
  const [diff ,setDiff] = useState()
  // console.log("diff",diff);
  const [matchStarted, setMatchStarted] = useState(false);
  const [nxtMatch, setNextMatch] = useState()
  // console.log("nxt",nxtMatch);
  // useEffect(() => {
  //   if (items && items.length > 0) {
  //     const date = new Date(items[0]?.fixture?.date);
  //     setTime(date.toISOString().split(".")[0]); // Convert date to ISO string
  //   }
  // }, [items]);
  
  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  const dispatch = useDispatch();

  useEffect(() => {
    // Check if any matches are ongoing
    const ongoingMatch = fixtures?.data?.filter(item => {
    
      const fixtureDate = new Date(item?.fixture?.date);
      const currentUTCTime = new Date().toISOString();
      
      fixtureDate.setMinutes(fixtureDate.getMinutes() + fixtureDate.getTimezoneOffset());
      const currentUTCTimeWithoutMs = currentUTCTime.split('.')[0] + 'Z';
  
      return fixtureDate > new Date(currentUTCTimeWithoutMs);
  });
    
    if (ongoingMatch) {
        
        // Filter out the next match
        const Item = fixtures?.data?.filter(item => {
    
          const fixtureDate = new Date(item?.fixture?.date);
          const currentUTCTime = new Date().toISOString();
          
          fixtureDate.setMinutes(fixtureDate.getMinutes() + fixtureDate.getTimezoneOffset());
          const currentUTCTimeWithoutMs = currentUTCTime.split('.')[0] + 'Z';
      
          return fixtureDate > new Date(currentUTCTimeWithoutMs);
      });
       
        setNextMatch(Item[0])
        
        if (Item) {
          setTime(Item[0].fixture.date.toString().split("+")[0]);
        }
     
    } else {
      // If no match is ongoing, find the next match
      const Item = fixtures?.data?.filter(item => {
    
        const fixtureDate = new Date(item?.fixture?.date);
        const currentUTCTime = new Date().toISOString();
        
        fixtureDate.setMinutes(fixtureDate.getMinutes() + fixtureDate.getTimezoneOffset());
        const currentUTCTimeWithoutMs = currentUTCTime.split('.')[0] + 'Z';
    
        return fixtureDate > new Date(currentUTCTimeWithoutMs);
    });
      if (Item) {
        setTime(Item[0].fixture.date);
      }
    }
  }, [fixtures]);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log('calculateTimeLeft ->', calculateTimeLeft())
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  function calculateTimeLeft() {
    // console.log('time->', time)
    if (!time) {
      // console.log("!time");
      return { days: '00', hours: '00', minutes: '00', seconds: '00', period: 'AM' };
    }
    
    const targetDate = new Date(time);
    // console.log("tar",targetDate);
    const now = new Date();
    // console.log("tar1",now);
    const difference = targetDate - now;
    setDiff(difference)
    if (difference < 0) {
      
      return { days: '00', hours: '00', minutes: '00', seconds: '00', period: 'AM' };
    }

 // Convert milliseconds to hours, minutes, and seconds
const totalSeconds = Math.floor(difference / 1000);
const days = Math.floor(totalSeconds / (3600 * 24)).toString().padStart(2, '0');
// console.log("hrsD",days);
let hours = Math.floor((totalSeconds % (3600 * 24)) / 3600).toString().padStart(2, '0');
// console.log("hrsH",hours);
const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
// console.log("hrsM",minutes);
const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');

return { days, hours, minutes, seconds};
  }
  // const [apiCalled, setApiCalled] = useState(false);
  const [color,  setColor] = useState(false);
  // useEffect(() => {
  //   let timeoutId;

  //   if (matchStarted && diff < 0) {
  //     timeoutId = setTimeout(() => {
  //       setApiCalled(false);
  //     }, 30000); //  1 minute
  //   }

  //   return () => clearTimeout(timeoutId);
  // }, [matchStarted,todayFormatted,diff]);

  useEffect(() => {
    let intervalId;

    // Function to fetch fixtures
    const fetchFixtures = () => {
      dispatch(getFixtures({ date: todayFormatted })).then((res) => {
        if (res?.payload?.status === true) {
          setMatchStarted(false);
        }
      });
    };

    // Start interval if diff < 0
    if (diff < 0) {
      setMatchStarted(true);
      intervalId = setInterval(fetchFixtures, 30000);
    }

    // Set color based on diff
    if (diff <= 10000) {
      setColor(true);
    } else {
      setColor(false);
    }

    // Clean up function to clear interval
    return () => {
      clearInterval(intervalId);
    };
  }, [diff, todayFormatted, dispatch]);

  useEffect(() => {
    dispatch(getFixtures({ date: todayFormatted }))
  }, [todayFormatted]);
  
  return (
    <div className="mt-20 mb-[20px] relative z-10 md:px-4 lg:px-0">
      <div className="max-full mx-auto">
        <div className="md:flex justify-center items-center">
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <img src={nxtMatch?.teams?.home?.logo} width={100} alt={ nxtMatch?.teams?.home?.name}/>
            <div className="ml-2 text-right">
              <h2 className="font-Bebas text-[#18191b] text-3xl tracking-normal">
              { nxtMatch?.teams?.home?.name}
              </h2>
              <p className="text-[#9c9da1] text-[12px] italic">
              { nxtMatch?.league?.name}
              </p>
            </div>
          </div>
          {matchStarted ? (
        <div>
          <h1 className="p-5 text-lg text-[red] text-[15px] leading-[15px] font-medium m-2">Match is live!</h1>
        
        </div>
      ):  (
          <div className="flex justify-center items-center mx-16 mb-4 md:mb-0">
            <ul className="flex justify-center items-center">
              <li className="text-center mx-2">
                <div className="flex justify-center items-center">
                  <span className="bg-[#282828] mr-0.5 font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                  {countdown?.days}
                  </span>
                  {/* <span className="bg-[#282828] font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                {countdown?.days?.toString().split("-")[1]}
                  </span> */}
                </div>
                <p className="text-[#282828] text-[10px] pt-0.5">Days</p>
              </li>
              :
              <li className="text-center mx-2">
                <div className="flex justify-center items-center">
                  <span className="bg-[#282828] mr-0.5 font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                  {countdown?.hours}
                  </span>
                  {/* <span className="bg-[#282828] font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                2
                  </span> */}
                </div>
                <p className="text-[#282828] text-[10px] pt-0.5">Hours</p>
              </li>
              :
              <li className="text-center mx-2">
                <div className="flex justify-center items-center">
                  <span className="bg-[#282828] mr-0.5 font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                  {countdown.minutes}
                  </span>
                  {/* <span className="bg-[#282828] font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                  2
                  </span> */}
                </div>
                <p className="text-[#282828] text-[10px] pt-0.5">Minutes</p>
              </li>
              :
              <li className="text-center mx-2">
                <div className="flex justify-center items-center">
                  {color ? 
                  <span className=" flex  bg-[#282828] rounded-t-sm">
                  <span className=" animate-pulse mr-0.6 font-Bebas font-medium tracking-normal text-[yellow] text-[15px] leading-[15px] px-2 pt-2.5 pb-0">
                  {countdown.seconds}
                  </span>
                </span>
                  
                  :
                  <span className="bg-[#282828] mr-0.5 font-Bebas font-medium tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] px-2 pt-2.5 pb-0">
                  {countdown.seconds}
                  </span>
                  }
                  {/* <span className="bg-[#282828] font-Bebas tracking-normal rounded-t-sm text-white text-[15px] leading-[15px] font-medium px-2 pt-2.5 pb-0">
                  7
                  </span> */}
                </div>
                <p className="text-[#282828] text-[10px] pt-0.5">Seconds</p>
              </li>
            </ul>
          </div>
      )}
          <div className="flex items-center justify-center">
            <div className="mr-2 text-left">
              <h2 className="font-Bebas text-[#18191b] text-3xl tracking-normal">
              {nxtMatch?.teams?.away?.name}
              </h2>
              <p className="text-[#9c9da1] text-[12px] italic">
              {nxtMatch?.league?.name}
              </p>
            </div>
            <img src={nxtMatch?.teams?.away?.logo} width={100} alt={nxtMatch?.teams?.away?.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerMatchStartTime;
