import {User} from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const register = async (req,resp)=>{
    try {
        const {fullname,email,phoneNumber,password,role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return  resp.status(400).json({
                message:'something is missing',
                success:false
            })
        };
        const user = await User.findOne({email});  // same email to nahi 
        if(user){
            return resp.status(400).json({
                message:'User already exist with this email',
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role,
        })
    } catch (error) {
        
    }
}

export const login = async(req,resp)=>{
    try {
        const {email,password,role} = req.body;
        if(!email ||  !password || !role){
            return  resp.status(400).json({
                message:'something is missing',
                success:false
            })
        };
        let user = await User.findOne({email});
        if(!user){
            return resp.status(400).json({
                message : "Incorrect email or password",
                success : false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return resp.status(400).json({
                message : "Incorrect email or password",
                success : false,
            })
        };
        //check role is correct or not
        if( role !== user.role ){
            return resp.status(400).json({
                message : "Account doesn't exists with current role",
                success : false,
            })
        };
        //generating token
        const tokenData = {
            userId:user._id,
        }
        const token = jwt.sign(tokenData, process.env.SECRET_KEY,{expiresIn:'1d'});

        user = {
            _id : user._id,
            fullname : user.fullname,
            email : user.email,
            phoneNumber : user.phoneNumber,
            role : user.role,
            profile: user.profile
        }

        return resp.status(200).cookie("token",token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
            message : `Welcome Back ${user.fullname}`,
            user,
            success : true
        })

    } catch (error) {
        console.log(error)
    }
}