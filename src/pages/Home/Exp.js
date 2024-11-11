import React from "react";
import Tsection from "../../components/Tsection";
import { Experiences } from "../../resources/Experiences";

export default function Exp() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  
  return (
    <div>
      <Tsection title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {Experiences.map((Experience, index) => (
            <div
              key={Experience._id} // Adding key for React list rendering
              onClick={() => {
                setselectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                  ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#a0eed15f] py-3"
                      : "text-white"
                  }`}
              >
                {Experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-tertiary text-2xl">
            {Experiences[selectedItemIndex].title}
          </h1>
          <h2 className="text-secondary text-2xl">
            {Experiences[selectedItemIndex].company}
          </h2>
          {/* Wrap the description in a <pre> tag with the Fira Code styling */}
          <pre className="fira-code-description">
            {Experiences[selectedItemIndex].description}
          </pre>
        </div>
      </div>
    </div>
  );
}
