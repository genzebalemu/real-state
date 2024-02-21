import mongoose from "mongoose";

const dbConnect = () => { // Renamed the function
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost:27017/tour', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Check MongoDB connection
  const dbConnection = mongoose.connection; // Renamed the variable
  dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
  dbConnection.once('open', () => {
    console.log('Connected to MongoDB');
  });
};

export default dbConnect; // Updated the export
