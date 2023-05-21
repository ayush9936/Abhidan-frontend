import React from 'react'
import aboutImage1 from './images/abouthome1.jpg'
import { Link } from "react-router-dom";


const AboutHome = () => {
  return (
    <>
      <section className="w-full px-3 py-3  bg-white">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="text-center flex-1 pt-5 flex flex-col items-center ">
            <h2 className="text-2xl font-semibold font-inter text-black ">
              About Us
            </h2>
            <div className="w-[100px] h-1 rounded-md bg-yellow-400 mt-1 mb-3 "></div>

            <p className='mt-2 self-start ml-5 text-lg font-bold'>Pleged to Support</p>
            <p className="w-full  text-xl subpixel-antialiased px-4 py-2 text-start ">
              We believe that everyone deserves access to basic human needs like
              food, water, shelter, and healthcare. Our purpose is to connect
              generous donors with reputable charities and non-profit
              organizations that are working to make the world a better place.
            </p>
            <Link to={"/about"} className='self-start ml-5 mt-4 px-3 py-2 rounded-md border-2 border-yellow-400 text-black hover:bg-yellow-400' >
              <button>Read More</button>
            </Link>
          </div>
          <div className="flex-1">
            <img src={aboutImage1} alt="Our Purpose" className=" " />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHome