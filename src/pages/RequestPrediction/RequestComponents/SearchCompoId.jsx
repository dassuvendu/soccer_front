import { Datepicker } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  getFixtures,
  getFixturesByleague,
  getleagueByid,
} from "../../../reducers/PredictionsSlice";

export const SearchCompoId = ({ onError , rid,setSendData }) => {
  // console.log("sear",id);
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { allLeague, seasons } = useSelector((state) => state.prediction);
  const seasonCopy=[...seasons]
   const sortedSeasons =Array.isArray(seasonCopy) && seasonCopy?.sort((a, b) => b.year - a.year);
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  // const [isSeason, setIsSeason] = useState(false);
  const [leagueName, setleagueName] = useState('');
  const [date, setDate] = useState();
  // const [cseason,setCSeason] = useState()
  const [currentYear,setCurrentYear]=useState()
  console.log("cY",currentYear);
  const [cseason,setCSeason] = useState()
  // const today = new Date();
  // const Year = today.getFullYear()
  const today = new Date();
  // const year = today.getFullYear();
  const changeDateformate = today.toISOString().split("T")[0];
  
  const handleDateChange = (e) => {
    // console.log(e);
    // setLoading(true);
    const year = e.getFullYear();
  const month = String(e.getMonth() + 1).padStart(2, "0");
  const day = String(e.getDate()).padStart(2, "0");
  const newDate = `${year}-${month}-${day}`
  setDate(newDate);
  setSendData(newDate)
  setCurrentYear(year)
  if (rid && cseason) {
    const leagueId = parseInt(rid)
    dispatch(
      getFixtures({
        date: newDate,
      league: parseInt(leagueId), // If league is selected, use its value
        season: parseInt(cseason),
       })
      ).then((response) => {
     if (
       response?.payload?.message ===
         "Something went wrong. Please try again later"
      ) {
       onError(400);
      } else {
         onError(null);
       }
    });
  }else{
    null
  }
  };

 useEffect(()=>{
 
    dispatch(getFixturesByleague({}))
  
 },[dispatch])

  // const handleLeagueChange = () => {
  //   setIsLoading(true);
  //   let requried = 'required*'
  //   setIsRequired(requried)
  // };


  useEffect(() => {
    if (allLeague && rid) {
      const filteredLeagues = allLeague?.data?.filter(data =>  data?.league?.id == rid);
      console.log("Filtered Leagues:", filteredLeagues);
      if(Array.isArray(filteredLeagues)&&filteredLeagues){
        setleagueName(filteredLeagues[0]?.league?.name)
      }
          dispatch(getleagueByid({league : rid})).then((res) => {
            if (res?.payload?.status === true) {
              setIsLoading(false);
            }
          });
      }
  }, [allLeague,rid]);

 

  // const handleSearch = (season) => {
  //   setSeason(season.target.value )
  //   setCSeason(season.target.value)
  //   if (leagueName === leagueName) {
  //     // dispatch(
  //     //   getFixtures({date : date, league: rid , season: season.target.value })
  //     // ).then((response) => {
  //     //  if (
  //     //     response?.payload?.message ===
  //     //     "Something went wrong. Please try again later"
  //     //   ) {
  //     //     setIsLoading(false)
  //     //     onError(400);
  //     //   } else {
  //     //     onError(null);
  //     //   }
  //     // });
  //   }
   
  // };
  

  const options = [
    ...(allLeague?.data?.map((dlist) => {
      return {
        value: dlist?.league?.id,
        label: 
        (
          <div style={{ display: "flex" }}>
            <img
              src={dlist?.league?.logo}
              alt="League Logo"
              style={{ width: 20, height: 20 }}
            />
            <span style={{ paddingLeft: "10px" }}>{dlist?.league?.name}</span>
          </div>
        ),
      };
    }) || []),
  ];

  // useEffect(()=>{
  //   if (date && currentYear) {
  //     const leagueId = parseInt(rid)
  //     dispatch(
  //       getFixtures({
  //         date: date,
  //         league: leagueId,
  //         season: currentYear,
  //       })
  //     ).then((response) => {
  //       if (
  //         response?.payload?.message ===
  //         "Something went wrong. Please try again later"
  //       ) {
  //         onError(400);
  //       } else {
  //         onError(null);
  //       }
  //     });
  //   }
  //   // if (changeDateformate && currentYear) {
  //   //   const leagueId = parseInt(rid)
  //   //   console.log("type",typeof leagueId);
  //   //   dispatch(
     
  //   //     getFixtures({
  //   //       date: changeDateformate,
  //   //       league: leagueId,
  //   //       season: Year,
  //   //     })
  //   //   ).then((response) => {
  //   //     if (
  //   //       response?.payload?.message ===
  //   //       "Something went wrong. Please try again later"
  //   //     ) {
  //   //       onError(400);
  //   //     } else {
  //   //       onError(null);
  //   //     }
  //   //   });
  //   // }
  // },[date,currentYear,rid])

  const searchHandle = (value) =>{
    console.log("val",value.target.value);
    setCSeason(value.target.value)
    if (date) {
      dispatch(
        getFixtures({
          date: date,
        league: parseInt(rid), // If league is selected, use its value
          season: parseInt(value.target.value),
         })
        ).then((response) => {
       if (
         response?.payload?.message ===
           "Something went wrong. Please try again later"
        ) {
         onError(400);
        } else {
           onError(null);
         }
      });
    }else{
      dispatch(
        getFixtures({
          date: changeDateformate,
        league: parseInt(rid), // If league is selected, use its value
          season: parseInt(value.target.value),
         })
        ).then((response) => {
       if (
         response?.payload?.message ===
           "Something went wrong. Please try again later"
        ) {
         onError(400);
        } else {
           onError(null);
         }
      });
    }
   }
  
  return (
    <>
      <div className="mb-4 md:mb-0 w-1/1">
        <p
          className={`text-[14px] leading-[20px] font-medium ${
            themeMode === "light" ? "text-[#0d0f11]" : "text-white"
          } pb-2`}
        >
          Select Date
        </p>
        <div
          className={` ${
            themeMode === "light" ? "date_picker_box_light" : "date_picker_box"
          }`}
        >
          <div>
            <Datepicker onSelectedDateChanged={handleDateChange} />
          </div>
        </div>
      </div>

      {/* season Select */}

      <div className="mb-4 md:mb-0 w-2/2">
        <p
          className={`text-[14px] leading-[20px] font-medium ${
            themeMode === "light" ? "text-[#0d0f11]" : "text-white"
          } pb-2`}
        >
          Select League
        </p>
        <div className="mb-4 md:mb-0">
          <div
            className={` ${
              themeMode === "light"
                ? "date_picker_box_light Select_League"
                : "date_picker_box Select_League"
            }`}
          >
              <Select
                 options={options}
                 value={options.filter(option => option.label.props.children[1].props.children === leagueName)} 
                 menuIsOpen={false}
              />
          </div>
        </div>
      </div>

      {/*  select season */}

      <div className="mb-4 md:mb-0 w-3/3">
        <p
          className={`text-[14px] leading-[20px] font-medium ${
            themeMode === "light" ? "text-[#0d0f11]" : "text-white"
          } pb-2`}
        >
          Select Season
        </p>
        <div className="mb-4 md:mb-0">
          <div
            className={` ${
              themeMode === "light"
                ? "date_picker_box_light Select_Season"
                : "date_picker_box Select_Season"
            }`}
          >
            {isloading ? (
              <select name="sel" disabled>
                <option>Loading...</option>
              </select>
            ) : (
              <select
              onChange={searchHandle}
              >
                <option value="">Select</option>
                {sortedSeasons?.map((data) => (
                  <option key={data} value={data.year}>
                    {data.year}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
