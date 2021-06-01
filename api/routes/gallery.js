const express = require('express');
const router = express.Router();
const Gallery = require('../models/gallery');
const mongoose = require('mongoose');
const Photo = require('../models/photos');
const User = require('../models/user');
const checkAuth=require("../middleware/check-auth");

const { ObjectID } = require('mongodb');
const gallery = require('../models/gallery');




// creating a new gallery

router.post('/', checkAuth ,(req, res, next) =>{
    userData = req.userData

    const id = userData.userId;
    User.findById(id).exec().then( user =>{
    Gallery.find({ name: req.body.name, gallery_owner: user._id 
    }) // et2ked eno mn nfs el user
    .exec()
    .then(gallery => {
        if(gallery.length >=1 ) {
            return res.status(409).json({
                message: "User already created a gallery with the same name"
            });
        }
        else
        {
            Photo.findById(req.body.photo)
            .then(photo => {
                 if(!photo && req.body.photo)
                    {
                    return res.status(404).json({
                    message: 'Photo id is invalid!'
                        });
                        }
                    
                    const gallery = new Gallery({
                    _id: new mongoose.Types.ObjectId(),
                    gallery_owner: ObjectID(userData.userId),
                    name: req.body.name,
                    description: req.body.description,
                    date_created:req.body.date_created,
                    //photo: ObjectID(req.body.photo),
                    items: "0",
                    views: "0",
                    //comments: ObjectID(req.body.comments),
                    comments_number: "0"
                    });
                
            
            return gallery.save();
            })
            .then(result => {
                console.log(result);
                res.status(200).json({
                    message: 'Gallery is created successfully'});
                          })
                .catch(err => { console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        };
    });
 });
});
 


// getting a gallery 

router.get("/:galleryId",(req, res, next) =>{
    const id = req.params.galleryId;
    Gallery.findById(id)
    .select("_id gallery_owner name description date_created photo items views comments comments_number")
    .exec()
    .then(doc => {
        console.log("From database",doc);
        if(doc)
        {
            Gallery.updateOne({_id: req.params.galleryId}, {views: (doc.views + 1)}).exec().then();
            res.status(200).json({
                gallery: doc
            });
        }
        else
        {
            res.status(404).json({
                message:"There is no Gallery that has the passed id"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});



// getting all galleries for the user

router.get("/user-galleries/:userId", (req, res, next) =>{
    User.findById(req.params.userId).exec().then( user =>{
    Gallery.find( {gallery_owner: user._id} )
    .select("_id gallery_owner name description date_created photo items views comments comments_number ")
    .exec()
    .then(docs =>{
        const response = {
            count :docs.length,
            gallery: docs.map(doc => {
                return {
                    gallery: doc
                };
            })
        }
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
});



// deleting gallery

router.delete("/:galleryId", checkAuth, (req, res, next) =>{
userData = req.userData
const userid = userData.userId;

 const galleryid = req.params.galleryId;
 Gallery.find({_id: galleryid , gallery_owner: userid}).exec().then(gallery => {
     if (gallery.length == 0)
     {
         return res.json({
             message: "Can't delete the gallery"
         })
     }
 });
Gallery.remove({_id: galleryid , gallery_owner: userid})
    .exec() 
    .then(result => {
    res.status(200).json({
               message: "Gallery deleted successfully"
    });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({
    message: err
           })
        });

});



// updating gallery

router.patch("/:galleryId", checkAuth, (req, res, next) => {
    userData = req.userData
    const userid = userData.userId;
    
     const galleryid = req.params.galleryId;
    const updateOps = {};


    Gallery.find({_id: galleryid , gallery_owner: userid}).exec().then(gallery => {
        if (gallery.length == 0)
        {
            return res.json({
                message: "Can't edit the gallery"
            })
        }
    })

    for (const ops of req.body) {

        updateOps[ops.propName] = ops.value;


        if(ops.propName == "date_created")
        {
            return res.status(409).json({
                message: "Can't edit the date of creation" });
        }      

        if(ops.propName == "comments")
        {
            const commentsNumber = updateOps["comments"].length;
            Gallery.update({ _id: galleryid , gallery_owner: userid }, { $set: {comments_number : commentsNumber }}).exec().then();
        }
       
        if(ops.propName == "photo")
        {
            const itemsNumber = updateOps["photo"].length;
            Gallery.update({ _id: galleryid , gallery_owner: userid }, { $set: {items : itemsNumber }}).exec().then();
        }

        
    
    }

    Gallery.update({ _id: galleryid , gallery_owner: userid }, { $set: updateOps }) 
    .exec()
    .then( result => {
        res.status(200).json({
            message: 'Gallery has been edit successfully'
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;