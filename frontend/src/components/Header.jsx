import React from "react";
import header_img from "../assets/header_img.jpg";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { headTextAnimation } from "../variants";
const Header = () => {
  const navigate = useNavigate();
  const myStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),url(${header_img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    backgroundColor: "#f7f7f7",
    backgroundOpacity: "10",
  };
  return (
    <motion.div
      {...headTextAnimation}
      style={myStyle}
      className="mt-4 md:block rounded-lg pt-60 bg-radial-[at_25%_25%] "
    >
      <div className="text-center ">
        <h1 className="text-4xl  text-gray-100 font-medium ">Need a Tutor?</h1>
        <h3 className="text-4xl text-gray-100 sm:font-bold  pt-2">
          here you can find best tutors
        </h3>
        <p className="text-center text-xl font-light pt-3 text-gray-50 sm:block hidden">
          A good tutor provides personalized instruction, tailored to the
          student's learning style and needs, <br /> helping them grasp
          difficult concepts and build confidence in their abilities
        </p>

        <button
          onClick={() => navigate("/tutor")}
          className="border border-gray-100 text-gray-50 mt-2 p-1 rounded px-3 font-medium hover:bg-gray-300 cursor-pointer hover:text-gray-900 transition-all duration-300 text-shadow-lg"
        >
          Find Tutor
        </button>
      </div>
    </motion.div>
  );
};

export default Header;
