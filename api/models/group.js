const mongoose = require('mongoose');
const Discussion = require('../models/discussion')
const groupSchema = mongoose.Schema({
    name: { 
        type: String,
         required: true
        },
    description: {
        type: String
    },
    date_created: {
        type: Date,
         default: Date.now
        },
    photos: [{
        Photo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }
    }],
    discussions:[{
        discussion:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Discussion'
        },
    }],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
     },
    members: [{
        member:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
    }],
    admins: [{
        admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
    }],
    
    status:{
        type:String,
        default:"P",
        trim: true,
        validate(value){
            if(value.toLowerCase() !=="p" && value.toLowerCase() !=="r")
               throw new Error('invalid status')
        }
    },
    age_restricted:{
        type:Number,
        default:0
    },

    }
)


 
const Model = mongoose.model('group',groupSchema);
module.exports = Model