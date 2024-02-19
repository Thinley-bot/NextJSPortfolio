"use client";
import React, { useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Buttons from "./journey_button";
import Button from "./Button";

type data = {
  title: string;
  description: string;
  imageUrl: string;
  techused: Array<string>;
};

const WorkCard = ({ title, description, imageUrl, techused }: data) => {
  // Truncate the description to a certain length
  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  const data = ["react", "tailwind", "nextjs"];
  return (
    <div className="bg-[#8FBC8B] bg-opacity-60 h-96 w-80 flex flex-col gap-2 relative p-5 shadow-lg shadow-black rounded-md">
      <p className="text-left text-xl font-semibold">{title}</p>
      <FaArrowUpRightFromSquare className="absolute right-4 top-6" />
      <img src={imageUrl} alt="works" className="h-[70%] w-full rounded-md" />
      <p className="tracking-wide text-[13px] text-justify">{truncatedDescription}</p>

      <div className="flex gap-2 p-5 justify-center">
        {techused.map((item: string) => (
          <div className="h-8 w-auto px-2 bg-[#8FBC8B] bg-opacity-60 rounded-xl text-sm border-[1px]  border-black">
            <div>
              <div className="font-sm flex justify-center items-center text-black p-1">{item}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <p>Read More...</p> 
      </div>
    </div>
  );
};

export default WorkCard;
