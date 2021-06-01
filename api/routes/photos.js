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

const checkAuth = require("../middleware/check-auth");
const { Console } = require("console");

router.get("/user-favorite/", checkAuth, (req, res, next) => {
    Photo.find({favoritesIds: req.userData.userId})
    .exec()
    .then(photos => {
            res.status(200).json({
                count: photos.length,
                favoritePhotos: photos
            });
    })
    .catch(err => {
        res.status(500).json({
            message: "invalid parameters",
            error: err
        });
    }); 
});

router.get("/user-notfications/", checkAuth, (req, res, next) => {
    User.findById(req.userData.userId)
    .exec()
    .then(user => {
            res.status(200).json({
                count: user.notifications.length,
                favoritePhotos: user.notifications
            });
    })
    .catch(err => {
        res.status(500).json({
            message: "invalid parameters",
            error: err
        });
    }); 
});

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
    User.findById(req.userData.userId)
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
                authorId: req.userData.userId,
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

router.get("/user-photos/:userId", (req, res, next) => {
    Photo.find({authorId: req.params.userId})
    .limit(Number(req.params.limit))
    .exec()
    .then(docs => {
        let response = {
            size: docs.length,
            photos: docs
        }
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(403).json({
            error: err
        });
    });
});

router.get("/photo-info/:photoId", (req, res, next) => {
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

router.patch("/photo-info/:photoId", checkAuth, (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(result => {
        if (!result) {
            res.status(404).json({
                message: "photo does not exist"
            });
        } else if (result.authorId == req.userData.userId) {
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
            Photo.updateOne({_id: req.params.photoId}, {views: (photo.views + 1)}).exec().then();
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
        } else if (photo.authorId == req.userData.userId) {
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
        } else if (photo.authorId == req.userData.userId) {   
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

router.post("/photo/favorite/:photoId", checkAuth, (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(photo => {
        User.findById(req.userData.userId).exec().then(user => {
            if (!photo) {
                res.status(404).json({
                    message: "photo does not exist"
                });    
            } else if (!user) {
                res.status(404).json({
                    message: "user does not exist"
                });    
            } else if (photo.favoritesIds.includes(req.userData.userId)) {
                res.status(409).json({
                    message: "user already favorited the photo"
                });
            } else {
                photo.favoritesIds.push(req.userData.userId);
                Photo.updateOne({_id: req.params.photoId}, {favoritesIds: photo.favoritesIds})
                .exec()
                .then(result => {
                    User.updateOne({_id: photo.authorId}, { $push: { notifications: {date: Date.now(), info: user.firstName + " favorited your " + photo.title + " photo"} } }).exec();
                    res.status(200).json({
                        message: "added favorite"
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        message: "invalid parameters",
                        error: err
                    });
                });             
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "invalid parameters",
                error: err
            });
        });
    })
    .catch(err => {
        res.status(500).json({
            message: "invalid parameters",
            error: err
        });
    }); 
});

router.delete("/photo/favorite/:photoId", checkAuth, (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(photo => {
        User.findById(req.userData.userId).exec().then(user => {
            if (!photo) {
                res.status(404).json({
                    message: "photo does not exist"
                });    
            } else if (!user) {
                res.status(404).json({
                    message: "user does not exist"
                });    
            } else if (!req.userData.userId) {
                res.status(400).json({
                    message: "please send user ID"
                });
            } else if (!photo.favoritesIds.includes(req.userData.userId)) {
                res.status(409).json({
                    message: "user didn't favorite the photo"
                });
            } else {
                let index = photo.favoritesIds.indexOf(req.userData.userId);
                if (index > -1) {
                    photo.favoritesIds.splice(index, 1);
                    Photo.updateOne({_id: req.params.photoId}, {favoritesIds: photo.favoritesIds})
                    .exec()
                    .then(res.status(200).json({
                        message: "removed favorite"
                    }))
                    .catch(err => {
                        res.status(500).json({
                            message: "invalid parameters",
                            error: err
                        });
                    });
                }             
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "invalid parameters",
                error: err
            });
        });
    })
    .catch(err => {
        res.status(500).json({
            message: "invalid parameters",
            error: err
        });
    }); 
});

router.get("/photo/favorite/:photoId", (req, res, next) => {
    Photo.findById(req.params.photoId)
    .exec()
    .then(photo => {
        if (!photo) {
            res.status(404).json({
                message: "photo does not exist"
            });
        } else {
            res.status(200).json({
                count: photo.favoritesIds.length
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