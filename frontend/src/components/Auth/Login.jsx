import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";

import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [input, SetInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    SetInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    //becuse api call
    e.preventDefault();
    try {
      const resp = await axios.post(
        `${USER_API_END_POINT}/login`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      if (resp.data.success) {
        navigate("/");
        toast.success(resp.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-lg p-6 my-10 shadow-sm bg-white"
        >
          <h1 className="font-bold text-2xl mb-5 text-center">Log-In</h1>

          <div className="space-y-3">
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
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label>Student</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    type="radio"
                    name="role"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    value="recruiter"
                    className="cursor-pointer"
                  />
                  <Label>Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Button className="w-full my-4 bg-black text-white" type="submit">
            Login
          </Button>

          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
