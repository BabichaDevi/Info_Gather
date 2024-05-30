import mongoose from "mongoose";

const loginSchema=new mongoose.Schema({

    UserName:{
        type:String,
        required:true
    },
    UserEmail:{
        type:String,
        required:true
    },
    UserPassword:{
        type:String,
        required:true
    },
});
export const Login=mongoose.model('Login',loginSchema);