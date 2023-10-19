"use client";

import React, { useState } from "react";
import navbar_data from "./data";
import Image from "next/image";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const Navbar = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  function handleNavHover(title: any) {
    setHoveredTitle(title);
  }

  function handleNavLeave() {
    setHoveredTitle(null);
  }

  return (
    <nav className="fixed w-1/4 h-[90vh] bg-[#8FBC8B] bg-opacity-25 flex flex-col gap-9 justify-center items-center shadow-xl rounded-md py-7">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="h-52 w-52 rounded-full bg-white">
          <Image
            src="/assets/svg/profile2.svg"
            alt="logo"
            height={190}
            width={190}
            className="rounded-full"
          />
        </div>

        <div className="font-5 text-[30px] py-[4px]">
          <span>THINLEY NORBU</span>
        </div>

        <div className="font-4 text-[18px] text-gray-600">
          <span>FULL STACK DEVELOPER</span>
        </div>
      </div>

      <ol className="h-auto w-full list-none flex flex-col text-black gap-9 justify-center items-center cursor-pointer">
        {navbar_data.map((title) => (
          <motion.li
            initial={{ y:-100,opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 ,easeInOut}} 
            key={title}
            onMouseEnter={() => handleNavHover(title)}
            onMouseLeave={handleNavLeave}
            className={
              hoveredTitle === title ? "underline scale-110 text-gray-500" : ""
            }
          >
            {title}
          </motion.li>
        ))}
      </ol>

      <motion.div initial={{ x:-300,opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 ,easeInOut}} className="flex flex-row justify-center items-center gap-4">
        <Link href="/">
          <AiFillGithub size={40} color='#8FBC8B'/>
        </Link>
        <Link href="/">
          <AiFillLinkedin size={40} color='#8FBC8B'/>
        </Link>
        <Link href="/">
          <AiFillInstagram size={40} color='#8FBC8B'/>
        </Link>
        <Link href="/">
          <AiFillTwitterCircle size={40} color='#8FBC8B'/>
        </Link>
      </motion.div>
      <div className="font-5 text-[30px] py-[4px]">
        <span className="font-2 text-[12px] text-center opacity-80">
          ©Copyright ©2023 All rights reserved
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
