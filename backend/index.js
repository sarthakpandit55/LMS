import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectdb.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoute.js';
import cors from "cors";
import userRouter from './routes/userRoute.js';
import courseRouter from './routes/courseRoute.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/course", courseRouter)



app.get("/",(req, res)=>{
    res.send("Hello Everyone");
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    connectDb()
});