import { Datepicker, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  getFixtures,
  getFixturesByleague,
  getSeasons,
} from "../../../reducers/PredictionsSlice";

export const SearchCompoId = ({ onError , rid, setSeason,setSendDate}) => {
  // console.log("sear",id);
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { allLeague, seasons } = useSelector((state) => state.prediction);
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isSeason, setIsSeason] = useState(false);
  const [leagueName, setleagueName] = useState('');
  const [date, setDate] = useState();
  const [cseason,setCSeason] = useState()
 

  const handleDateChange = (e) => {
    // console.log(e);
    // setLoading(true);
    const year = e.getFullYear();
  const month = String(e.getMonth() + 1).padStart(2, "0");
  const day = String(e.getDate()).padStart(2, "0");
  const newDate = `${year}-${month}-${day}`
  setDate(newDate);
  setSendDate(newDate)
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
      
        if (isSeason === false) {
          dispatch(getSeasons({})).then((res) => {
            if (res?.payload?.status === true) {
              setIsLoading(false);
              setIsSeason(true);
            }
          });
        }
      }
    }
  }, [allLeague,rid]);

 

  const handleSearch = (season) => {
    setSeason(season.target.value )
    setCSeason(season.target.value)
    if (leagueName === leagueName) {
      dispatch(
        getFixtures({date : date, league: rid , season: season.target.value })
      ).then((response) => {
       if (
          response?.payload?.message ===
          "Something went wrong. Please try again later"
        ) {
          setIsLoading(false)
          onError(400);
        } else {
          onError(null);
        }
      });
    }
   
  };
  useEffect(()=>{
    if (date,cseason) {
      dispatch(
     
        getFixtures({
          date: date,
          league: rid,
          season: cseason,
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
  },[date,cseason,rid])
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
  const today = new Date();
  today.setFullYear(today.getFullYear());
  const todayFormatted = today.toISOString().split("T")[0];
  console.log("Td",todayFormatted);
  const Year = todayFormatted.toString().split('-')[0]
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
                // placeholder="Select or Search League"
                // options={options}
                // onChange={handleLeagueChange}
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
              <select disabled={!isSeason} onChange={handleSearch}>
                <option value={Year}>{Year}</option>
                {seasons?.data?.map((data) => (
                  <option key={data} value={data}>
                    {data}
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
