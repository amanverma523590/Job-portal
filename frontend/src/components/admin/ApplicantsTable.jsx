import React, { useState } from "react";
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
import { toast } from "sonner";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "../../utils/constant";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);
  const applicantsData = applicants?.applications || [];

  // 🔥 NEW STATES
  const [loadingId, setLoadingId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState({});

  const statusHandler = async (id, status) => {
    console.log("CLICKED 👉", id, status);

    setLoadingId(id);
    setSelectedStatus((prev) => ({ ...prev, [id]: status }));

    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied users</TableCaption>

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

        <TableBody>
          {applicantsData.length > 0 ? (
            applicantsData.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item?.applicant?.fullname || "N/A"}</TableCell>
                <TableCell>{item?.applicant?.email || "N/A"}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber || "N/A"}</TableCell>

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

                <TableCell>
                  {item?.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "N/A"}
                </TableCell>

                <TableCell>
                  <div className="flex justify-end">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button>
                          <MoreHorizontal className="cursor-pointer w-4 h-4" />
                        </button>
                      </PopoverTrigger>

                      <PopoverContent className="w-32 p-2">
                        {shortListingStatus.map((status, index) => {
                          const isSelected =
                            selectedStatus[item._id] === status;
                          const isLoading = loadingId === item._id;

                          return (
                            <button
                              key={index}
                              disabled={isLoading}
                              onClick={() =>
                                statusHandler(item._id, status)
                              }
                              className={`w-full text-left p-1 rounded transition
                                ${
                                  isSelected && status === "Accepted"
                                    ? "bg-green-200 font-semibold"
                                    : ""
                                }
                                ${
                                  isSelected && status === "Rejected"
                                    ? "bg-red-200 font-semibold"
                                    : ""
                                }
                                ${
                                  isLoading
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-gray-100"
                                }
                              `}
                            >
                              {isLoading && isSelected
                                ? "Updating..."
                                : status}
                            </button>
                          );
                        })}
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