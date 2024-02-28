import React from 'react'
import { Link } from 'react-router-dom';
import { dollerIcon, logo, logoIcon } from '../../assets/images/images';

import DropdownMessage from '../../components/DropdownMessage';
import DropdownNotification from '../../components/DropdownNotification';
import DropdownUser from '../../components/DropdownUser';
import { BiMenu } from "react-icons/bi";

function Header(props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
  }) {
  return (
    <div className="z-10 sticky top-0 z-999 flex w-full bg-[#191d23] shadow-md md:pt-[5px] md:pb-[10px]">
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
            </div>

            <div className="hidden sm:block w-full">
                <div className='flex w-full'>
                    <div className='w-7/12 flex'>
                        <div>
                            <h1 className='text-white text-[28px]'>Dashboard</h1>
                            <p className='text-[#727377] text-xs italic'>Update on 23 may 2023</p>
                        </div>
                        <div className='pl-6'>
                            <h3 className='text-white text-[16px] leading-[42px]'>Go To Website</h3>
                        </div>
                    </div>
                    <div className='w-5/12 flex mt-1.5'>
                        <div className='w-4/12 mr-3 my-1'>
                            <Link className="bg-[#08a1f8] hover:bg-[#2854b7] text-white px-3 text-[14px] leading-[40px] rounded-3xl flex items-center">
                                <img src={dollerIcon} alt='dollerIcon' className='mr-1' />
                                10 Tokens
                            </Link>
                        </div>
                        <div className='w-8/12 pr-4'>
                            <form className="flex items-center max-w-sm mx-auto">   
                                <div className="relative w-full bg-[#151718] rounded-[25px] p-1 flex">
                                    <div className="flex items-center px-3 pointer-events-none bg-[#212325] w-[40px] h-[40px] rounded-full">
                                        <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="ml-2 italic h-[40px] bg-transparent border-0 text-[#717274] text-[12px] focus:ring-[#151718] focus:border-[#151718] block w-ful ps- p-0 w-full" placeholder="Search..." required />
                                </div>
                            </form>
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

            {/* <!-- User Area --> */}
            <DropdownUser />
            {/* <!-- User Area --> */}
            </div>
        </div>
    </div>
  )
}

export default Header