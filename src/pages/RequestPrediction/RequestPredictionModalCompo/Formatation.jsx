import { Tabs, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { Tab, TabList, TabPanel } from "react-tabs";
import SoccerLineUp from "react-soccer-lineup";

export const Formatation = ({ homeid, awayid }) => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  const { format } = useSelector((state) => state.formation);
  console.log(format);
  return (
    <div>
      {/* <h4 className="font-Bebas text-2xl tracking-normal text-black text-center mb-4 mt-4">
      Select Aucas's Formation
    </h4> */}

      {/* <select
    defaultValue={selectedOption}
    onChange={handelOption}
    >
      {Array.isArray(format)&&format.map((format)=>(
        <option value={format.value}>{format.value}</option>
      ))}
      
    </select> */}

      {format.data.response.map((data) => {
        const homeTeamFormate = data?.teams?.home?.id;
        const awayTeamFormate = data?.teams?.away?.id;

        let homeTeamFormatation;
        console.log("home", homeTeamFormatation);

        if (homeid == homeTeamFormate) {
          homeTeamFormatation = data?.teams?.home?.logo;
          // {
          //     logo: data?.teams?.home?.logo,
          //     name: data?.teams?.home?.name,
          //     formation: data?.teams?.home?.formation,

          // }
        }

        if (homeid == awayTeamFormate) {
          homeTeamFormatation = data?.teams?.away?.logo;
          // {
          //     logo: data?.teams?.away?.logo,
          //     name: data?.teams?.away?.name,
          //     formation: data?.teams?.away?.formation,

          // }
        }
        return (
          <div className="max-w-5xl mx-auto">
            <Tabs className="team_comparisions_tab_section">
              {/* <TabList className="tab_bar mt-6">
          <Tab>4-3-3</Tab>
          <Tab>5-3-2</Tab>
          <Tab>4-2-3-1</Tab>
          <Tab>4-4-2</Tab>
          <Tab>3-3-3-1</Tab>
          <Tab>3-2-4-1</Tab>
        </TabList> */}
              <TabPanel>
                <div className="py-4">
                  {/* <h3 class="text-[#2aa9e1] text-[18px] leading-[24px] font-medium text-center">
              Custom formation
            </h3> */}
                  {/* <div className="max-w-xl mx-auto my-4 flex">
              <TextInput
                id="text"
                type="text"
                className="mr-2 w-full"
              />
              <button
                className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[40px] h-[40px] font-bold rounded-3xl flex items-center font-Syne"
                type="submit"
              >
                Apply
              </button>
            </div> */}
                  <div className="max-w-3xl mx-auto my-8">
                    <div className="border-y border-gray-300 py-3 px-4 flex justify-between items-center">
                      <div className="text-center flex items-center">
                        <img
                          src={homeTeamFormatation}
                          alt={homeTeamFormatation}
                          className="inline-block mr-2 w-12"
                        />
                        <p
                          className={`font-Syne text-[15px] leading-[20px] font-bold ${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                        >
                          {homeTeamFormatation}
                        </p>
                      </div>
                      <p
                        className={`font-Syne text-[15px] leading-[20px] font-bold ${
                          themeMode === "light" ? "text-black" : "text-white"
                        }`}
                      >
                        {homeTeamFormatation}
                      </p>
                    </div>
                    <div className="my-4 flex justify-center items-center">
                      <div className="App">
                        <SoccerLineUp
                          size={"small"}
                          color={"green"}
                          pattern={"lines"}
                          homeTeam={{
                            squad: {
                              gk: {
                                name: "John Doe",
                                number: (
                                  <img src="https://your-image-url.com/goalkeeper.png" />
                                ),
                              },
                              df: [
                                { name: "Jane Doe", number: 4 },
                                { name: "Jim Brown", number: 5 },
                                { name: "Jane Doe", number: 4 },
                              ],
                              cm: [
                                {
                                  name: "Amy Johnson",
                                  number: (
                                    <img src="https://your-image-url.com/goalkeeper.png" />
                                  ),
                                },
                                { name: "Bob Williams", number: 14 },
                                { name: "Bob Williams", number: 14 },
                              ],
                              fw: [
                                {
                                  name: "Amy Johnson",
                                  number: (
                                    <img src="https://your-image-url.com/goalkeeper.png" />
                                  ),
                                },
                                { name: "Bob Williams", number: 14 },
                              ],
                            },
                          }}
                          awayTeam={{
                            squad: {
                              gk: { name: "Alex Smith", number: 12 },
                              df: [
                                { name: "Amy Johnson", number: 13 },
                                { name: "Bob Williams", number: 14 },
                              ],
                              atk: [
                                { name: "Amy Johnson", number: 13 },
                                { name: "Bob Williams", number: 14 },
                              ],
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>2</TabPanel>
              <TabPanel>3</TabPanel>
              <TabPanel>4</TabPanel>
              <TabPanel>5</TabPanel>
              <TabPanel>6</TabPanel>
            </Tabs>
          </div>
        );
      })}
    </div>
  );
};
