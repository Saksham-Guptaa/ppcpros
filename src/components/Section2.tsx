import React from 'react'
import { Research } from './parts/Research';
import Help from './parts/Help';
import Stats from './parts/Numbers';

const Section2 = () => {
  return (
    <div>
      <Research/>
      <div className="relative w-[95%] h-[3px] mx-auto flex items-center justify-start overflow-hidden">
        <div className="absolute left-0 h-[3px] bg-black animate-dot-to-line"></div>
      </div>
      <Help/>
      <Stats/>
    </div>
  )
};
export default Section2