import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAllAdminJobs } from "../Redux/jobSlice";
import { JOB_API_END_POINT } from "../utils/constant"

const useGetAllAdminJobs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                // console.log("🔵 Calling Admin Jobs API...");

                const res = await axios.get(
                    `${JOB_API_END_POINT}/getadminjobs`,
                    { withCredentials: true }
                );

                // console.log("🟢 API RESPONSE:", res.data); // 👈 MOST IMPORTANT

                if (res.data.success) {
                    // console.log("🟡 Dispatching jobs:", res.data.jobs);

                    dispatch(setAllAdminJobs(res.data.jobs));
                } else {
                    // console.log("🔴 API success false");
                }

            } catch (error) {
                // console.log("❌ API ERROR:", error);
            }
        };

        fetchAllAdminJobs();
    }, [dispatch]);
}

export default useGetAllAdminJobs;