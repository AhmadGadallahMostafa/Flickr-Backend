const express = require("express");
const router = express.Router();

const fs = require("fs");

const path = require("path");

const mongoose = require("mongoose");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./photos/");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({storage: storage});

const Photo = require("../models/photos"); 

router.get("/:limit", (req, res, next) => {
    Photo.find({isPublic: true})
    .sort({_id: -1})
    .limit(Number(req.params.limit) || 100)
    .exec()
    .then(docs => {
        let response = {
            size: docs.length,
            photos: docs
        }
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.post("/", upload.single("photo"),(req, res, next) => {

    
    
    const photo = new Photo({
        _id: new mongoose.Types.ObjectId(),
        authorId: req.body.authorId,
        title: req.body.title,
        description: req.body.title,
        date: req.body.date,
        isPublic: req.body.isPublic,
        taggedPeople: req.body.taggedPeople,
        tags: req.body.tags,
        cameraName: req.body.cameraName,
        photoPath: req.file.path
    });

    photo.save()

    .then(result => {
        res.status(201).json({
            message: "Photo was saved successfully",
            createdPhoto: result
        });
    })
    .catch(err => {
        fs.unlink(req.file.path, err => {});
        res.status(500).json({  
            error: err
        });
    });
});

router.get("/photoInfo/:photoId", (req, res, next) => {
    Photo.find({_id:req.params.photoId})
    .exec()
    .then(docs => {
        let response = {
            photoInfo: docs
        }
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.get("/photo/:photoId", (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(docs => {
        res.status(200).sendFile(path.join(__dirname, "../../",docs.photoPath));
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;