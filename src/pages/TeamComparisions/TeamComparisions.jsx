import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BuyTokenIcon } from "../../assets/images/images";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Label, Button, Modal, TextInput } from "flowbite-react";
import ViewComparisonDetails from "./ViewComparisonDetails";
import { getLeague, serachTeam } from "../../reducers/TeamComparisonSlice";
import debounce from "../../utils/debounce";
import ViewTeamInformationDetails from "./ViewTeamInformationDetails";
import Select from "react-select";
const TeamComparisions = () => {
  const [openTeamComparisionsModal, setOpenTeamComparisionsModal] =
    useState(false);
  // const teamComparisionsModalHandler = () => {
  //   setOpenTeamComparisionsModal(true);
  // };

  const [openTeamInformationModal, setOpenTeamInformationModal] =
    useState(false);
  const teamInformationModalHandler = () => {
    setOpenTeamInformationModal(true);
  };

  const themeMode = useSelector((state) => state.darkmode.mode);
  const { teams } = useSelector((state) => state.teamComparision);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [searchInputDep, setSearchInputDep] = useState("");
  const [searchImgInput, setSearchImgInput] = useState(true);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [searchInput1, setSearchInput1] = useState("");
  const [searchImgInput1, setSearchImgInput1] = useState(true);
  const [filteredTeams1, setFilteredTeams1] = useState([]);
  const [team1Id, setTeam1Id] = useState("");
  const [team2Id, setTeam2Id] = useState("");
  const [singleTeamId, setSingleTeamId] = useState("");
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [firstteamselectedOption, setFirstTeamSelectedOption] = useState(null);
  const [isFirstTeamMenuOpen, setIsFirstTeamMenuOpen] = useState(false);
  const [secondselectedTeamOption, setSecondSelectedTeamOption] =
    useState(null);
  const [isSecondTeamMenuOpen, setIsSecondTeamMenuOpen] = useState(false);
  const [singleteamselectedOption, setSingleTeamSelectedOption] =
    useState(null);
  const [isSingleTeamMenuOpen, setIsSingleTeamMenuOpen] = useState(false);
  const teamComparisionsModalHandler = (team1Id, team2Id) => {
    setOpenTeamComparisionsModal(true);
    console.log("team1Id: ", team1Id);
    console.log("team2Id: ", team2Id);
  };

  // useEffect(() => {
  //   if (searchInput && searchInput.length >= 3)
  //     dispatch(serachTeam({ name: searchInput }));
  // }, [dispatch, searchInput]);
  // useEffect(() => {
  //   setFilteredTeams(
  //     Array.isArray(teams) &&
  //       teams?.filter((team) =>
  //         team?.team?.name.toLowerCase().includes(searchInput.toLowerCase())
  //       )
  //   );
  // }, [teams, searchInput]);
  // const handleInputChange = (e) => {
  //   setSearchInput(e.target.value);
  // };

  // //second search

  // useEffect(() => {
  //   if (searchInput1 && searchCompleted)
  //     dispatch(serachTeam({ name: searchInput1 }));
  // }, [dispatch, searchInput1, searchCompleted]);
  // useEffect(() => {
  //   setFilteredTeams1(
  //     Array.isArray(teams) &&
  //       teams?.filter((team) =>
  //         team?.team?.name.toLowerCase().includes(searchInput1.toLowerCase())
  //       )
  //   );
  // }, [teams, searchInput1]);
  // const handleInputChange1 = (e) => {
  //   setSearchInput1(e.target.value);
  // };
  // const handleteam = (e) => {
  //   setFilteredTeams([]);
  //   console.log("team1 e", e);
  //   let name = e.split("_")[0];
  //   let logo = e.split("_")[1];
  //   let id = e.split("_")[2];
  //   setSearchInput(name);
  //   setSearchImgInput(logo);
  //   console.log("team1 ", id);
  //   setTeam1Id(id);
  //   setSearchCompleted(true);
  // };
  // const handleteam1 = (e) => {
  //   setFilteredTeams1([]);
  //   console.log(e);

  //   let name = e.split("_")[0];
  //   let logo = e.split("_")[1];
  //   let id = e.split("_")[2];

  //   setSearchInput1(name);
  //   setSearchImgInput1(logo);
  //   console.log("team2 id: ", e.split("_"));
  //   setTeam2Id(id);
  // };
  const handleTeamChange = (firstteamselectedOption) => {
    setFirstTeamSelectedOption(firstteamselectedOption.id);
    setTeam1Id(firstteamselectedOption.id);
    console.log("id1: ", firstteamselectedOption.id);
    setIsFirstTeamMenuOpen(false);
  };

  const handleInputTeamChange = (inputValue) => {
    if (inputValue.length >= 3) {
      dispatch(serachTeam({ name: inputValue })).then(() => {
        setIsFirstTeamMenuOpen(true);
      });
    } else {
      setIsFirstTeamMenuOpen(false);
    }
  };

  const handleTeamSecondChange = (secondselectedOption) => {
    setSecondSelectedTeamOption(secondselectedOption.id);
    setTeam2Id(secondselectedOption.id);
    console.log("id1: ", secondselectedOption.id);
    setIsSecondTeamMenuOpen(false);
    // console.log(`Option selected:`, secondselectedOption);
  };

  const handleInputTeamSecondChange = (inputValue) => {
    if (inputValue.length >= 3) {
      dispatch(serachTeam({ name: inputValue })).then(() => {
        setIsSecondTeamMenuOpen(true);
      });
    } else {
      setIsSecondTeamMenuOpen(false);
    }
  };
  //single team
  const handleSingleTeamChange = (singleteamselectedOption) => {
    setSingleTeamSelectedOption(singleteamselectedOption.id);
    setSingleTeamId(singleteamselectedOption.id);
    console.log("single: ", singleteamselectedOption.id);
    setIsSingleTeamMenuOpen(false);
  };

  const handleSingleInputTeamChange = (inputValue) => {
    if (inputValue.length >= 3) {
      dispatch(serachTeam({ name: inputValue })).then(() => {
        setIsSingleTeamMenuOpen(true);
      });
    } else {
      setIsSingleTeamMenuOpen(false);
    }
  };
  //single team end
  const optionsFirstTeam = [
    ...(teams?.response?.map((dlist) => {
      return {
        value: dlist?.team?.name,
        id: dlist?.team?.id,
        label: (
          <div style={{ display: "flex" }}>
            <img
              src={dlist?.team?.logo}
              alt="League Logo"
              style={{ width: 20, height: 20 }}
            />
            <span style={{ paddingLeft: "10px" }}>{dlist?.team?.name}</span>
          </div>
        ),
      };
    }) || []),
  ];

  const optionsSecondTeam = [
    ...(teams?.response?.map((dlist) => {
      return {
        value: dlist?.team?.name,
        id: dlist?.team?.id,
        label: (
          <div style={{ display: "flex" }}>
            <img
              src={dlist?.team?.logo}
              alt="League Logo"
              style={{ width: 20, height: 20 }}
            />
            <span style={{ paddingLeft: "10px" }}>{dlist?.team?.name}</span>
          </div>
        ),
      };
    }) || []),
  ];

  //single team
  const optionsSingleTeam = [
    ...(teams?.response?.map((dlist) => {
      return {
        value: dlist?.team?.name,
        id: dlist?.team?.id,
        label: (
          <div style={{ display: "flex" }}>
            <img
              src={dlist?.team?.logo}
              alt="League Logo"
              style={{ width: 20, height: 20 }}
            />
            <span style={{ paddingLeft: "10px" }}>{dlist?.team?.name}</span>
          </div>
        ),
      };
    }) || []),
  ];
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="flex justify-between items-center mb-8">
          <h1
            className={`${
              themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
            } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
          >
            Stats Comparisions
          </h1>
          {/* <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[12px] md:text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            Match Predictions <FiArrowRight className="text-white ml-0.5" />
          </Link> */}
        </div>
        <div
          className={` ${
            themeMode === "light" ? "bg-[#e2e2e2]" : "bg-[#191D23]"
          } rounded-xl p-6 md:py-[60px]`}
        >
          <div className="max-w-2xl mx-auto">
            <Tabs className="team_comparisions_tab_section">
              <TabList className="tab_bar">
                <Tab>Past Matches</Tab>
                <Tab>Single Team Info</Tab>
              </TabList>
              <TabPanel>
                <div className="pt-4">
                  <h2
                    className={`font-Bebas text-[25px] md:text-[35px] tracking-normal  ${
                      themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                    }`}
                  >
                    Compare Stats
                  </h2>
                  <p
                    className={`font-Montserrat text-[15px] md:text-[19px] leading-[25px] font-medium ${
                      themeMode === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    View statistics, head to head information, team analysis and
                    simple predictions
                  </p>
                  <div className="mt-8">
                    <div className="mb-4">
                      <Label
                        className={`text-[14px] font-medium ${
                          themeMode === "light" ? "text-black" : "text-white"
                        } pb-1 block`}
                      >
                        Search for First Team
                      </Label>
                      {/* <div className="relative w-full bg-[#151718] rounded-[25px] p-1 flex border border-[#606060]">
                         {searchImgInput && searchInput && (
                          <img
                            id="img"
                            src={searchImgInput}
                            alt={searchInput}
                            className="inline-block w-6 h-6 m-2"
                            width={5}
                            height={5}
                          />
                        )}
                        <input
                          type="text"
                          id="simple-search"
                          className="ml-3 h-[40px] bg-transparent text-[#606060] border-0 text-[14px] focus:ring-[#151718] focus:border-[#151718] block w-ful ps- p-0 w-full"
                          placeholder="First Team"
                          required
                          value={searchInput}
                          onChange={handleInputChange}
                        /> 
                         
                        <div className="absolute top-full left-0 w-full bg-white rounded-[25px] shadow-md z-10 ">
                          {filteredTeams?.length > 0 && (
                            <div>
                              {console.log(
                                "filteredTeams",
                                filteredTeams?.team?.name
                              )}
                              {filteredTeams?.map((team) => (
                                <li
                                  id="listItem"
                                  key={team?.team?.id}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 list-none"
                                  onClick={() =>
                                    handleteam(
                                      `${team?.team?.name}_${team?.team?.logo}_${team?.team?.id}`
                                    )
                                  }
                                >
                                  <span className="text-sm ">
                                    <img
                                      src={team?.team?.logo}
                                      alt={team?.team?.name}
                                      className="inline-block w-6 h-6 mr-2"
                                    />
                                    {team?.team?.name}
                                  </span>
                                </li>
                              ))}
                            </div>
                          )}
                        </div> 

                        <div className="flex items-center px-3 pointer-events-none w-[40px] h-[40px] rounded-full">
                          <svg
                            className="w-5 h-5 text-[#606060]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                      </div> */}

                      <div className="relative">
                        <Select
                          options={optionsFirstTeam}
                          value={optionsFirstTeam.value}
                          onChange={handleTeamChange}
                          onInputChange={handleInputTeamChange}
                          menuIsOpen={isFirstTeamMenuOpen}
                        />
                        <div className="flex items-center px-3 pointer-events-none w-[40px] h-[40px] rounded-full absolute right-0 top-0 z-10">
                          <svg
                            className="w-5 h-5 text-[#606060]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <Label
                        className={`text-[14px] font-medium ${
                          themeMode === "light" ? "text-black" : "text-white"
                        } pb-1 block`}
                      >
                        Search for Second Team
                      </Label>
                      {/* <div className="relative w-full bg-[#151718] rounded-[25px] p-1 flex border border-[#606060]">
                        {searchImgInput1 && searchInput1 && (
                          <img
                            id="img"
                            src={searchImgInput1}
                            alt={searchInput1}
                            className="inline-block w-6 h-6 m-2"
                            width={5}
                            height={5}
                          />
                        )}
                        <input
                          type="text"
                          id="simple-search"
                          className="ml-3 h-[40px] bg-transparent text-[#606060] border-0 text-[14px] focus:ring-[#151718] focus:border-[#151718] block w-ful ps- p-0 w-full"
                          placeholder="Second Team"
                          required
                          value={searchInput1}
                          // onChange={handleInputChange1}
                        />
                        <div className="absolute top-full left-0 w-full bg-white rounded-[25px] shadow-md z-10">
                          {filteredTeams1.length > 0 && (
                            <div>
                              {filteredTeams1.map((team1) => (
                                <li
                                  id="listItems"
                                  key={team1.team?.id}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 list-none"
                                  // onClick={() =>
                                  //   handleteam1(
                                  //     `${team1.team?.name}_${team1.team?.logo}_${team1.team?.id}`
                                  //   )
                                  // }
                                >
                                  <span className="text-sm ">
                                    <img
                                      src={team1.team?.logo}
                                      alt={team1.team?.name}
                                      className="inline-block w-6 h-6 mr-2"
                                    />
                                    {team1.team?.name}
                                  </span>
                                </li>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center px-3 pointer-events-none w-[40px] h-[40px] rounded-full">
                          <svg
                            className="w-5 h-5 text-[#606060]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                      </div> */}
                      <div className="relative">
                        <Select
                          options={optionsSecondTeam}
                          value={optionsSecondTeam.value}
                          onChange={handleTeamSecondChange}
                          onInputChange={handleInputTeamSecondChange}
                          menuIsOpen={isSecondTeamMenuOpen}
                        />
                        <div className="flex items-center px-3 pointer-events-none w-[40px] h-[40px] rounded-full absolute right-0 top-0 z-10">
                          <svg
                            className="w-5 h-5 text-[#606060]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        teamComparisionsModalHandler(team1Id, team2Id);
                      }}
                      className="bg-[#2aa9e1] rounded-full text-[15px] leading-[40px] w-full text-white hover:bg-[#2854b7] mt-4"
                    >
                      View comparison
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pt-4">
                  <h2
                    className={`font-Bebas text-[25px] md:text-[35px] tracking-normal  ${
                      themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                    }`}
                  >
                    Team Information
                  </h2>
                  <p
                    className={`font-Montserrat text-[15px] md:text-[19px] leading-[25px] font-medium ${
                      themeMode === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    View full analysis, starting XI, statistics and historical
                    data for a single team
                  </p>
                  <div className="mt-8">
                    <div className="mb-4">
                      <Label
                        className={`text-[14px] font-medium ${
                          themeMode === "light" ? "text-black" : "text-white"
                        } pb-1 block`}
                      >
                        Search for Team
                      </Label>
                      {/* <div className="relative w-full bg-[#151718] rounded-[25px] p-1 flex border border-[#606060]">
                        {searchImgInput && searchInput && (
                          <img
                            id="img"
                            src={searchImgInput}
                            alt={searchInput}
                            className="inline-block w-6 h-6 m-2"
                            width={5}
                            height={5}
                          />
                        )}
                        <input
                          type="text"
                          id="simple-search"
                          className="ml-3 h-[40px] bg-transparent text-[#606060] border-0 text-[14px] focus:ring-[#151718] focus:border-[#151718] block w-ful ps- p-0 w-full"
                          placeholder="Team"
                          required
                          // value={searchInput}
                          // onChange={handleInputChange}
                        />

                        <div className="absolute top-full left-0 w-full bg-white rounded-[25px] shadow-md z-10 ">
                          {filteredTeams?.length > 0 && (
                            <div>
                              {console.log("filteredTeams", filteredTeams)}
                              {filteredTeams?.map((team) => (
                                <li
                                  id="listItem"
                                  key={team.team?.id}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 list-none"
                                  onClick={() =>
                                    handleteam(
                                      `${team.team?.name}_${team.team?.logo}_${team.team?.id}`
                                    )
                                  }
                                >
                                  <span className="text-sm ">
                                    <img
                                      src={team.team?.logo}
                                      alt={team.team?.name}
                                      className="inline-block w-6 h-6 mr-2"
                                    />
                                    {team.team?.name}
                                  </span>
                                </li>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center px-3 pointer-events-none w-[40px] h-[40px] rounded-full">
                          <svg
                            className="w-5 h-5 text-[#606060]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                      </div> */}
                      <div className="relative">
                        <Select
                          options={optionsSingleTeam}
                          value={optionsSingleTeam.value}
                          onChange={handleSingleTeamChange}
                          onInputChange={handleSingleInputTeamChange}
                          menuIsOpen={isSingleTeamMenuOpen}
                        />
                        <div className="flex items-center px-3 pointer-events-none w-[40px] h-[40px] rounded-full absolute right-0 top-0 z-10">
                          <svg
                            className="w-5 h-5 text-[#606060]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={teamInformationModalHandler}
                      className="bg-[#2aa9e1] rounded-full text-[15px] leading-[40px] w-full text-white hover:bg-[#2854b7] mt-4"
                    >
                      View Team Information
                    </button>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      {/* Team Comparisions Modal start here */}
      {openTeamComparisionsModal && (
        <Modal
          show={openTeamComparisionsModal}
          size="7xl"
          onClose={() => setOpenTeamComparisionsModal(false)}
          popup
        >
          <Modal.Header className="absolute right-0 top-0" />
          <Modal.Body>
            <div className="pt-6">
              <ViewComparisonDetails id1={team1Id} id2={team2Id} />
            </div>
          </Modal.Body>
        </Modal>
      )}
      {/* Team Comparisions Modal ends here */}
      {/* Team Information Modal start here */}
      {openTeamInformationModal && (
        <Modal
          show={openTeamInformationModal}
          size="7xl"
          onClose={() => setOpenTeamInformationModal(false)}
          popup
        >
          <Modal.Header className="absolute right-0 top-0" />
          <Modal.Body>
            <div className="pt-6">
              <ViewTeamInformationDetails singleId={singleTeamId} />
            </div>
          </Modal.Body>
        </Modal>
      )}
      {/* Team Information Modal ends here */}
    </div>
  );
};

export default TeamComparisions;
