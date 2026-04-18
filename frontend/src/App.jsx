import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllTutor from "./pages/AllTutor";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import TuitionJob from "./pages/TuitionJob";
import Footer from "./components/Footer";
import TutorInfo from "./pages/TutorInfo";
import { ToastContainer, toast } from "react-toastify";
import TutorPost from "./pages/TutorPost";
import TuitionPost from "./pages/TuitionPost";

const App = () => {
  return (
    <div className=" md:mx-[9%]  ">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutor" element={<AllTutor />} />
          <Route path="/tutor/:subject" element={<AllTutor />} />
          <Route path="/tuition-job" element={<TuitionJob />} />
          <Route path="/tuition-job/:subject" element={<TuitionJob />} />
          <Route path="/tutor-jobPost" element={<TutorPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tuition-jobPost" element={<TuitionPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tutor-info/:tutorId" element={<TutorInfo />} />

          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

//  const App = () => {
//   return (
//     <div className="mx-4 md:mx-[10%] bg-[#f7f7f7] ">
//       <BrowserRouter>
//         <NavBar />
