const express= require("express");
const router=express.Router();
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();

const User=require('../models/user');
const Card=require('../models/cards');

const checkAuth=require("../middleware/check-auth");
const user = require("../models/user");

//const nodemailer=require("nodemailer");
//const sendgridTransport=require("nodemailer-sendgrid-transport");

//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
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, //ssl
    auth: {
        user: 'noreply@thealphaflickr.xyz',
        pass: process.env.USER_PASSWORD
    }
});

router.put("/password",(req,res,next)=>{
    const email=req.body.email;
    console.log(email);


    User.findOne({email},(err,user)=>{
        if(err || !user)
        return res.status(400).json({error:"UserNotExist"});
        
        console.log(user._id);


        const token=jwt.sign({_id:user._id},process.env.RESET_PASSWORD_KEY,{
            expiresIn:"1h"
        });
        const string="/reset/password/"
        var url=process.env.CLIENT_URL.concat(string,token);
        console.log(url);
        const mailOptions = {
            from: "noreply@thealphaflickr.xyz", // sender address
            to: user.email, // list of receivers
            subject: 'Activation Link ', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>verification link  </b>'+url
                 
             // html body
          };

          return user.updateOne({resetLink:token},function (err,success){
            if(err ){
            return res.status(400).json({error:"ResetPasswordLinkError"});
            }else{
                transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log(error);
                  res.status(400).send({success: false})
                } else {
                  res.status(200).send({success: true});
                }
              });

            }

          }).exec();
        })

    });

    router.put("/password/:resetLink",(req,res,next)=>{
        

        User.findOne({email:req.body.email},(err,user)=>{
            if(err || !user)
            return res.status(400).json({error:"UserNotExist"});
            
            console.log(user._id);
            
        jwt.verify(req.params.resetLink,process.env.JWT_KEY,function(err,decoded){
            if(err){
                return res.status(401).json({
                    error:"incorrect or expired token"
                })
            }else{

                bcrypt.hash(req.body.password,10,(err,hash)=>{

                    if(err)
                    {
                        return res.status(500).json({
                            error:err
                
                        });
                    }else{
                
                        user.password=hash;
                        user.save();
                        res.status(200).json({
                            success:"UserHasBeenReset"
                        })
                
                    }
                
                   });
               
            }



        });
        

    
            
            })
    
        });
    

    module.exports=router;