import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";

import { MoreHorizontal } from "lucide-react";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied users</TableCaption>

        {/* HEADER */}
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact No.</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* BODY */}
        <TableBody>
          <TableRow>
            <TableCell>FullName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact No</TableCell>
            <TableCell>Resume</TableCell>
            <TableCell>Date</TableCell>

            <TableCell className="float-right cursor-pointer">
              <Popover>
                <PopoverTrigger asChild>
                  <MoreHorizontal className="cursor-pointer w-4 h-4" />
                </PopoverTrigger>

                <PopoverContent className="w-32 p-2">
                  {shortListingStatus.map((status, index) => (
                    <div
                      key={index}
                      className="p-1 rounded cursor-pointer hover:bg-gray-100"
                    >
                      {status}
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;