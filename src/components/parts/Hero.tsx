
"use client";
import React from 'react'
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from 'next/image';
const words1 =  `Stand out with every click `;
const words2 = `- Power up your presence`
import logo1 from '../../../public/logo1.png';
import logo2 from '../../../public/logo2.png';
import logo3 from '../../../public/logo3.png';
import logo4 from '../../../public/logo4.png';
import logo5 from '../../../public/logo5.png';
import logo6 from '../../../public/logo6.png';


const logos = [
    { src: logo1, alt: 'logo1' },
    { src: logo2, alt: 'logo1' },
    { src: logo3, alt: 'logo1' },
    { src: logo4, alt: 'logo1' },
    { src: logo5, alt: 'logo1' },
    { src: logo6, alt: 'logo1' },
  ]
const Hero = () => {
  return (
      <div className='px-28  pt-24 w-[70%] ' >
        <div className='text-white text-6xl' >
            <h2>Stand out with every click</h2>
            <h2>- Power up your presence</h2>
        </div>

        <div className='flex space-x-3 pt-10 ' >
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl   bg-[linear-gradient(110deg,#916CE7,45%,#AC96EF,55%,#916CE7)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors ">
            Book a call
            </button>
            <button className="px-8 py-2 text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
            Contact us --&gt;
            </button>
        </div>

        <p className='text-[#FFFFFFB3] py-7' >We have over 2,500+ Satisfied Clients</p>

        <div className="w-[60%] inline-flex flex-nowrap border  border-[#5C45C2] overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 my-3  [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8  [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
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

export default Hero