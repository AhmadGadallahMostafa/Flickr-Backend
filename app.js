const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser=require("body-parser");

const mongoose = require("mongoose");

const photosRoutes = require("./api/routes/photos");
const usersRoutes=require("./api/routes/user");


mongoose.connect("mongodb+srv://Moaz:" + process.env.MONGO_ATLAS_PW + "@cluster0.c1goi.mongodb.net/Flickerdb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});



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

app.use("/photos", photosRoutes);
app.use("/user",usersRoutes);


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