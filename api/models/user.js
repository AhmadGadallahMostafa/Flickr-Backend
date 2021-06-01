const mongoose=require("mongoose");


const userSchema= new mongoose.Schema({

    firstName:{type:String,required:true},
    secondName:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    getPro:{type:Boolean},
    followers:[{type:mongoose.Schema.Types.ObjectId}],
    following:[{type:mongoose.Schema.Types.ObjectId}]
});

module.exports= new mongoose.model("User",userSchema);