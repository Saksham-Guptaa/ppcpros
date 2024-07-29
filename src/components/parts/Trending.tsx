import Image from 'next/image'
import React from 'react'
import key from '../../../public/key.png'
import GoogleTrendsIframe from './trending-keywords'
const Trending = () => {
  return (
    <div>
        <div className='flex items-center justify-center ' >
            <Image src={key} alt='key' />
            <p className=' text-5xl' >Trending Keywords</p>
        </div>
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Homepage</h1>
      <p className="text-center mb-8">Some content above the Google Trends widget.</p>
      <GoogleTrendsIframe />
      <p className="text-center mt-8">Additional content below the widget.</p>
    </div>
    </div>
  )
}

export default Trending