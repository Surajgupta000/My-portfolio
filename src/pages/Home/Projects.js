import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../resources/projects";
import Tsection from "../../components/Tsection";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import the icon

export default function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isBottomVisible, setIsBottomVisible] = useState(true);
  const listRef = useRef(null);

  // Get the longest project title
  const longestProjectTitle = projects.reduce(
    (max, project) => (project.title.length > max.length ? project.title : max),
    ""
  );

  const calculatedWidth = `${longestProjectTitle.length + 4}ch`;

  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        setIsTopVisible(scrollTop === 0);
        setIsBottomVisible(scrollTop + clientHeight >= scrollHeight);

        // Dynamically update the mask effect based on scroll position
        listRef.current.classList.toggle("mask-top", scrollTop !== 0);
        listRef.current.classList.toggle("mask-bottom", scrollTop + clientHeight < scrollHeight);
      }
    };

    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (listElement) {
        listElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <Tsection title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        {/* Projects List */}
        <div
          ref={listRef}
          className={`relative flex flex-col gap-5 border-l-2 border-[#135e4c82] h-64 overflow-y-scroll sm:w-full hide-scrollbar mask-gradient`}
          style={{ minWidth: calculatedWidth }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              onMouseEnter={() => setActiveProject(project)}
              className={`cursor-pointer relative transition-all duration-300 ease-in-out
                ${selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#a0eed15f] py-3"
                    : "text-white"
                }
              `}
              style={{ minWidth: `${longestProjectTitle.length + 4}ch` }}
            >
              <h1 className="text-lg font-semibold px-5 z-10">
                {project.title}
              </h1>
            </div>
          ))}

          {/* Gradient mask effect */}
          <div
            className={`absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black to-transparent pointer-events-none ${
              isTopVisible ? "hidden" : "block"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black to-transparent pointer-events-none ${
              isBottomVisible ? "hidden" : "block"
            }`}
          ></div>
        </div>

        {/* Project Details */}
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img src={activeProject.image} alt="" className="h-60 w-72" />
          <div className="flex flex-col gap-5 max-h-64 overflow-y-auto p-4 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-secondary text-2xl font-semibold">
              {activeProject.title}
            </h1>
            <p className="text-white text-lg">
              {activeProject.description || "No description available."}
            </p>
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:underline flex items-center"
            >
              <FaExternalLinkAlt className="mr-2" /> {/* Icon */}
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
