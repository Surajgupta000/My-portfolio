import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactFormModal from "./ContactFormModal"; // Adjust path if needed

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStartedClick = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative h-[80vh] flex flex-col items-start justify-center gap-8 py-10 bg-primary text-white">
      <h1 className="text-4xl sm:text-2xl text-white mt-3">Hi, I am</h1>
      <h1 className="text-7xl sm:text-3xl text-seconadry font-semibold mt-1">
        Suraj Kumar
      </h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">
        I build things for the{" "}
        <span className="relative inline-block">
          web
          <svg
            viewBox="0 0 300 100"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-4"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
              d="M142.293 1C106.854 20 6.08202 15 1.23654 50C-2.10604 80 29.5633 90 122.688 85C215.814 80 316.298 85 275.761 50C230.14 10 97.0503 35 52.9384 10"
              stroke="#f55211"
              strokeWidth="5"
            />
          </svg>
        </span>
      </h1>

      <p className="text-white w-2/3">
        Explore my portfolio to see some of my recent work, and feel free to
        get in touch if you'd like to collaborate on your next project. Let's
        create something amazing together!
      </p>

      {/* Get Started Button */}
      <button
        onClick={handleGetStartedClick}
        className="border-primary text-tertiary relative inline-block px-6 py-3 rounded-lg group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-900 rounded-lg blur-sm filter group-hover:blur-none"></span>
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out border-2 border-transparent rounded-lg group-hover:border-2 group-hover:border-white/50"></span>
        <span className="relative text-white text-base font-medium transition duration-300 ease-out group-hover:text-primary">
          Get Started
        </span>
      </button>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Intro;
