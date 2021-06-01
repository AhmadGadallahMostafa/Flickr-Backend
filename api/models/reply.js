const mongoose = require('mongoose');
const replySchema = mongoose.Schema({
    content: { 
        type: String,
         required: true
        },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
     },
     disscussion:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Disscussion'
     },

    }
)


module.exports = mongoose.model('Reply',replySchema);