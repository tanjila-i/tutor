import React, { useEffect, useState } from "react";
import { tutors } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const RelatedTutor = ({ tutorId, subject }) => {
  const [relatedTutor, setRelatedTutor] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (tutors.length > 0 && subject) {
      const tutorData = tutors.filter(
        (item) => item.subject === subject && item._id !== tutorId
      );
      setRelatedTutor(tutorData);
    }
  }, [tutorId, subject, tutors]);

  return (
    <div className="flex flex-col items-center gap-8 mb-4">
      <div className="text-center mt-8">
        <h1 className="font-medium text-2xl text-gray-800">Related Tutor</h1>
        <p className="text-sm  text-gray-700">
          Ours highly experienced tutor with a passion for to concepts easy to
          understand
        </p>
      </div>

      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
        {relatedTutor.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/tutor-info/${item._id}`), scrollTo(0, 0);
            }}
            className=" rounded-xl overflow-hidden hover:bg-gray-200 hover:translate-y-[-10px] transition-all duration-500 cursor-pointer "
            key={index}
          >
            <div className=" m-5 ">
              {" "}
              <div className="flex items-center justify-center mb-4">
                <img className="w-25 rounded-2xl" src={item.image} alt="" />
              </div>
              <div className="text-center">
                <h1 className="font-medium text-[19px] text-gray-800 ">
                  {item.name}
                </h1>
                <h3 className="text-[15px] font-medium mt-1 text-gray-700">
                  {item.subject}
                </h3>
                <button className="border border-gray-400 rounded-3xl py-0.5 mt-3 text-gray-600 px-2 text-xs">
                  {item.experience}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedTutor;
