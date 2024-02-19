import React from 'react';

interface ButtonProps {
  title: string;
}

const Buttons: React.FC<ButtonProps> = ({ title}) => {
  return (
    <div className='h-7 w-30 px-5 bg-gradient-to-r from-[#8FBC8B] to-[#f9f7f7] to-90% rounded-xl text-sm'>
      <div>
        <div className="font-sm flex justify-center items-center text-black p-1">{title}</div>
      </div>
    </div>
  );
}

export default Buttons;
