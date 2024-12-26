import React from "react";
import { CameraIcon, VideoCameraIcon, ClipboardIcon, MegaphoneIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const Solutions = () => {
  const solutions = [
    { id: 1, icon: <CameraIcon className="w-20 h-20 text-white" />, label: "camera" },
    { id: 2, icon: <VideoCameraIcon className="w-20 h-20 text-white" />, label: "video" },
    { id: 3, icon: <ClipboardIcon className="w-20 h-20 text-white" />, label: "event" },
    { id: 4, icon: <MegaphoneIcon className="w-20 h-20 text-white" />, label: "announce" },
    { id: 5, icon: <PencilSquareIcon className="w-20 h-20 text-white" />, label: "design" },
  ];

  return (
    <div className="w-full text-white bg-black">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="font-bold leading-none text-7xl">Our</h1>
        <p className="mt-2 text-3xl leading-none">Solutions</p>
      </div>

      {/* Solutions Section */}
      <div className="flex flex-wrap justify-center gap-16 px-10 mt-4">
        {solutions.map((solution) => (
          <div key={solution.id} className="flex flex-col items-center space-y-8">
            <div className="flex items-center justify-center w-40 h-40 bg-black border-4 border-gray-300 rounded-lg">
              {solution.icon}
            </div>
            <p className="text-xl capitalize">{solution.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
