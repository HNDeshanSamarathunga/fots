/* eslint-disable no-unused-vars */
import React from 'react'

const Msquare = () => {
  return (
    <div className='z-10 flex flex-col justify-around w-11/12 p-5 mx-auto -mt-10 bg-white shadow-xl md:flex-row lg:w-4/5 rounded-xl drop-shadow-md'>
      <div className='flex items-center justify-center mb-4 space-x-2 md:mb-0'>
        <div className='flex items-center justify-center w-20 h-20 px-10 py-10 text-4xl font-bold bg-gray-200 shadow-lg shadow-red-500'>
          35+
        </div>
        <span className='mt-2 ml-6 text-2xl font-bold'>
          <span className='block'>Active</span>
          <span className='block'>Members</span>
        </span>
      </div>
      <div className='flex items-center justify-center mb-4 space-x-2 md:mb-0'>
        <div className='flex items-center justify-center w-20 h-20 px-4 py-3 text-4xl font-bold bg-gray-200 shadow-lg shadow-red-500'>
          20+
        </div>
        <span className='mt-2 ml-6 text-2xl font-bold'>
          <span className='block'>Events</span>
          <span className='block'>Covered</span>
        </span>
      </div>
      <div className='flex items-center justify-center mb-4 space-x-2 md:mb-0'>
        <div className='flex items-center justify-center w-20 h-20 p-2 text-4xl font-bold bg-gray-200 shadow-lg shadow-red-500'>
          6+
        </div>
        <span className='mt-2 ml-6 text-2xl font-bold'>
          <span className='block'>Social Media</span>
          <span className='block'>Platforms</span>
        </span>
      </div>
    </div>
  )
}

export default Msquare
