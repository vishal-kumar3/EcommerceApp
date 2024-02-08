import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({
    limit: "20kb"
}))

// ye walla url ke liye h
// nested objects ke liye extended
app.use(express.urlencoded({extended: true, limit: "20kb"}))

// agar koi file kuch save krna ho to usko public folder me save krna
app.use(express.static("public"))

// reading or setting cookie in user browser
app.use(cookieParser())


// importing routers


// declaring routes





export { app }