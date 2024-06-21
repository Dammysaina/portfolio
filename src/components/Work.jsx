import React from "react";
import ImassLtd from "../assets/images/imasslimited.png";
import Realestate from "../assets/images/realestate.jpeg";
import WorkImg from "../assets/images/workImg.jpeg";
import Home from "../assets/images/home.png";
import Filmland from "../assets/images/filmland.png";
import Gofundme from "../assets/images/gofundme.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] mt-0">
      <div className="max-w-[1000px] mx-auto pb-0 p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/*Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*Grid item*/}
          <div
            style={{ backgroundImage: `url(${ImassLtd})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white justify-center">
              IMASSLIMITED
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.imasslimited.com/home">
                  <button className="text-center px-4 py-2 m-2 border-2 text-white hover:bg-pink-600 hover:border-pink-600 text-lg">
                    Demo
                  </button>
                </a>
                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Home})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Home
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.home4im.com/home">
                  <button className="text-center px-4 py-2 m-2 border-2 text-white hover:bg-pink-600 hover:border-pink-600 text-lg">
                    Demo
                  </button>
                </a>
                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Filmland})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Filmland
              </span>
              <div className="pt-8 text-center">
                <a href="https://filmland.vercel.app/">
                  <button className="text-center px-4 py-2 m-2 border-2 text-white hover:bg-pink-600 hover:border-pink-600 text-lg">
                    Demo
                  </button>
                </a>
                
                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Gofundme})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                GoFundme
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center px-4 py-2 m-2 border-2 text-white hover:bg-pink-600 hover:border-pink-600 text-lg">
                    Demo
                  </button>
                </a>
                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center px-4 py-2 m-2 border-2 text-white hover:bg-pink-600 hover:border-pink-600 text-lg">
                    Demo
                  </button>
                </a>
                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center px-4 py-2 m-2 border-2 text-white hover:bg-pink-600 hover:border-pink-600 text-lg">
                    Demo
                  </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
