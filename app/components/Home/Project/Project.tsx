"use client";

import React, { useState } from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/data/data";

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

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pt-20 pb-20 bg-gray-100" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] xl:w-[70%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="h-full bg-white shadow-xl rounded-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          >
            <div className="relative w-full h-60 group rounded-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <h2 className="text-lg font-semibold mt-6">{project.title}</h2>
            <p className="text-gray-500 text-sm mt-2 mb-6 line-clamp-3">
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
      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white shadow-lg rounded-lg w-[80%] md:w-[60%] lg:w-[40%]">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-blue-800 text-4xl font-semibold cursor-pointer"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[95%] object-cover rounded-lg"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-lg font-semibold">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-500 text-sm mt-2 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-600 text-xs font-semibold text-white rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 md:gap-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="nonopener_nonreferrer"
                    className="w-1/2 text-center bg-blue-800 text-white font-semibold mt-6 px-2 py-1 lg:px-6 lg:py-2 rounded-md hover:bg-blue-900 transition duration-300"
                  >View Code</a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="nonopener_nonreferrer"
                    className="w-1/2 text-center bg-blue-800 text-white text-base font-semibold mt-6 px-2 py-1 lg:px-6 lg:py-2 rounded-md hover:bg-blue-900 transition duration-300"
                  >View Live</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
