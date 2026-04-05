import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, resp) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return resp.status(400).json({
                message: "Job Id is required",
                success: false
            })
        };
        //is job per user already apply kara hai ki nahi
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

        if (existingApplication) {
            return resp.status(400).json({
                message: "You have already applied for Job",
                success: false
            })
        };
        //check if job exists or not
        const job = await Job.findById(jobId)
        if (!job) {
            return resp.status(400).json({
                message: "Job not found",
                success: false
            })
        };
        //create a new application 
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        });

        job.applications.push(newApplication._id);
        await job.save();
        return resp.status(201).json({
            message: "Job applied successfully",
            success: true,
        })

    } catch (error) {
        console.log(error)
    }
}

export const getAppliedJobs = async (req, resp) => {
    try {
        const userId = req.id;
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: "job",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "company",
                options: { sort: { createdAt: -1 } },
            }
        });

        if (!application) {
            return resp.status(404).json({
                message: "No application ",
                success: false,
            })
        };
        //mil gaya 
        return resp.status(200).json({
            application,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

//job post kiya par kitne user ne apply kiya- admin dheka ga kitna user apply kiya

export const getApplicants = async (req, resp) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        });

        if (!job) {
            return resp.status(400).josn({
                message: "Job not found",
                success: false
            })
        };

        return resp.status(200).json({
            job,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

//update status ...select hua reject hua

export const updateStatus = async (req, resp) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            return resp.status(400).json({
                message: "Status is required",
                success: false
            })
        };

        //find the application by application id

        const application = await Application.findOne({ _id: applicationId });

        if (!application) {
            return resp.status(400).json({
                message: "Application not found",
                success: false
            })
        };


        //update the status

        application.status = status.toLowerCase();
        await application.save();

        return resp.status(200).json({
            message: "Status  updated successfully",
            success: false
        });

    } catch (error) {
        console.log(error)
    }
}