import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { setUser } from "../../redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate('/');
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }

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
            {
              user && user.role === 'recruiter' ? (
                <>
                  <li> <Link to="/admin/companies">Companies</Link></li>
                  <li> <Link to="/admin/jobs">Jobs</Link></li>
                </>
              ) : (
                <>
                  <li> <Link to="/">Home</Link></li>
                  <li> <Link to="/jobs">Jobs</Link></li>
                  <li> <Link to="/browse">Browse</Link></li>
                </>
              )
            }
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
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-gray-50">
                <div className="flex flex-col gap-4">
                  {/* Avatar + User Info */}
                  <div className="flex items-center gap-3">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user?.profile?.profilePhoto} alt="avatar" />
                    </Avatar>

                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col text-gray-600 gap-2 my-2">

                    {
                      user && user.role === 'student' && (
                        <div className="flex items-center gap-2">
                          <User size={18} />
                          <Button variant="link"> <Link to="/profile">View Profile</Link> </Button>
                        </div>
                      )
                    }



                    <div className="flex items-center gap-2">
                      <LogOut size={18} />
                      <Button variant="link" onClick={logoutHandler}>Log Out</Button>
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
