/* eslint-disable no-unused-vars */
import React from "react";
import image1 from "../assets/ourwork/image1.png";
import image2 from "../assets/ourwork/image2.png";
import image3 from "../assets/ourwork/image3.png";

const OurWork = () => {
  const items = [
    { id: 1, src: image1, alt: "Description 1" },
    { id: 2, src: image2, alt: "Description 2" },
    { id: 3, src: image3, alt: "Description 3" },
    { id: 4, src: image1, alt: "Description 4" },
    { id: 5, src: image2, alt: "Description 5" },
    { id: 6, src: image3, alt: "Description 6" },
  ];

  return (
    <div className="min-h-screen text-white bg-black">
      {/* Header Section */}
      <div className="flex flex-col items-start justify-between px-6 py-8 md:flex-row md:px-16">
        <div className="flex items-center space-x-4">
          {/* Text Section */}
          <div>
            <h1 className="text-5xl font-bold leading-none">
              <span className="block">Our</span>
              <span className="block">Work</span>
            </h1>
          </div>

          {/* Arrow in Circle */}
          <div className="relative flex items-center justify-center w-24 h-24 bg-white rounded-full">
            <div className="absolute inset-0 flex items-center justify-center border-2 border-blue-500 rounded-full"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-black transform rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8.5V17h-8.5"
              />
            </svg>
          </div>
        </div>

        {/* Dropdown Section */}
        <div className="relative mt-4 md:mt-0">
          <select
            className="px-6 py-4 pr-10 text-lg text-white bg-transparent border border-white rounded-lg appearance-none cursor-pointer focus:ring focus:ring-blue-500 focus:outline-none"
            style={{
              backgroundColor: "#1e293b",
              color: "white",
            }}
          >
            <option
              className="text-white bg-slate-700 hover:bg-slate-600"
              value="Sports"
            >
              Sports
            </option>
            <option
              className="text-white bg-slate-700 hover:bg-slate-600"
              value="Music"
            >
              Music
            </option>
            <option
              className="text-white bg-slate-700 hover:bg-slate-600"
              value="Art"
            >
              Art
            </option>
          </select>
          {/* Down Arrow */}
          <div className="absolute inset-y-0 flex items-center pointer-events-none right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 14a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 14z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-6 px-6 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="relative h-72">
            <img
              src={item.src}
              alt={item.alt}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-2 text-xs bg-black bg-opacity-50 rounded-b-lg">
              Caption for image {item.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
