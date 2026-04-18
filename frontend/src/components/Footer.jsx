import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-30 ">
      <div className="flex flex-col md:flex-row p-3 justify-between">
        <div className="">
          <h1 className="pacifico-regular text-red-600 text-3xl text-start px-2 cursor-pointer">
            tutorial
          </h1>
          <p className="text-sm text-gray-700 text-start pl-2 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde{" "}
            <br />
            accusantium debitis consequuntur, assumenda mollitia officia labore{" "}
            <br />
            illo exercitationem quibusdam fugit eveniet? Sit rem deleniti velit{" "}
            <br />
            corporis minus! Nisi, ab odio. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="mt-3">
          <h1 className="font-medium text-[18px] text-gray-700">
            Our Help Service
          </h1>
          <b className="text-sm text-gray-600 font-bold">Contact: </b>
          <p className="text-xs mt-1 text-gray-700">+657 547 987</p>
          <p className="text-xs mt-1 text-gray-700">+098 235 896</p>
          <b className="text-sm text-gray-600 font-bold">Email: </b>
          <p className="text-xs mt-1 text-gray-700">tuition345@gmail.com</p>
          <p className="text-xs mt-1 text-gray-700">tutos.info9867@gmail.com</p>
        </div>

        <div className="mt-14">
          <h1 className="font-medium text-[18px] text-gray-700">
            Our Social Service
          </h1>
          <div className=" flex gap-3 mt-1 ml-4 ">
            <FaFacebook className="text-xl text-gray-700 hover:translate-y-[-4px] transition-all duration-500 cursor-pointer" />
            <FaWhatsapp className="text-xl text-gray-700 hover:translate-y-[-4px] transition-all duration-500 cursor-pointer" />
            <FaYoutube className="text-xl text-gray-700 hover:translate-y-[-4px] transition-all duration-500 cursor-pointer" />
            <FaTwitter className="text-xl text-gray-700 hover:translate-y-[-4px] transition-all duration-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <hr className="border-gray-400 mt-5" />
        <p className=" py-5 text-sm text-center text-gray-700">
          Copyright 2025@ Prescripto - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
