// let isConnected = false;

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

    mongoose.connection.on('connected', () => {
        console.log("Database connected");
        isConnected = true;
    });

    mongoose.connection.on('error', (error) => {
        console.error("Database connection error:", error);
    });

    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "bg-removal"
    });
};

export default connectDB;


// import mongoose from "mongoose";

// let isConnected = false;

// const connectDB = async () => {
//   if (isConnected) return;

//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);
//     isConnected = true;
//     console.log("Database connected");
//   } catch (error) {
//     console.error("Could not connect to MongoDB", error);
//   }
// };

// export default connectDB;