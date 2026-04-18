import React, { useEffect, useState } from "react";
import { tutors } from "../assets/assets";
import { useParams } from "react-router-dom";
import RelatedTutor from "../components/RelatedTutor";

const TutorInfo = () => {
  const { tutorId } = useParams();
  const [tutorInfo, setTutorInfo] = useState(null);

  const fetchStudentInfo = () => {
    const tutor = tutors.find((item) => item._id === tutorId);
    setTutorInfo(tutor);
  };

  useEffect(() => {
    fetchStudentInfo();
  }, [tutorId, tutors]);

  return (
    tutorInfo && (
      <div className="mt-3 px-5 py-5 ">
        <h1 className="text-center mb-3 text-2xl font-medium text-gray-600">
          Tutor Details <hr className="w-39 ml-102 " />
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* ----------- Left Side ----------- */}
          <div className="text-center">
            <img
              className="w-50 rounded-md mb-3 sm:ml-0 ml-13"
              src={tutorInfo.image}
              alt=""
            />
            <div className="px-5">
              <p className="text-sm  text-gray-700"> {tutorInfo.email}</p>
              <p className="text-sm  text-gray-700"> {tutorInfo.contact}</p>
              <p className="text-sm  text-gray-700"> {tutorInfo.location}</p>
            </div>
          </div>

          {/* ----------- Right Side -----------*/}
          <div className="border  border-gray-600 p-10 rounded-md">
            <h1 className="text-3xl font-medium text-gray-900">
              Name: {tutorInfo.name}
            </h1>

            <h1 className="font-medium text-xl mt- text-gray-800">
              degree: {tutorInfo.degree}
            </h1>
            <p className="text-[17px] font-medium mt-1 text-gray-700">
              subject: {tutorInfo.subject}
            </p>

            <div className="flex gap-3">
              <p className="text-gray-600 mt-1 font-medium">
                {tutorInfo.tuition}
              </p>
              <button className="border border-gray-400 rounded-3xl py-0.5 text-center  text-gray-600 px-2 text-xs">
                {tutorInfo.experience}
              </button>
            </div>
            <p className="mt-1 text-sm  text-gray-700">
              <span className="text-black font-bold">About:</span>{" "}
              {tutorInfo.about}
            </p>
          </div>
        </div>

        <RelatedTutor tutorId={tutorId} subject={tutorInfo.subject} />
      </div>
    )
  );
};

export default TutorInfo;
