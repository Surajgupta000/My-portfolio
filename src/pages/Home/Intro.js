// Intro.js
import React, { useState } from "react";
import ContactFormModal from "./ContactFormModal"; // Adjust the path as necessary

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hii , I am</h1>
      <h1 className="text-7xl sm:text-3xl text-seconadry font-semibold">
        Suraj Kumar
      </h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">
        I build things for the web
      </h1>
      <p className="text-white w-2/3">
        Explore my portfolio to see some of my recent work, and feel free to get
        in touch if you'd like to collaborate on your next project. Let's create
        something amazing together!
      </p>
      <button onClick={handleGetStartedClick} className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>

      {/* Modal Component */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Intro;
