import React from "react";
import { subjects, tutors } from "../assets/assets";
import { Link } from "react-router-dom";

const FindSubject = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="font-medium text-2xl text-gray-800">find your subject</h1>
      <p className="text-sm  text-gray-700">
        find subject you need consider your goals,interests,and skills
      </p>

      <div>
        {subjects.map((item, index) => (
          <Link key={index}>
            <button className="border border-gray-400 rounded-3xl py-0.5 mt-5 text-gray-600 px-2 text-xs ml-3 hover:translate-y-[-4px] transition-all duration-500 cursor-pointer ">
              {item.subject}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FindSubject;
