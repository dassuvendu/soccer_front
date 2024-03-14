import { TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFixtures, pagination } from "../../../reducers/PredictionsSlice";

export const Pagination = ({date,topten}) => {
    const themeMode = useSelector((state) => state.darkmode.mode);
    const { fixtures } = useSelector((state) => state.prediction);
    const [data, setData] = useState([]); // State to store fetched data
    const [currentPage, setCurrentPage] = useState(1); // State to track current page
    const [itemsPerPage] = useState(8); // Number of items per page


    useEffect(() => {

          
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fixtures.slice(indexOfFirstItem, indexOfLastItem);
  console.log("cur",currentItems);
    return (
        <>
          <div className="mb-2 md:mb-0 text-center">
        <p
          className={`${themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
            } text-xs`}
        >
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, fixtures.length)} of {fixtures.length} entries
         
        </p>
      </div>
      <div className="min-w-[450px]">
        <div className="md:flex justify-between items-center">
          <div className="mr-[30px] mb-2 md:mb-0 flex justify-center items-center">
            <ul className="flex">
              <li>
                <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                 onClick={() => paginate(1)}
                >
                  <BsChevronDoubleLeft />
                </Link>
              </li>
              <li>
                <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                onClick={()=>handleNext(2)}
                >
                  <BsChevronLeft />
                </Link>
              </li>
              <li>
                <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                to={`/match-prediction/${1}`}
                onClick={()=>handleNext(1)}
                >
                  1
                </Link>
              </li>
              <li>
                <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                to={`/match-prediction/${2}`}
                onClick={()=>handleNext(2)}
                >
                  2
                </Link>
              </li>
              <li>
                <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                  3
                </Link>
              </li>
              <li>
                <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                  23
                </Link>
              </li>
              <li>
                <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                onClick={() => setCurrentPage(currentPage + 1)}
               
                >
                  <BsChevronRight />
                </Link>
              </li>
              <li>
                <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white"
                onClick={() => setCurrentPage()}
                >
                  <BsChevronDoubleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <p
              className={`text-[12px] ${themeMode === "light" ? "text-[#0d0f11]" : "text-white"
                } mr-1.5`}
            >
              Go to page
            </p>
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              className="go_page w-[50px] mr-1.5"
            />
            <button className="flex items-center text-[12px] text-[#0053CD] hover:text-white font-bold">
              Go <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
        </>
      
    );
  };