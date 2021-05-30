const express = require("express");
const router = express.Router();

const fs = require("fs");

const path = require("path");

const mongoose = require("mongoose");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = path.join(__dirname, "../../photos");
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            cb(null, dir);
        }
        else{
            cb(null, dir);
        }
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({storage: storage});

const Photo = require("../models/photos"); 
const User = require("../models/user");

const checkAuth=require("../middleware/check-auth")

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

router.post("/", checkAuth, upload.single("photo"), (req, res, next) => {
    User.findById(req.body.authorId)
    .then(result => {
        if (!result) { 
            fs.unlink(req.file.path, err => {});
            res.status(404).json({
                message: "User does not exist"
            });
            res.send(); 
        } else {
            const photo = new Photo({
                _id: new mongoose.Types.ObjectId(),
                authorId: req.body.authorId,
                title: req.body.title,
                description: req.body.description,
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
        }
    })
    .catch((err => {
        fs.unlink(req.file.path, err => {});
        res.status(500).json({
            message: "invalid input",  
            error: err
        });
    }));
});

router.get("/photoInfo/:photoId", (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(docs => {
        if (!docs) {
            res.status(404).json({
                message: "photo does not exist"
            });
        } else {
            let response = {
                photoInfo: docs
            }
            res.status(200).json(response);    
        }
        })
    .catch(err => {
        res.status(500).json({
            message: "invalid parameters",
            error: err
        });
    });
});

router.patch("/photoInfo/:photoId", checkAuth, (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(result => {
        if (!result) {
            res.status(404).json({
                message: "photo doesnot exist"
            });
        } else if (result.authorId == req.body.userId) {
            Photo.findByIdAndUpdate(req.params.photoId, {$set: req.body})
            .exec()
            .then(res.status(200).json({
                message: "updated successfully"
            }))
            .catch(err => {
                res.status(500).json({
                    error: err})
                });
        } else {
            res.status(401).json({
                message: "you are not authorized to update this photo"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "invalid parameters",
            error: err
        });
    });    
});

router.get("/photo/:photoId", (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(photo => {
        if (!photo || !fs.existsSync(photo.photoPath)) {
            res.status(404).json({
                message: "photo does not exist"
            });
        } else {
            res.status(200).sendFile(photo.photoPath);    
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "invalid parameters",
            error: err
        });
    });
});

router.delete("/photo/:photoId", checkAuth, (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(photo => {
        if (!photo) {
            res.status(404).json({
                message: "photo does not exist"
            });
        } else if (photo.authorId == req.body.userId) {
            fs.unlink(photo.photoPath, err => {});
            Photo.deleteOne({_id: req.params.photoId})
            .exec()
            .then(
                res.status(200).json({
                    message: "photo deleted successfully"
                }))
            .catch( err => {
                err.status(500).json({
                error: err
                });
            });    
        } else {
            res.status(401).json({
                message: "you are not authorized to delete this photo"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "invalid parameters",
            error: err
        });
    });    
});

router.patch("/photo/:photoId", checkAuth, upload.single("photo"), (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(photo => {
        if (!photo) {
            fs.unlink(req.file.path, err => {});
            res.status(404).json({
                message: "photo does not exist"
            });   
        } else if (photo.authorId == req.body.userId) {   
            fs.unlink(photo.photoPath, err => {});
            Photo.updateOne({_id: req.params.photoId}, {photoPath: req.file.path})
            .exec()
            .then(res.status(200).json({
                message: "updated successfully"
            }))
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            }); 
        } else {
            fs.unlink(req.file.path, err => {});
            res.status(401).json({
                message: "you are not authorized to edit this photo"
            });
        }   
    })
    .catch(err => {
        res.status(500).json({
            message: "invalid parameters",
            error: err
        });
    }); 
});



module.exports = router;