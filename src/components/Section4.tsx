import Image from 'next/image'
import React from 'react'
import image from '../../public/auction.png'

const Section4 = () => {
  return (
    <div className='h-auto sm:h-[20rem] flex items-center justify-center bg-white py-8 sm:py-12 md:py-16 lg:py-20'>
      <div className='flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-4 sm:px-8 md:px-12 lg:px-16'>
        <p className='text-3xl sm:text-3xl md:text-4xl font-bold lg:text-5xl max-w-xl mb-6 lg:mb-0 lg:mr-8'>
          How the Google Ads Auction works
        </p>
        <Image src={image} alt='Google Ads Auction Illustration' className='w-48 sm:w-64 h-auto' />
      </div>
    </div>
  )
}

export default Section4;
