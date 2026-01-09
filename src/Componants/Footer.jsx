import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='container mx-auto my-8 shadow-sm h-auto md:h-[180px] 
    flex flex-col md:flex-row justify-evenly items-center p-5 rounded-lg'>

      <div className='w-full md:w-1/2 relative flex flex-col items-center md:items-start'>
        <h1 className='text-5xl font-semibold'>
          Reci<span className='text-yellow-700'>p</span>
        </h1>
        <p className='absolute -bottom-4 text-yellow-700'>Make A Tasty</p>
      </div>

      <div className='w-full md:w-1/2 flex flex-col items-center md:items-end mt-6 md:mt-0'> 
        <p>Contact : <span>+91 7028876563</span></p>
        <p>Email : <span>swapnil65rokade@gmail.com</span></p> 
        <p>© {year} <span className='text-yellow-700'>Softnex</span> All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
