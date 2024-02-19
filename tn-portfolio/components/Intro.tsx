import React from "react";
import {Roboto} from 'next/font/google'
import { AiOutlineCaretRight } from "react-icons/ai";


const Intro = ({ data }:any) => {
  return (
    <div className="flex flex-row gap-5 w-full h-full justify-center">
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className="bg-[#8FBC8B] h-56 w-64 shadow-sm shadow-green-500 p-5 font-[Roboto]"
        >
          <h1 className="font-semibold flex justify-center text-green-900">{item.title}</h1>
          {item.items && (
            <ul key={index}>
              {item.items.map((listItem: string, listItemIndex: number) => (
                <li
                  key={listItemIndex}
                  className="flex flex-row font-thin text-[14px] gap-2 text-white"
                >
                  <AiOutlineCaretRight />
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Intro;
