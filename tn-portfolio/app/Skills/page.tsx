import Card from "../../components/Speciality_card";
import { data } from "./data";

const Skills = () => {
  return (
    <div id="skills">
      <p className="font-semibold text-[30px] py-9">Specialization</p>
      <p className="font-thin text-[20px]  py-5 ">Skills</p>

      <div className="h-auto w-full ">
        <div className="w-full flex flex-row  gap-5 justify-center items-center">
          {data.map((items) => (
            <Card
              title={items.title}
              background={items.bg}
              skills={items.skills}
              icon={items.icon}
              shadow={items.shadow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
