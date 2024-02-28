import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/header";
const InsideLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={"loading ..."}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default InsideLayout;
