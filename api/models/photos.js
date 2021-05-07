const mongoose = require("mongoose");

const photoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    authorId: String,
    title: {type: String, required: true},
    description: String,
    date: {type: Date, default: Date.now},
    isPublic: Boolean,
    taggedPeople: [{type: String}],
    tags: [{type: String}],
    cameraName: {type: String},
    photoPath: String
});

module.exports = mongoose.model("Photo", photoSchema);