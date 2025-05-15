import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/data/data";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-50" id="about">
      {/* Section Heading */}
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 items-center mt-20">
        {aboutInfo.map((item) => (
          <div
            key={item.id}
            className="w-[220px] md:w-full flex flex-col items-center text-center h-full transition-all duration-500 ease-in-out hover:scale-110"
          >
            <Image src={item.img} alt="" width={300} height={20} className="md:h-40 object-cover rounded-md mb-6"/>
            <h2 className="text-md font-semibold mb-2">
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm leading-6">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
