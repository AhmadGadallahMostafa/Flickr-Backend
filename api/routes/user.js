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
        pass: '36Q?Zk.GnFz@cWn'
    }
});

router.patch("/about",checkAuth,(req,res,next)=>{
    
    User.findByIdAndUpdate({_id:req.userData.userId},{
        "description":req.body.description,
        "occupation":req.body.occupation,
        "hometown":req.body.hometown,
        "currentCity":req.body.currentCity,
        "country":req.body.counrty,
        "website":req.body.website,
        "facebook":req.body.facebook,
        "profilePic":req.body.profilePic

    }).exec().then(
        res.status(200).json({
            message:"About updated"
        })).catch(err=>{
            res.status(409).json({
                error:err
            });
        });
        

});

router.delete("/:userid",checkAuth,(req,res,next)=>{

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
                          res.status(200).json({
                              message:"Success"

                          });
                       }
                        else {
                            res.status(404).json({
                                message:"failed"
  
                            });
                                        }
    });
}


});
    });
});


router.patch("/:userid",(req,res,next)=>{
    if(req.body.password.length>8 && req.body.age>=18 )
    {
        User.find({email:req.body.email}).exec()
        .then(user=>{
            if(user.length>=1 && (req.params.userid != user[0]._id))
            {
                console.log(user.length);
                
                return res.status(409).json({
                    message:"MailExists"
                });
            }else{
    
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
                        "email":req.body.email
                    
                    }, 
                    {new: true},
                    function(err, result){
                
                        if(err){
                            res.send(err)
                        }
                        else{
                            res.status(200).
                            json({ message:"UserUpdated"});
                        }
                
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

router.get("/:userid",(req,res,next)=>{
    User.find({_id: req.params.userid}).exec().then(user => {
            res.status(200);
            res.json({id:user[0]._id,
                firstname:user[0].firstName,
            secondname:user[0].secondName,
                age:user[0].age,
                email:user[0].email,
                getPro:user[0].getPro,
                followers:user[0].followers,
                following:user[0].following
                
        });
     }
   ).catch(err=>{
       res.status(404).json({
           error:"UserNotFound"
       })
   });
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
                    .then(user=>{
                        
                        res.status(201).json({
                            message:"user created"
            
                        })
                    })
                        .catch(err=> {
                            res.status(404).json({
                                error:err
                            });
                        })
                    
            
                }
            
               });
        }
    });
}else{
    res.status(404).json({
        message:"page not found"
    });
}
    
});

router.post("/message/:userid",checkAuth,(req,res,next)=>{
    User.find({email:req.body.email}).exec().then(result=>{

   
    User.find({_id:req.params.userid}).exec().then(user=>{
   const mailOptions = {
       from: "noreply@thealphaflickr.xyz", // sender address
       to: result[0].email, // list of receivers
       subject: req.body.subject, // Subject line
        // plain text body
       html: user[0].firstName+ "<p>sent you a message</p>" +req.body.message // html body
     };
     transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
         console.log(error);
         res.status(400).send({success: false})
       } else {
         res.status(200).send({success: true});
       }
     });
   })
});

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

router.put("/follow",checkAuth,(req,res,next)=>{
    
    var flag=0;

    User.find({_id:req.userData.userId}).exec()
    .then(user=>{
        var followingArrLength = user[0].following.length;
        
        for(i=0;i<followingArrLength;i++){
            if(user[0].following[i]==req.body.followId)
            {
                flag=1;
                console.log(flag);
               
            }
        }
        console.log(flag);
        if(flag==0)
        {
        User.findByIdAndUpdate(req.body.followId,{
            $push:{followers:req.userData.userId}
        },{new:true}
        ,(err,result)=>{
            if(err)
            {
                return res.status(422).json({error:err})
            } User.findByIdAndUpdate(req.userData.userId,{
                $push:{following:req.body.followId}
            },{new:true}).then(result=>{
                res.status(200).json(result)})
                .catch(err=>{
                    return res.status(422).json({error:err})
                })
            
        
            });
        }else{
            res.status(409).json({Error:"AlreadyFollows"})
        }


    });

    
});

