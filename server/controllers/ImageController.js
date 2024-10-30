import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';

// Controller function to remove bg from image
const removeBgImage = async (request, response) => {
    try {
        const imagePath = request.file.path;

        // Reading the image file
        const imageFile = fs.createReadStream(imagePath)

        const formdata = new FormData()
        formdata.append('image_file', imageFile)

        const { data } = await axios.post('https://clipdrop-api.co/remove-background/v1', formdata, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API_KEY,
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:${request.file.mimetype};base64,${base64Image}`

        // Respond with the result image
        response.json({ success: true, resultImage })

    } catch (error) {
        console.log(error.message)
        response.json({ success: false, message: error.message })
    }
}

export { removeBgImage }
