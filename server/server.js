import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

// App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Initialize Middlewares
app.use(express.json()) //any method will be passed
app.use(cors()) // connect client on different port to backend server

// API routes
app.get('/',(request, response)=> response.send("API working"))

app.listen(PORT, ()=> console.log("Server running on port " + PORT))