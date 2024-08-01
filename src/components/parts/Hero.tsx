"use client";
import React from 'react'
import Image from 'next/image';
import logo1 from '../../../public/logo1.png';
import logo2 from '../../../public/logo2.png';
import logo3 from '../../../public/logo3.png';
import logo4 from '../../../public/logo4.png';
import logo5 from '../../../public/logo5.png';
import logo6 from '../../../public/logo6.png';

const logos = [
  { src: logo1, alt: 'logo1' },
  { src: logo2, alt: 'logo2' },
  { src: logo3, alt: 'logo3' },
  { src: logo4, alt: 'logo4' },
  { src: logo5, alt: 'logo5' },
  { src: logo6, alt: 'logo6' },
];

const Hero = () => {
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-28 pt-16 sm:pt-20 md:pt-24 lg:pt-28 w-full lg:w-[70%]'>
      <div className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
        <h2>Stand out with every click</h2>
        <h2>- Power up your presence</h2>
      </div>

      <div className='flex flex-col sm:flex-row sm:space-x-4 pt-6 sm:pt-8 md:pt-10'>
        <button className="inline-flex h-10 sm:h-12  animate-shimmer items-center justify-center rounded-xl bg-[linear-gradient(110deg,#916CE7,45%,#AC96EF,55%,#916CE7)] bg-[length:200%_100%] px-4 sm:px-6 md:px-8 font-medium text-sm sm:text-base md:text-lg text-white transition-colors mb-4 sm:mb-0">
          Book a call
        </button>
        <button className="px-6 sm:px-8 py-2 text-sm sm:text-base text-white rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
          Contact us --&gt;
        </button>
      </div>

      <p className='text-[#FFFFFFB3] text-sm sm:text-base md:text-lg py-4 sm:py-6 md:py-7'>
        We have over 2,500+ Satisfied Clients
      </p>

      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] inline-flex flex-nowrap border border-[#5C45C2] overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 my-3 [&_img]:max-w-none animate-infinite-scroll">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hero;
