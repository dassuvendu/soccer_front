import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidUser, BiSolidContact, AiFillSetting, AiOutlineLogout, AiOutlineUser } from "../assets/icons/index";

import UserOne from '../assets/imagesource/user/user-01.png';

import { useDispatch, useSelector } from "react-redux";
import { logout } from '../reducers/authSlice';
// import { getFixtures } from '../reducers/PredictionsSlice';

const DropdownUser = () => {
  const { profile } = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const themeMode = useSelector((state: any) => state.darkmode.mode);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  // const user = sessionStorage.getItem('userLimit')
  // console.log("user",  user);
  
  // useEffect(() => {
  //   const userLimit = sessionStorage.getItem('userLimit');
  //   // Check if user limit is greater than 2
  //   if (userLimit && parseInt(userLimit)> 1) {
  //     // Logout and navigate to home page
  //     dispatch(logout());
  //     navigate('/');
  //   }
  // }, []);
  
  // const today = new Date();
  // const todayFormatted = today.toISOString().split("T")[0];

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('userToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('googleAccessToken');
    localStorage.removeItem('ref_id');
    navigate('/');
    // dispatch(getFixtures({ date: todayFormatted }))
  };

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >

        <span className={`flex justify-center items-center h-11 w-11 rounded-full block font-normal ${themeMode === "light" ? "text-[#0d0f11] bg-[#ececed]" : "text-white bg-[#151718]"}`}>
          <BiSolidUser className='text-[28px]' />
        </span>

        <span className="hidden text-right lg:block">
          <span className={`block text-[14px] font-normal ${themeMode === "light" ? "text-[#0d0f11]" : "text-white"}`}>
            {profile?.details?.first_name !== null ? (profile?.details?.first_name.toString().split(" ")[0]) : ("")
            }
          </span>
        </span>

        <svg
          className={`hidden fill-current sm:block ${dropdownOpen ? 'rotate-180' : ''
            }`}
          width="12"
          height="6"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill={`${themeMode === "light" ? "#000000" : "#ffffff"}`}
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-3 flex w-52 flex-col rounded-xl bg-[#192328] shadow-md ${dropdownOpen === true ? 'block' : 'hidden'
          }`}
      >
        <ul className="flex flex-col">
          <li className='border-b border-[#363e42] py-3 px-4'>
            <Link
              to="/settings"
              className="flex items-center text-sm font-normal duration-300 ease-in-out text-white hover:text-[#1fc4ff]"
            >
              Settings
            </Link>
          </li>
          <li className='border-b border-[#363e42] py-3 px-4'>
            <Link
              to="/dashboard"
              className="flex items-center text-sm font-normal duration-300 ease-in-out text-white hover:text-[#1fc4ff]"
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-2 py-3 px-4 text-sm font-normal duration-300 ease-in-out text-[#ff4343] hover:text-[#ff0000]"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
