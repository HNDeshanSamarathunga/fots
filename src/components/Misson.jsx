/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../assets/logo.png";
import lPic from"../assets/Group6.png";

const Mission = () => {
    return (
        <div className="text-black bg-white h-auto min-h-[50vh] flex flex-col md:flex-row md:pt-32">
            {/* Left Column */}
            <div className="flex items-center justify-center w-full p-4 md:w-1/2">
                <img src={lPic} alt="Mission" className="w-full h-auto" />
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-center justify-center w-full h-full p-4 mt-10 md:mt-0 md:w-1/2 md:pr-16 md:items-end">
                <p className="text-[36px] md:text-[56px] lg:text-[66px] text-center md:text-right leading-tight">
                    Our <br /> Mission
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-justify leading-snug max-w-[50rem]">
                    “To be the voice and lens of the Faculty of Technological Studies and the university, capturing and sharing
                    moments that inspire and unite, while also nurturing talented media professionals for the future.”
                </p>
            </div>
        </div>
    );
};

export default Mission;
