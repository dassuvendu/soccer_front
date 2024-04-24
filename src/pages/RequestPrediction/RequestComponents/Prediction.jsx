import { HiTemplate } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Prediction = () => {
  const themeMode = useSelector((state) => state.darkmode.mode);

  return (
    <Link
      className={`${
        themeMode === "light" ? "bg-[#E1E1E1]" : "bg-[#0d0f11]"
      } w-[180px] border border-[#9db4e1] hover:bg-[#2854b7] ${
        themeMode === "light" ? "text-black" : "text-[#C8C8C8]"
      } hover:text-white px-5 py-0 mt-8 text-[14px] leading-[46px] h-[46px] font-medium rounded-3xl flex items-center`}
    >
      <HiTemplate className="text-xl mr-1" />
      Prediction Slip
    </Link>
  );
};
