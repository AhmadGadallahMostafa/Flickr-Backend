const express = require('express');
const router = express.Router();
const Album = require('../models/album');
const mongoose = require('mongoose');
const Photo = require('../models/photos');

router.post('/',(req, res, next) =>{
    Album.find({ name: req.body.name })
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
                 if(!photo)
                    {
                    return res.status(404).json({
                    message: 'Photo id is invalid!'
                        });
                        }
                
                    const album = new Album({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    description: req.body.description,
                    date_created:req.body.date_created,
                    photo: req.body.photo});
                
            
            return album.save();
            })
            .then(result => {
                console.log(result);
                res.status(200).json({
                    message: 'Album is created successfully',
                    createdAlbum: {
                        _id: result._id,
                        name: result.name,
                        description: result.description,
                        date_created: result.date_created,
                        photo: result.photo,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/album/' +result. _id
                        }
                    }
                });
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

/*function checkPhoto(photo)
{
    if(!photo) {
        return res.status(404).json({
            message: 'Photo id is invalid!'
            });
    }
}*/

router.get("/:albumId",(req, res, next) =>{
    const id = req.params.albumId;
    Album.findById(id)
    .select("_id name description date_created photo")
    .exec()
    .then(doc => {
        console.log("From database",doc);
        if(doc)
        {
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

router.get("/", (req, res, next) =>{
    Album.find()
    .select("_id name description date_created photo")
    .exec()
    .then(docs =>{
        const response = {
            count :docs.length,
            album: docs.map(doc => {
                return {
                    _id: doc._id,
                    name: doc.name,
                    description: doc.description,
                    date_created: doc.date_created,
                    photo: doc.photo,
                    Request: {
                        type: 'GET',
                        url: 'http://localhost:3000/album/' +doc. _id
                    }
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

router.delete("/:albumId", (req, res, next) =>{
 const id = req.params.albumId;
 Album.remove({
     _id: id })
     .exec() 
     .then(result => {
        res.status(200).json({
            message: "Album deleted successfully"
        });
     })
     .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
     });
});

router.patch("/:albumId", (req, res, next) => {
    const id = req.params.albumId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Album.update({ _id: id}, { $set: updateOps })
    .exec()
    .then( result => {
        res.status(200).json({
            message: 'Album has been edit successfully',
            request: {
                type: 'GET',
                url: 'http://localhost:3000/album/' + id 
            }
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