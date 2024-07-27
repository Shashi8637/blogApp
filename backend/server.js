import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "../backend/database/db.js";
import userRoutes from "../backend/router/userRouter.js"
import cors from "cors";



dotenv.config({
    path:"./.env",
});




const app = express();



const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cors({origin:"http://localhost:3000",optionsSuccessStatus: 200}));

//Routers
app.use("/api/v1/user",userRoutes);




app.get("/",(req,res,next)=>{
    res.send("Hello Server");
})

dbConnection();

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})