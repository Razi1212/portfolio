import React from "react";
import Navigation from "./Components/Navigation";
import { motion } from "framer-motion";
import Experience from "./Components/Experience";
///const Experience=exp(()=>import('./Components/Experience'));

const About = () => {
  return (
    <>
      <div className="h-full w-full flex p-20 bg-zinc-900">
        {/* <img  src="./Images/img9.jpeg" alt="Image" width="400" height="80"/> */}
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: "2",
            delay: "0.1",
          }}
          className="pl-14"
        >
          <h1 className="text-4xl font-bold text-gray-50">About Me</h1>
          <div class="border-b border-blue-500 border-2 w-20 mt-2 mb-7"></div>
          <p className="mb-8 leading-9 text-lg text-gray-400 ">
            I am passionate about designing and developing responsive - seamless
            UI/UX experience, building scalable and efficient web applications,
            and looking for challenging opportunities which gives me a scope to
            grow up along with organisational growth.An experienced ECE graduate
            who is very much enthusiastic about full-stack development
            specialising in front-end development.Outside of coding, I am a
            boxing fan and a gardener.
          </p>
          <div className="flex flex-wrap">
            <span className="box bg-zinc-800 p-3 mr-3 mb-3 rounded-lg text-gray-400 text-center inline-block transition-transform transform-gpu hover:scale-110 hover:text-white hover:bg-sky-700">
              HTML
            </span>
            <span className="box bg-zinc-800 p-3 mr-3 mb-3 rounded-lg text-gray-400 text-center inline-block transition-transform transform-gpu hover:scale-110  hover:text-white hover:bg-sky-700">
              CSS
            </span>
            <span className="box bg-zinc-800 p-3 mr-3 mb-3 rounded-lg text-gray-400 text-center inline-block transition-transform transform-gpu hover:scale-110 hover:text-white hover:bg-sky-700">
              JavaScript
            </span>
            <span className="box bg-zinc-800 p-3 mr-3 mb-3 rounded-lg text-gray-400 text-center inline-block transition-transform transform-gpu hover:scale-110 hover:text-white hover:bg-sky-700">
              Tailwind CSS
            </span>
            <span className="box bg-zinc-800 p-3 mr-3 mb-3 rounded-lg text-gray-400 text-center inline-block transition-transform transform-gpu hover:scale-110 hover:text-white  hover:bg-sky-700">
              ReactJS
            </span>
            <span className="box bg-zinc-800 p-3 mr-3 mb-3 rounded-lg text-gray-400 text-center inline-block transition-transform transform-gpu hover:scale-110 hover:text-white  hover:bg-sky-700">
              Next.js
            </span>
            <span className="box bg-zinc-800 p-3 mr-3 mb-3 rounded-lg text-gray-400 text-center inline-block transition-transform transform-gpu hover:scale-110 hover:text-white  hover:bg-sky-700" >
              Redux
            </span>
            <span className="box bg-zinc-800 p-3 mr-3 mb-3 rounded-lg text-gray-400 text-center inline-block transition-transform transform-gpu hover:scale-110 hover:text-white  hover:bg-sky-700">
              SQL
            </span>
          </div>
        </motion.div>
      </div>
      <Experience />
    </>
  );
};

export default About;
