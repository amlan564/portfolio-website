import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { skillsData } from "@/data/data";

const Skills = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-50" id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="mt-20 w-[80%] md:w-[60%] mx-auto grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-sm text-gray-600 text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
