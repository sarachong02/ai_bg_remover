import express from 'express'
import { removeBgImage } from '../controllers/ImageController.js'
import upload from '../middlewares/Multer.js'
import authUser from '../middlewares/Auth.js'

const imageRouter = express.Router()

imageRouter.post('/remove-bg', upload.single('image'), removeBgImage) //authUser?

export default imageRouter