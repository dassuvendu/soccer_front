import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const OutsideLayout = () => {
  return (
    <>
      <Suspense fallback={"loading ..."}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default OutsideLayout;
