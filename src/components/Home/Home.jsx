import React from "react";
import ReactSlick from "./ReactSlick";

import "./Home.css";



// import About from "../About/About";
import AboutHome from "../About/AboutHome";
import HowitWorks from "../How_it_Works/HowitWorks";
import AboutSlick from "../About/AboutSlick";
import Circle from "./Circle";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <div className=" overflow-x-hidden bg-[#F0F8FF]">
        <ReactSlick />
        <AboutHome />
        <Circle />
        <HowitWorks />
        <AboutSlick />
        <Footer />
      </div>
    </>
  );
};

export default Home;
