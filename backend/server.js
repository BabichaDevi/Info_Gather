import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import { Login } from "./models/loginModel.js";
// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).send("Welcome to myExpress app!");
});

app.post("/login",async(request,response)=>{
    try{
        if(!request.body.UserName||!request.body.UserEmail||!request.body.UserPassword)
            {
            return response.status(400).send({
                message:'Send all required fields:title,author,publicsh',
            })
            }
        const NewUser={
            UserName:request.body.UserName,
            UserEmail:request.body.UserEmail,
            UserPassword:request.body.UserPassword,
        };
        const login=await Login.create(NewUser);
        return response.status(201).send(login);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

//load mongodburl
const MONGODB_URL=process.env.MONGODB_URL;

//connect to mongodb atlas
mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(()=>console.log("mongodb_connected"))
.catch((error)=> console.log(error));


// Use the port from .env file or default to 8000
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
