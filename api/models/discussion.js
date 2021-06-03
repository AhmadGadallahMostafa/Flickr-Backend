const mongoose = require('mongoose');
const Group = require('../models/group');
//const Group = require('../models/group')
const discussionSchema = mongoose.Schema({
    title: { 
        type: String,
         required: true
        },
    description: {
        type: String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
     },
     replies:[{
        reply:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reply'
            }
     }],
     group:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'group'
     }
    }
)



module.exports = mongoose.model('Discussion',discussionSchema);