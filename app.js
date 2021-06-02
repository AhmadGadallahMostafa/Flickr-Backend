const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser=require("body-parser");

const mongoose = require("mongoose");


require("dotenv").config();
const usersRoutes = require("./api/routes/user");
//mongoose.connect('mongodb://127.0.0.1:27017/Flickr', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false,});

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