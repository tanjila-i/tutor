import React from "react";

import imageTutorJob from "../assets/imageTutorJob.jpg";
import { useNavigate } from "react-router-dom";

const FindJob = () => {
  const navigator = useNavigate();

  const myStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),url(${imageTutorJob})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    backgroundColor: "#f7f7f7",
    backgroundOpacity: "10",
  };
  return (
    <div
      style={myStyle}
      className=" mb-6 mt-9 shadow-2xl  rounded-2xl text-center text-white"
    >
      <div>
        <h1 className="pt-20 pb-1 text-4xl  text-gray-100 font-medium">
          Find your tuition job
        </h1>
        <p className="text-xl text-gray-200 font-medium pt-1 pb-2">
          Looking for interesting tuition jobs to excel your teaching
          experience?
        </p>
        <p className=" text-[18px] text-gray-300">
          A tuition job experience sample should <br />
          highlight your ability to effectively teach <br />
          and support students in achieving their academic goals. <br />
          It should showcase your understanding of different <br />
          learning styles, your ability to create engaging lesson plans,
        </p>
        <button
          onClick={() => navigator("/tuition-job")}
          className="border border-gray-100 text-gray-50 mt-3 p-1 rounded px-3 font-medium hover:bg-gray-300 cursor-pointer hover:text-gray-900 transition-all duration-300 text-shadow-lg"
        >
          Find tuition
        </button>
      </div>
    </div>
  );
};

export default FindJob;
