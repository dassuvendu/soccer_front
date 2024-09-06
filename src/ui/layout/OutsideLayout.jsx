import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderOutside from "./HeaderOutside";
import Footer from "./Footer";
import ScrollToTop from "../../pages/ScrollToTop/ScrollToTop";

const OutsideLayout = () => {
  const location = useLocation();
  const isDashboard = (endPoint) => {
    return location.pathname === endPoint;
  };
  return (
    <>
      <div className={isDashboard("/sign-up") ? "outsideLayout2" : "outsideLayout"}>
        <ScrollToTop />
        <HeaderOutside />
        <Suspense fallback={"loading ..."}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default OutsideLayout;
