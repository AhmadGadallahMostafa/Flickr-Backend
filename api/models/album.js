 const mongoose = require('mongoose');

 const albumSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    album_owner: { type: mongoose.Schema.Types.ObjectId
        , required: true , ref: 'User'},
    name: { type: String, required: true },
    description: {type: String},
    date_created: {type: Date, required: true},
    photo: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Photos'}],
    items: { type: Number , required: true },
    views: { type: Number , required: true},
});

module.exports = mongoose.model('album',albumSchema);