import React from "react";
import { parentsReview } from "../constants";

const ToldAboutUs = () => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="font-medium text-2xl text-gray-800">Told About Us</h1>
        <p className="mt-2 text-sm  text-gray-700">
          Prants and student What banifits width us.ther <br />
          reviewing us Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {parentsReview.map(({ id, name, image, review, position }) => (
          <div
            className="rounded-lg md:p-10 p-5 col-span-1  bg-opacity-50 hover:bg-gray-200 hover:text-shadow-md"
            key={id}
          >
            <h1 className="text-sm text-gray-800">{review}</h1>

            <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7">
              <div className=" flex gap-3">
                {" "}
                <img className="w-12 h-12 rounded-full" src={image} alt="" />
                <div className="flex flex-col">
                  <p className="font-semibold ">{name}</p>
                  <p className="font-bold text-sm">{position}</p>
                </div>
              </div>
              <div className="flex self-end justify-center gap-2">
                <p className="text-5xl pr-4 ">""</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToldAboutUs;
