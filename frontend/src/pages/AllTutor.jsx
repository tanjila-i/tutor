import React, { useEffect, useState } from "react";
import { tutors } from "../assets/assets";
import { useNavigate, useParams } from "react-router-dom";

const AllTutor = () => {
  const { subject, tuition } = useParams();
  console.log(subject);

  const [filter, setFilter] = useState([]);
  const [tutorFilter, setTutorFilter] = useState([]);

  const navigate = useNavigate();

  const applyFilter = () => {
    if (subject) {
      setFilter(tutors.filter((tutor) => tutor.subject === subject));
    } else {
      setFilter(tutors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [tutors, subject, tuition]);

  return (
    <div>
      <div className="flex ">
        {/* -------------- Left Side -------------- */}
        <div className="mt-10 mx-2 sm:block hidden ">
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
                  subject === "All" ? navigate("/tutor") : navigate("/tutor")
                }
              >
                All
              </option>

              <option
                onClick={() =>
                  subject === "english"
                    ? navigate("/tutor")
                    : navigate("/tutor/english")
                }
                value="english"
              >
                english
              </option>
              <option
                onClick={() =>
                  subject === "math"
                    ? navigate("/tutor")
                    : navigate("/tutor/math")
                }
                value="math"
              >
                math
              </option>
              <option
                value="physics"
                onClick={() =>
                  subject === "physics"
                    ? navigate("/tutor")
                    : navigate("/tutor/physics")
                }
              >
                physics
              </option>
              <option
                value="chymistry"
                onClick={() =>
                  subject === "chemistry"
                    ? navigate("/tutor")
                    : navigate("/tutor/chemistry")
                }
              >
                chymistry
              </option>
              <option
                value="biology"
                onClick={() =>
                  subject === "biology"
                    ? navigate("/tutor")
                    : navigate("/tutor/biology")
                }
              >
                biology
              </option>
              <option
                value="accounting"
                onClick={() =>
                  subject === "accounting"
                    ? navigate("/tutor")
                    : navigate("/tutor/accounting")
                }
              >
                accounting
              </option>
              <option
                value="business"
                onClick={() =>
                  subject === "business"
                    ? navigate("/tutor")
                    : navigate("/tutor/business")
                }
              >
                business
              </option>
              <option
                value="mathematics"
                onClick={() =>
                  subject === "mathematics"
                    ? navigate("/tutor")
                    : navigate("/tutor/mathematics")
                }
              >
                methematics
              </option>
              <option
                value="banking"
                onClick={() =>
                  subject === "banking"
                    ? navigate("/tutor")
                    : navigate("/tutor/banking")
                }
              >
                banking
              </option>
            </select>
          </div>
          {/* <div className="mt-4">
            <h1 className="text-[15px] text-gray-800">Tuition Type: </h1>
            <select
              className="border rounded text-sm px-1 py-1 mt-2"
              name=""
              id=""
            >
              <option
                value="All"
                onClick={() =>
                  subject === "home tuition"
                    ? navigate("/tutor")
                    : navigate("/tutor")
                }
              >
                All
              </option>
              <option
                value="home Tuition"
                onClick={() =>
                  subject === "home tuition"
                    ? navigate("/tutor")
                    : navigate("/tutor/home tuition")
                }
              >
                Home Tuition
              </option>
              <option
                value="online Tuition"
                onClick={() =>
                  subject === "online tuition"
                    ? navigate("/tutor")
                    : navigate("/tutor/online tuition")
                }
              >
                Online Tuition
              </option>
              <option
                value="group Tuition"
                onClick={() =>
                  subject === "group Tuition"
                    ? navigate("/tutor")
                    : navigate("/tutor/group Tuition")
                }
              >
                Group Tuition
              </option>
            </select>
          </div> */}
        </div>

        {/* ---------- Right Side ----------- */}

        <div className="mt-10 mx-2 ml-20 ">
          <div className="ml-10">
            <h1 className="ml-0.5 text-gray-600 text-[17px]">All Tutors</h1>
            <hr className="w-20 text-gray-500" />
          </div>
          <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 gap-4 pt-1 gap-y-6 px-3 sm:px-0 ">
            {filter.map(
              ({
                name,
                subject,

                _id,
                image,

                tuition,
              }) => (
                <div
                  onClick={() => {
                    (navigate(`/tutor-info/${_id}`), scrollTo(0, 0));
                  }}
                  className=" rounded-xl overflow-hidden hover:bg-gray-200 hover:translate-y-[-10px] transition-all duration-500 cursor-pointer "
                  key={_id}
                >
                  <div className=" m-5 ">
                    {" "}
                    <div className="flex items-center justify-center mb-4">
                      <img className="w-25 rounded-2xl" src={image} alt="" />
                    </div>
                    <div className="text-center">
                      <h1 className="font-medium text-[19px] text-gray-800 ">
                        {name}
                      </h1>
                      <h3 className="text-[15px] font-medium mt-1 text-gray-700">
                        {subject}
                      </h3>
                      <h3 className="border border-gray-400 rounded-3xl py-0.5 mt-3 text-gray-600  text-xs">
                        {tuition}
                      </h3>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTutor;
