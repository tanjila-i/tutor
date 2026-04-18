import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row sm:ml-20 ml-0 mt-20  gap-10">
        {" "}
        {/* ----------- Left Side ------------ */}
        <div className="">
          <img className="w-100" src={assets.contact_us} alt="" />
        </div>
        {/* ---------- Right Side ------------ */}
        <div className="sm:ml-30 ml-20 sm:flex flex-row  gap-15">
          <div className="mt-10">
            <h1 className="text-2xl  font-medium text-gray-800 ">
              Our Contact
            </h1>
            <p className="text-[20px] text-gray-700 font-bold">Email</p>
            <b className="text-[15px] text-gray-600">
              localtuition.inf0231@gmail.com
            </b>
            <br />
            <b className="text-[15px] text-gray-600">tutorfinding324@.com.uk</b>
            <br />
            <b className="text-[15px] text-gray-600">
              345tutiontuition@yhoo.com
            </b>

            <p className="text-[20px] text-gray-700 font-bold">Phone Number</p>
            <b className="text-[15px] text-gray-600">+880-17869-04325</b>
            <br />
            <b className="text-[15px] text-gray-600">+880-13790-32545</b>
          </div>

          <div className="mt-10">
            <h1 className="text-2xl font-medium text-gray-800 mb-0.5">Help</h1>
            <b className="text-[15px] text-gray-600 ">+880-18654-06784</b>
            <br />
            <b className="text-[15px] text-gray-600">+880-13453-67543</b>
            <br />
            <b className="text-[15px] text-gray-600">+880-17543-00984</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
