import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    
},
    {timestamps:true});

export const User = mongoose.model("User",userSchema);