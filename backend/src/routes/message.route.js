import express from 'express';
const router = express.Router();

router.get('/send',(req,res)=>{
    res.send("Send Message API");
});

router.get('/receive',(req,res)=>{
    res.send("Receive Message API");
});

export default router;