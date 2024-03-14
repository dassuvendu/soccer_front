import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderOutside from "./HeaderOutside";
import Footer from "./Footer";

const OutsideLayout = () => {
  return (
    <>
      <div className="outsideLayout">
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
