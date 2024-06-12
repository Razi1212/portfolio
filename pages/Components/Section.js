import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Section = () => {
  return (
    <>
      <div className="bg-zinc-900 h-full w-full flex px-40 py-20">
        <div className="text-white mr-20 px-10">
          <p className="mt-2 font-semibold tracking-tight text-gray-100 text-5xl md:text-5xl leading-tight md:leading-tight">
            Hey there, I’m
          </p>
          <p className="mt-2 font-semibold tracking-tight text-gray-100 text-5xl md:text-5xl leading-tight md:leading-tight">
            Raziuddin Shah
          </p>
          <p className="mt-7 text-lg leading-relaxed font-medium text-gray-400 max-w-xl">
            A Software Developer With Specific Liking Towards Frontend
          </p>
          <div className="flex space-x-4 mt-10">
            <button className="bg-white text-zinc-900 px-6 py-2 rounded-full">
              Read my Blog
            </button>
            <button className="bg-zinc-800 px-6 py-2 rounded-full text-white">
              Lets Connect
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="./img9.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover rounded-full"
          />
        </div>
      </div>

      <div className="flex bg-zinc-900">
        <Marquee>
          <img
            src="./Images1.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />

          <img
            src="./Images2.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />

          <img
            src="./Images3.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />

          <img
            src="./Images4.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />

          <img
            src="./img2.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />

          <img
            src="./Images5.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />

          <img
            src="./Images6.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />

          <img
            src="./Images7.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />

          <img
            src="./Images8.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />
          <img
            src="./Images9.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />
          <img
            src="./img6.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover mx-6 rounded-lg"
          />
        </Marquee>
      </div>
    </>
  );
};

export default Section;
