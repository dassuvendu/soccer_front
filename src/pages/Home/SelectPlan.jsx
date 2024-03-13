import React from "react";
import { Link } from "react-router-dom";

const SelectPlan = () => {
  return (
    <div className="bg-[#2aa9e1] py-4">
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="max-w-6xl mx-auto"
      >
        <div className="md:flex justify-between items-center max-w-2xl mx-auto text-center">
          <h3 className="font-Bebas py-5 text-5xl tracking-normal mb-0 text-center text-white">
            10$ monthly only
          </h3>
          <Link
            to="/payment"
            className="text-base font-medium inline-block px-8 hover:bg-[#18191b] text-white text-center border-2 py-2 border-white hover:border-[#18191b]"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
