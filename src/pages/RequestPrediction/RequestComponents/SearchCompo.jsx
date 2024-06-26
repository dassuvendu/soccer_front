import { Datepicker } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  getFixtures,
  getFixturesByleague,
  
} from "../../../reducers/PredictionsSlice";

export const SearchCompo = ({ onError }) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { allLeague } = useSelector((state) => state.prediction);
//  const seasonCopy=[...seasons]
  // const sortedSeasons =Array.isArray(seasonCopy) && seasonCopy?.sort((a, b) => b.year - a.year);
  // console.log('seasons', sortedSeasons);
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  // const [isloading, setIsLoading] = useState(false);
  const [isLeague, setIsLeague] = useState();
  console.log("lea",isLeague);
  // const [isRequired, setIsRequired] = useState("*Please Select Date First");
  const [date, setDate] = useState();
  console.log("d", date);
  const [isDate, setIsDate] = useState(false);
  const [api, setApi] = useState(true)
  const [leagueApi,setleagueApi] = useState(true)
  // const [cseason,setCSeason] = useState()
  // const [currentYear, setCurrentYear] = useState();
  // console.log("cY", currentYear);

  const today = new Date();
  const year = today.getFullYear();
  const prevYear = year - 1
  // console.log("pY",prevYear);
  const changeDateformate = today.toISOString().split("T")[0];

  const handleDateChange = (e) => {
    
    // setLoading(true);
    // const year = e.getFullYear();
    const month = String(e.getMonth() + 1).padStart(2, "0");
    const day = String(e.getDate()).padStart(2, "0");
    const newDate = `${year}-${month}-${day}`;
    setDate(newDate);
    // setCurrentYear(year);
    if (newDate && api) {
      dispatch(
        getFixtures({
          date: newDate,
         })
        ).then((response) => {
          if (
            response?.payload?.status === true
           ){
              onError(null);
           }
       if (
         response?.payload?.message ===
           "Something went wrong. Please try again later"
        ) {
          dispatch(
            getFixtures({
              date: newDate,
             })
            ).then((response) =>{
             
              if (
                response?.payload?.message ===
                  "Something went wrong. Please try again later"
               ){
                  onError(400);
               }else {
                onError(null);
              }
            })
     
        } else{
          null
        }
      });
    }
     
      if (newDate && isLeague && year && prevYear) {
        dispatch(
          getFixtures({
            date: newDate,
          league: parseInt(isLeague?.value), // If league is selected, use its value
            season: year,
           })
          ).then((response) => {
            
            if (
              response?.payload?.status === true
             ){
                onError(null);
             }
            else if (
              response?.payload?.message ===
                "Something went wrong. Please try again later"
             ) {
               dispatch(
                 getFixtures({
                   date: newDate,
                 league: parseInt(isLeague.value), // If league is selected, use its value
                   season: prevYear,
                  })
                 ).then((response) =>{
                   if (
                     response?.payload?.message ===
                       "Something went wrong. Please try again later"
                    ){
                       onError(400);
                    }else {
                     onError(null);
                   }
                 })
          
             }
           });
      }
   
  };

  useEffect(() => {
    if (changeDateformate) {
      dispatch(getFixturesByleague({})).then((res) => {
        console.log("res", res.payload.status);
        if (res?.payload?.status === true) {
          setIsDate(true);
   
        } else {
          setIsDate(false);
      
        }
      });
    }
  }, [dispatch, changeDateformate]);

  useEffect(() => {
      dispatch(getFixturesByleague({})) 
  }, [dispatch, date]);

  const handleLeagueChange = (selectedOption) => {
    setApi(false)
    setIsLeague(selectedOption);
    if (date && year && prevYear) {
      console.log("date",date);
      dispatch(
        getFixtures({
          date: date,
        league: parseInt(selectedOption?.value), // If league is selected, use its value
          season: year,
         })
        ).then((response) => {
          setleagueApi(false)
          if (
            response?.payload?.status === true
           ){
              onError(null);
           }
          // console.log("res",response);
          if (
            response?.payload?.message ===
              "Something went wrong. Please try again later"
           ) {
             dispatch(
               getFixtures({
                 date: date,
               league: parseInt(selectedOption.value), // If league is selected, use its value
                 season: prevYear,
                })
               ).then((response) =>{
                 if (
                   response?.payload?.message ===
                     "Something went wrong. Please try again later"
                  ){
                     onError(400);
                  }else {
                   onError(null);
                 }
               })
        
           }
         });
    }
    if (changeDateformate && year && prevYear && leagueApi) {
      console.log("date",date);
      dispatch(
        getFixtures({
          date: changeDateformate,
        league: parseInt(selectedOption?.value), // If league is selected, use its value
          season: year,
         })
        ).then((response) => {
          if (
            response?.payload?.status === true
           ){
              onError(null);
           }
          // console.log("res",response);
          if (
            response?.payload?.message ===
              "Something went wrong. Please try again later"
           ) {
             dispatch(
               getFixtures({
                 date: changeDateformate,
               league: parseInt(selectedOption.value), // If league is selected, use its value
                 season: prevYear,
                })
               ).then((response) =>{
                 if (
                   response?.payload?.message ===
                     "Something went wrong. Please try again later"
                  ){
                     onError(400);
                  }else {
                   onError(null);
                 }
               })
        
           }
         });
    }
  }

  // const handleSearch = (season) => {
  //   setIsRequired(null);
  //   setCSeason(season.target.value)
  //   // if (isseason === true) {
  //   //   dispatch(getFixtures({ league: rid, season: season.target.value })).then(
  //   //     (response) => {
  //   //       if (
  //   //         response?.payload?.message ===
  //   //         "Something went wrong. Please try again later"
  //   //       ) {
  //   //         onError(400);
  //   //       } else {
  //   //         onError(null);
  //   //       }
  //   //     }
  //   //   );
  //   // }
  //   if (date) {
  //     dispatch(

  //       getFixtures({
  //         date: date,
  //         league: isLeague.value,
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

  // };
  // useEffect(() => {
  //   // if ( date && currentYear) {
  //   //   console.log("hi");
  //   // console.log('1stD', date)
  //   // console.log('1stY', currentYear)
  //   // console.log('1stL', isLeague?.value)
  //   //   // dispatch(
  //   //   //   getFixtures({
  //   //   //     date: date,
  //   //   //     league: isLeague?.value, // If league is selected, use its value
  //   //   //     season: currentYear,
  //   //   //   })
  //   //   // ).then((response) => {
  //   //   //   if (
  //   //   //     response?.payload?.message ===
  //   //   //     "Something went wrong. Please try again later"
  //   //   //   ) {
  //   //   //     onError(400);
  //   //   //   } else {
  //   //   //     onError(null);
  //   //   //   }
  //   //   // });
  //   // }
  //   if (isDate && date && isLeague) {
  //     const year = date.split("-")[0];
  //     console.log("2ndD", date);
  //     console.log("2ndY", year);
  //     console.log("2ndL", isLeague?.value);
  //     dispatch(
  //       getFixtures({
  //         date: date, // Default date value
  //         league: isLeague?.value,
  //         season: parseInt(year),
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

  //   if (apiCall && changeDateformate && isLeague) {
  //     const year = changeDateformate.split("-")[0];

  //     console.log("2nd_1D", changeDateformate);
  //     console.log("2nd_1Y", year);
  //     console.log("2nd_1L", isLeague?.value);
  //     //If date is selected and league is not selected
  //     dispatch(
  //       getFixtures({
  //         date: changeDateformate,
  //         league: isLeague?.value, // Provide default league value
  //         season: parseInt(year),
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
  // }, [date, isLeague, changeDateformate, apiCall, isDate]);

  // const [input, setInput] = useState("");

  // const handleInputChange = (newValue) => {
  //   // setInput(newValue);
  // };
  //  const [filteredData,setFilteredData] = useState()

  // useEffect(() => {
  //   console.log('input', input.trim())

  //   const filteredData = allLeague?.data?.filter(data => data?.league?.name.includes(input.trim())).map(item => item)
  //   // filteredData && filteredData.map(item => console.log('item', item));
  //   setFilteredData(filteredData)
  //   optionList();
  // }, [allLeague,input]);

  // let leagueOptions = [];

  // let optionList = () => {
  //   if(input?.length){

  //     leagueOptions = [
  //       ...(filteredData?.data?.map((dlist) => (
  //         {
  //           value: dlist?.league?.id,
  //           label: (
  //             <div style={{ display: "flex" }}>
  //               <img
  //                 src={dlist?.league?.logo}
  //                 alt="League Logo"
  //                 style={{ width: 20, height: 20 }}
  //               />
  //               <span style={{ paddingLeft: "10px" }}>{dlist?.league?.name}</span>
  //             </div>
  //           ),
  //         }
  //       ))) || []
  //     ]
  //   }
  //   else{

  //     leagueOptions = [
  //       ...(allLeague?.data?.map((dlist) => (
  //         {
  //           value: dlist?.league?.id,
  //           label: (
  //             <div style={{ display: "flex" }}>
  //               <img
  //                 src={dlist?.league?.logo}
  //                 alt="League Logo"
  //                 style={{ width: 20, height: 20 }}
  //               />
  //               <span style={{ paddingLeft: "10px" }}>{dlist?.league?.name}</span>
  //             </div>
  //           ),
  //         }
  //       ))) || []
  //     ]
  //   }
  // }
  // useEffect(()=>{
  //   optionList();
  // },[])
  const options = [
    ...(allLeague?.data?.map((dlist) => {
      return {
        value: dlist?.league?.id,
        label: dlist?.league?.name,
      };
    }) || []),
  ];

  // const searchHandle = (value) =>{
  //   // console.log("val",value.target.value);
  //   setCSeason(value.target.value)
  //   if (date) {
  //     dispatch(
  //       getFixtures({
  //         date: date,
  //       league: parseInt(isLeague.value), // If league is selected, use its value
  //         season: parseInt(value.target.value),
  //        })
  //       ).then((response) => {
  //      if (
  //        response?.payload?.message ===
  //          "Something went wrong. Please try again later"
  //       ) {
  //        onError(400);
  //       } else {
  //          onError(null);
  //        }
  //     });
  //   }else{
  //     dispatch(
  //       getFixtures({
  //         date: changeDateformate,
  //       league: parseInt(isLeague.value), // If league is selected, use its value
  //         season: parseInt(value.target.value),
  //        })
  //       ).then((response) => {
  //      if (
  //        response?.payload?.message ===
  //          "Something went wrong. Please try again later"
  //       ) {
  //        onError(400);
  //       } else {
  //          onError(null);
  //        }
  //     });
  //   }
    
  //  }
  

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
      <div className="mb-4 md:mb-0 w-1/2">
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
                  isDisabled={!isDate}
                  onChange={handleLeagueChange}
                  value={options.value} // Set the value to the input state
                  // onInputChange={handleInputChange}
                />
             
          
          </div>
        </div>
      </div>
      {/*  select season */}
      {/* <div className="mb-4 md:mb-0 w-3/12">
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
              disabled = {year}
              >
                <option value="">{year}</option>
                {sortedSeasons?.map((data) => (
                  <option key={data} value={data.year}>
                    {data.year}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};
