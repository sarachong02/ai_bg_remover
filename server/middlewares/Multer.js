import multer from "multer";

//create multer middleware for parsing formdata
const storage = multer.diskStorage({
    filename: function(request, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

export default upload