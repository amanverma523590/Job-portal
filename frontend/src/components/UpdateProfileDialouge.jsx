import { useState } from "react";
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

const UpdateProfileDialouge = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="name">
                  Name
                </label>
                <Input id="name" name="name" className="col-span-3 w-full" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="email">
                  Email
                </label>
                <Input id="email" name="email" className="col-span-3 w-full" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="number">
                  Number
                </label>
                <Input
                  id="number"
                  name="number"
                  className="col-span-3 w-full"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="bio">
                  Bio
                </label>
                <Input id="bio" name="bio" className="col-span-3 w-full" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="skills">
                  Skills
                </label>
                <Input
                  id="skills"
                  name="skills"
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
