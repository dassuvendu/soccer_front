import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/header";
import Sidebar from "../layout/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../reducers/darkModeSlice";
import ScrollToTop from "../../pages/ScrollToTop/ScrollToTop";

const InsideLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const themeMode = useSelector((state) => state.darkmode.mode);
  //console.log(themeMode, "themeMode 44444");

  const dispatch = useDispatch();
  const toggleThemeMode = () => {
    dispatch(toggleTheme());
    //console.log("sdsdsds in inside", themeMode);
  };
  useEffect(() => {
    //console.log("themeMode in inside", themeMode);
  }, [themeMode]);

  return (
    <div className={themeMode === "dark" ? "dark" : "light"}>
      <div className={themeMode ? "dark:bg-boxdark-2 dark:text-bodydark" : ""}>
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-gray-100">
            {/* <!-- ===== Header Start ===== --> */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Header End ===== --> */}

            <ScrollToTop />

            {/* <!-- ===== Main Content Start ===== --> */}
            <main
              className={
                themeMode === "light" ? "bg-[#f3f4f6] h-full" : "bg-[#0d0f11] h-full"
              }
            >
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <Outlet />
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </div>
  );
};

export default InsideLayout;
