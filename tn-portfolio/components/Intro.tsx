import React from "react";

const Intro = ({ data }: any) => {
  return (
    <div className="flex flex-row gap-5 w-auto h-full">
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className="bg-[#8FBC8B] bg-opacity-40 shadow-sm shadow-green-500 py-5"
        >
          <h1 className="font-semibold flex justify-center">{item.title}</h1>
          {item.items && (
            <ul key={index}>
              {item.items.map((listItem: string, listItemIndex: number) => (
                <li
                  key={listItemIndex}
                  className="flex flex-row font-thin text-[14px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                    className="h-7 w-7"
                  >
                    <path
                      fill="#c8e6c9"
                      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                    />
                    <path
                      fill="#4caf50"
                      d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                    />
                  </svg>
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