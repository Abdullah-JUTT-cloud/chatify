import express from 'express';
const router = express.Router();
import {signup} from '../controllers/auth.controller.js';

router.get("/signup", signup);

router.get("/login",(req,res)=>{
    res.send("Login API");
});

router.get("/logout",(req,res)=>{
    res.send("Logout API");
});

export default router;