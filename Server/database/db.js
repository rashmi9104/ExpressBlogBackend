import mongoose from 'mongoose';

const Connection = async(username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@blogproject.9w3qjsh.mongodb.net/`;
    try{
        await mongoose.connect(URL,{useNewUrlParser: true})
        console.log("Connection successful with Database");
    } 
    catch(error){
        console.log("Error while connecting witth database", error);
    }
}

export default Connection;