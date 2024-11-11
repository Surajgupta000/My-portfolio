import React from "react";
import Tsection from "../../components/Tsection";

export default function About() {
  const skills = [
    { name: "Javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", url: "https://reactjs.org/" },
    { name: "Node", url: "https://nodejs.org/" },
    { name: "Express", url: "https://expressjs.com/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "Java", url: "https://www.oracle.com/java/" },
    { name: ".Net", url: "https://dotnet.microsoft.com/" },
  ];

  return (
    <div>
      <Tsection title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/188d40f3-1aa1-4999-aca1-01f445947215/rmgONTovly.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-10 w-1/2 sm:w-full">
          <p className="text-white">
            <span className="text-tertiary">&lt;Welcome&gt;</span> to my Portfolio!
            <br />
            <span className="text-tertiary">&lt;Introduction&gt;</span>
            <br />
            Hello, I'm <span className="text-tertiary">Suraj</span> &lt;/a web developer /&gt; <br />
            I bring <span className="text-tertiary">passion</span> & <span className="text-tertiary">dedication</span> to web development,
            crafting dynamic and responsive applications. <br />
            With expertise in the <span className="text-tertiary">MERN</span> stack, I create user-friendly and visually captivating sites,
            using technologies like <span className="text-tertiary">React</span>, <span className="text-tertiary">Tailwind CSS</span>, and <span className="text-tertiary">Node.js</span>. <br />
            From sleek <span className="text-tertiary">&lt;SinglePageApps /&gt;</span> to intricate platforms, my focus is on quality and creativity.
          </p>

          <p className="text-white ">
            <span className="text-tertiary">&lt;CodeCraftsmanship&gt;</span>
            <br />
            I believe in writing <span className="text-tertiary">clean</span>, maintainable code for a <span className="text-tertiary">seamless UX</span> and
            continuously evolve with tech advancements. <br />
            <span className="text-tertiary">&lt;Explore&gt;</span> my portfolio below for recent projects, and if you're ready to bring
            your ideas to life, <span className="text-tertiary">&lt;GetInTouch /&gt;</span>!
            <span className="text-tertiary">&lt;/CodeCraftsmanship&gt;</span>
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few Technologies I have been working on.
        </h1>

        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <a 
              key={index} 
              href={skill.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-tertiary py-3 px-5 transition bg-gray-800 text-tertiary hover:bg-gray-100 hover:text-black relative overflow-hidden"
            >
              <h1 className="text-tertiary">{skill.name}</h1>
              {/* Border animation */}
              <span className="absolute inset-0 border border-transparent hover:border-glow"></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
