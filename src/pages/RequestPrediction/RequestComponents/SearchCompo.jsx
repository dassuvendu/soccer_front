import { Datepicker, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  getFixtures,
  getFixturesByleague,
  getSeasons,
} from "../../../reducers/PredictionsSlice";

export const SearchCompo = ({ onError}) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { allLeague, seasons } = useSelector((state) => state.prediction);
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isseason, setIsSeason] = useState();
  const [isRequired, setIsRequired] = useState();

  const handleDateChange = (e) => {
    // console.log(e);
    // setLoading(true);
    const year = e.getFullYear();
    const month = String(e.getMonth() + 1).padStart(2, "0");
    const day = String(e.getDate()).padStart(2, "0");
    const newDate = `${year}-${month}-${day}`
    dispatch(getFixtures({ date: newDate }));
  };
  
  useEffect(() => {
    dispatch(getFixturesByleague({}))
  }, [dispatch])

  const handleLeagueChange = (selectedOption) => {
    setIsLoading(true);
    setIsSeason(selectedOption);
    let requried = 'required*'
    setIsRequired(requried)
    dispatch(getSeasons({})).then((res) => {
      if (res?.payload?.status === true) {
        setIsLoading(false);
      }
    });
  };

  const handleSearch = (season) => {
    setIsRequired(null)
    if (isseason === true) {
      dispatch(
        getFixtures({ league: rid, season: season.target.value })
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
    dispatch(
      getFixtures({ league: isseason.value, season: season.target.value })
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
  };

  const options = [
    ...(allLeague?.data?.map((dlist) => {
      return {
        value: dlist?.league?.id,
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
            className={` ${themeMode === "light"
                ? "date_picker_box_light Select_League"
                : "date_picker_box Select_League"
              }`}
          >
            <Select
              // placeholder="Select or Search League"
              options={options}
              onChange={handleLeagueChange}
              value={options.label}
            />
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
          <span className="text-red-500"> {isRequired}</span>
        </p>
        <div className="mb-4 md:mb-0">
          <div
            className={` ${themeMode === "light"
                ? "date_picker_box_light Select_Season"
                : "date_picker_box Select_Season"
              }`}
          >
            {isloading ? (
              <select name="sel" disabled>
                <option>Loading...</option>
              </select>
            ) : (
              <select disabled={!isseason} onChange={handleSearch}>
                <option value="">Select</option>
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
