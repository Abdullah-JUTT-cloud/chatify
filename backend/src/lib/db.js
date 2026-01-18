import mongoose from 'mongoose';
import { ENV } from './env.js'

export const connectDB = async () => {
    try {
        const { MONGODB_URI } = ENV;
        if (!MONGODB_URI) {
            console.error("CRITICAL: MONGODB_URI is missing from environment variables!");
            process.exit(1);
        }

        console.log("Attempting to connect to MongoDB...");
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        setTimeout(() => process.exit(1), 1000);
    }
}