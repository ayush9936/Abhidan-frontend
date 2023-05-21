import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../../assets/AboutImages/about_2.png";

const DonorProfile = () => {
  const images = [
    {
      src: "https://randomuser.me/api/portraits/men/1.jpg",
      alt: "Donation Image 1",
    },
  ];
  return (
    <>
      <div className=" w-full  h-full flex flex-col md:flex-row justify-between items-center  my-2 rounded-md border px-5 py-3 ">
        <div className="flex justify-center items-center basis-[20%] ">
          <img className="w-10 h-10 rounded-full " src={images.src} alt="" />
        </div>
        <div className="px-6 py-3 border-2 items-start flex flex-col w-full basis-[40%]">
          <h1>Profile Setting</h1>
          <div>
            <form action="">
              <label htmlFor="username">
                <p>Name</p>
                <input type="text" className="focus:outline-none  " />
              </label>
            </form>
          </div>
        </div>
        <div className="px-6 py-3 border-2 items-start flex w-full basis-[40%]">
          flex 3
        </div>
      </div>
    </>
  );
};

export default DonorProfile;
