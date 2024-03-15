import { Datepicker, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useState } from "react";
import { getFixtures, getFixturesByleague, getSeasons } from "../../../reducers/PredictionsSlice";

export const SearchCompo = ({onError}) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { allLeague, seasons } = useSelector((state) => state.prediction);
  const dispatch = useDispatch();
  const [league, setLeague] = useState('')
  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isseason, setIsSeason] = useState()
 
  const handleDateChange = (e) => {
    console.log(e);
    setLeague(e)
    setLoading(true);
    const date = e.toISOString().split("T")[0];
    dispatch(getFixtures({ date: date })).then(() => {
      dispatch(getFixturesByleague({})).then(() => {
        setLoading(false)
      })
    })
  };

  const handleLeagueChange = (selectedOption) => {
    setIsLoading(true)
    setIsSeason(selectedOption)
    dispatch(getSeasons({})).then(() => {
      setIsLoading(false)
    })
  };
  const handleSearch = (season) => {
   
    dispatch(getFixtures({ league: isseason.value, season: season.target.value })).then((response)=>{
      console.log(response);
    if (response.payload.message === 'Something went wrong. Please try again later') {
      onError(400); 
    }else{
      onError(null)
    }
     
    })
   
  };
 
  const options = [
    ...(allLeague?.map((dlist) => {
      return {
        value: dlist?.league?.id,
        // season: dlist?.league?.season,
        label: (
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

  return (
    <>
      <div className="mb-4 md:mb-0 w-1/1">
        <p
          className={`text-[14px] leading-[20px] font-medium ${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
            } pb-2`}
        >
          Select Date
        </p>
        <div
          className={` ${themeMode === "light" ? "date_picker_box_light" : "date_picker_box"
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
          className={`text-[14px] leading-[20px] font-medium ${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
            } pb-2`}
        >
          Select League
        </p>
        <div className="mb-4 md:mb-0">
          <div
            className={` ${themeMode === "light" ? "date_picker_box_light Select_League" : "date_picker_box Select_League"
              }`}
          >

            {loading ? (
              <Select
                isDisabled={league}
                placeholder={
                  <div className="text-center">
                    <Spinner color="success" aria-label="Warning spinner example" size="sm" />
                    <span className="pl-3">Loading...</span>
                  </div>
                }
                value='Loading...'
              />
            ) : (
              <Select
                isDisabled={!league}
                placeholder='Select or Search League'
                options={options}
                onChange={handleLeagueChange}
                value={options.label} // Step 3: Corrected 'Value' to 'value'
              />
            )}

          </div>
        </div>
      </div>

      {/*  select season */}

      <div className="mb-4 md:mb-0 w-3/3">
        <p
          className={`text-[14px] leading-[20px] font-medium ${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
            } pb-2`}
        >
          Select Season
        </p>
        <div className="mb-4 md:mb-0">
          <div
            className={` ${themeMode === "light" ? "date_picker_box_light Select_Season" : "date_picker_box Select_Season"
              }`}
          >
            {isloading ? (
              <select name="sel" disabled>
                <option>Loading...</option>
              </select>
            ) : (
              <select disabled={!isseason} onChange={handleSearch} >
                <option value=''>Select</option>
                {seasons.map(data => (
                  <option key={data} value={data}>{data}</option>
                ))}
              </select>
            )
            }

          </div>
          
        </div>
        
      </div>
    </>
  );
};


