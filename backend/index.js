import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"


dotenv.config({})

const app = express();

//middleware
app.use(express.json()); //allow express to read json data coming from frontend
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin : 'http://localhost:5713',
    credentials : true,
}
app.use(cors(corsOptions))

app.get("/",(req,resp)=>{
    resp.status(200).json({
        message : "I am coming from Backend",
        success : true
    })
})

const PORT = process.env.PORT || 3000;

//apis

app.use("/api/v1/user",userRoute)
app.use("/api/v1/company",companyRoute)

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at PORT ${PORT}`)
})