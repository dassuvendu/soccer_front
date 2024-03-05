import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import Logo from '../images/logo/logo.svg';
// import SidebarLinkGroup from './SidebarLinkGroup';
import SidebarLinkGroup from "../layout/SidebarLinkGroup";
import { LaLiya, LigueIcon, NewItemIcon, PremierLeague, SerieA, UEFAChampionsLeagueDarkIcon, UEFAChampionsLeagueIcon, logo } from '../../assets/images/images';

import { AiFillSetting, AiFillTag, AiFillTags, AiOutlineDashboard, AiOutlineLogout, AiOutlineNotification, AiOutlineUser, BsPersonWorkspace, FaChartPie, GiChampions, GrTemplate, HiTemplate, MdManageAccounts, PiGitPullRequestBold, PiLightbulbLight, RiTeamLine, RxDashboard, SiPremierleague } from "../../assets/icons/index";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

import { useSelector } from "react-redux";

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const themeMode = useSelector((state:any) => state.darkmode.mode);
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      style={{zIndex:1}}
      className={`absolute left-0 top-[50px] z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden shadow-md ${
        themeMode === "light" ? "bg-white" : "bg-[#191d23]"
      }  duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between lg:justify-center gap-2 px-6 py-5 lg:py-6">
        <NavLink to="/">
          <img src={logo} alt="Logo" className='w-28' />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className={`fill-current ${
              themeMode === "light" ? "text-black" : "text-white"
            }`}
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="sidebar_menu no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear overscroll-none">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-0 lg:px-2">
          {/* <!-- Menu Group --> */}
          <div>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <li className='mb-3'>
                <NavLink
                  to="/"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  }  duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('dashboard') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  {/* <AiOutlineNotification /> */}
                  <RxDashboard className='text-4xl' />
                  Dashboard
                </NavLink>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li className='mb-3'>
                <NavLink
                  to="/coped-slips"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('coped-slips') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <HiTemplate className='text-4xl' />
                  Coped slips 
                  <img src={NewItemIcon} alt='NewItemIcon' />
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Offer Request --> */}
              <li className='mb-3'>
                <NavLink
                  to="/match-prediction"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('match-prediction') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <PiGitPullRequestBold className='text-4xl' />
                  Match Predictions
                </NavLink>
              </li>
              {/* <!-- Menu Item Offer Request --> */}

              {/* <!-- Menu Item Offer --> */}
              <li className='mb-3'>
                <NavLink
                  to="/my-prediction"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('my-prediction') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <PiLightbulbLight className='text-4xl' />
                  My Prediction
                </NavLink>
              </li>
              {/* <!-- Menu Item Offer --> */}

              {/* <!-- Menu Item Workspace --> */}
                <li className='mb-3'>
                <NavLink
                  to="/statistics"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('statistics') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <FaChartPie className='text-4xl' />
                  Statistics
                </NavLink>
              </li>
              {/* <!-- Menu Item Workspace --> */}


              {/* <!-- Menu Item Manage Users --> */}
              <li className='mb-0'>
                <NavLink
                  to="/team-comparisions"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('team-comparisions') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <RiTeamLine className='text-4xl' />
                  Team Comparisions
                </NavLink>
              </li>
              {/* <!-- Menu Item Manage Users --> */}


              <h3 className="my-4 ml-4 text-sm font-medium text-[#828282] uppercase">
               Top Leagues
              </h3>


              {/* <!-- Menu Item Settings --> */}
              <li className='mb-3'>
                <NavLink
                  to="/uffa-champions"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('uffa-champions') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  { themeMode === "light" ? 
                    <img
                      src={UEFAChampionsLeagueDarkIcon}
                      alt="UEFAChampionsLeagueDarkIcon"
                      className="inline-block w-6 h-6 ml-1"
                    />
                    : 
                    <img
                      src={UEFAChampionsLeagueIcon}
                      alt="UEFAChampionsLeagueIcon"
                      className="inline-block w-6 h-6 ml-1"
                    />
                   }
                  UFFA Champions
                </NavLink>
              </li>
              {/* <!-- Menu Item Settings --> */}

              {/* <!-- Menu Item Logs --> */}
              <li className='mb-3'>
                <NavLink
                  to="/premier-league"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('premier-league') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                    <img
                      src={PremierLeague}
                      alt="PremierLeague"
                      className="inline-block w-8 h-8"
                    />
                  Premier League
                </NavLink>
              </li>
              {/* <!-- Menu Item Logs --> */}

              {/* <!-- Menu Item Logs --> */}
              <li className='mb-3'>
                <NavLink
                  to="/la-liga"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('la-liga') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <img
                    src={LaLiya}
                    alt="LaLiya"
                    className="inline-block w-8 h-8 ml-1"
                  />
                  La Liga
                </NavLink>
              </li>
              {/* <!-- Menu Item Logs --> */}

              {/* <!-- Menu Item Logs --> */}
              <li className='mb-3'>
                <NavLink
                  to="/serie-a"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('serie-a') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <img
                    src={SerieA}
                    alt="SerieA"
                    className="inline-block w-6 h-6 ml-1"
                  />
                  Serie A
                </NavLink>
              </li>
              {/* <!-- Menu Item Logs --> */}

              {/* <!-- Menu Item Logs --> */}
              <li className='mb-3'>
                <NavLink
                  to="/ligue"
                  className={`group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm ${
                    themeMode === "light" ? "text-[#0d0f11]" : "text-[#e1e1e1]"
                  } duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('ligue') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <img
                    src={LigueIcon}
                    alt="LigueIcon"
                    className="inline-block w-6 h-6 ml-1"
                  />
                  Ligue 1
                </NavLink>
              </li>
              {/* <!-- Menu Item Logs --> */}

              {/* <!-- Menu Item Logs --> */}
              <li className='mb-3'>
                <NavLink
                  to="/logout"
                  className={`mt-10 group relative flex items-center gap-2 rounded-sm py-1 px-1 font-medium text-sm text-[#FF0000] duration-300 ease-in-out hover:bg-graydark ${
                    pathname.includes('logout') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <div className='text-[#FF0000] rounded-full'>
                    <AiOutlineLogout className='text-4xl'/>
                  </div>
                  Logout
                </NavLink>
              </li>
              {/* <!-- Menu Item Logs --> */}

            </ul>
          </div>

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
