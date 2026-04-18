import React, { useContext, useState } from "react";
import { delay, motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { token, setToken } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex poetsen-one-regular   justify-between items-center py-4 px-5 bg-[#f7f7f7] "
    >
      <h1
        onClick={() => navigate("/")}
        className="pacifico-regular text-red-600 text-3xl text-center px-2 cursor-pointer"
      >
        tutorial
      </h1>

      <ul className=" hidden md:flex gap-4 px-2">
        <NavLink to={"/"}>
          <li>Home</li>
          <hr className="border-none outline-none h-0.5 bg-gray-400 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/tutor"}>
          <li>All Tutors</li>
          <hr className="border-none outline-none h-0.5 bg-gray-400 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/tuition-job"}>
          <li>Jobs</li>
          <hr className="border-none outline-none h-0.5 bg-gray-400 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li>Contact</li>
          <hr className="border-none outline-none h-0.5 bg-gray-400 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img src={assets.dropdown_icon} alt="" className="w-2.5" />

            <div className="absolute top-0 right-0 pt-13 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/profile")}
                  className="hover:text-black cursor-pointer"
                >
                  Profile
                </p>

                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="mx-2 text-center hover:underline cursor-pointer hover:text-gray-700"
          >
            Create Account
          </button>
        )}
      </div>

      {/* ------------- SideBar --------------- */}
      <img
        onClick={() => setShowMenu(true)}
        className="w-6  md:hidden"
        src={assets.menu_icon}
        alt=""
      />
      <div
        className={` ${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img
            className="w-7"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            <p className="px-4 py-2 rounded inline-block">Home</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/tutor">
            <p className="px-4 py-2 rounded inline-block">ALL TUTOR</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            <p className="px-4 py-2 rounded inline-block">ABOUT</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            <p className="px-4 py-2 rounded inline-block">CONTACT</p>
          </NavLink>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavBar;
