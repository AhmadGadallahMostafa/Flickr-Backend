const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    photo:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Photo',
        required: true
    },
    text:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Comment',commentSchema);
