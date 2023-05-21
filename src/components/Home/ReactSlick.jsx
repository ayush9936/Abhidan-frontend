import React from "react";
import "../Home/Home.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from "./images/hslide.jpg"
import pic2 from "./images/hslide2.jpg"
import pic3 from "./images/hslide3.jpg"


const ReactSlick = () => {

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 276,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#F0F8FF]">
        <Slider {...settings} className="bg-[#F0F8FF]">
          <div className="slider-item">
            <img
              src={pic1}
              alt="Image 1"
              style={{ height: "600px", width: "100%" }}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-60  "></div>
            <div className="absolute top-4 md:top-20 left-0 right-0 bottom-0 w-full h-[70%]">
              <div className="flex flex-col items-center justify-center h-full space-y-2 md:space-y-3 mx-[2rem] md:mx-[8rem] text-center">
                <h1 className="text-lg md:text-3xl  font-bold text-gray-100  uppercase ">
                  Give Them Helping Hand
                </h1>
                <p className="text-sm md:text-md text-gray-100  content-center px-[5rem]  text-center">
                  Join your hand with to provide one time delicious meal
                </p>
                <button className="px-4 py-2 mt-4 outline outline-yellow-400 hover:scale-105 rounded-md hover:bg-yellow-400 text-white ">
                  Donate
                </button>
              </div>
            </div>
            
          </div>
          <div className="slider-item">
            <img
              src={pic2}
              alt="Image 2"
              style={{ height: "600px", width: "100%" }}
            />
            <div className="sliderContent">
              <h3>Helping Each Other Can Make Better World</h3>
              <p>bsdjkfhs dfheoiwe skchoihfe nvsdho </p>
              <button className=" mt-2 px-3 py-1 rounded-md border-2 border-yellow-400 text-lg hover:bg-yellow-400">
            Donate
              </button>
            </div>
          </div>
          <div className="slider-item">
            <img
              src={pic3}
              alt="Image 3"
              style={{ height: "600px", width: "100%" }}
            />
            <div className="sliderContent">
              <h3>They Are Wait For Your Help</h3>
              <p>bsdjkfhs dfheoiwe skchoihfe nvsdho </p>
              <button className=" mt-2 px-3 py-1 text-lg rounded-md border-2 border-yellow-400   hover:bg-yellow-400">
                Donate
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ReactSlick;
