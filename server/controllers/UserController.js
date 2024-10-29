import {Webhook} from "svix"
import UserModel from "../models/UserModel.js"

// API Controller Function to manage Clerk user with database
// http://localhost:4000/api/user/webhooks

const clerkWebhooks = async (request, response) => {
    try {
        
        //create a Svix instance with clerk webhook secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(request.body), {
            "svix-id":request.headers["svix-id"],
            "svix-timestamp":request.headers["svix-timestamp"],
            "svix-signature": request.headers["svix-signature"]
        })

        const {data, type} = request.body

        switch (type) {
            case "user.created":{
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                const start = Date.now()

                await UserModel.create(userData)
                console.log(`Create User Duration: ${Date.now() - start} ms`);
                response.json({})

                break;
            }
            case "user.updated":{
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await UserModel.findOneAndUpdate({clerkId:data.id},userData)
                response.json({})

                break;
            }
            case "user.deleted":{

                await UserModel.findOneAndDelete({clerId:data.id})
                response.json({})

                break;
            }
        }

    } catch (error) {
        console.log(error.message)
        response.json({success:false, message:error.message})
    }
}

export {clerkWebhooks}