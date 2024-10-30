import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const { resultImage, image, setImage, removeBg } = useContext(AppContext); // Importing removeBg from context
  const fileInputRef = useRef(null); // Create a reference for the file input

  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the selected file
    if (selectedFile) {
      setImage(selectedFile); // Update the image in context
      removeBg(selectedFile); // Trigger the API call for background removal
    }
  };

  // Function to trigger the file input click
  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* Image Container */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          {/* Left Image */}
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img className='rounded-md border' src={image ? URL.createObjectURL(image) : ''} alt="" />
          </div>

          {/* Right Image */}
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              <img src={resultImage ? resultImage : ""} alt="" />
              {
                !resultImage && image && (
                  <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                    <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin' />
                  </div>
                )
              }
            </div>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden" // Hide the file input
        />

        {/* Buttons */}
        {resultImage && (
          <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
            <button
              onClick={handleUploadClick} // Trigger the file input click
              className='px-8 py-2.5 text-fuchsia-500 text-sm border border-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700'
            >
              Upload another Image
            </button>
            <a
              className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full hover:scale-105 transition-all duration-700'
              href={resultImage}
              download
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
