import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import axios from "axios"

import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { USER_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner";
const Signup = () => {

  const[input,SetInput] = useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""
  });

  const navigate = useNavigate();

  const changeEventHandler = (e)=>{
    SetInput({...input, [e.target.name]:e.target.value});
  }

  const changeFileHandler = (e)=>{
    SetInput({...input, file:e.target.files?.[0]});
  }

  const submitHandler = async(e)=>{  //becuse api call
    e.preventDefault();
    const formData =  new FormData();
    formData.append("fullname", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if(input.file){
      formData.append("file",input.file)
    }

    try {
      console.log(input)
      const resp = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      });
      if(resp.data.success){
        navigate("/login")
        toast.success(resp.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form  onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-lg p-6 my-10 shadow-sm bg-white">
          <h1 className="font-bold text-2xl mb-5 text-center">Sign-Up</h1>

          <div className="space-y-3">
            <div>
              <Label className="mb-1 block">Full Name</Label>
              <Input
                type="text"
                value={input.fullName}
                name="fullName"
                onChange={changeEventHandler}
                placeholder="Patel"
                className="border-none focus-visible:ring-0"
              />
            </div>

            <div>
              <Label className="mb-1 block">Email</Label>
              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="patel@gmail.com"
                className="border-none focus-visible:ring-0"
              />
            </div>

            <div>
              <Label className="mb-1 block">Phone Number</Label>
              <Input
                type="text"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="9876543210"
                className="border-none focus-visible:ring-0"
              />
            </div>

            <div>
              <Label className="mb-1 block">Password</Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="********"
                className="border-none focus-visible:ring-0"
              />
            </div>

            {/* Role + Profile Upload */}
            <div className="flex items-center gap-6 my-5">
              <RadioGroup
                defaultValue="student"
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === 'student'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label>Student</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    type="radio"
                    name="role"
                    checked={input.role === 'recruiter'}
                    onChange={changeEventHandler}
                    value="recruiter"
                    className="cursor-pointer"
                  />
                  <Label>Recruiter</Label>
                </div>
              </RadioGroup>

              <div className="flex items-center gap-2">
                <label>Profile</label>
                <Input
                  accept="image/*"
                  onChange={changeFileHandler}
                  type="file"
                  className="cursor-pointer w-[200px]"
                />
              </div>
            </div>
          </div>

          <Button className="w-full my-4 bg-black text-white" type="submit">
            Signup
          </Button>

          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
