import Image from 'next/image'
import React from 'react'
import image from '../../public/auction.png'
const Section4 = () => {
  return (
    <div className='h-[20rem] flex bg-white items-center justify-center ' >
        <div className='flex items-center justify-center ' >
            <p className='text-5xl max-w-xl text-center' >How the Google Ads Auction works</p>
            <Image src={image} alt='image' />
        </div>
    </div>
  )
}

export default Section4