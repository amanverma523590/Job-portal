import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;

  return (
    <div className="max-w-6xl mx-auto my-10">
      
      <div className="flex items-start justify-between flex-wrap gap-4">
        
        {/* Left Side */}
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>

          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              12 Positions
            </Badge>

            <Badge className="text-[#F83002] font-bold" variant="ghost">
              Part Time
            </Badge>

            <Badge className="text-[#7209b7] font-bold" variant="ghost">
              24 LPA
            </Badge>
          </div>
        </div>

        {/* Right Side Button */}
        <Button
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          } text-white`}
          disabled={isApplied}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>

      </div>

<h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Discripton</h1>
      <div className="my-4">
          <h1 className="font-bold my-1">Role: <span className="p-4 font-normal text-gray-800">Fronend Developer</span> </h1>
          <h1 className="font-bold my-1">Location: <span className="p-4 font-normal text-gray-800">Hydrabad</span> </h1>
          <h1 className="font-bold my-1">Description: <span className="p-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam!</span> </h1>
          <h1 className="font-bold my-1">Experience: <span className="p-4 font-normal text-gray-800">Fresher</span> </h1>
          <h1 className="font-bold my-1">Salary: <span className="p-4 font-normal text-gray-800">12-lpa</span> </h1>
          <h1 className="font-bold my-1">Tptal Applications: <span className="p-4 font-normal text-gray-800">4</span> </h1>
          <h1 className="font-bold my-1">Posted Date: <span className="p-4 font-normal text-gray-800">4-16-2025r</span> </h1>
      </div>

    </div>
  );
};

export default JobDescription;