import {  Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {

  const navigate = useNavigate();
  const jobId = "amanjobid"

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/YpNYaCWELuqcDF4UF7krQFGdVg42cJYF1uPn2n0g3js/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzI4NDNfN2Fj/NWJmYzAyNWQxYzFl/NTk1NDdkZmNlZjMy/OGUxZDMucG5n" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg ">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta
          impedit dolorum, minus cumque distinctio rem deleniti ut
          necessitatibus ad!
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          24 LPA
        </Badge>
      </div>

        <div className="flex items-center gap-4 mt-4">
            <Button onClick={()=> navigate(`/discription/${jobId}`)} variant="outline" className='bg-[#7209b7]'>Details</Button>
            <Button  className="bg-[#7209b7]">Save For Later</Button>
        </div>

    </div>
  );
};

export default Job;
