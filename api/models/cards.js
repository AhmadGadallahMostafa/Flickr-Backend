const mongoose=require("mongoose");


const cardSchema= new mongoose.Schema({

    name:{type:String,required:true},
    streetAddress:{type:String,required:true},
    city:{type:String,required:true},
    counrty:{type:String,required:true},
    state:{type:String,required:true},
    zipCode:{type:Number,required:true},
    creditCardNumber:{type:Number,required:true},
    owner:[{type:mongoose.Schema.Types.ObjectId}],
});

module.exports= new mongoose.model("Card",cardSchema);