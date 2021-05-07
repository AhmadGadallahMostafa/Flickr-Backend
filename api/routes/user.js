const express= require("express");
const router=express.Router();
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const User=require('../models/user');


router.post("/signup",(req,res,next)=>
{
    if(req.body.password.length>8 && req.body.age>=18 )
    {
    User.find({email:req.body.email}).exec()
    .then(user=>{
        if(user.length>=1)
        {
            return res.status(409).json({
                message:"mail exists"
            });
        }else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{

                if(err)
                {
                    return res.status(500).json({
                        error:err
            
                    });
                }else{
            
                const user = new User({
                    firstName:req.body.firstName,
                    secondName:req.body.secondName,
                    age:req.body.age,
                    email:req.body.email,
                    password:hash
            
            
                    });
                    user.save()
                    .then(result=>{
                        res.status(201).json({
                            message:"user created"
            
                        })
                        .catch(err=> {
                            console.log(err);
                        })
                    });
            
                }
            
               });
        }
    });
}else{
    res.json({
        message:"error"
    });
}


    
});

router.post("/login",(req,res,next)=>
{
    User.find({email:req.body.email}).exec()
    .then(user=>
        {
            if(user.length<1)
            {
                return res.status(401).json({
                    message:"failed"

                });
            }

            bcrypt.compare(req.body.password,user[0].password,(err,respond) =>
            {
            
                if(err)
                {
                    return res.status(401).json({
                        message:"failed"
    
                    });
                }
                if(respond)
                {
                    const token =jwt.sign({
                        email:user[0].email,
                        userId:user[0]._id

                    },process.env.JWT_KEY,{
                        expiresIn:"1h"
                    });
                    return res.status(200).json({
                        message:"auth success",
                        token:token

                    });
                }

                 res.status(401).json({
                    message:"failed"
                });
            });

        })
          .catch(err=>{
           console.log(err);
           res.status(500).json({
            error:err

        });

    });

});




module.exports=router;