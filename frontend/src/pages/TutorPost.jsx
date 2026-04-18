import React, { useState } from "react";
import { assets } from "../assets/assets";

const TutorPost = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [phonenumber, setPhoneNumder] = useState("");
  const [subject, setSubject] = useState("");
  const [degree, setDegree] = useState("");
  const [tutor, setTutor] = useState("Home");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [about, setAbout] = useState("");

  return (
    <div>
      <div className="text-center mt-5">
        <h1 className="text-2xl font-medium text-gray-700">Post as a Tutor</h1>
        <p className="text-sm text-gray-800">
          To effectively post as a tutor, create a compelling ad that <br />
          highlights your qualifications, subject expertise, and teaching style.
        </p>
      </div>

      <div className="border border-gray-100 p-2 shadow-2xl mt-3">
        <form onSubmit={onSubmitHandler} className="m-5 w-full">
          {" "}
          <div className=" items-center justify-center gap-4 mb-5 ml-130 text-gray-500">
            <label htmlFor="image">
              <img
                className="w-26 bg-gray-100 rounded-full cursor-pointer"
                src={image ? URL.createObjectURL(image) : assets.default_img}
                alt=""
              />
            </label>
            <input
              type="file"
              hidden
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <p>Upload Image</p>
          </div>
          <div className="flex items-center justify-center gap-35">
            <div className="flex flex-col items-start gap-5 text-gray-600">
              <div className="flex-1 flex flex-col gap-1">
                <p>Name</p>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provide your Name"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Email</p>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid your Email"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Phone Number</p>
                <input
                  type="phonenumber"
                  onChange={(e) => setPhoneNumder(e.target.value)}
                  value={phonenumber}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid your Phone Number"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Subject</p>
                <input
                  type="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid your Subject"
                />
              </div>
            </div>

            <div className=" items-start  text-gray-600 mt-8">
              <div className="flex-1 flex flex-col gap-1">
                <p>Degree</p>
                <input
                  type="degree"
                  onChange={(e) => setDegree(e.target.value)}
                  value={degree}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid your Degree"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Tutor</p>
                <select
                  onChange={(e) => setTutor(e.target.value)}
                  value={tutor}
                  className="border rounded px-3 py-2"
                >
                  <option value="Home Tutor">Home Tutor</option>
                  <option value="Online Tutor">Online Tutor</option>
                  <option value="Group Tutor">Group Tutor</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Experience</p>
                <input
                  type="experience"
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid your Experience"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Address</p>
                <input
                  type="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid your Address"
                />
              </div>{" "}
              <div className="flex-1 flex flex-col gap-1">
                <p className="mt-4 mb-2">About</p>
                <textarea
                  onChange={(e) => setAbout(e.target.value)}
                  value={about}
                  className="w-full px-4 pt-2 border rounded"
                  required
                  placeholder="Write about you"
                  rows={5}
                />
              </div>
            </div>
          </div>
          <div className="items-center justify-center mt-5 mb-10 ml-135">
            {" "}
            <button
              className="bg-gray-400 px-10 py-3 mt-4 text-white rounded-full"
              type="submit"
            >
              Post
            </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default TutorPost;
