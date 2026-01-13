import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const{MONGODB_URI}= process.env;
        if(!MONGODB_URI) throw new Error("MONGODB_URI is not defined in environment variables");
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}