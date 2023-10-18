"use client"  

import React, { useState } from 'react';
import navbar_data from './data';
import Image from 'next/image';

const Navbar = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  function handleNavHover(title:any) {
    setHoveredTitle(title);
  }

  function handleNavLeave() {
    setHoveredTitle(null);
  }

  return (
    //bg-gradient-to-r from-[#f9f9f9] to-[#9fa59c] 
    <nav className="w-1/4 h-screen bg-gray-600 bg-opacity-25 flex flex-col justify-start items-center gap-x-64 shadow-xl rounded-md py-7" >
      <div className='h-52 w-52 rounded-full bg-white'>
      <Image src="/assets/svg/profile2.svg" alt="logo" height={200} width={200} className='round'/>
      </div>
      <h1 className='text-4xl'>Thinley Norbu</h1>
      <ol className="h-full w-auto list-none flex flex-col text-black gap-5 justify-center items-center font-semibold cursor-pointer">
        {navbar_data.map((title) => (
          <li
            key={title}
            onMouseEnter={() => handleNavHover(title)}
            onMouseLeave={handleNavLeave}
            className={hoveredTitle === title ? "underline scale-110 text-gray-500" : ""}
          >
            {title}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;
