
import { useSelector } from "react-redux"
import { Badge } from "./ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const AppliedJobTable = () => {
  
  const {allAppliedJobs} = useSelector(store=>store.job)

  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
         <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job-Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className='text-right'>Status</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
           { 
            allAppliedJobs.length <= 0 ? <span>You haven't appled any job yet</span> :  allAppliedJobs.map((appliedJob)=>(
                <TableRow key={appliedJob?._id}>
                    <TableCell>{appliedJob?.createdAt?.split('T')[0]}</TableCell>
                    <TableCell>{appliedJob?.job?.title}</TableCell>
                    <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                    <TableCell className='text-right'><Badge className='bg-black text-white rounded-2xl'>{appliedJob.status}</Badge></TableCell>
                </TableRow>
            ))
           }
         </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
