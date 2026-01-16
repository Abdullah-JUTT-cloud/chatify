import express from 'express';
const router = express.Router();
import {signup,login,logout,updateProfile} from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import { arcjetProtection } from '../middleware/arcjet.middleware.js';

// router.use(arcjetProtection);

router.post("/signup",arcjetProtection, signup);

router.post("/login",arcjetProtection, login);

router.post("/logout",arcjetProtection, logout);
router.put('/update-profile',arcjetProtection,protectRoute, updateProfile);
router.get('/check',protectRoute,(req,res)=>{
    res.status(200).json({message: "Authorized", user: req.user});
});

export default router;