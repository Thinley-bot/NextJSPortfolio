import React from "react";
import WorkCard from "../../components/Work_Card";
import workData from "./data";
const Works = () => {
  return (
    <div id="works">
      <p className="font-semibold text-[30px] py-9">Projects</p>
      <p className="font-thin text-[20px]  py-5 ">My Works</p>

      <div className="flex flex-wrap gap-8 w-full justify-center">
        {workData.map((i) => (
          <WorkCard
            id={i.id}
            title={i.title}
            description={i.description}
            imageUrl={i.imgUrl}
            techused={i.techUsed}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
