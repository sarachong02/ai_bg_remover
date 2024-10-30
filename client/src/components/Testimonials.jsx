import React from 'react';
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div>
      {/* Title */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent py-5'>
        Customer Testimonials
      </h1>

      <div className='flex overflow-x-auto space-x-10 max-w-4xl mx-auto px-4 py-8'>
        {testimonialsData.map((item, index) => (
          <div className="bg-white rounded-xl p-6 drop-shadow-md min-w-[250px] h-[250px] flex flex-col justify-between hover:scale-105 transition-all duration-700" key={index}>
            <p className='text-sm text-gray-500 flex-grow'>{item.text}</p>
            <div className='flex items-center mt-5'>
              <img className="w-12 h-12 rounded-full object-cover mr-3" src={item.image} alt="" />
              <div className='flex flex-col'>
                <p className='font-medium'>{item.author}</p>
                <p className='text-sm text-gray-600'>{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
