import React from 'react';
import { Header } from './parts/Header';
import Hero from './parts/Hero';

const Section1 = () => {
  return (
    <div className="relative bg-black w-full h-[100vh] overflow-hidden">
      {/* <iframe
        src="https://my.spline.design/interactivecubes-5261ad6a75c7d0ee9ad71cbfce6d4640/"
        className="absolute top-0 left-0 w-full h-full border-none z-[-1] pointer-events-none"
      ></iframe> */}
      <div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-r from-black to-transparent z-0"></div>
      <div className="relative z-10 pt-5">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Section1;
