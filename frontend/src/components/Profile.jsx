import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialouge from "./UpdateProfileDialouge";
import { useState } from "react";

const skills = ["Html", "Css", "Javascript", "React"];
const isResume = true;

const Profile = () => {

  const [open,setOpen] = useState(false);
  
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src="https://imgs.search.brave.com/YpNYaCWELuqcDF4UF7krQFGdVg42cJYF1uPn2n0g3js/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzI4NDNfN2Fj/NWJmYzAyNWQxYzFl/NTk1NDdkZmNlZjMy/OGUxZDMucG5n"
                alt="no img"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl ">Full Name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                optio tempora doloremque maiores animi officiis.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline" onClick={()=> setOpen(true)}>
            <Pen />
          </Button>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-3 my-2 ">
            <Mail />
            <span>patel@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 my-2 ">
            <Contact />
            <span>9483728632</span>
          </div>

          <div className="my-5">
            <h1 className="font-bold text-sm text-blue-600">Skills</h1>
            <div className="flex items-center gap-1">
              {skills.length != 0 ? (
                skills.map((item, index) => (
                  <Badge className="bg-black text-white rounded-lg" key={index}>
                    {item}
                  </Badge>
                ))
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://youtube.com/@patelmernstack"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Patel
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

          <UpdateProfileDialouge open={open} setOpen={setOpen} />

    </div>
  );
};

export default Profile;
