import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("hello, this is Auth endpoint!")
})

router.get("/register", (req,res) => {
    res.send("hello, this is Auth Register endpoint!")
})

export default router