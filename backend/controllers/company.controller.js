import {Company} from "../models/company.model.js";
import getDataUri from '../utils/datauri.js';
import cloudinary from '../utils/cloudinary.js';
import streamifier from "streamifier";

export const registerCompany =  async (req,resp)=>{
    try {
        const {companyName} = req.body;
        if(!companyName){
            return resp.status(400).json({
                message : "Company name is required",
                success : false
            });
        }
        let company = await Company.findOne({name:companyName})
        if(company){
            return resp.status(400).json({
                message : "You can't register same company",
                success : false
            })
        };
        company = await Company.create({
            name : companyName,
            userId:req.id
        });

        return resp.status(201).json({
            message : "Company registered successfully",
            company,
            success : true
        })

    } catch (error) {
        console.log(error)
    }
}

//sari company
export const getCompany = async (req,resp)=>{
    try {
        const userId = req.id;  //loged in user id
        const companies = await Company.find({userId});
        if(!companies){
            return resp.status(404).json({
                message : "Company not found",
                success : false
            })
        }

        return resp.status(200).json({
            companies,
            success : true
        })

    } catch (error) {
        console.log(error)
    }
}
//company by id

export const getCompanyById = async (req,resp)=>{
    try {
        const companyId =  req.params.id;
        const company = await Company.findById(companyId); 
        if(!company){
            return resp.status(404).json({
                message : "Company not found",
                success : false
            })
        };
        return resp.status(200).json({
            company,
            success : true
        })
    } catch (error) {
        console.log(error)
    }
};

//update company
export const updateCompany = async (req,resp) => {
    try {
        const {name,description,website,location} = req.body;
        const file = req.file;
        //cloudinary ayega
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        const logo = cloudResponse.secure_url;


        const updateData = {name,description,website,location,logo};

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new:true});

        if(!company){
            resp.status(404).json({
                message : "Company Not found",
                success :false
            })
        }
        return resp.status(200).json({
            message : "Company information updated",
            success : true
        })

    } catch (error) {
        console.log(error)
    }
}
