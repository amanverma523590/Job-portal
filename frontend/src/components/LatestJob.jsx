import { useSelector } from "react-redux"
import LatestJobCard from "./LatestJobCard"


const LatestJob = () => {

  const {allJobs} = useSelector(store=>store.job)

  return (
    <div className="max-w-5xl mx-auto my-20">
      <h1 className="text-4xl font-bold"> <span className="text-[#6A38C2]">Latest & Top</span> Job Openings</h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {
            allJobs.length  <= 0 ? <span>No job avilable </span> : allJobs.slice(0,6).map( (job)=><LatestJobCard  key={job._id} job={job} /> )
        }
      </div>
        
    </div>
  )
}

export default LatestJob
