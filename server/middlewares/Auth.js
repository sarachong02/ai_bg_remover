import jwt from 'jsonwebtoken'

// Middleware function to decode jwt token to get clerkId

const authUser = async (request, response, next) => {
    try {
        
        const { token } = request.headers

        if (!token) {
            return response.json({success:false, message: "Not authorized, Login Again"})
        }

        const token_decode = jwt.decode(token)
        request.body.clerkId = token_decode.clerkId
        next()

    } catch (error) {
        console.log(error.message)
    }
}

export default authUser