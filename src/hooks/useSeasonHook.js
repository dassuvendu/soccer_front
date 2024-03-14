import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatesByCountryCode } from "../slices/NewEmpSlice";

const useSeasonCode = (code) => {
  const { fixtures } = useSelector((state) => state.prediction);

  let codeList = [];

  if (code) {
    Array.isArray(fixtures) &&
      fixtures?.forEach((item) => {
        codeList.push({
          value: item.league.id,
          label: item.league.season,
        });
      });
  }
  return codeList;
};

export default useSeasonCode;
