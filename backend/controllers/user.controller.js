import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const register = async (req, resp) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return resp.status(400).json({
                message: 'something is missing',
                success: false
            })
        };
        const user = await User.findOne({ email });  // same email to nahi 
        if (user) {
            return resp.status(400).json({
                message: 'User already exist with this email',
                success: false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
        });
        return resp.status(201).json({
            message: "Account created successfully",
            success: true,
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, resp) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return resp.status(400).json({
                message: 'something is missing',
                success: false
            })
        };
        let user = await User.findOne({ email });
        if (!user) {
            return resp.status(400).json({
                message: "Incorrect email or password",
                success: false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return resp.status(400).json({
                message: "Incorrect email or password",
                success: false,
            })
        };
        //check role is correct or not
        if (role !== user.role) {
            return resp.status(400).json({
                message: "Account doesn't exists with current role",
                success: false,
            })
        };
        //generating token
        const tokenData = {
            userId: user._id,
        }
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return resp.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            message: `Welcome Back ${user.fullname}`,
            user,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req, resp) => {
    try {
        return resp.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = async (req, resp) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;
        if (!fullname || !email || !phoneNumber || !bio || !skills) {
            return resp.status(400).json({
                message: 'something is missing',
                success: false
            })
        };

        //cloudinary comes here

        const skillsArray = skills.split(","); //array string me aa raha hai is liye arrary me convert
        const userId = req.id;  //middleware authention se
        let user = await User.findById(userId);
        if (!user) {
            return resp.status(400).json({
                message: "User Not Found",
                success: false
            })
        }

        //updating data
        user.fullname = fullname,
            user.email = email,
            user.phoneNumber = phoneNumber,
            user.profile.bio = bio,
            user.profile.skills = skillsArray

        //resume comes later here 

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return resp.status(200).json({
            message : "Profile Updated Successfully",
            user,
            success : true,
        })

    } catch (error) {
        console.log(error)
    }
}