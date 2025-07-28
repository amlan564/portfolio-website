"use client";

import React, { useState } from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/data/data";
import { IoEyeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Project = () => {
  interface ProjectItem {
    id: number | string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    live: string;
  }

  return (
    <div className="pt-20 pb-20 bg-gray-100" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] xl:w-[70%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-xl rounded-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          >
            <div className="relative w-full h-60 group rounded-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-600"
              />
              <div className="absolute inset-0 group-hover:bg-black/30 transition-all duration-600">
                <div className="flex items-center justify-center h-full gap-6">
                  <Link href={project.live} target="_blank">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-black/60 hover:scale-90 transition-all duration-600">
                      <IoEyeSharp
                        className="text-white opacity-0 group-hover:opacity-100"
                        size={20}
                      />
                    </div>
                  </Link>
                  <Link href={project.github} target="_blank">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-black/60 hover:scale-90 transition-all duration-600">
                      <FaGithub
                        className="text-white opacity-0 group-hover:opacity-100"
                        size={20}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="text-lg font-semibold mt-6">{project.title}</h2>
            <p className="text-gray-500 text-sm mt-2 mb-6">
              {project.description}
            </p>
            <div className="mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-600 text-xs font-semibold text-white rounded-full px-2 py-1 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
