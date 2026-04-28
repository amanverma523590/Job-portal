import React, { useEffect, useState } from "react";
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
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  // const { searchCompanyByText } = useSelector((store) => store.company);
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);

  const [filterJobs, setFilterJobs] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!allAdminJobs) {
  //     setFilterJobs([]);
  //     return;
  //   }

  //   const filtered = allAdminJobs.filter((job) => {
  //     if (!searchCompanyByText) return true;

  //     return job?.company?.name
  //       ?.toLowerCase()
  //       .includes(searchCompanyByText.toLowerCase());
  //   });

  //   setFilterJobs(filtered);
  // }, [allAdminJobs, searchCompanyByText]);

useEffect(() => {
  const filteredJobs = allAdminJobs.filter((job) => {
    if (!searchJobByText) return true;

    const searchText = searchJobByText.toLowerCase();

    return (
      job?.title?.toLowerCase().includes(searchText) ||
      job?.company?.name?.toLowerCase().includes(searchText)
    );
  });

  setFilterJobs(filteredJobs);
}, [allAdminJobs, searchJobByText]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterJobs?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No Jobs Found
              </TableCell>
            </TableRow>
          ) : (
            filterJobs.map((job) => {


              return (
                <TableRow key={job._id}>
                  {/* Company Name */}
                  <TableCell>
                    {job?.company?.name || "N/A"}
                  </TableCell>

                  {/* Role */}
                  <TableCell>{job?.title || "N/A"}</TableCell>

                  {/* Date */}
                  <TableCell>
                    {job?.createdAt
                      ? job.createdAt.split("T")[0]
                      : "N/A"}
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="text-right">
                    <Popover>
                      <PopoverTrigger asChild>
                        <MoreHorizontal className="cursor-pointer" />
                      </PopoverTrigger>

                      <PopoverContent className="w-32 bg-slate-200">
                        <div
                          onClick={() =>
                            navigate(`/admin/jobs/${job._id}`)
                          }
                          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                        >
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;