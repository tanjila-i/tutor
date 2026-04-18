import React, { useEffect, useState } from "react";
import { tutorJob } from "../assets/assets";
import { useNavigate, useParams } from "react-router-dom";

const TuitionJob = () => {
  const { subject } = useParams();

  const [subjectFilter, setSubjectFilter] = useState([]);

  const navigate = useNavigate();

  const filterApply = () => {
    if (subject) {
      setSubjectFilter(tutorJob.filter((tutor) => tutor.subject === subject));
    } else {
      setSubjectFilter(tutorJob);
    }
  };

  useEffect(() => {
    filterApply();
  }, [subject, tutorJob]);

  return (
    <div>
      {" "}
      <div className="text-center mt-3">
        <h1 className="text-2xl font-medium text-gray-700">Find Tuition</h1>
        <p className="text-sm text-gray-500">
          here you can find your`s professonal tuition
        </p>
      </div>
      <div className="flex">
        {/* -------------- Left Side Subject Filter ----------- */}

        <div className="mt-10 mx-2 ml-2">
          <div>
            <h1 className="ml-0.5 text-gray-600 text-[17px]">Subject Filter</h1>
            <hr className="w-29 text-gray-500" />
          </div>
          <div className="mt-4">
            <h1 className="text-[15px] text-gray-800">Subject: </h1>
            <select
              className="border rounded text-sm px-1 py-1 mt-2"
              name=""
              id=""
            >
              <option
                value="All"
                onClick={() =>
                  subject === "All"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job")
                }
              >
                All
              </option>
              <option
                value="english"
                onClick={() =>
                  subject === "english"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job/english")
                }
              >
                english
              </option>
              <option
                value="math"
                onClick={() =>
                  subject === "math"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job/math")
                }
              >
                math
              </option>
              <option
                value="physics"
                onClick={() =>
                  subject === "math"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job/physics")
                }
              >
                physics
              </option>
              <option
                value="chemistry"
                onClick={() =>
                  subject === "math"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job/chemistry")
                }
              >
                chemistry
              </option>
              <option
                value="biology"
                onClick={() =>
                  subject === "math"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job/biology")
                }
              >
                biology
              </option>
              <option
                value="accounting"
                onClick={() =>
                  subject === "math"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job/accounting")
                }
              >
                accounting
              </option>
              <option
                value="business"
                onClick={() =>
                  subject === "math"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job/business")
                }
              >
                business
              </option>
              <option
                value="mathematics"
                onClick={() =>
                  subject === "math"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job/mathematics")
                }
              >
                mathematics
              </option>
              <option
                value="banking"
                onClick={() =>
                  subject === "math"
                    ? navigate("/tuition-job")
                    : navigate("/tuition-job/banking")
                }
              >
                banking
              </option>
            </select>
          </div>
        </div>

        {/* ------------ Right Side job post ------------------ */}

        <div className="mt-10 mx-2 ml-20">
          <div className="ml-10">
            <h1 className="ml-0.5 text-gray-600 text-[17px]">Tuition Jobs</h1>
            <hr className="w-20 text-gray-500" />
          </div>
          <div className="grid  md:grid-cols-3 grid-cols-2 gap-5 mt-12">
            {subjectFilter.map(
              ({ name, email, contact, subject, tuition, index }) => (
                <div
                  className="border border-gray-200 shadow-xl p-5 rounded-md mx-8 hover:bg-gray-200  w-full"
                  key={index}
                >
                  <h1 className="font-bold text-xl text-gray-800">{name}</h1>
                  <b className="font-medium text-sm text-gray-800">{email}</b>
                  <br />
                  <b className="font-bold text-sm text-gray-800">{contact}</b>

                  <p className="text-[15px] font-medium text-gray-800">
                    {subject}
                  </p>
                  <p className="text-[15px] font-medium text-gray-800">
                    {tuition}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionJob;
