const express= require("express");
const router=express.Router();
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();

const User=require('../models/user');
const checkAuth=require("../middleware/check-auth")


router.delete("/:userid",(req,res,next)=>{

    User.findOne({_id: req.params.userid}).exec().then(user => {
        bcrypt.compare(req.body.password,user.password,(err,respond) =>
            {
            
                if(err)
                {
                    return res.status(401).json({
                        message:"failed"
    
                    });
                }
                if(respond)
                {


                  User.deleteOne({ _id: req.params.userid}, function(err) {
                      if (!err) {
                          console.log("success");
                       }
                        else {
                console.log("failed");
                                        }
    });
}


});
    });
});


router.patch("/:userid",checkAuth,(req,res,next)=>{
    if(req.body.password.length>8 && req.body.age>=18 )
    {
    
            bcrypt.hash(req.body.password,10,(err,hash)=>{

                if(err)
                {
                    return res.status(500).json({
                        error:err
            
                    });
                }else{
            
                    User.findByIdAndUpdate({_id:req.params.userid},
                        {"firstName": req.body.firstName,
                        "secondName":req.body.secondName,
                        "age":req.body.age,
                        "password":hash,
                    
                    }
                    , function(err, result){
                
                        if(err){
                            res.send(err)
                        }
                        else{
                            res.send(result)
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

router.get("/:userid",(req,res,next)=>{
    User.findOne({_id: req.params.userid}).exec().then(user => {
            let found = {
                firstName:user.firstName,
                secondName:user.secondName
            };
            res.status(200).json(found);


            }
            

        );

    });



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