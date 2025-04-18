import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PORT);

const connectDb = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/Portfolio`);
        console.log("MongoDb Connected!!");
    }
    catch(error) {
        console.log("Error connecting to database", error);
        process.exit(1);
    }
};

export default connectDb;