import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/UserRoutes.js'
import imageRouter from './routes/ImageRoutes.js'


// App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Initialize Middlewares
app.use(express.json()) //any method will be passed
app.use(cors()) // connect client on different port to backend server

// API routes
app.get('/',(request, response)=> response.send("API working"))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.listen(PORT, ()=> console.log("Server running on port " + PORT))