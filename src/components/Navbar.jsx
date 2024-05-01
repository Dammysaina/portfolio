import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/logo1.png";

const Navbar = () => {
  const [Nav, setNav] = useState(false)
  const handleClick = () => setNav(!Nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logoimage" style={{ width: "50px" }} />
      </div>

      {/* menu*/}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!Nav ? <FaBars /> : <FaTimes/> }
      </div>
      {/* Mobile Menu */}
      <ul className={!Nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li> 
      </ul>
      {/*Social Menu */}
      <div className="hidden">
      className="absolute top-0 left-0 w-4 h-screen bg-[#0a192f] flex flex-col justify-center items-center"
      </div>
    </div>
  );
};

export default Navbar;
