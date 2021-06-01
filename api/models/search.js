const mongoose = require('mongoose');

const searchSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    searchType: {type: String , required: true},
    date_search: {type: Date, required: true},
});

module.exports = mongoose.model('search',searchSchema);