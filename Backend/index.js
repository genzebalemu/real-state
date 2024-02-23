import  express  from "express";
import cors from "cors"
import realstateRouter from "./Routes/Authroute.js"
import bodyParser from "body-parser";
import dbConnect from "./Databases/database.js"
import dotenv from 'dotenv'
dotenv.config();

const port=process.env.PORT
const app = express();
app.use(cors())
app.use(bodyParser.json())


dbConnect()
app.use("/", realstateRouter);
// app.use((error,req,res,next)=>{
//     const statusCode=error.statusCode || 500;
//     const message= error.message || 'internal server error'
//     return res.status(statusCode).json({
//         success:false,
//         statusCode,
//         message
//     })
// })
app.listen(port,()=>{
    console.log("server is listining on port "+port)
})


