const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");
const User=mongoose.model("User");

module.exports=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1];
        const decoded=jwt.verify(token,process.env.JWT_KEY);
        req.userData =decoded;
       next();
       console.log(decoded);
    
        
    } catch (error){
        return res.status(401).json({
            message:"AuthFailed"

        });

    }
};