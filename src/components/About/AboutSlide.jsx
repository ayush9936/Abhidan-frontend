import React,{useEffect, useRef, useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import data from "../../DummyData/homeSlideData.json"
import { useNavigate } from 'react-router-dom';


let count = 0;
let slideInterval;

const AboutSlide = () => {
  const navigate = useNavigate();

  const donorData = JSON.parse(localStorage.getItem("token"));

  function getDonationForm() {
    if (donorData) {
      navigate("/ngo");
    } else {
      navigate("/login");
    }
  }
    let reviews = data;
  const [index, setIndex] = useState(0);

  const slideRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);


  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % reviews.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = reviews.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  


  
  //   function leftShiftHandler() {
  //     if (index - 1 < 0) {
  //       setIndex(reviews.length - 1);
  //     } else {
  //       setIndex(index - 1);
  //     }
  //     slideRef.current.classList.add("fade-anim");
  //   }

  //   function rightShiftHandler() {
  //     if (index + 1 >= reviews.length) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //      slideRef.current.classList.add("fade-anim");
  // }
  
 
  
  return (
    <>
      <div className=" w-full h-[350px] md:h-[500px]  relative bg-gray-500 transition-all duration-1000 ease-in hover:shadow-xl rounded-md group">
        <div className=" w-full ">
          <div ref={slideRef} className="relative ">
            <img
              src={reviews[currentIndex].img}
              alt=""
              className="w-full  h-[350px] md:h-[500px]"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-60  "></div>
            <div className="absolute top-4 md:top-0 left-0 right-0 bottom-0 w-full h-[70%]">
              <div className="flex flex-col items-center justify-center h-full space-y-2 md:space-y-3 mx-[2rem] md:mx-[8rem] text-center">
                <h1 className="text-lg md:text-5xl  font-bold text-gray-100  uppercase ">
                  {reviews[currentIndex].heading}
                </h1>
                <p className="text-sm md:text-lg text-gray-100  content-center px-[5rem]  text-center">
                  {reviews[currentIndex].desc}
                </p>
                <button
                  className="px-3 py-2 mt-4 outline outline-yellow-400 hover:scale-105 rounded-md hover:bg-yellow-400 text-white "
                  onClick={() => getDonationForm()}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* buttons  */}
        {/* left button */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={handleOnPrevClick} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={handleOnNextClick} size={30} />
        </div>
      </div>
    </>
  );
}

export default AboutSlide