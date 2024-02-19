import React from "react";

const Slider = () => {
  return (
    <>
    <p className="font-semibold text-[30px] py-9">Clients</p>
    <div className="h-40 w-full overflow-hidden flex justify-center ">
      <div className=" w-full flex flex-row gap-20 justify-center animate-logoslider ">
        <img src="/assets/img/cstlogo.png" alt="Logo 1" className="h-24 " />

        <img src="/assets/img/Upwork.png" alt="Logo 2" className="h-24 " />

        <img src="/assets/img/ddc.png" alt="Logo 3" className="h-24 " />

        <img src="/assets/img/fiverr.png" alt="Logo 4" className="h-24 " />
        <img src="/assets/img/logo.png" alt="Logo 4" className="h-24 " />
      </div>
    </div>
    </>
  );
};

export default Slider;
