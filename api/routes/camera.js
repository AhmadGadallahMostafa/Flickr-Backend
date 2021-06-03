const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Photo = require('../models/photos');
const Camera = require('../models/camera');
const User = require('../models/user');
const checkAuth=require("../middleware/check-auth");

const { ObjectID } = require('mongodb');



// creating camera

router.post('/', checkAuth ,(req, res, next) =>{
    userData = req.userData
    const id = userData.userId;

    Camera.find({ name: req.body.name })
    .exec()
    .then(camera => {
        if(camera.length >=1 ) {
            return res.status(409).json({
                message: "There is a camera already that exists with the same name"
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
                
                    const camera = new Camera({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    camera_owner: ObjectID(id),
                    brand: req.body.brand,
                    camera_type: req.body.camera_type,
                    sensor_resolution: req.body.sensor_resolution,
                    lcd_size: req.body.lcd_size,
                    media_type: req.body.media_type,
                    weight: req.body.weight,
                    lens_mount: req.body.lens_mount,
                    photo: ObjectID(req.body.photo)
                });
                
            
            return camera.save();
            })
            .then(result => {
                console.log(result);
                res.status(200).json({
                    message: 'Camera is created successfully'
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



// getting camera 

router.get("/:cameraId",(req, res, next) =>{
    const id = req.params.cameraId;
    Camera.findById(id)
    .select("_id name camera_owner brand camera_type sensor_resolution lcd_size media_type weight lens_mount photo")
    .exec()
    .then(doc => {
        console.log("From database",doc);
        if(doc)
        {
            res.status(200).json({
                camera: doc
            });
        }
        else
        {
            res.status(404).json({
                message:"There is no camera that has the passed id"
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



// getting all cameras

router.get("/", (req, res, next) =>{
    Camera.find()
    .select("_id name camera_owner brand camera_type sensor_resolution lcd_size media_type weight lens_mount photo")
    .exec()
    .then(docs =>{
        const response = {
            count :docs.length,
            camera: docs.map(doc => {
                return {
                        _id: doc._id,
                        name: doc.name,
                        camera_owner: doc.camera_owner,
                        brand: doc.brand,
                        camera_type: doc.camera_type,
                        sensor_resolution: doc.sensor_resolution,
                        lcd_size: doc.lcd_size,
                        media_type: doc.media_type,
                        weight: doc.weight,
                        lens_mount: doc.lens_mount,
                        photo: doc.photo
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



// deleting camera

router.delete("/:cameraId", checkAuth, (req, res, next) =>{
    userData = req.userData
    const userid = userData.userId;

    const cameraid = req.params.cameraId;
    Camera.find({_id: cameraid , camera_owner: userid}).exec().then(camera => {
        if (camera.length == 0)
        {
            return res.json({
                message: "Can't delete the camera"
            })
        }
    });
   Camera.remove({_id: cameraid , camera_owner: userid})
       .exec() 
       .then(result => {
       res.status(200).json({
                  message: "Camera deleted successfully"
       });
       })
       .catch(err => {
       console.log(err);
       res.status(500).json({
       message: err
              })
           });
   
   });



// updating camera

router.patch("/:cameraId", checkAuth, (req, res, next) => {
    userData = req.userData
    const userid = userData.userId;
    const cameraid = req.params.cameraId;
    const updateOps = {};


    Camera.find({_id: cameraid , camera_owner: userid}).exec().then(camera => {
        if (camera.length == 0)
        {
            return res.json({
                message: "Can't edit the camera"
            })
        }
    })

    for (const ops of req.body) {

        updateOps[ops.propName] = ops.value;

        if(ops.propName == "camera_owner")
        {
            return res.status(409).json({
                message: "Can't change the owner of the camera" });
        }      
    }

    Camera.update({ _id: cameraid , camera_owner: userid }, { $set: updateOps })
    .exec()
    .then( result => {
        res.status(200).json({
            message: 'Camera has been edit successfully'
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}
);

module.exports = router;