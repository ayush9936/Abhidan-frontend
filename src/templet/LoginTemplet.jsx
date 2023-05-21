import React from "react";
import frameImage from "./LoginImage-removebg-preview.png";
import LoginForm from "../components/forms/LoginForm"
import {FcGoogle} from "react-icons/fc";
import RegSelection from "./RegSelection"
import { Link } from "react-router-dom";
import LogInSelection from "./LogInSelection";
import AbhidanLogo from "./AbhidanLogo.jpeg";




const Templets = ({ title, desc1, desc2, image, formType, setIsLoggedIn, setIsNgoLoggedIn }) => {

  return (
    <>
      <div className="flex flex-col-reverse bg-white mt-3 rounded-lg  gap-x-4 py-0 md:py-5 h-fit lg:flex-row-reverse w-11/12 max-w-[1160px] gap-y-5 box-border md:justify-between  my-5 shadow-2xl  mx-auto  md:gap-y-5">
        <div className="">
          <div className="w-full flex flex-col items-center max-h-screen md:w-[80%] lg:min-w-[550px] mx-auto md:px-[5rem] px-4  rounded-md pt-4 box-border  ">
            <h1 className="text-[#104e8b] font-semibold text-[1.875rem] leading-[2.375rem]">
              {title}
            </h1>
            <p className="text-[1.125rem] leading-[1.625rem] mt-4">
              <span className="text-gray-600 font-semibold ityalic">
                {desc1}
              </span>
              <br />
              <span className="text-blue-100 ityalic">{desc2}</span>
            </p>
          </div>
          <LogInSelection
            setIsLoggedIn={setIsLoggedIn}
            setIsNgoLoggedIn={setIsNgoLoggedIn}
          />
        </div>
        <div className="md:w-[80%] lg:min-w-[550px] mx-auto py-2 lg:h-full max-h-screen ">
          <div className=" hidden md:block  md:w-[100%] rounded-md  ">
            <img
              src={frameImage}
              alt="frame"
              loading="lazy"
              className={` w-full md:h-[400px] md:w-[100%] lg:h-[550px] `}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Templets;
