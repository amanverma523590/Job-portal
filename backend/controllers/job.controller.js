import { Job } from "../models/job.model.js";

//admin post karga job
export const postJob = async (req, resp) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return resp.status(400).json({
                message: "Something is missing",
                success: false
            })
        };

        const job = await Job.create({
            title,
            description,
            requirements : requirements.split(","),
            salary:Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            compant : companyId,
            created_by : userId
        })
        return resp.status(201).json({
            message : "New Job Created Successfully.....",
            job,
            success : true
        })

    } catch (error) {
        console.log(error)
    }
}

//stident ke liye
export const getAllJobs = async (req,resp) =>{
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title :{$regex:keyword, $options:"i"}},
                {description :{$regex:keyword, $options:"i"}},
            ]
        };
        const jobs = await Job.find(query);

        if(!jobs){
            return resp.status(400).json({
                message : "Jobs Not found",
                success : false
            })
        };
        return resp.status(200).json({
            jobs,
            success : true
        })

    } catch (error) {
        console.log(error)
    }
}

//studens
export const getJobById = async (req,resp)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        
        if(!job){
            return resp.status(400).json({
                message : "Jobs Not found",
                success : false
            })
        };
        return resp.status(200).json({
            job,
            success : true
        })

    } catch (error) {
        console.log(error)
    }
}

//▶️▶️⛔⛔⛔👉👉👉admin  kitne job create kara abhi tak

export const getAdminJobs = async (req,resp)=>{
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId});

        if(!jobs){
             return resp.status(400).json({
                message : "Jobs Not found",
                success : false
            })
        };
        return resp.status(200).json({jobs,success:true})

    } catch (error) {
        console.log(error)
    }
}

