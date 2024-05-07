import React from "react";
import { names } from "./data";
import Button from "../../components/Button";
import resume from "../../public/assets/img/cv.jpg"
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";


const Homes = () => (
  <div id="home" className="h-screen w-full flex flex-row items-center gap-10">
    <div className="flex flex-col gap-2">
      <div className="text-[24px]">
        <span>HELLO! 🙌 I'M</span>
      </div>
      <div className="text-[48px] flex">
        {names.map((name: string) => (
          <span
            key={name}
            className="text-[42px] text-[#8FBC8B] font-semibold hover:text-black hover:scale-150 transition delay-1500 duration-500 ease-in-out"
          >
            {name == "_" ? <span className="px-2"></span> : name}
          </span>
        ))}
      </div>
      <p className="text-justify text-[12px]">
        I am an AI specialist, Red Hat, backend development, and frontend
        development, offering a comprehensive skill set for tackling diverse and
        complex projects.
      </p>
      <div className="flex gap-3">
        <Button title="Hire Me..." />
        <a href={resume.toString()} download>
          <Button title="Download CV" />
        </a>
      </div>
    </div>
    <div className="relative h-full w-full flex flex-col justify-center items-center rounded-full ">
      <div className="relative h-[50%] w-[70%] border-[3px] border-[#8FBC8B] rounded-full flex flex-col justify-center items-center animate-spinner">

        <Link href="/" className="absolute shadow-xl rounded-full bg-white shadow-[#8FBC8B] top-[-20px]">
          <AiFillGithub size={40} color="green"/>
        </Link>
        <Link href="/" className="absolute shadow-xl rounded-full bg-white shadow-[#8FBC8B] bottom-[-20px]">
          <AiFillGithub size={40} color="green"/>
        </Link>
        <Link href="/" className="absolute shadow-xl rounded-full bg-white shadow-[#8FBC8B] right-[-20px]">
          <AiFillGithub size={40} color="green"/>
        </Link>
        <Link href="/" className="absolute shadow-xl rounded-full bg-white shadow-[#8FBC8B] left-[-20px]">
          <AiFillGithub size={40} color="green"/>
        </Link>
        </div>
        <img src="/assets/svg/hero1.svg" alt="logo" className="absolute h-[50%] w-[50%] items-center"/>

    </div>
  </div>
);

export default Homes;
