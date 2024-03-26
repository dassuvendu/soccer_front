import React from 'react'
import { useSelector } from 'react-redux';

export const useFirstTeamFormationhook = () => {
  const { format } = useSelector((state) => state.formation);

  let firstTeam = []

        format?.data?.response?.forEach((item) => {
      console.log("d",item[1]);
  })
  return firstTeam;
}
