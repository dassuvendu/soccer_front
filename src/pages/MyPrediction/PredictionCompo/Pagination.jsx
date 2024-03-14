import { TextInput } from 'flowbite-react'
import React from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Pagination = () => {
    const themeMode = useSelector((state) => state.darkmode.mode);

  return (
    <div>
        <div className="md:flex justify-between mt-8">
          <div className="mb-2 md:mb-0">
            <p
              className={`${
                themeMode === "light" ? "text-[#0d0f11]" : "text-[#989ca0]"
              } text-xs`}
            >
              Showing 1 to 8 of 200 entries
            </p>
          </div>
          <div className="min-w-[450px]">
            <div className="md:flex justify-between items-center">
              <div className="mr-[30px] mb-2 md:mb-0">
                <ul className="flex">
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      <BsChevronDoubleLeft />
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      <BsChevronLeft />
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
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
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      <BsChevronRight />
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-1 w-[32px] h-[32px] bg-black hover:bg-[#0053CD] border border-white hover:border-[#0053CD] flex justify-center items-center rounded-full text-[12px] text-white">
                      <BsChevronDoubleRight />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
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
                />
                <button className="flex items-center text-[12px] text-[#0053CD] hover:text-white font-bold">
                  Go <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
