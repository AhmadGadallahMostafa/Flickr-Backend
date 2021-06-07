const mongoose = require('mongoose');

const invitationSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
});

module.exports = mongoose.model('Invitation',invitationSchema);
