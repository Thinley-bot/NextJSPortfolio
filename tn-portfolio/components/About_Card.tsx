import React from "react";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

interface image {
  image: any;
}

const About_Card = ({ image }: image) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.5, 1.3] }}
      transition={{ duration: 0.9, ease: easeIn }}
      className="bg-[#8FBC8B] bg-opacity-70 h-44 w-60 flex items-center justify-center shadow-md shadow-green-500 cursor-pointer relative"
    >
      <img src="/assets/svg/pin.svg" alt="Photo Pin" className="absolute -top-2 -left-6 h-7 w-10" />
      <Image src={image} alt="Primary School" className="h-[90%] w-[90%]" />
    </motion.div>
  );
};

export default About_Card;
