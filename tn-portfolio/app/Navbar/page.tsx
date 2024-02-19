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
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  function handleNavHover(title: any) {
    setHoveredTitle(title);
  }

  function handleNavLeave() {
    setHoveredTitle(null);
  }

  return (
    <nav className="fixed w-1/4 h-[90vh] bg-[#8FBC8B] bg-opacity-25 flex flex-col gap-3 justify-center items-center shadow-xl rounded-md py-7">
      <div className="flex flex-col justify-center items-center gap-3">
        <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay:0.1 }}
        className="h-20 max-h-20 w-20 max-w-20 rounded-full bg-white">
          <Image
            src="/assets/img/profile_pic.png"
            alt="logo"
            height={128}
            width={128}
            className="rounded-full"
          />
        </motion.div>

        <motion.div 
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{ duration: 0.6, delay:0.6 }}
        className="font-5 text-[30px] py-[4px]">
          <span>THINLEY NORBU</span>
        </motion.div>

        <motion.div 
         initial={{opacity: 0 }}
         animate={{opacity: 1 }}
         transition={{ duration: 0.6, delay:0.9 }}
        className="font-4 text-[18px] text-gray-600">
          <span>FULL STACK DEVELOPER</span>
        </motion.div>
      </div>

      <ol className="h-auto w-full list-none flex flex-col text-black gap-2 justify-center items-center cursor-pointer">
        {navbar_data.map((item,index) => (
          <motion.li
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{ duration: 0.9, delay:1}}
            key={item.title}
            onMouseEnter={() => handleNavHover(item.title)}
            onMouseLeave={handleNavLeave}
            className={hoveredTitle === item.title ? "underline text-[#8FBC8B]" : ""}
          >
            {item.title}
          </motion.li>
        ))}
      </ol>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay:1.1 }}
        className="flex flex-row justify-center items-center gap-4"
      >
        <Link href="/">
          <AiFillGithub size={40} color="#8FBC8B" />
        </Link>
        <Link href="/">
          <AiFillLinkedin size={40} color="#8FBC8B" />
        </Link>
        <Link href="/">
          <AiFillInstagram size={40} color="#8FBC8B" />
        </Link>
        <Link href="/">
          <AiFillTwitterCircle size={40} color="#8FBC8B" />
        </Link>
      </motion.div>
      <div className="font-5 text-[30px] py-[4px]">
        <span className="font-2 text-[12px] text-center opacity-50">
          ©Copyright 2023 All rights reserved
        </span>
      </div>
      <img
        src="/assets/img/divider.jpg"
        alt="logo"
        className="w-full"
      />
    </nav>
  );
};

export default Navbar;
