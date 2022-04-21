import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import homeRoute from './routes/home.js'
import cors from 'cors'
const app = express()
dotenv.config()
app.use(cors({origin: 'http://localhost:3000'}))
const PORT = process.env.PORT

app.use(express.json())

app.use('/', homeRoute)

app.listen(PORT, () => {
    mongoose.connect(process.env.DATA_BASE, () => {
        console.log(`app is listen in port: ${PORT} and data base connected`)
    })
})

