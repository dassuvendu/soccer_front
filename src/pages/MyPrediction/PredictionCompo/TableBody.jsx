import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TabPanel, Tabs } from 'react-tabs';
import { BarcelonaIcon, BayernMunichIcon } from '../../../assets/images/images';
import { MdMoreHoriz } from 'react-icons/md';
import { Table } from 'flowbite-react';
import { postpredictions } from '../../../reducers/PredictionsSlice';


export const PreditionTableBody = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);
  
  console.log("pre", prediction);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(postpredictions({ "fixture": 198772 }))
  }, [dispatch])
  return (
    <Tabs className="tab_section">
      <TabPanel>
        <div className="overflow-x-auto bg-transparent">
          <Table hoverable>
            <Table.Head className="border-b border-[#2b2f35]">
              <Table.HeadCell
                className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } text-[16px]  ${themeMode === "light"
                    ? "text-[#787a7d]"
                    : "text-[#96A5B8]"
                  } font-medium capitalize w-[34%]`}
              >
                Match
              </Table.HeadCell>
              <Table.HeadCell
                className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } text-[16px] ${themeMode === "light"
                    ? "text-[#787a7d]"
                    : "text-[#96A5B8]"
                  } font-medium capitalize w-[17%]`}
              >
                Score
              </Table.HeadCell>
              <Table.HeadCell
                className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } text-[16px] ${themeMode === "light"
                    ? "text-[#787a7d]"
                    : "text-[#96A5B8]"
                  } font-medium capitalize w-[17%]`}
              >
                Over Under
              </Table.HeadCell>
              <Table.HeadCell
                className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } text-[16px] ${themeMode === "light"
                    ? "text-[#787a7d]"
                    : "text-[#96A5B8]"
                  } font-medium capitalize w-[17%]`}
              >
                Accuracy
              </Table.HeadCell>
              <Table.HeadCell
                className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } text-[16px] ${themeMode === "light"
                    ? "text-[#787a7d]"
                    : "text-[#96A5B8]"
                  } font-medium capitalize w-[15%]`}
              >
                More
              </Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y" >
              {prediction.map(data => (
                <Table.Row
                  className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                    } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
                          src={data.teams.home.logo}
                          alt="BayernMunichIcon"
                          className="mr-2"
                          height={48}
                          width={48}
                        />
                        <div>
                          <p
                            className={`font-Montserrat font-bold text-[13px] leading-[13px] ${themeMode === "light"
                              ? "text-black"
                              : "text-white"
                              }`}
                          >
                            {data.teams.home.name}
                          </p>
                          <span className="text-[#8EA2AB] text-[9px]">
                            Munich, Germany
                          </span>
                        </div>
                      </div>
                      <div className="text-[12px] text-white px-6">VS</div>
                      <div className="flex items-center">
                        <div>
                          <p
                            className={`font-Montserrat font-bold text-[13px] leading-[13px] ${themeMode === "light"
                              ? "text-black"
                              : "text-white"
                              }`}
                          >
                            {data.teams.away.name}
                          </p>
                          <span className="text-[#8EA2AB] text-[9px]">
                            Barcelona, Spain
                          </span>
                        </div>
                        <img
                          src={data.teams.away.logo}
                          alt="BarcelonaIcon"
                          className="ml-2"
                          height={48}
                          width={48}
                        />
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="w-[17%]">
                    <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                      0-2
                    </span>
                  </Table.Cell>
                  <Table.Cell className="w-[17%]">
                    <span
                      className={`text-base font-bold ${themeMode === "light" ? "text-black" : "text-white"
                        }`}
                    >
                      5/10
                    </span>
                  </Table.Cell>
                  <Table.Cell className="w-[17%]">
                    <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                      0-2
                    </span>
                  </Table.Cell>
                  <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                    <MdMoreHoriz />
                  </Table.Cell>
                </Table.Row>
              ))}


              {/* <Table.Row
                className={`${themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                  } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <img
                        src={BayernMunichIcon}
                        alt="BayernMunichIcon"
                        className="mr-2"
                      />
                      <div>
                        <p
                          className={`font-Montserrat font-bold text-[13px] leading-[13px] ${themeMode === "light"
                            ? "text-black"
                            : "text-white"
                            }`}
                        >
                          Bayern Munich
                        </p>
                        <span className="text-[#8EA2AB] text-[9px]">
                          Munich, Germany
                        </span>
                      </div>
                    </div>
                    <div className="text-[12px] text-white px-6">VS</div>
                    <div className="flex items-center">
                      <div>
                        <p
                          className={`font-Montserrat font-bold text-[13px] leading-[13px] ${themeMode === "light"
                            ? "text-black"
                            : "text-white"
                            }`}
                        >
                          Barcelona
                        </p>
                        <span className="text-[#8EA2AB] text-[9px]">
                          Barcelona, Spain
                        </span>
                      </div>
                      <img
                        src={BarcelonaIcon}
                        alt="BarcelonaIcon"
                        className="ml-2"
                      />
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell className="w-[17%]">
                  <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </Table.Cell>
                <Table.Cell className="w-[17%]">
                  <span
                    className={`text-base font-bold ${themeMode === "light" ? "text-black" : "text-white"
                      }`}
                  >
                    5/10
                  </span>
                </Table.Cell>
                <Table.Cell className="w-[17%]">
                  <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                    0-2
                  </span>
                </Table.Cell>
                <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                  <MdMoreHoriz />
                </Table.Cell>
              </Table.Row> */}
            </Table.Body>

          </Table>
        </div>
      </TabPanel>

    </Tabs>



  )
}
