import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "sonner"; // or react-hot-toast (depends what you use)
import { setUser } from "../redux/authSlice"; // adjust path

const UpdateProfileDialouge = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const fileChangeHandler = (e)=>{
    const file = e.target.files?.[0];
    setInput({...input, file})
  }

  const submitHandler = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if(input.file){
      formData.append("file",input.file)
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers:{
          'Content-Type':'multipart/form-data'
        },
        withCredentials:true
      });
      if(res.data.success){
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
    setOpen(false);
    console.log(input)
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px] bg-gray-50"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  name="fullname"
                  value={input.fullname}
                  type="text"
                  onChange={changeEventHandler}
                  className="col-span-3 w-full"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  type="email"
                  className="col-span-3 w-full"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="number">
                  Number
                </label>
                <Input
                  id="number"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3 w-full"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="bio">
                  Bio
                </label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3 w-full"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="skills">
                  Skills
                </label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3 w-full"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="file">
                  File
                </label>
                <Input
                  id="file"
                  name="file"
                  className="col-span-3 w-full"
                  type="file"
                  onChange={fileChangeHandler}
                  accept="application/pdf"
                />
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  {" "}
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                  wait{" "}
                </Button>
              ) : (
                <Button
                  className="w-full my-4 bg-black text-white"
                  type="submit"
                >
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialouge;
