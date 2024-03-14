import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderOutside from "./HeaderOutside";
import Footer from "./Footer";
import ScrollToTop from "../../pages/ScrollToTop/ScrollToTop";

const OutsideLayout = () => {
  return (
    <>
      <div className="outsideLayout">
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
