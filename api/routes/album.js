const express = require('express');
const router = express.Router();
const Album = require('../models/album');
const mongoose = require('mongoose');
const Photo = require('../models/photos');
const User = require('../models/user');
const checkAuth=require("../middleware/check-auth");

const { ObjectID } = require('mongodb');



// creating a new album

router.post('/',checkAuth ,(req, res, next) =>{
    userData = req.userData
    const id = userData.userId;

    User.findById(id).exec().then( user =>{
    Album.find({ name: req.body.name , album_owner: user._id })
    .exec()
    .then(album => {
        if(album.length >=1 ) {
            return res.status(409).json({
                message: "User already created an album with the same name"
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
                
                    const album = new Album({
                    _id: new mongoose.Types.ObjectId(),
                    album_owner: ObjectID(userData.userId),
                    name: req.body.name,
                    description: req.body.description,
                    date_created:req.body.date_created,
                    items: "0",
                    views: "0"
                    });
                
            
            return album.save();
            })
            .then(result => {
                console.log(result);
                res.status(200).json({
                    message: 'Album is created successfully'
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        };
    });
    });
});



// getting an album

router.get("/:albumId",(req, res, next) =>{
    const id = req.params.albumId;
    Album.findById(id)
    .select("_id album_owner name description date_created photo items views")
    .exec()
    .then(doc => {
        console.log("From database",doc);
        if(doc)
        {
            Album.updateOne({_id: id}, {views: (doc.views + 1)}).exec().then();
            res.status(200).json({
                album: doc
            });
        }
        else
        {
            res.status(404).json({
                message:"There is no Album that has the passed id"
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



// getting all albums for the user

router.get("/user-albums/:userId", (req, res, next) =>{
    User.findById(req.params.userId).exec().then( user =>{
    Album.find( {album_owner: user._id} )
    .select("_id album_owner name description date_created photo items views")
    .exec()
    .then(docs =>{
        const response = {
            count :docs.length,
            album: docs.map(doc => {
                return {
                    _id: doc._id,
                    album_owner: doc.album_owner,
                    name: doc.name,
                    description: doc.description,
                    date_created: doc.date_created,
                    photo: doc.photo,
                    items: doc.items,
                    views: doc.views
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



// deleting album

router.delete("/:albumId", checkAuth, (req, res, next) =>{
    userData = req.userData
    const userid = userData.userId;
    
     const albumid = req.params.albumId;
     Album.find({_id: albumid , album_owner: userid}).exec().then(album => {
         if (album.length == 0)
         {
             return res.json({
                 message: "Can't delete the album"
             })
         }
     });
    Album.remove({_id: albumid , album_owner: userid})
        .exec() 
        .then(result => {
        res.status(200).json({
                   message: "Album deleted successfully"
        });
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({
        message: err
               })
            });
    
    });


// updating album

router.patch("/:albumId", checkAuth, (req, res, next) => {
    userData = req.userData
    const userid = userData.userId;
    
     const albumid = req.params.albumId;
    const updateOps = {};


    Album.find({_id: albumid , album_owner: userid}).exec().then(album => {
        if (album.length == 0)
        {
            return res.json({
                message: "Can't edit the album"
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
       
        if(ops.propName == "photo")
        {
            const itemsNumber = updateOps["photo"].length;
            Album.update({ _id: albumid , album_owner: userid }, { $set: {items : itemsNumber }}).exec().then();
        }
    }

    Album.update({ _id: albumid , album_owner: userid }, { $set: updateOps }) 
    .exec()
    .then( result => {
        res.status(200).json({
            message: 'Album has been edit successfully'
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