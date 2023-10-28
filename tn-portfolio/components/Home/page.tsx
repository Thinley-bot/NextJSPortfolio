import React from "react";
import { names } from "./data";
import Button from "../Button";

const Homes = () => {
  return (
    <div className="h-screen w-full flex flex-row items-center gap-10">
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
          development, offering a comprehensive skill set for tackling diverse
          and complex projects.
        </p>
        <Button title="Hire Me..."/>
      </div>
      <div className="h-full w-full flex flex-col justify-center">
        <img src="/assets/svg/hero1.svg" alt="logo"/>
      </div>
    </div>
  );
};

export default Homes;
