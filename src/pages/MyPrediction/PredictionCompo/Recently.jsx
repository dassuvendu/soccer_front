import { Button, Table, TextInput } from 'flowbite-react';
import  { useEffect, useState } from 'react'
import { MdMoreHoriz } from 'react-icons/md';
import { logoIcon } from '../../../assets/images/images';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { PredictionRequestModal } from './PredictionRequestModal';
import { recentPredictions } from '../../../reducers/RecentPredictionSlice';

export const Recently = ({themeMode,token}) => {

      const { recent,isLoading } = useSelector((state) => state.recentPredicts);

      const [fixturesId, setFixturesId] = useState();
      const [homeId, setHomeId] = useState();
      const [awayId, setAwayId] = useState();
      const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState();
      const [hide, setHide] = useState(true);
      const [itemsPerPage] = useState(10);
      const [searchPage, setSearchPage] = useState(null);
      const [timeStamp, setTimeStamp] = useState(null);
      const [openDetailsModal, setOpenDetailsModal] = useState(false);
      const [error, setError] = useState(null)
      const dispatch = useDispatch()

      useEffect(() => {
        if (token) {
          console.log("total data: ", recent?.total_data);
          setTotalPages(Math.ceil(recent?.total_data / itemsPerPage));
        }
      }, [recent, itemsPerPage]);

      useEffect(() =>{
        if (token && currentPage) {
            dispatch(
                recentPredictions({
                  page_number: currentPage,
                  items_per_page: itemsPerPage,
                  recent_predictions: true,
                })
              ).then((res)=>{
                console.log(res);
                if (res?.payload?.message === 'Something went wrong. Please try again later') {
                    setError(res?.payload?.message)
                }
              })
        }
       
      },[currentPage,itemsPerPage,token])
      
      const handlePageChange = (page) => {
        // console.log("rc",page);
        setCurrentPage(page);
        dispatch(
            recentPredictions({
              page_number: page,
              items_per_page: itemsPerPage,
              recent_predictions: true,
            })
          ).then((res)=>{
            console.log(res);
            if (res?.payload?.message === 'Something went wrong. Please try again later') {
                setError(res?.payload?.message)
            }
          })
      };
    //   const pageNumbers = Array.from(
    //     { length: totalPages },
    //     (_, index) => index + 1
    //   );
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
        for (let i = 1; i <= Math.min(totalPages, 5); i++) {
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

      const viewDetailsModalHandler = (id, hid, aid, timeId) => {
        setFixturesId(id);
        setHomeId(hid);
        setAwayId(aid);
        setTimeStamp(timeId);
        setOpenDetailsModal(true);
        console.log("fixture id: ", id);
        console.log("home id: ", hid);
        console.log("away id: ", aid);
        console.log("time id: ", timeId);
      };
      const handleModalClose = () => {
        setOpenDetailsModal(false);
      };

      useEffect(() => {
        if (
          Array.isArray(recent?.data) &&
          recent?.data?.length > 9
        ) {
          setHide(true);
        } else if (
          Array.isArray(recent?.data) &&
          recent?.data?.length < 10
        ) {
          setHide(false);
        } else {
          setHide(false);
        }
      }, [recent]);

  return (
    <div>
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
                      Under Over
                    </Table.HeadCell>
                    <Table.HeadCell
                      className={`${
                        themeMode === "light" ? "bg-white" : "bg-[#191D23]"
                      } text-[16px] ${
                        themeMode === "light"
                          ? "text-[#787a7d]"
                          : "text-[#96A5B8]"
                      } font-medium capitalize w-[17%]`}
                    ></Table.HeadCell>
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
                    {isLoading ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4">
                          <div className="text-center">
                            <div role="status">
                              <img
                                src={logoIcon}
                                alt="loading.."
                                className="loader"
                              />
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
                        </td>
                      </tr>
                    ) : (
                      <>
                        {Array.isArray(recent?.data) &&
                        recent?.data?.length > 0 && !error? (
                          recent?.data?.map((recentData) => {
                            return (
                              <>
                                <Table.Row
                                  className={`${
                                    themeMode === "light"
                                      ? "bg-white"
                                      : "bg-[#191D23]"
                                  } border-b border-[#2b2f35] dark:border-gray-700 dark:bg-gray-800 hover:bg-transparent`}
                                >
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[34%]">
                                    <div className="flex items-center">
                                      <div className="flex items-center">
                                        {/* <img
                                          // src={predict?.teams?.home?.logo}
                                          // alt={predict?.teams?.home?.name}
                                          className="mr-2"
                                          height={35}
                                          width={35}
                                        /> */}
                                        <div>
                                          <p
                                            className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                              themeMode === "light"
                                                ? "text-black"
                                                : "text-white"
                                            }`}
                                          >
                                            {recentData?.fixture_vrs}
                                          </p>
                                          <span className="text-[#8EA2AB] text-[9px]">
                                            {/* {predict?.teams?.home?.name},{" "}
                                            {predict?.league?.country} */}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="text-[12px] text-white px-6">
                                        {/* VS */}
                                      </div>
                                      <div className="flex items-center">
                                        <div>
                                          <p
                                            className={`font-Montserrat font-bold text-[13px] leading-[13px] ${
                                              themeMode === "light"
                                                ? "text-black"
                                                : "text-white"
                                            }`}
                                          >
                                            {/* {predict?.teams?.away?.name} */}
                                          </p>
                                          <span className="text-[#8EA2AB] text-[9px]">
                                            {/* {predict?.teams?.away?.name},{" "}
                                            {predict?.league?.country} */}
                                          </span>
                                        </div>
                                        {/* <img
                                          src={predict?.teams?.away?.logo}
                                          alt={predict?.teams?.away?.name}
                                          className="ml-2"
                                          height={35}
                                          width={35}
                                        /> */}
                                      </div>
                                    </div>
                                  </Table.Cell>
                                  <Table.Cell className="w-[17%]">
                                    <span className="bg-[#08A1F8] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                                      {/* {predict?.goals?.home}-
                                      {predict?.goals?.away} */}
                                      {recentData?.fixture_score}
                                    </span>
                                  </Table.Cell>
                                  <Table.Cell className="w-[17%]">
                                    <span
                                      className={`text-base font-bold ${
                                        themeMode === "light"
                                          ? "text-black"
                                          : "text-white"
                                      }`}
                                    >
                                      {recentData?.over_under_line}
                                    </span>
                                  </Table.Cell>
                                  <Table.Cell className="w-[5%]">
                                    <span
                                      className={`text-base font-bold ${
                                        themeMode === "light"
                                          ? "text-black"
                                          : "text-white"
                                      }`}
                                    >
                                      <span>
                                        {recentData?.fixture_status ===
                                        "failed" ? (
                                          <>
                                            <span>
                                              <svg
                                                className="w-6 h-6 text-red-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                              >
                                                <path
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M6 18 17.94 6M18 18 6.06 6"
                                                />
                                              </svg>
                                            </span>
                                          </>
                                        ) : recentData?.fixture_status ===
                                          "success" ? (
                                          <>
                                            <span>
                                              <svg
                                                className="w-6 h-6 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                              >
                                                <path
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M5 11.917 9.724 16.5 19 7.5"
                                                />
                                              </svg>
                                            </span>
                                          </>
                                        ) : (
                                          <></>
                                        )}{" "}
                                      </span>
                                    </span>
                                  </Table.Cell>
                                  <Table.Cell className="w-[10%]">
                                    <span className="bg-[#ff0000] rounded-2xl text-white font-medium text-[15px] leading-[30px] font-Montserrat inline-block px-6">
                                      {recentData?.accuracy}%
                                    </span>
                                  </Table.Cell>
                                  <Table.Cell className="text-center text-2xl cursor-pointer w-[15%]">
                                    <MdMoreHoriz
                                      onClick={() =>
                                        viewDetailsModalHandler(
                                          recentData?.fixture_id,
                                          recentData?.teams?.home?.id,
                                          recentData?.teams?.away?.id,
                                          recentData?.fixture_date
                                        )
                                      }
                                    />
                                  </Table.Cell>
                                </Table.Row>
                              </>
                            );
                          })
                        ) : (
                          <>
                            <tr>
                              <td colSpan="5" className="text-center py-4">
                                <div className="text-center">
                                    {error ?
                                     <div>
                                     <p>
                                       {error}
                                     </p>
                                   </div>
                                   :
                                  <div>
                                    <p>
                                      You have not made any predictions to show
                                    </p>
                                  </div>
                                     }
                                </div>
                              </td>
                            </tr>
                          </>
                        )}
                      </>
                    )}
                  </Table.Body>
                </Table>
              </div>

        {hide && (
          <div className="md:flex justify-between items-center mt-8">
            <div className="mb-2 md:mb-0 text-center">
              <p
                className={`${
                  themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
                } text-xs`}
              >
                Showing {(currentPage - 1) * itemsPerPage + 1 || 0} to{" "}
                {currentPage * itemsPerPage || 0} of{" "}
                {recent?.total_data || 0} entries
              </p>
            </div>
            <div className="min-w-[450px]">
              <div className="md:flex justify-between items-center">
                <div className="mr-[30px] mb-2 md:mb-0 flex justify-center items-center">
                  <ul className="flex">
                    <li className='page'>
                      <Button
                        onClick={() => handlePageChange(1)}
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                        disabled={currentPage === 1}
                      >
                        <BsChevronDoubleLeft />
                      </Button>
                    </li>
                    <li className='page'>
                      <Button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                      >
                        <BsChevronLeft />
                      </Button>
                    </li>
                    
                    {renderPageNumbers()}
                   
                    <li className='page'>
                      <Button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                      >
                        <BsChevronRight />
                      </Button>
                    </li>
                    <li className='page'>
                      <Button
                        onClick={() => handlePageChange(totalPages)}
                        className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
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
        <PredictionRequestModal
        openDetailsModal={openDetailsModal}
        onClose={handleModalClose}
        fixturesId={fixturesId}
        timeStamp={timeStamp}
        homeId={homeId}
        awayId={awayId}
      />
    </div>
   
  )
}
