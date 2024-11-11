import React from "react";

export default function Footer() {
  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-gray-700"></div>

      <div className="flex items-center justify-center flex-col mt-10 opacity-75">
        <h1 className="text-white text-lg font-semibold">Developed by</h1>
        <h2 className="text-white text-2xl font-bold">
          <span className="text-white">Suraj Kumar</span>
        </h2>
        <p className="text-white text-sm mt-1">
          Mern Stack Developer | Passionate about coding
        </p>

        {/* Add links to your profiles */}
        <div className="mt-3">
          <a
            href="https://github.com/Surajgupta000"
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/in/suraj-kumar-4919a51b3/"
            className="text-white hover:underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-white text-sm mt-4">
          &copy; {new Date().getFullYear()} Suraj Kumar. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
