import React from "react";
import { tuitionCards } from "../constants";
import { Link } from "react-router-dom";

const TuitionTypes = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-medium text-2xl text-gray-800">Our Tuitions</h1>
        <p className="text-sm  text-gray-700">
          Find your tuitions in which you want to study
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-8 mt-8 px-3 sm:px-0 border border-gray-200 rounded-lg shadow-2xl">
        {tuitionCards.map((item, index) => (
          <div
            key={index}
            className=" p-10 hover:bg-gray-200 hover:text-shadow-md"
          >
            <img className="rounded-lg" src={item.image} alt="" />
            <h1 className="text-center font-extrabold text-2xl mt-4 text-gray-800">
              {item.title}
            </h1>
            <p className="text-center text-[15px] font-medium mt-3 leading-[20px] text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuitionTypes;
