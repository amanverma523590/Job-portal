import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

import Navbar from "../shared/Navbar";
const Signup = () => {
  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form className="w-1/2 border border-gray-200 rounded-lg p-6 my-10 shadow-sm bg-white">
          <h1 className="font-bold text-2xl mb-5 text-center">Sign-Up</h1>

          <div className="space-y-3">
            <div>
              <Label className="mb-1 block">Full Name</Label>
              <Input
                type="text"
                placeholder="Patel"
                className="border-none focus-visible:ring-0"
              />
            </div>

            <div>
              <Label className="mb-1 block">Email</Label>
              <Input
                type="email"
                placeholder="patel@gmail.com"
                className="border-none focus-visible:ring-0"
              />
            </div>

            <div>
              <Label className="mb-1 block">Phone Number</Label>
              <Input
                type="text"
                placeholder="9876543210"
                className="border-none focus-visible:ring-0"
              />
            </div>

            <div>
              <Label className="mb-1 block">Password</Label>
              <Input
                type="password"
                placeholder="********"
                className="border-none focus-visible:ring-0"
              />
            </div>
            <div>
              <RadioGroup
                defaultValue="student"
                className="flex items-center gap-4 my-5"
              >
                <div className="flex items-center gap-3">
                  <Input
                    type='radio' name='role' value='student' className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>

                <div className="flex items-center gap-3">
                  <Input
                    type='radio' name='role' value='recruiter' className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>

                <div className="flex items-center gap-2">
                    <label>Profile</label>
                    <Input
                        accept="image/*"
                        type="file"
                        className='cursor-pointer'
                    />
                </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
