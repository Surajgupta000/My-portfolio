// ContactFormModal.js
import React from "react";

const ContactFormModal = ({ isOpen, onClose }) => {
  return (
    isOpen ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-white">
            Contact Us
          </h2>
          <p className="mb-6 font-light text-center text-gray-400 sm:text-lg">
          "Have a project in mind? Need guidance or support? Drop us a message, and let’s get started together!"
          </p>
          <form action="#" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-800 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-300 bg-gray-800 rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-300 bg-gray-800 rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-tertiary sm:w-fit hover:bg-tertiary/80 focus:ring-4 focus:outline-none focus:ring-tertiary/30"
            >
              Send message
            </button>
          </form>
          <button onClick={onClose} className="mt-4 text-gray-500 underline">
            Close
          </button>
        </div>
      </div>
    ) : null
  );
};

export default ContactFormModal;
