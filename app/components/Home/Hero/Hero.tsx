import { baseInfo } from "@/data/data";
import Image from "next/image";
import React from "react";
import { MdDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full pt-[10vh] md:pt-[10vh] lg:pt-[10vh] h-screen overflow-hidden relative">
      <div className="flex flex-col justify-center w-4/7 md:w-3/4 lg:w-5/7 xl:w-4/7 h-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* text content */}
          <div className="flex flex-col items-center md:items-start justify-center gap-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-[3.5rem]">
              Hi, I am {baseInfo.name}
            </h1>
            <h1 className="text-purple-600 text-xl md:text-2xl font-bold">
              {baseInfo.position}
            </h1>
            <p className="text-sm md:text-base text-justify mt-2">
              {baseInfo.description}
            </p>
            <button className="hidden md:px-6 md:py-2.5 font-semibold text-base transition-all duration-200 rounded-lg mt-5 text-white bg-purple-600 hover:bg-purple-700 md:flex items-center space-x-2 cursor-pointer">
              <span>Download CV</span>
              <MdDownload />
            </button>
          </div>
          {/* image content */}
          <div className="flex flex-col items-center md:items-end justify-center md:justify-end mt-6 md:mt-0">
            <div className="w-45 h-45 md:w-60 md:h-60 lg:w-70 lg:h-70 rounded-full overflow-hidden">
              <Image
                src={baseInfo.profileImage}
                alt={baseInfo.name}
                width={400}
                height={400}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <button className="px-6 py-2 md:py-2.5 font-semibold text-sm md:text-base transition-all duration-200 rounded-lg mt-5 text-white bg-purple-600 hover:bg-purple-700 flex items-center space-x-2 cursor-pointer md:hidden">
              <span>Download CV</span>
              <MdDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
