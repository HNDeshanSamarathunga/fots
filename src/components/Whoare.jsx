/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Whoare = () => {
  return (
    <div className="text-white bg-black h-auto min-h-[50vh] flex flex-col md:flex-row pt-10 md:pb-32">
      {/* Left Column */}
      <div className="flex items-center justify-center w-full p-4 md:w-2/5">
        <p className="text-[36px] md:text-[56px] lg:text-[86px] text-center leading-tight md:text-left">
          Who We <br /> Are?
        </p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center justify-center w-full p-4 md:items-end md:w-3/5 md:pr-16">
        <p className="text-lg text-justify md:mr-20 md:text-xl lg:text-2xl">
          FOTS Media is the official media unit of the Faculty of Technological Studies, composed of 
          passionate and creative students dedicated to capturing and sharing the essence of our university's 
          vibrant community. We are a team of storytellers, photographers, videographers, and content creators 
          committed to delivering high-quality media coverage of events and activities within our faculty and 
          across the entire university. Our mission is to not only document but also celebrate the achievements 
          and experiences of our peers, while fostering a collaborative environment that nurtures future media 
          professionals.
        </p>
      </div>
    </div>
  );
};

export default Whoare;
