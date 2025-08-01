import { baseInfo, socialLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full pt-[6vh] md:pt-[10vh] lg:pt-[10vh] h-screen bg-gray-100 overflow-hidden relative">
      <div className="flex flex-col justify-center w-4/7 md:w-3/4 lg:w-5/7 xl:w-4/7 h-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 xl:gap-10">
          {/* text content */}
          <div className="flex flex-col items-center md:items-start justify-center gap-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Hi, I am {baseInfo.name}
            </h1>
            <h1 className="text-blue-800 text-md md:text-xl font-bold">
              {baseInfo.position}
            </h1>
            <p className="text-sm md:text-base mt-2 text-gray-500">
              {baseInfo.description}
            </p>
            <button className="hidden font-semibold text-base transition-all duration-200 rounded-lg mt-10 text-white bg-blue-800 hover:bg-blue-900 md:flex cursor-pointer">
              <Link
                href="https://drive.google.com/file/d/1YFywLLSjNcm3_qUNKordaA5YR_q_ksyN/view?usp=sharing"
                target="_blank"
                className="flex items-center space-x-2 md:px-6 md:py-2.5"
              >
                <span>Download CV</span>
                <MdDownload />
              </Link>
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
            <button className="font-semibold text-sm md:text-base transition-all duration-200 rounded-lg mt-10 text-white bg-blue-800 hover:bg-blue-900 cursor-pointer md:hidden">
              <Link
                href="https://drive.google.com/file/d/17Cb5pV1xMsmlaHdqH47SSANKtKCTESBX/view?usp=drive_link"
                className="flex items-center space-x-2 px-6 py-2.5"
              >
                <span>Download CV</span>
                <MdDownload />
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* social icons */}
      <div className="fixed bottom-[30%] right-6 hidden lg:flex">
        <div className="flex flex-col items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <div
              key={link.id}
              className="w-10 h-10 rounded-full bg-white hover:bg-blue-800 flex items-center justify-center cursor-pointer group transition-all duration-200"
            >
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 group-hover:text-white"
              >
                <link.icon size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
