const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser=require("body-parser");

const mongoose = require("mongoose");


require("dotenv").config();
const commentRoutes = require('./api/routes/comment')
const discussionRoutes = require('./api/routes/discussion');
const adminRoutes = require('./api/routes/admin');
const photosRoutes = require("./api/routes/photos");
const usersRoutes = require("./api/routes/user");
const albumRoutes = require('./api/routes/album');
const searchRoutes = require("./api/routes/search");
const galleryRoutes = require('./api/routes/gallery');
const cameraRoutes = require('./api/routes/camera');


const groupRouters = require("./api/routes/group");
const resetRoutes = require("./api/routes/reset");

mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept, Authorization");
    if(req.method === "options") {
        res.header("Access-Control-Allow-Methods", "PUT, GET, PATH, POST, DELETE");
        return res.status(200).json({});
    }
    next();
});
app.use(commentRoutes)
app.use(adminRoutes);
app.use("/photos", photosRoutes);
app.use("/user",usersRoutes);
app.use("/reset",resetRoutes);
app.use('/album',albumRoutes);
app.use('/search',searchRoutes);
app.use('/gallery',galleryRoutes);
app.use('/camera',cameraRoutes);
app.use(groupRouters)
app.use(discussionRoutes)

app.use((req, res, next) =>{
    const error = new Error("404 not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app; 