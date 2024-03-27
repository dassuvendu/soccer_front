import React from 'react'
import { useSelector } from 'react-redux';

export const useHTeamFormationhook = () => {
  const { Hplayers } = useSelector((state) => state.formation);

  let HTeam = []

  if (Hplayers) {
    Hplayers?.forEach((item) => {
      item?.startXI.forEach((data)=>{
        if (data?.player?.pos === 'G') {
          const Gk = {
               pName: data?.player?.name,
               pNumber:data?.player?.number,
               pPos: data?.player?.pos
           }
           HTeam.push({
             Gk: Gk,
           });
       }
                if (data?.player?.pos === 'D') {
                 const def = {
                      pName: data?.player?.name,
                      pNumber:data?.player?.number,
                      pPos: data?.player?.pos
                  }
                  HTeam.push({
                    def: def,
                  });
              }
              if (data?.player?.pos === 'M') {
                const cm = {
                     pName: data?.player?.name,
                     pNumber:data?.player?.number,
                     pPos: data?.player?.pos
                 }
                 HTeam.push({
                   cm: cm,
                 });
             }
             if (data?.player?.pos === 'F') {
              const fw = {
                   pName: data?.player?.name,
                   pNumber:data?.player?.number,
                   pPos: data?.player?.pos
               }
               HTeam.push({
                 fw: fw,
               });
           }
      });
      // Assuming each item in startXI contains player information like id, name, etc.
      // HTeam.push({
      //   name: item.name,
      //   position: item.pos, // Assuming there's a position property for players
      // });
    });
  }
  return HTeam;
}

export const useATeamFormationhook = () => {
  const { Aplayers } = useSelector((state) => state.formation);

  let ATeam = []

  if (Aplayers) {
    Aplayers?.forEach((item) => {
      item?.startXI.forEach((data)=>{
        if (data?.player?.pos === 'G') {
          const gk = {
               pName: data?.player?.name,
               pNumber:data?.player?.number,
               pPos: data?.player?.pos
           }
           ATeam.push({
             gk: gk,
           });
       }
                if (data?.player?.pos === 'D') {
                 const def = {
                      pName: data?.player?.name,
                      pNumber:data?.player?.number,
                      pPos: data?.player?.pos
                  }
                  ATeam.push({
                    def: def,
                  });
              }
              if (data?.player?.pos === 'M') {
                const cm = {
                     pName: data?.player?.name,
                     pNumber:data?.player?.number,
                     pPos: data?.player?.pos
                 }
                 ATeam.push({
                   cm: cm,
                 });
             }
             if (data?.player?.pos === 'F') {
              const fw = {
                   pName: data?.player?.name,
                   pNumber:data?.player?.number,
                   pPos: data?.player?.pos
               }
               ATeam.push({
                 fw: fw,
               });
           }
      });
      // Assuming each item in startXI contains player information like id, name, etc.
      // HTeam.push({
      //   name: item.name,
      //   position: item.pos, // Assuming there's a position property for players
      // });
    });
  }
  return ATeam;
}