import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f] pb-0" >
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Oluwdamilola Adediran
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Hi, I’m a skilled Frontend Developer with a passion for developing
          great user experiences through innovative designs and code. Proficient
          in HTML, CSS, Javascript, and Reactjs, with a proven record of
          delivering world-class projects for a maximum and optimised online
          presence high-quality projects.
        </p>
        <div>
          <Link to="work">
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
