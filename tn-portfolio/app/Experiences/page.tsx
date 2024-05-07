"use client"
import React from 'react';
import MyCircularProgressBar from '../../components/Progress';
import { data } from './data';

const Experiences = () => {
  return (
    <div id="experiences">
    <p className="font-semibold text-[30px] py-9">Experiences</p>
      <p className="font-thin text-[20px]  py-5 ">Career</p>
    <div className='px-5 h-auto flex flex-col gap-6'>
      {data.map((items, index) => (
        <MyCircularProgressBar items={items} key={index} />
      ))}
     
    </div>
    </div>
      );
}

export default Experiences;

