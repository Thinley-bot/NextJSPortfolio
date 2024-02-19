"use client"
import React, { useState } from 'react';
import { AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai';

const Testament = () => {
  const data = [
    {
      image: '/assets/img/dodrup.png',
      name: 'Dodrup Wangchuk Sherpa',
      position: 'Team Lead',
      description: 'I had the privilege of working with Thinley Norbu as my FYP project partner, and I must say he is an exceptional asset to our team.',
    },
    {
      image: '/assets/img/sonam.png',
      name: 'Sonam Yangchen',
      position: 'Team Member',
      description: 'I had a great experience working with Thinley Norbu. I have learned a lot from him and I am very grateful for the opportunity to work with him.',
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % data.length);
  };

  const prevItem = () => {
    setCurrentItem((prevItem) => (prevItem - 1 + data.length) % data.length);
  };

  return (
    <>
      <p className="text-[30px] py-9 font-semibold">Testament</p>
      <div className="h-auto bg-gray-200 bg-opacity-60 ">
        <p className="text-2xl">
          Client Always get <span className="text-[orange]">Exceptional Work</span> from me...
        </p>
        <div className="h-full w-full p-16">
          <div className="w-full h-auto bg-white bg-opacity-80 p-12 flex flex-col items-center justify-center">
            <img src={data[currentItem].image} alt={data[currentItem].name} className='h-40 w-40' />
            <p className="text-justify tracking-wider">{data[currentItem].description}</p>
            <p className="text-justify font-bold">{data[currentItem].name}</p>
          </div>
          <div className="w-full h-auto flex flex-row justify-center gap-9 mt-2">
            <div
              className="h-10 w-10 rounded-full bg-[#8FBC8B] flex justify-center items-center cursor-pointer"
              onClick={prevItem}
            >
              <AiFillLeftCircle color="green" size={30} />
            </div>
            <div
              className="h-10 w-10 rounded-full bg-[#8FBC8B] flex justify-center items-center cursor-pointer"
              onClick={nextItem}
            >
              <AiFillRightCircle color="green" size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testament;
