import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import DonorDashboard from "./DonorDashboard";
import Footer from "../../Footer/Footer";
import CountUp from "react-countup";


const DonorProfile = () => {
  const [open, setOpen] = useState(false);
  const [tag, setTag] = useState("profile");
  const userData = JSON.parse(localStorage.getItem("token"));
  const userId = {email : userData.data.email}
 

  async function callDonorData() {
    axios
      .post("http://localhost:1300/api/user-data", userId)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log(userData.data._id);
    console.log(userId);
    callDonorData();
  },[])


  return (
    <>
      <div className="flex flex-col">
        <div className="flex relative h-[130vh] bg-white pb-2 mb-2 overflow-y-scroll overflow-x-hidden">
          {/* Large Screen */}
          <div
            className={`hidden md:block md:w-72 h-[130vh]   md:relative static  px-2 bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  pt-8 `}
          >
            <div className="flex flex-col gap-x-4 items-center">
              <h1
                className={`text-black origin-left font-medium text-xl duration-200 `}
              >
                {userData.data.username}
              </h1>
              <h3
                className={`text-black origin-left mt-1 font-sm text-md duration-200 `}
              >
                {userData.data.email}
              </h3>
            </div>
            <ul className="pt-6 pl-5">
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-300 text-black text-md items-center gap-x-4 `}
                onClick={() => {
                  setTag("profile");
                }}
              >
                <span className={` origin-left duration-200`}>My Profile</span>
              </li>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-300 text-black text-md items-center gap-x-4 `}
                onClick={() => {
                  setTag("pendingDonation");
                }}
              >
                <span className={` origin-left duration-200`}>
                  Pending Donation
                </span>
              </li>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-300 text-black text-md items-center gap-x-4 `}
                onClick={() => {
                  setTag("approveDonation");
                }}
              >
                <span className={`origin-left duration-200`}>
                  Approve Donation
                </span>
              </li>
            </ul>
            {/* <div>Logout</div> */}
          </div>
          {/* mobile view */}
          <div
            className={` md:hidden fixed ${
              open ? "w-[55%] md:w-[45%]" : "w-5 "
            } absolute md:relative  h-screen px-2 bg-white  pt-8  duration-300`}
          >
            <div
              className={` md:hidden absolute cursor-pointer -right-3 top-3 w-11 h-11 px-2 py-2
           border-2 border-gray-700 rounded-full flex justify-center items-center text-gray-700  ${
             !open && "rotate-180 border-none static w-15 h-15 scale-105 "
           }  `}
              onClick={() => setOpen(!open)}
            >
              <BiLeftArrow className="w-full h-full text-blue-800" />
            </div>
            <div className="flex flex-col gap-x-4 items-center">
              <h1
                className={`text-black origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Donor Name
              </h1>
              <h3
                className={`text-black origin-left font-sm text-md duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Email
              </h3>
            </div>
            <ul className="pt-6 pl-5" onClick={() => setOpen(!open)}>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-300 text-black text-md items-center gap-x-4 `}
                onClick={() => {
                  setTag("profile");
                }}
              >
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  My Profile
                </span>
              </li>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-300 text-black text-md items-center gap-x-4 `}
                onClick={() => {
                  setTag("pendingDonation");
                }}
              >
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Pending Donation
                </span>
              </li>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-300 text-black text-md items-center gap-x-4 `}
                onClick={() => {
                  setTag("approveDonation");
                }}
              >
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Approve Donation
                </span>
              </li>
            </ul>
            {/* <div>Logout</div> */}
          </div>
          <div className="h-screen flex-1  px-4 bg-white">
            {tag === "profile" && <DonorDashboard />}
            {tag === "pendingDonation" && (
              <div className=" bg-white h-screen shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg px-1 md:px-4 py-3">
                {/* Name section */}
                <div className="flex flex-col w-fit items-center  px-5 py-2  ">
                  <h1 className="text-2xl font-bold">Donor Name</h1>
                  <div className="w-[100px] h-1 rounded-md bg-yellow-500 mt-2"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center   gap-5 flex-wrap  mt-5  ">
                  <div className=" h-[165px] flex w-full max-w-[22rem]  px-2 py-3 lg:px-3 gap-x-5 justify-center lg:py-4 border border-gray-300 rounded-md shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
                    <img
                      src="https://img.icons8.com/?size=512&id=HmbJ1hyHp39u&format=png"
                      alt=""
                      width={72}
                    />
                    <div className="self-center">
                      <h1 className="text-xl  text-gray-500">
                        Total Pending Donation
                      </h1>
                      <span className="text-2xl font-semibold">
                        <CountUp end={7200} separator="," />
                      </span>
                    </div>
                  </div>
                </div>
                <section className="mt-5 px-5">
                  <div className="px-2 py-1 shadow-xl border w-fit">
                    <h1 className="text-xl">Donation no. </h1>
                  </div>
                </section>
              </div>
            )}
            {tag === "approveDonation" && (
              <div className=" bg-white h-screen shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg px-1 md:px-4 py-3">
                {/* Name section */}
                <div className="flex flex-col w-fit items-center  px-5 py-2  ">
                  <h1 className="text-2xl font-bold">Donor Name</h1>
                  <div className="w-[100px] h-1 rounded-md bg-yellow-500 mt-2"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center   gap-5 flex-wrap  mt-5  ">
                  <div className=" h-[165px] flex w-full max-w-[22rem]  px-2 py-3 lg:px-3 gap-x-5 justify-center lg:py-4 border border-gray-300 rounded-md shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
                    <img
                      src="https://img.icons8.com/?size=512&id=HmbJ1hyHp39u&format=png"
                      alt=""
                      width={72}
                    />
                    <div className="self-center">
                      <h1 className="text-xl  text-gray-500">
                        Total Approved Donation
                      </h1>
                      <span className="text-2xl font-semibold">
                        <CountUp end={7200} separator="," />
                      </span>
                    </div>
                  </div>
                </div>
                <section className="mt-5 px-5">
                  <div className="px-2 py-1 shadow-xl border w-fit">
                    <h1 className="text-xl">Donation no. </h1>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DonorProfile;

