import React from "react";
// import aboutImage1 from "../../assets/AboutImages/about-us.jpg";
import { Link } from "react-router-dom";
import AboutSlick from "../components/About/AboutSlick";
// import "./About.css";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/About/AboutUs";
import AboutSlide from "../components/About/AboutSlide";


const About = () => {
  return (
    <>
      <AboutSlide />
      <AboutUs />
        <AboutSlick />
      <Footer />
    </>
  );
};

export default About;

