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

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  // ✅ correct array from your API
  const applicantsData = applicants?.applications || [];

  const handleStatusChange = (id, status) => {
    console.log("Update:", id, status);
    // TODO: call API to update status
  };

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
          {applicantsData.length > 0 ? (
            applicantsData.map((item) => (
              <TableRow key={item._id}>
                {/* 👇 actual user data is inside item.applicant */}
                <TableCell>{item?.applicant?.fullname || "N/A"}</TableCell>
                <TableCell>{item?.applicant?.email || "N/A"}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber || "N/A"}</TableCell>

                {/* Resume */}
                <TableCell>
                  {item?.applicant?.profile?.resumeOriginalName ? (
                    <a
                      href={item?.applicant?.profile?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View
                    </a>
                  ) : (
                    "No Resume"
                  )}
                </TableCell>

                {/* Date */}
                <TableCell>
                  {item?.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "N/A"}
                </TableCell>

                {/* ACTION */}
                <TableCell>
                  <div className="flex justify-end">
                    <Popover>
                      <PopoverTrigger asChild>
                        <MoreHorizontal className="cursor-pointer w-4 h-4" />
                      </PopoverTrigger>

                      <PopoverContent className="w-32 p-2">
                        {shortListingStatus.map((status, index) => (
                          <div
                            key={index}
                            onClick={() =>
                              handleStatusChange(item._id, status)
                            }
                            className="p-1 rounded cursor-pointer hover:bg-gray-100"
                          >
                            {status}
                          </div>
                        ))}
                      </PopoverContent>
                    </Popover>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No applicants found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;