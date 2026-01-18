import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import fs from 'fs';
import { ENV } from './lib/env.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import { app, server } from './lib/socket.js';


const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;
app.use(express.json({ limit: "10mb" }));
app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

if (ENV.NODE_ENV === 'production') {
    const frontendPath = path.join(__dirname, 'frontend/dist');
    const fallbackPath = path.join(__dirname, '../frontend/dist');

    let finalPath = frontendPath;
    if (fs.existsSync(fallbackPath)) {
        finalPath = fallbackPath;
    }

    app.use(express.static(finalPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(finalPath, "index.html"));
    });
}

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${ENV.NODE_ENV || 'development'} mode`);
    console.log("Connecting to MongoDB...");
    connectDB();
});