router.put("/unfollow",checkAuth,(req,res,next)=>{
    
   
        User.findByIdAndUpdate(req.body.unfollowId,{
            $pull:{followers:req.userData.userId}
        },{new:true}
        ,(err,result)=>{
            if(err)
            {
                return res.status(422).json({error:err})
            } User.findByIdAndUpdate(req.userData.userId,{
                $pull:{following:req.body.unfollowId}
            },{new:true}).then(result=>{
                res.status(200).json(result)})
                .catch(err=>{
                    return res.status(422).json({error:err})
                })
            
        
            }); 
});

router.get("/followers/:userid",(req,res,next)=>{
    
   User.find({_id:req.params.userid}).exec().then(user=>{
       res.status(200).json({
           followers:user[0].followers


       });

   }).catch(err=>{
       res.status(404).json({
           error:"ProfileNotFound"
       })
   });
    
});
router.get("/following/:userid",(req,res,next)=>{
    
    User.find({_id:req.params.userid}).exec().then(user=>{
        res.status(200).json({
            following:user[0].following
 
 
        });
 
    }).catch(err=>{
        res.status(404).json({
            error:"ProfileNotFound"
        })
    });
     
 });

 



router.post("/get-pro/monthly",checkAuth,(req,res,next)=>{
    const card=new Card({
        name:req.body.name,
    streetAddress:req.body.streetAddress,
    city:req.body.city,
    counrty:req.body.counrty,
    cvc:req.body.cvc,
    expiryDate:req.body.expiryDate,
    zipCode:req.body.zipCode,
    creditCardNumber:req.body.creditCardNumber,
    owner:req.userData.userId,

    });
    card.save().then(result=>{
        User.findByIdAndUpdate(req.userData.userId,{getPro:true }).exec();
        res.status(201).json({
            message:"GetProSuccessful"

        })
    })
        
        .catch(err=> {
            res.status(422).json({
                error:err
    
            })
        })
    });

router.post("/get-pro/annual",checkAuth,(req,res,next)=>{
        const card=new Card({
            name:req.body.name,
        streetAddress:req.body.streetAddress,
        city:req.body.city,
        counrty:req.body.counrty,
        cvc:req.body.cvc,
        expiryDate:req.body.expiryDate,
        zipCode:req.body.zipCode,
        creditCardNumber:req.body.creditCardNumber,
        owner:req.userData.userId,
    
        });
        card.save().then(result=>{
            User.findByIdAndUpdate(req.userData.userId,{getPro:true }).exec();
            res.status(201).json({
                message:"GetProSuccessful"
    
            })
        })
            
            .catch(err=> {
                res.status(422).json({
                    error:err
        
                })
            })
        });


 router.post("/get-pro/3-month",checkAuth,(req,res,next)=>{
            const card=new Card({
                name:req.body.name,
            streetAddress:req.body.streetAddress,
            city:req.body.city,
            counrty:req.body.counrty,
            cvc:req.body.cvc,
            expiryDate:req.body.expiryDate,
            postalCode:req.body.postalCode,
            zipCode:req.body.zipCode,
            creditCardNumber:req.body.creditCardNumber,
            owner:req.userData.userId,
        
            });
            card.save().then(result=>{
                User.findByIdAndUpdate(req.userData.userId,{getPro:true }).exec();
                res.status(201).json({
                    message:"GetProSuccessful"
        
                })
            })
                
                .catch(err=> {
                    res.status(422).json({
                        error:err
            
                    })
                })
            });



   



router.get("/about/:userid",checkAuth,(req,res,next)=>{
    
    User.find({_id: req.params.userid}).exec().then(user => {
        res.status(200);
        res.json({description:user[0].description,
            firstname:user[0].firstName,
        secondname:user[0].secondName,
            age:user[0].age,
            email:user[0].email,
            getPro:user[0].getPro,
            followers:user[0].followers,
            following:user[0].following,
            occupation:user[0].occupation,
            hometown:user[0].hometown,
            currentCity:user[0].currentCity,
            website:user[0].website,
            facebook:user[0].facebook,
            profilePic:user[0].profilePic
            
    });
 }
).catch(err=>{
   res.status(409).json({
       error:err
   });
});
        

});


module.exports=router;