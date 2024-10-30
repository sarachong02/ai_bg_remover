import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()

  useEffect(() => {
    console.log("User signed in:", isSignedIn);
  },[isSignedIn])

  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <Link to='/'><img className='w-32 sm:2-44'src={assets.logo} alt ="" /></Link>
        {
          isSignedIn
            ?<div className='flex items-center gap-2 sm:gap-3'>
              <p className='text-gray-600 max-sm: hidden'>Hi, {user.fullName}</p>
              <UserButton />
          </div>
          : <button onClick={()=>openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 rounded-full'>
            Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
          </button>
        }
        
    </div>
  )
}

export default Navbar