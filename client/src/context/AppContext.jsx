import { createContext, useState } from "react";
import { useAuth, useClerk, useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    
    const [image, setImage] = useState(false)
    const [resultImage, setResultImage] = useState(false)

    const navigate = useNavigate()

    const { getToken } = useAuth()
    const { isSignedIn } = useUser()
    const { openSignIn } = useClerk()

    const removeBg = async (image) => {
        try {
            if (!isSignedIn) {
                return openSignIn()
            }
            setImage(image)
            setResultImage(false)

            navigate('/result')

            const token = await getToken()

            const formData = new FormData()
            image && formData.append('image_file', image)

            const response = await axios.post('https://clipdrop-api.co/remove-background/v1',formData, 
                {
                    headers:{'x-api-key': import.meta.env.VITE_CLIPDROP_API_KEY}, 
                    responseType: 'arraybuffer'
                })

            // const base64Image = FileReader.from(data, 'binary').toString('base64');
            // const base64Image = btoa(String.fromCharCode(...new Uint8Array(response.data)));
            // const resultImageUrl = `data:${image.type};base64,${base64Image}`;

            const blob = new Blob([response.data], { type: image.type });
            const reader = new FileReader();

            reader.onloadend = () => {
                const resultImageUrl = reader.result; // This is your base64 data URL
                setResultImage(resultImageUrl);
            };

            reader.readAsDataURL(blob);

            if (response.data.success) {
                setResultImage(resultImageUrl)
            } else {
                toast.error(response.data.message)
            }


        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const value = {
        image, setImage, 
        removeBg,
        resultImage, setResultImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider