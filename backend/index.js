import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectdb.js';



dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req, res)=>{
    res.send("Hello Everyone");
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    connectDb()
});