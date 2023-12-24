import express from "express";
import dotenv from 'dotenv';
import Connection from "./database/db.js";

const app = express();

app.listen(3000, ()=>{
    console.log("server is successfully established on port 3000");
})

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
