import mongoose from "mongoose";

const dbConnect = () => {
  // Connect to MongoDB
  mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error)=>{
    console.log(error)
  })
};

export default dbConnect; 