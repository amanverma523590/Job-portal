import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-8">
         <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#f83002]">Portal</span>
          </h1>
         </div>
         <div>
          <ul className="flex font-medium gap-5 items-center">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
         </div>
      </div>
    </div>
  );
};

export default Navbar;


//ok