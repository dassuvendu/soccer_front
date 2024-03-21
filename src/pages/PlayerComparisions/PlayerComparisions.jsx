import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BuyTokenIcon } from "../../assets/images/images";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Label, Button, Modal, TextInput } from "flowbite-react";
import PlayerViewComparisonDetails from "../PlayerComparisions/PlayerViewComparisonDetails";
import { serachTeam } from "../../reducers/TeamComparisonSlice";
import Select from 'react-select';
import { getFPlayerDetails, getPlayerName, getSPlayerDetails, getTeam } from "../../reducers/PlayerComparision";

const PlayerComparisions = () => {

  const themeMode = useSelector((state) => state.darkmode.mode);
  const {team , playerList} = useSelector((state) => state.playerComparision);
 console.log(playerList);

  //For Teams
  const [firstteamselectedOption, setFirstTeamSelectedOption] = useState(null);
  const [isFirstTeamMenuOpen, setIsFirstTeamMenuOpen] = useState(false);

  const [secondselectedTeamOption, setSecondSelectedTeamOption] = useState(null);
  const [isSecondTeamMenuOpen, setIsSecondTeamMenuOpen] = useState(false);

   //For Players
  const [firstselectedOption, setFirstSelectedOption] = useState(null);
  const [isFirstselectedOption, setIsFirstSelectedOption] = useState(false);
  const [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false);

  const [secondselectedOption, setSecondSelectedOption] = useState(null);
  const [isSecondselectedOption, setIsSecondSelectedOption] = useState(false);
  const [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false);



  const dispatch = useDispatch()

//For Teams
const handleTeamChange = firstteamselectedOption => {
  setFirstTeamSelectedOption(firstteamselectedOption.id);
  setIsFirstTeamMenuOpen(false);
  setIsFirstSelectedOption(true) 
};

const handleInputTeamChange = (inputValue) => {
  if (inputValue.length > 3) {
    dispatch(getTeam({name : inputValue})).then(()=>{
      setIsFirstTeamMenuOpen(true);
    })
  }else {
    setIsFirstTeamMenuOpen(false); 
  }
};

const handleTeamSecondChange = secondselectedOption => {
  setSecondSelectedTeamOption(secondselectedOption.id);
  setIsSecondTeamMenuOpen(false);
  setIsSecondSelectedOption(true)
  // console.log(`Option selected:`, secondselectedOption);
};

const handleInputTeamSecondChange = (inputValue) => {
  if (inputValue.length > 3) {
    dispatch(getTeam({name : inputValue})).then(()=>{
      setIsSecondTeamMenuOpen(true); 
    })
  }else {
    setIsSecondTeamMenuOpen(false); 
  }
};

  //For Players
  const handleChange = firstselectedOption => {
    setFirstSelectedOption(firstselectedOption.id);
    setIsFirstMenuOpen(false);
    console.log(`Option selected:`, firstselectedOption);
  };

  const handleInputChange = (inputValue) => {
    if (inputValue.length > 3) {
      dispatch(getPlayerName({search : inputValue , team : firstteamselectedOption})).then(()=>{
        setIsFirstMenuOpen(true);  
      })
    }else {
      setIsFirstMenuOpen(false); 
    }
  };

  const handleSecondChange = secondselectedOption => {
    setSecondSelectedOption(secondselectedOption.id);
    setIsSecondMenuOpen(false);
    // console.log(`Option selected:`, secondselectedOption);
  };

  const handleInputSecondChange = (inputValue) => {
    if (inputValue.length > 3) {
      dispatch(getPlayerName({search : inputValue , team : secondselectedTeamOption})).then(()=>{
        setIsSecondMenuOpen(true);  
      })
    }else {
      setIsSecondMenuOpen(false); 
    }
  };

  //option Team
  const optionsFirstTeam = [
    ...(team?.response?.map((dlist)=> {
      return {
        value: dlist?.team?.name,
        id:dlist?.team?.id,
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
    ...(team?.response?.map((dlist)=> {
      return {
        value: dlist?.team?.name,
        id:dlist?.team?.id,
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

  //option Player
  const optionsFirstPlayer = [
    ...(playerList?.response?.map((plist)=> {
      // console.log("p",plist?.player?.name);
      return {
        value: plist?.player?.name,
        id:plist?.player?.id,
        label: (
          <div style={{ display: "flex" }}>
            <img
              src={plist?.player?.photo}
              alt="Player Logo"
              style={{ width: 20, height: 20 }}
            />
            <span style={{ paddingLeft: "10px" }}>{plist?.player?.name}</span>
          </div>
        ),
      };
    }) || []),
  ];

  const optionsSecondPlayer = [
    ...(playerList?.response?.map((plist)=> {
      // console.log("p",plist?.player?.name);
      return {
        value: plist?.player?.name,
        id:plist?.player?.id,
        label: (
          <div style={{ display: "flex" }}>
            <img
              src={plist?.player?.photo}
              alt="Player Logo"
              style={{ width: 20, height: 20 }}
            />
            <span style={{ paddingLeft: "10px" }}>{plist?.player?.name}</span>
          </div>
        ),
      };
    }) || []),
  ];
  const [openPlayerComparisionsModal, setOpenPlayerComparisionsModal] =useState(false);

  const playerComparisionsModalHandler = () => {
    Promise.all([
      dispatch(getFPlayerDetails({id:firstselectedOption , season : 2024})),
      dispatch(getSPlayerDetails({id:secondselectedOption , season : 2024}))
      .then(()=>{
        setOpenPlayerComparisionsModal(true);
      })
    ])
  };
  return (
    <div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        <div className="flex justify-between mb-8">
          <h1
            className={`${themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
              } font-Bebas text-2xl md:text-5xl tracking-normal mb-0`}
          >
            Player Comparisions
          </h1>
          <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            Match Predictions <FiArrowRight className="text-white ml-0.5" />
          </Link>
        </div>
        <div
          className={` ${themeMode === "light" ? "bg-[#e2e2e2]" : "bg-[#191D23]"
            } rounded-xl p-6 md:py-[60px]`}
        >
          <div className="max-w-2xl mx-auto">
            <Tabs className="team_comparisions_tab_section">
              <TabList className="tab_bar">
                <Tab>Past Matches</Tab>
                <Tab>Single Team Info</Tab>
              </TabList>
              <TabPanel>
                <div>
                  <h2
                    className={`font-Bebas text-[35px] tracking-normal  ${themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
                      }`}
                  >
                    Compare Players
                  </h2>
                  <p
                    className={`font-Montserrat text-[19px] leading-[25px] font-medium ${themeMode === "light" ? "text-black" : "text-white"
                      }`}
                  >
                    View statistics, head to head information, team analysis and
                    simple predictions
                  </p>
                  <div className="mt-8">
                  <div className="mb-2">
                      <Label
                        className={`text-[14px] font-medium ${themeMode === "light" ? "text-black" : "text-white"
                          } pb-1 block`}
                      >
                        Search for First Team
                      </Label>
                      <div >

                        <Select
                        placeholder='search team'
                          options={optionsFirstTeam}
                          value={optionsFirstTeam.value}
                          onChange={handleTeamChange }
                          onInputChange={handleInputTeamChange}
                          menuIsOpen={isFirstTeamMenuOpen}
                          
                        />

                        {/* <div className="absolute top-full left-0 w-full bg-white rounded-[25px] shadow-md z-10">
                          {filteredTeams.length > 0 && (
                            <div>
                              {filteredTeams.map((team) => (
                                <li
                                  id="listItem"
                                  key={team.id}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 list-none"
                                  onClick={() =>
                                    handleteam(
                                      `${team.team?.name}_${team.team?.logo}`
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
                        </div> */}
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
                      </div>
                    </div>
                    <div className="mb-4">
                      
                      <Label
                        className={`text-[14px] font-medium ${themeMode === "light" ? "text-black" : "text-white"
                          } pb-1 block`}
                      >
                        Search for First Player
                      </Label>
                      <div >

                        <Select
                        placeholder='search player'
                        isDisabled={!isFirstselectedOption}
                          options={optionsFirstPlayer}
                          value={optionsFirstPlayer.value}
                          onChange={handleChange}
                          onInputChange={handleInputChange}
                          menuIsOpen={isFirstMenuOpen}
                        />

                        {/* <div className="absolute top-full left-0 w-full bg-white rounded-[25px] shadow-md z-10">
                          {filteredTeams.length > 0 && (
                            <div>
                              {filteredTeams.map((team) => (
                                <li
                                  id="listItem"
                                  key={team.id}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 list-none"
                                  onClick={() =>
                                    handleteam(
                                      `${team.team?.name}_${team.team?.logo}`
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
                        </div> */}
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
                      </div>
                    </div>
                    <div className="mb-2">
                      <Label
                        className={`text-[14px] font-medium ${themeMode === "light" ? "text-black" : "text-white"
                          } pb-1 block`}
                      >
                        Search for Second Team
                      </Label>
                      <div >
                         <Select
                         placeholder='search team'
                          options={optionsSecondTeam}
                          value={optionsSecondTeam.value}
                          onChange={handleTeamSecondChange}
                          onInputChange={handleInputTeamSecondChange}
                          menuIsOpen={isSecondTeamMenuOpen}
                        />
                        {/* <div className="absolute top-full left-0 w-full bg-white rounded-[25px] shadow-md z-10">
                          {filteredTeams1.length > 0 && (
                            <div>
                              {filteredTeams1.map((team) => (
                                <li
                                  id="listItems"
                                  key={team.id}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 list-none"
                                  onClick={() =>
                                    handleteam1(
                                      `${team.team?.name}_${team.team?.logo}`
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
                        </div> */}
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
                      </div>
                    </div>
                    <div className="mb-4">
                      <Label
                        className={`text-[14px] font-medium ${themeMode === "light" ? "text-black" : "text-white"
                          } pb-1 block`}
                      >
                        Search for Second Player
                      </Label>
                      <div >
                         <Select
                         placeholder='search player'
                         isDisabled={!isSecondselectedOption}
                          options={optionsSecondPlayer}
                          value={optionsSecondPlayer.value}
                          onChange={handleSecondChange}
                          onInputChange={handleInputSecondChange}
                          menuIsOpen={isSecondMenuOpen}
                        />
                        {/* <div className="absolute top-full left-0 w-full bg-white rounded-[25px] shadow-md z-10">
                          {filteredTeams1.length > 0 && (
                            <div>
                              {filteredTeams1.map((team) => (
                                <li
                                  id="listItems"
                                  key={team.id}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 list-none"
                                  onClick={() =>
                                    handleteam1(
                                      `${team.team?.name}_${team.team?.logo}`
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
                        </div> */}
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
                      </div>
                    </div>
                    <button
                      onClick={playerComparisionsModalHandler}
                      className="bg-[#2aa9e1] rounded-full text-[18px] leading-[50px] w-full text-white hover:bg-[#2854b7] mt-4"
                    >
                      View player comparison
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-6">
                  <p
                    className={`${themeMode === "light" ? "text-black" : "text-white"
                      } pb-4 text-[14px]`}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p
                    className={`${themeMode === "light" ? "text-black" : "text-white"
                      } pb-4 text-[14px]`}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>{" "}
                  <p
                    className={`${themeMode === "light" ? "text-black" : "text-white"
                      } pb-4 text-[14px]`}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      {/* Login Modal start here */}
      {openPlayerComparisionsModal && (
        <Modal
          show={openPlayerComparisionsModal}
          size="7xl"
          onClose={() => setOpenPlayerComparisionsModal(false)}
          popup
        >
          <Modal.Header className="absolute right-0 top-0" />
          <Modal.Body>
            <div className="pt-6">
              <PlayerViewComparisonDetails />
            </div>
          </Modal.Body>
        </Modal>
      )}
      {/* Login Modal ends here */}
    </div>
  );
};

export default PlayerComparisions;
