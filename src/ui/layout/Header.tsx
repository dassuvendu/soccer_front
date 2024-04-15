import React from 'react'
import { Link } from 'react-router-dom';
import { dollerIcon, logo, logoIcon } from '../../assets/images/images';

import DropdownMessage from '../../components/DropdownMessage';
import DropdownNotification from '../../components/DropdownNotification';
import DropdownUser from '../../components/DropdownUser';
import { BiMenu } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import {toggleTheme} from '../../reducers/darkModeSlice';
import { IoSunny } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';


function Header(props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
  }) {

//   const {darkMode} = useSelector((state)=>state.darkmode)
const themeMode = useSelector((state:any) => state.darkmode.mode);

  const dispatch = useDispatch();
  const toggleThemeMode = () => {
    dispatch(toggleTheme());
    //console.log("sdsdsds in header", themeMode);
  };

  return (
    <div className={`${ themeMode === "light" ? "bg-white" : "bg-[#191d23]"} z-10 sticky top-0 z-999 flex w-full shadow-md md:pt-[5px] md:pb-[10px]`}>
        <div className="flex flex-grow items-center justify-between py-2 px-2 shadow-2 md:px-6 2xl:px-11">
            <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                {/* <!-- Hamburger Toggle BTN --> */}
                <button
                    aria-controls="sidebar"
                    onClick={(e) => {
                    e.stopPropagation();
                    props.setSidebarOpen(!props.sidebarOpen);
                    }}
                    className="z-99999 block rounded-sm border border-stroke bg-white p-1 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                >
                    <BiMenu className='text-2xl' />
                </button>
                {/* <!-- Hamburger Toggle BTN --> */}
                <Link className="block flex-shrink-0 lg:hidden" to="/">
                    <img src={logoIcon} alt="Logo" />
                </Link>
                {/* <div className='w-12/12 mr-3 my-1'>
                    <Link className="max-w-[125px] bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-3 text-[12px] leading-[34px] rounded-3xl flex items-center">
                        <img src={dollerIcon} alt='dollerIcon' className='mr-1 w-4' />
                        10 Coins 
                    </Link>
                </div> */}
            </div>

            <div className="hidden lg:block w-full">
                <div className='flex w-full'>
                    <div className='w-5/12 flex'>
                        <div>
                            <h1 className={`${ themeMode === "light" ? "text-black" : "text-white"} font-Bebas tracking-wide text-[28px]`}>Dashboard</h1>
                            {/* <p className='text-[#727377] text-xs italic'>Update on 23 may 2023</p> */}
                        </div>
                        <div className='pl-6'>
                            {/* <h3 className={`${ themeMode === "light" ? "text-black" : "text-white"} text-[16px] leading-[42px]`}>Go To Website</h3> */}
                        </div>
                    </div>
                    <div className='w-7/12 flex justify-end mt-1.5'>
                        {/* <div className='w-4/12 mr-3 my-1'>
                            <Link className="max-w-[125px] bg-[#2aa9e1] hover:bg-[#2854b7] text-white px-3 text-[14px] leading-[40px] rounded-3xl flex items-center">
                                <img src={dollerIcon} alt='dollerIcon' className='mr-1' />
                                10 Coins 
                            </Link>
                        </div> */}
                        <div className='w-8/12 pr-4'>
                            {/* <form className="flex items-center max-w-sm mx-auto">   
                                <div 
                                    className={`relative w-full ${
                                        themeMode === "light" ? "bg-[#ececed]" : "bg-[#151718]"
                                    } rounded-[25px] p-1 flex`}>
                                    <div 
                                        className={`flex items-center px-3 pointer-events-none ${
                                                 themeMode === "light" ? "bg-[#cfcfd1]" : "bg-[#212325]"
                                        }  w-[40px] h-[40px] rounded-full`}>
                                        <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="ml-2 italic h-[40px] bg-transparent border-0 text-[#717274] text-[12px] focus:ring-transparent focus:border-[#151718] block w-ful ps- p-0 w-full" placeholder="Search..." required />
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 2xsm:gap-7">
            <ul className="flex items-center gap-2 2xsm:gap-4">
                {/* <!-- Notification Menu Area --> */}
                <DropdownNotification />
                {/* <!-- Notification Menu Area --> */}
            </ul>

            <div
                onClick={toggleThemeMode}
                className={`rounded-full cursor-pointer ${
                    themeMode === "light" ? "bg-[#ececed]" : "bg-[#151718]"
                  } dark:bg-white text-white dark:text-black w-12 h-12 text-xs flex items-center justify-center`}
            >
                {themeMode === "light" ? <FaMoon className={`${
                themeMode === "light" ? "text-[#151718]" : "text-white"
                } text-xl`} /> : <IoSunny className='text-white text-2xl'/>}
            </div>

            {/* <!-- User Area --> */}
            <DropdownUser />
            {/* <!-- User Area --> */}
            </div>
        </div>
    </div>
  )
}

export default Header