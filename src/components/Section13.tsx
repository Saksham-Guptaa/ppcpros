import React from 'react';
import ContactForm from './parts/Form';
import Image from 'next/image';
import bg from '../../public/bg.png';

const Section13 = () => {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Purple Blurred Ellipse */}
      <div className="absolute top-0 left-0 w-44 h-44 md:w-60 md:h-60 lg:w-96 lg:h-96 bg-purple-500 rounded-full opacity-50 blur-3xl z-0"></div>
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen">
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-4 min-h-screen bg-white z-10">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 min-h-screen">
          <Image src={bg} alt="Background Image" className="object-contain hidden md:flex h-full" />
        </div>
      </div>
    </main>
  );
};

export default Section13;
