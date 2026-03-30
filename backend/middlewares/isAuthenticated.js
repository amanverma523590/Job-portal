import jwt from 'jsonwebtoken';

const isAuthenticated = async (req,resp,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return resp.status(401).json({
                message : "User is not Authenticated",
                success : false,
            })
        }
        const decode = await jwt.verify(token,process.env.SECRET_KEY);
        if(!decode){
            return resp.status(401).json({
                message : "Invalid Token",
                success : false,
            })
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error)
    }
}
export default isAuthenticated;