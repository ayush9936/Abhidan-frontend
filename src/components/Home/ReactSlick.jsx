import React from "react";
import "../Home/Home.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from "./images/hslide.jpg"
import pic2 from "./images/hslide2.jpg"
import pic3 from "./images/hslide3.jpg"
import { useNavigate } from "react-router-dom";


const ReactSlick = () => {
  const navigate = useNavigate();

  const donorData = JSON.parse(localStorage.getItem("token"));

  function getDonationForm() {
    if (donorData) {
      navigate("/ngo");
    } else {
      navigate("/login");
    }
  }

  
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
                <button className="px-4 py-2 mt-4 outline outline-yellow-400 hover:scale-105 rounded-md hover:bg-yellow-400 text-white "
                  onClick={() =>getDonationForm()}
                >
                  Donate
                </button>
              </div>
            </div>
            
          </div>
          <div className="slider-item">
            <img
              src={pic2}
              alt="Image 2"
              style={{ height: "600px", width: "100%",objectFit:"cover" }}
            />
                        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-60  "></div>
                        <div className="absolute top-4 md:top-20 left-0 right-0 bottom-0 w-full h-[70%]">
              <div className="flex flex-col items-center justify-center h-full space-y-2 md:space-y-3 mx-[2rem] md:mx-[8rem] text-center">
              
              <h1 className="text-lg md:text-3xl  font-bold text-gray-100  uppercase ">Helping Each Other Can Make Better World</h1>
              <p className="text-sm md:text-md text-gray-100  content-center px-[5rem]  text-center">“Happiness doesn't result from what we get, but from what we give". </p>
              <button className="px-4 py-2 mt-4 outline outline-yellow-400 hover:scale-105 rounded-md hover:bg-yellow-400 text-white ">
                  Donate
                </button>
            </div></div>
          </div>
          <div className="slider-item">
            <img
              src={pic3}
              alt="Image 3"
              style={{ height: "600px", width: "100%" }}
            />
                         <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-60  "></div>
                        <div className="absolute top-4 md:top-20 left-0 right-0 bottom-0 w-full h-[70%]">
              <div className="flex flex-col items-center justify-center h-full space-y-2 md:space-y-3 mx-[2rem] md:mx-[8rem] text-center">
              
              <h1 className="text-lg md:text-3xl  font-bold text-gray-100  uppercase ">They Are Wait For Your Help</h1>
              <p className="text-sm md:text-md text-gray-100  content-center px-[5rem]  text-center">“Happiness doesn’t result from what we get, but from what we give". </p>
              <button className="px-4 py-2 mt-4 outline outline-yellow-400 hover:scale-105 rounded-md hover:bg-yellow-400 text-white ">
                  Donate
                </button>
          </div></div></div>

        </Slider>
      </div>
    </>
  );
};

export default ReactSlick;
