"use client";
import { Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Roboto } from "next/font/google";

type Data = {
  title: string;
  background: string;
  icon: string;
  shadow: string;
  skills: string[];
};

const Card = ({ title, background, icon, shadow, skills}: Data) => {
  const [changeBg, setBgChange] = useState(false);

  const handleMouseEnter = () => {
    setBgChange(true);
  };

  const handleMouseLeave = () => {
    setBgChange(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-[#8FBC8B]  h-64 w-64 shadow-md ${shadow} flex flex-col justify-center items-center ${
        changeBg ? `${background}` : ""
      }`}
    >
      {changeBg ? (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full h-auto flex flex-col justify-center items-start"
        >
          {skills.map((items, index) => (
            <ul key={index} className="flex ">
              <li className="flex items-center">
                <span className="black">
                <AiOutlineCaretRight />
                </span>
                <span className="font-[Roboto]">{items}</span>
              </li>
            </ul>
          ))}
        </motion.div>
      ) : (
        <div>
          <img src={icon} alt="frontend svg" className="h-24 w-full bg-y" />
          <p className="font-semibold text-center">{title}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
