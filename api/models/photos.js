const mongoose = require("mongoose");
const user = require("./user"); 
const photoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    authorId: {type: mongoose.Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    description: String,
    date: {type: Date, default: Date.now},
    isPublic: {type: Boolean, default: true},
    taggedPeople: [{type: String}],
    tags: [{type: String}],
    cameraName: {type: String},
    photoPath: String,
    favoritesIds:[{type: mongoose.Schema.Types.ObjectId}],
    views: {type: Number, default:0},
    URL: String,
    comments: [{
        comment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }}
    ]
});

module.exports = mongoose.model("Photo", photoSchema);