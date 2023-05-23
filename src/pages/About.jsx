import React from "react";
import AboutSlick from "../components/About/AboutSlick";
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

