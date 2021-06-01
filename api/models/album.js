 const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: {type: String},
    date_created: {type: Date, required: true},
    photo: {
        type: Array,
        ref: 'Photos'
    }
});

module.exports = mongoose.model('album',albumSchema);