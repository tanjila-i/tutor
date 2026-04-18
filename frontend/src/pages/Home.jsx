import React from "react";
import Header from "../components/Header";
import BestTutors from "../components/BestTutors";
import FindSubject from "../components/FindSubject";
import TuitionTypes from "../components/TuitionTypes";
import FindJob from "../components/FindJob";
import WhyNeedTutor from "../components/WhyNeedTutor";
import ToldAboutUs from "../components/ToldAboutUs";

const Home = () => {
  return (
    <div>
      <Header />
      <FindSubject />
      <BestTutors />
      <TuitionTypes />
      <FindJob />
      <WhyNeedTutor />
      <ToldAboutUs />
    </div>
  );
};

export default Home;
