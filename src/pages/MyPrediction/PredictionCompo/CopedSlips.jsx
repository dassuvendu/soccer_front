import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUid } from '../../../reducers/uuidSlice';
import { userSlip } from '../../../reducers/CookedSlipSlice';
import { MdMoreHoriz } from 'react-icons/md';

export const CopedSlips = ({themeMode,token}) => {

    const { userSlipDetails, isLoading } = useSelector((state) => state.myPredictions);
    console.log("user",userSlipDetails);
    const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState();
    const [itemsPerPage] = useState(10);
    const [error, setError] = useState(null)

    const dispatch = useDispatch()
    
    useEffect(() => {
        if (token && currentPage ) {
          dispatch(getUid({}))
          dispatch(
            userSlip({
              page_number: currentPage,
              items_per_page: itemsPerPage,
            })
          ).then((res)=>{
            console.log(res);
            if (res?.payload?.message === 'Something went wrong. Please try again later') {
                setError(res?.payload?.message)
            }
          }) 
        }

      }, [currentPage, itemsPerPage, token, dispatch]);

  return (
  
<div className="overflow-x-auto bg-transparent">
    <Table hoverable>
      <Table.Head className="border-b border-[#2b2f35]">
        <Table.HeadCell
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } text-[16px]  ${
            themeMode === "light"
              ? "text-[#787a7d]"
              : "text-[#96A5B8]"
          } font-medium capitalize w-[34%]`}
        >
          Match
        </Table.HeadCell>
        <Table.HeadCell
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } text-[16px] ${
            themeMode === "light"
              ? "text-[#787a7d]"
              : "text-[#96A5B8]"
          } font-medium capitalize w-[17%]`}
        >
          Score
        </Table.HeadCell>
        <Table.HeadCell
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } text-[16px] ${
            themeMode === "light"
              ? "text-[#787a7d]"
              : "text-[#96A5B8]"
          } font-medium capitalize w-[17%]`}
        >
          Over Under
        </Table.HeadCell>
        <Table.HeadCell
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } text-[16px] ${
            themeMode === "light"
              ? "text-[#787a7d]"
              : "text-[#96A5B8]"
          } font-medium capitalize w-[17%]`}
        >
          Accuracy
        </Table.HeadCell>
        <Table.HeadCell
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } text-[16px] ${
            themeMode === "light"
              ? "text-[#787a7d]"
              : "text-[#96A5B8]"
          } font-medium capitalize w-[15%]`}
        >
          More
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row
          className={`${
            themeMode === "light" ? "bg-white" : "bg-[#191D23]"
          } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                //   src={BayernMunichIcon}
                  alt="BayernMunichIcon"
                  className="mr-2"
                />
                <div>
                  <p
                    className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                      themeMode === "light"
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
                    className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                      themeMode === "light"
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
                //   src={BarcelonaIcon}
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
              className={`text-base font-bold ${
                themeMode === "light" ? "text-black" : "text-white"
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
       
      </Table.Body>
    </Table>
  </div>
  )
}
