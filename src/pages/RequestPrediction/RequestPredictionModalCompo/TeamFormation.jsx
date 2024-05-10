import  { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import {
  useATeamFormationhook,
  useHTeamFormationhook,
} from "../../../hooks/useTeamFormationhook";
import SoccerLineUp from "react-soccer-lineup";
import {  Tabs, TabPanel } from "react-tabs";

const TeamFormation = ({ Hplayers, Aplayers }) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const HTeam = useHTeamFormationhook();
  const ATeam = useATeamFormationhook();

  const [hgkName, setHGkName] = useState("");
  const [hgkNum, setHGkNum] = useState("");
  const [agkName, setAGkName] = useState("");
  const [agkNum, setAGkNum] = useState("");

  useEffect(() => {
    if (Array.isArray(HTeam)) {
      const goalkeeper = HTeam.find((player) => player?.Gk?.pPos === "G");
      if (goalkeeper) {
        setHGkName(goalkeeper?.Gk?.pName);
        setHGkNum(goalkeeper?.Gk?.pNumber);
      } else {
        setHGkName("");
        setHGkNum("");
      }
    }
  }, [HTeam]);

  useEffect(() => {
    if (Array.isArray(ATeam)) {
      const goalkeeper = ATeam.find((player) => player?.Gk?.pPos === "G");
      if (goalkeeper) {
        setAGkName(goalkeeper?.Gk?.pName);
        setAGkNum(goalkeeper?.Gk?.pNumber);
      } else {
        setAGkName("");
        setAGkNum("");
      }
    }
  }, [ATeam]);

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Tabs className="team_comparisions_tab_section">
        
          <TabPanel>
            <div className="py-4">
             
              <div className="max-w-3xl mx-auto my-8">
                <div className="border-y border-gray-300 py-3 px-4 flex justify-between items-center">
                  {Hplayers?.map((data) => {
                    return (
                      <>
                        <div className="text-center flex items-center">
                          <img
                            src={data?.team?.logo}
                            alt={data?.team?.name}
                            className="inline-block mr-2 w-12"
                          />
                          <p
                            className={`font-Syne text-[15px] leading-[20px] font-bold ${
                              themeMode === "light"
                                ? "text-black"
                                : "text-white"
                            }`}
                          >
                            {data?.team?.name?.slice(0,14)}
                          </p>
                        </div>
                        <p
                          className={`font-Syne text-[15px] leading-[20px] font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          {data?.formation}
                        </p>
                      </>
                    );
                  })}

                  {Aplayers?.map((data) => {
                    return (
                      <>
                        <div className="text-center flex items-center">
                          <img
                            src={data?.team?.logo}
                            alt={data?.team?.name}
                            className="inline-block mr-2 w-12"
                          />
                          <p
                            className={`font-Syne text-[15px] leading-[20px] font-bold ${
                              themeMode === "light"
                                ? "text-black"
                                : "text-white"
                            }`}
                          >
                            {data?.team?.name?.slice(0,14)}
                          </p>
                        </div>
                        <p
                          className={`font-Syne text-[15px] leading-[20px] font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          {data?.formation}
                        </p>
                      </>
                    );
                  })}
                </div>
                <div className="my-4 flex justify-center items-center">
                  <SoccerLineUp
                    size="responsive"
                    color="green"
                    pattern="squares"
                    homeTeam={{
                      squad: {
                        gk: {
                          name: hgkName,
                          number: hgkNum,
                        },
                        df: HTeam?.filter(
                          (player) => player?.def?.pPos === "D"
                        ).map((player) => ({
                          name: player?.def?.pName,
                          number: player?.def?.pNumber,
                        })),
                        cm: HTeam?.filter(
                          (player) => player?.cm?.pPos === "M"
                        ).map((player) => ({
                          name: player?.cm?.pName,
                          number: player?.cm?.pNumber,
                        })),
                      
                        fw: HTeam?.filter(
                          (player) => player?.fw?.pPos === "F"
                        ).map((player) => ({
                          name: player?.fw?.pName,
                          number: player?.fw?.pNumber,
                        })),
                      },
                    }}
                    awayTeam={{
                      squad: {
                        gk: {
                          name: agkName,
                          number: agkNum,
                        },
                        df: ATeam?.filter(
                          (player) => player?.def?.pPos === "D"
                        ).map((player) => ({
                          name: player?.def?.pName,
                          number: player?.def?.pNumber,
                        })),
                        cm: ATeam?.filter(
                          (player) => player?.cm?.pPos === "M"
                        ).map((player) => ({
                          name: player?.cm?.pName,
                          number: player?.cm?.pNumber,
                        })),
                        fw: ATeam?.filter(
                          (player) => player?.fw?.pPos === "F"
                        ).map((player) => ({
                          name: player?.fw?.pName,
                          number: player?.fw?.pNumber,
                        })),
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </TabPanel>
        
        </Tabs>
      </div>
    </div>
  );
};
export default TeamFormation;
