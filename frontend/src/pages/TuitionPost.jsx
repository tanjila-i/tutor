import React, { useState } from "react";

const TuitionPost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [tuitionTypes, setTuitionType] = useState("Home tuition");
  const [address, setAddress] = useState("");

  const onSubmitHandler = (e) => {
    e.prventDefault();
  };
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-2xl font-medium text-gray-700">
          Post need Tuition
        </h1>
        <p className="text-sm text-gray-800">
          you can try posting a tuition notice on online platforms, <br />
          local bulletin boards, or contacting local schools and educational
          institutions
        </p>
      </div>
      <div className="border border-gray-100 p-2 shadow-2xl mt-3 mb-3">
        <form>
          <div className="flex items-center justify-center gap-35 mt-10 mb-10">
            <div className="flex flex-col items-start gap-5 text-gray-600">
              <div className="flex-1 flex flex-col gap-1">
                <p>Name</p>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid Your Name"
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
                  placeholder="Provid Your Email"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Phone Number</p>
                <input
                  type="phonenumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid Your Number"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 text-gray-600">
              <div className="flex-1 flex flex-col gap-1">
                <p>Subject</p>
                <input
                  type="text"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid Your Subject"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Tuition Typs</p>
                <select
                  onChange={(e) => setTuitionType(e.target.value)}
                  value={tuitionTypes}
                  className="border rounded px-3 py-2"
                >
                  <option value="Home">Home tuition</option>
                  <option value="Online">Online tuition</option>
                  <option value="Group">Group tuition</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Address</p>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className="border rounded px-2 py-1"
                  required
                  placeholder="Provid Your Address"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default TuitionPost;
