import  express  from "express";
import cors from "cors"
import realstaterouter from "./Routes/router.js"
import bodyParser from "body-parser";
import dbConnect from "./Databases/database.js"
const port=5000
const app = express();
app.use(cors())
app.use(bodyParser.json())

dbConnect()
app.use("/", realstaterouter)

app.listen(port,()=>{
    console.log("server is listining on port 5000")
})
