import express from "express";
import dotenv from 'dotenv';
import Connection from "./database/db.js";
import User from './model/schema.js';
import Cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json()); //middleware
app.use(Cors());

//Registration
app.post('/register', async(req, res)=>{
    const {username, password, confirmPassword} = req.body;
    // console.log(req.body);
    try{
        if(password == confirmPassword){
            const user = new User({username, password});
            await user.save();
            res.status(201).json({message:'Registration Successful'});
        }
        else{
            res.status(500).json({message: 'password does not match'});
        }
        
    }
    catch(error){
        res.status(500).json({message: 'Registration failed'})
    }
})

//login
app.post('/login', async(req ,res)=>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    try{
        if(!user){
            return res.status(401).json({error: "Invalid username or password"});
        }

        if(user.password != password){
            return res.status(401).json({error: "Invalid username or password"});
        }

        res.status(200).json({message: "Login successful"});
    }
    catch(error){
        res.status(500).json({error: "Login failed"});
    }

})

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

app.listen(8000, ()=>{
    console.log("server is successfully established on port 8000");
})



// console.log("hello im",USERNAME);
