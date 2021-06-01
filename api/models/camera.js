const mongoose = require('mongoose');

const cameraSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true ,unique:true},
    camera_owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    brand: { type: String, required: true },
    camera_type: { type: String, required: true },
    sensor_resolution: { type: Number},
    lcd_size: {type: Number},
    media_type: [{type: String}],
    weight: {type: Number},
    lens_mount: {type: String},
    photo: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Photos'}]
});

module.exports = mongoose.model('camera',cameraSchema);