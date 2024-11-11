import React from 'react';
import { projects } from '../../resources/projects';
import Tsection from '../../components/Tsection';

export default function Projects() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);

  return (
    <div>
      <Tsection title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        
        {/* Projects List - Vertical Scroll Only */}
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 h-64 overflow-y-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setselectedItemIndex(index)}
              className={`cursor-pointer relative transition-all duration-300 ease-in-out
                ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#a0eed15f] py-3" : "text-white"}
              `}
            >
              {/* Gradient hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-[#135e4c82] opacity-0 transition-opacity duration-300 
                ${selectedItemIndex === index ? "opacity-100" : "hover:opacity-50"}
              `}></div>
              <h1 className={`text-lg font-semibold px-5 z-10`}>
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl font-semibold">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-white text-lg bg-[#222] p-4 rounded-lg shadow-md">
              {projects[selectedItemIndex].description || "No description available."}
            </p>
            <a
              href={projects[selectedItemIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:underline"
            >
              Click here to view the project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
