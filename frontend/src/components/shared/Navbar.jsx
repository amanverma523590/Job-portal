import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {user} = useSelector(store=>store.auth);

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-8">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#f83002]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-12">
          <ul className="flex font-medium gap-5 items-center">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/jobs">Jobs</Link></li>
            <li> <Link to="/browse">Browse</Link></li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to='/login'><Button variant="outline">Login</Button></Link>
              <Link to='/signup'><Button className="bg-[#6A38C2] hover:bg-[#53299a] ">Sign-Up</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="/avatar.jpeg" alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex flex-col gap-4">
                  {/* Avatar + User Info */}
                  <div className="flex items-center gap-3">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="/avatar.jpeg" alt="avatar" />
                    </Avatar>

                    <div>
                      <h4 className="font-medium">Patel MernStack</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col text-gray-600 gap-2 my-2">
                    <div className="flex items-center gap-2">
                      <User size={18} />
                      <Button variant="link">View Profile</Button>
                    </div>

                    <div className="flex items-center gap-2">
                      <LogOut size={18} />
                      <Button variant="link">Log Out</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
