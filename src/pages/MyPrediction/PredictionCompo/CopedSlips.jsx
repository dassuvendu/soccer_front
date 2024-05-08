import { Button, Modal, TextInput } from 'flowbite-react';
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUid } from '../../../reducers/uuidSlice';
import { userSlip } from '../../../reducers/CookedSlipSlice';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ViewSlipDetails from '../../CookedSlips/ViewSlipDetails';
import { logoIcon } from '../../../assets/images/images';
import { CiUnlock } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export const CopedSlips = ({themeMode,token}) => {

    const { userSlipDetails, isLoading } = useSelector((state) => state.cookedSlips);
    console.log("user2",userSlipDetails);
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [hide, setHide] = useState(true);
    const [itemsPerPage] = useState(6);
    const [searchPage, setSearchPage] = useState(null);
    const [slipModal, setOpenSlipModal] = useState(false);
    const [slipId, setSlipId] = useState(null);

    const dispatch = useDispatch()
    
    useEffect(() => {
      if (token) {
        console.log("total data: ", userSlipDetails?.data?.total_data);
        setTotalPages(Math.ceil(userSlipDetails?.data?.total_data / itemsPerPage));
      }
    }, [userSlipDetails, itemsPerPage]);

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

      const currentItems = userSlipDetails?.data?.data?.slice(0,10)

      const handlePageChange = (page) => {
        setCurrentPage(page);
        dispatch(getUid({}))
        dispatch(
          userSlip({
            page_number: page,
            items_per_page: itemsPerPage,
          })
        ).then((res)=>{
            console.log(res);
            if (res?.payload?.message === 'Something went wrong. Please try again later') {
                setError(res?.payload?.message)
            }
          })
      };
      const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
      const slipModalHandler = (id) => {
        setOpenSlipModal(true);
        setSlipId(id)
      }
      const GotoPagehandle = (e) => {
        const newPageNumber = parseInt(e.target.value);
        setSearchPage(newPageNumber);
      };
      const SearchHandle = () => {
        paginate(searchPage);
      };
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
      const renderPageNumbers = () => {
        const renderedPageNumbers = [];
        for (let i = 1; i <= Math.min(totalPages,5); i++) {
          renderedPageNumbers.push(
            <li key={i} className='page'>
              <Button
                onClick={() => handlePageChange(i)}
                className={`mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white ${
                  currentPage === i ? "bg-[#0053CD]" : ""
                }`}
              >
                {i}
              </Button>
            </li>
          );
        }
        return renderedPageNumbers;
      };

      const formatStartDate = (dateString) => {
        const options = {
          weekday: "short",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
      const formatEndDate = (dateString) => {
        const options = {
          weekday: "short",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
      const formatStartTime = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "UTC",
        };
        return date.toLocaleTimeString(undefined, options);
      };
    
      const formatEndTime = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "UTC",
        };
        return date.toLocaleTimeString(undefined, options);
      };

      useEffect(() => {
        if (userSlipDetails && userSlipDetails?.data && userSlipDetails?.data?.total_data > 5) {
           setHide(true);
         } else if (userSlipDetails && userSlipDetails?.data && userSlipDetails?.data?.total_data < 6) {
           setHide(false);
         }
           else{
           setHide(false);
         }
       }, [userSlipDetails]);

  return (
  
<div className="wrapper_area max-w-7xl my-0 mx-auto px-0">
      <div className="w-full h-full py-4">
        {/* <div className="md:flex justify-between mb-4 md:mb-10">
          <div className="mb-4 md:mb-0">
            <h1
              className={`${
                themeMode === "light" ? "text-[#2aa9e1]" : "text-white"
              } font-Bebas text-2xl md:text-5xl tracking-normal mb-1`}
            >
              Coped slips
            </h1>
            <p
              className={`text-[15px] md:text-[18px] leading-[22px] font-medium ${
                themeMode === "light" ? "text-[#0d0f11]" : "text-white"
              }`}
            >
              Explore different slips containing multiple matches
            </p>
          </div>
          <Link className="bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-5 py-0 text-[14px] leading-[46px] h-[46px] font-bold rounded-3xl flex items-center font-Syne">
            <img src={BuyTokenIcon} alt="BuyTokenIcon" className="mr-1" />
            Buy Tokens <FiArrowRight className="text-white ml-0.5" />
          </Link>
        </div> */}
        {/* <div className="md:flex justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <p
              className={`text-[14px] leading-[20px] font-medium ${
                themeMode === "light" ? "text-[#0d0f11]" : "text-white"
              } pb-2`}
            >
              Start and End Date
            </p>
          </div>
        </div> */}

        {/* Cooked Slips list start here */}

        {isLoading ? (
          <div className="text-center">
            <div role="status">
              <img src={logoIcon} alt="loading.." className="loader" />
              {/* <svg
                aria-hidden="true"
                class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg> */}
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(currentItems) && currentItems.length > 0 ? (
                currentItems.map((odds, index) => {
                  return (
                    <>
                      <div
                        className={`bg-[#191D23] ${
                          themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                        } rounded-lg p-5 shadow-xl`}
                      >
                        <div className="flex justify-between items-center mb-5">
                          <p className="text-[12px] leading-[30px] font-normal text-white bg-[#153950] py-0 px-3 inline-block rounded-full">
                            #{odds?.pk}
                          </p>
                          {odds?.fields?.risk === "medium" ? (
                            <span className="text-[16px] leading-[30px] font-medium text-black bg-[#fba930] py-0 px-3 inline-block rounded-full">
                              {odds?.fields?.risk} risk
                            </span>
                          ) : odds?.fields?.risk === "low" ? (
                            <span className="text-[16px] leading-[30px] font-medium text-black bg-[#22E810] py-0 px-3 inline-block rounded-full">
                              {odds?.fields?.risk} risk
                            </span>
                          ) : (
                            <span className="text-[16px] leading-[30px] font-medium text-white bg-[#ff0000] py-0 px-3 inline-block rounded-full">
                              {odds?.fields?.risk} risk
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center mb-5">
                          <div>
                            <p
                              className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }  mb-1`}
                            >
                              {odds?.fields?.odds} Odds
                            </p>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-semibold ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            >
                              {odds?.fields?.count} Matches
                            </span>
                          </div>
                          <div className="text-right">
                            <p
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                                themeMode === "light"
                                  ? "text-[#2aa9e1]"
                                  : "text-gray-600"
                              } mb-1`}
                            >
                              Strategy
                            </p>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            >
                              {odds?.fields?.strategy}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-5">
                          <div>
                            <p
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                                themeMode === "light"
                                  ? "text-[#2aa9e1]"
                                  : "text-gray-600"
                              } mb-1`}
                            >
                              {odds?.fields?.count} Matches
                            </p>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              } block`}
                            >
                              {formatStartDate(odds?.fields?.starts_on)}
                            </span>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            >
                              {formatStartTime(odds?.fields?.starts_on)}
                            </span>
                          </div>
                          <div className="text-right">
                            <p
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium text-gray-600 ${
                                themeMode === "light"
                                  ? "text-[#2aa9e1]"
                                  : "text-gray-600"
                              } mb-1`}
                            >
                              Ends On
                            </p>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              } block`}
                            >
                              {formatEndDate(odds?.fields?.ends_on)}
                            </span>
                            <span
                              className={`font-Montserrat text-[16px] leading-[18px] font-medium ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            >
                              {formatEndTime(odds?.fields?.ends_on)}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-0">
                          <button
                            className="flex items-center text-[12px] leading-[32px] font-normal text-white bg-[#787878] hover:bg-[#153950] py-0 px-3 rounded-full"
                            onClick={() => {
                              slipModalHandler(odds?.pk);
                            }}
                          >
                            <CiUnlock className="text-base mr-0.5" />
                            view Slip
                          </button>
                          <div className="text-right flex items-center">
                            <p
                              className={`font-Montserrat text-[23px] leading-[25px] font-bold ${
                                themeMode === "light"
                                  ? "text-[#191D23]"
                                  : "text-white"
                              }`}
                            ></p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <div className="col-span-full flex justify-center items-center">
                    <div
                      className={`${
                        themeMode === "light"
                          ? "text-[#0d0f11]"
                          : "text-[#989ca0]"
                      } text-2xl flex justify-center items-center`}
                    >
                      No Data Found
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
        {slipModal && (
          <Modal
            show={slipModal}
            size="4xl"
            onClose={() => setOpenSlipModal(false)}
            popup
          >
            <Modal.Header className="absolute right-0 top-0" />
            <Modal.Body
              className={` ${
                themeMode === "light" ? "bg-[#ffffff]" : "bg-[#191D23]"
              } rounded-lg`}
            >
              <div className="pt-12">
                <ViewSlipDetails id={slipId} />
              </div>
            </Modal.Body>
          </Modal>
        )}
        {hide && (
          <div className="md:flex justify-between mt-8">
            <div className="mb-2 md:mb-0 text-center">
              <p
                className={`${
                  themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
                } text-xs`}
              >
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, userSlipDetails?.data?.data?.length)} of{" "}
                {userSlipDetails?.data?.data?.length} entries
              </p>
            </div>
            <div className="md:min-w-[450px]">
              <div className="md:flex justify-between items-center">
                <div className="md:mr-[30px] mb-2 md:mb-0 flex justify-center items-center">
                  <ul className="flex">
                    <li className='page'>
                      <Button
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                        onClick={() => paginate(1)}
                        disabled={currentPage === 1}
                      >
                        <BsChevronDoubleLeft />
                      </Button>
                    </li>
                    
                      <li className='page'>
                        <Button
                          className={`mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white focus:bg-[#0053CD]`}
                          onClick={() =>
                            handlePageChange(Math.max(currentPage - 1, 1))
                          }
                          disabled={currentPage === 1}
                        >
                          <BsChevronLeft />
                        </Button>
                      </li>
                    

                    {pageNumbers.slice(0, 5).map((pageNumber) => (
                      <li key={pageNumber} className='page'>
                        <Link
                          className={`mr-1 w-[32px] h-[32px] hover:bg-[#0863ea] border border-white hover:border-[#0053CD] 
                        flex justify-center items-center rounded-full text-[12px] text-white focus:bg-[#0053CD] 
                        ${
                          currentPage === pageNumber ? "bg-[#0053CD]" : "bg-black"
                        }`}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </Link>
                      </li>
                    ))}
                    
                      <li className='page'>
                        <Button
                          className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          <BsChevronRight />
                        </Button>
                      </li>
                

                    <li className='page'>
                      <Button
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                      >
                        <BsChevronDoubleRight />
                      </Button>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <p
                    className={`text-[12px] ${
                      themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                    } mr-1.5`}
                  >
                    Go to page
                  </p>
                  <TextInput
                    id="small"
                    type="text"
                    sizing="sm"
                    className="go_page w-[50px] mr-1.5"
                    onChange={GotoPagehandle}
                  />
                  <button
                    className="flex items-center text-[12px] text-[#0053CD] hover:text-white font-bold"
                    onClick={SearchHandle}
                  >
                    Go <BsChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Pagination section ends here */}
      </div>
    </div>
  )
}
