import React from "react";
import Tsection from "../../components/Tsection";
import { Experiences } from "../../resources/Experiences";

 
    

   export default function Exp() {
  
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <div>
      <Tsection title="Experience" />
      
      <div className="flex py-10 gap-20 sm:flex-col">
        {/* Left Side - Experiences List */}
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {Experiences.map((experience, index) => (
            <div
              key={experience._id} // Adding key for React list rendering
              onMouseEnter={() => setSelectedItemIndex(index)} // Change experience on hover
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 transition duration-300
                  ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#a0eed15f] py-3"
                      : "text-white"
                  }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        {/* Right Side - Experience Details */}
        <div className="flex flex-col gap-5 w-2/3 h-64 overflow-y-scroll p-4 bg-[#222] rounded-lg shadow-md sm:w-full">
          <h1 className="text-tertiary text-2xl">
            {Experiences[selectedItemIndex].title}
          </h1>
          <h2 className="text-secondary text-2xl">
            {Experiences[selectedItemIndex].company}
          </h2>
          <pre className="fira-code-description">
            {Experiences[selectedItemIndex].description}
          </pre>
        </div>
      </div>
    </div>
  );
}
