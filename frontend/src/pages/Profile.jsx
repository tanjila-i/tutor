import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "Demo Name",
    image: assets.default_img,
    email: "demo4321.info@gmail.com",
    phone: "+ 123 456 789",
    address: {
      line1: "Demo1 Address1 Road1",
      line2: "Demo2 Address2 Road2",
    },
    gender: "Male",
    dob: "2000-5-13",
  });

  const [isEdite, setIsEdite] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm ml-140">
      <img className="w-36 rounded" src={assets.default_img} alt="" />

      <div className=" grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
        <p className="font-medium">Name:</p>
        {isEdite ? (
          <input
            className="font-medium text-sm  bg-gray-50 max-w-60 "
            type="text"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={userData.name}
          />
        ) : (
          <p className="text-gray-400">{userData.name}</p>
        )}

        <p className="font-medium">Email id: </p>
        <p className="text-blue-500">{userData.email}</p>
        <p className="font-medium">Phone:</p>
        {isEdite ? (
          <input
            className="bg-gray-100 max-w-52"
            type="text"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
            }
            value={userData.phone}
          />
        ) : (
          <p>{userData.phone}</p>
        )}
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender</p>

          {isEdite ? (
            <select
              className="bg-gray-100 max-w-20"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Femail">Femail</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">Date of Birth</p>

          {isEdite ? (
            <input
              className="bg-gray-100 max-w-30"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}

          <p>Address:</p>
          {isEdite ? (
            <p>
              <input
                className="bg-gray-50"
                type="text"
                onChange={(e) =>
                  setIsEdite((prev) => ({
                    ...prev.address,
                    line1: e.target.value,
                  }))
                }
                value={userData.address.line1}
              />{" "}
              <br />{" "}
              <input
                className="bg-gray-50 mt-2"
                type="text"
                onChange={(e) =>
                  setIsEdite((prev) => ({
                    ...prev.address,
                    line2: e.target.line2,
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-400">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdite ? (
          <button
            onClick={() => setIsEdite(false)}
            className="border border-[#5f6FFF] px-7 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transition-all"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdite(true)}
            className="border border-[#5f6FFF] px-7 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transition-all"
          >
            Edit
          </button>
        )}
      </div>

      <div className="mt-10 flex gap-4">
        <button
          onClick={() => navigate("/tutor-jobPost")}
          className="border border-[#5f6FFF] px-7 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transition-all"
        >
          Post as a Tutor
        </button>
        <button
          onClick={() => navigate("/tuition-jobPost")}
          className="border border-[#5f6FFF] px-7 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transition-all"
        >
          Post need Tuition
        </button>
      </div>
    </div>
  );
};

export default Profile;
