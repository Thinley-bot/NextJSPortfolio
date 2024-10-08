"use client";
import React from "react";
import Primary from "../../public/assets/img/primary.jpg";
import Primary2 from "../../public/assets/img/primary2.jpg";
import College from "../../public/assets/img/College.jpg";
import College1 from "../../public/assets/img/College1.jpg";
import PrimaryCompletion from "../../public/assets/svg/primarySchool.svg";
import High from "../../public/assets/img/high1.jpg";
import High1 from "../../public/assets/img/high2.jpg";
import data from "./data";

import About_Card from "../../components/About_Card";
import Intro from "../../components/Intro";
const About = () => {
  const primarySchool = [Primary, High, College];
  const highSchool = [Primary2, High1, College1];

  return (
    <div id="about">
      <p className="font-semibold text-[30px] py-9">About Me</p>
      <p className="font-thin text-[20px]  py-5 ">Education Journey</p>
      <div className="flex flex-col h-[600px] w-full gap-y-6 items-center">
        <div className="flex flex-row gap-5 justify-center items-center">
          {primarySchool.map((item, index) => (
            <About_Card key={index} image={item} />
          ))}
        </div>
        <About_Card image={PrimaryCompletion} />
        <div className="flex flex-row gap-5 justify-center items-center">
          {highSchool.map((item, index) => (
            <About_Card key={index} image={item} />
          ))}
        </div>
      </div>
      <div className="h-full flex gap-3">
        <Intro data={data} />
      </div>
    </div>
  );
};

export default About;
