// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected',() => {
//         console.log("Database connected")
//     })

//     await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
// }

// export default connectDB

import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
};

export default connectDB;