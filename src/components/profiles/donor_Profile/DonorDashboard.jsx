import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import axios from 'axios';
import ForgotPassword from '../../forms/ForgotPassword';

const DonorDashboard = () => {
   const [forgotModel, setForgotModel] = useState(false);
  const userData = JSON.parse(localStorage.getItem("token"));
  let totalDonation = '';
  async function fetchData() {
    axios.get("http://localhost:1300/api/total_donation")
      .then((data) => {
        console.log(data.data.data.length);
        totalDonation = Number(data.data.data.length);
        console.log("total ", Number(totalDonation));
      });
   
  }
  
  
  useEffect(() => {
    fetchData();
  },[])
  return (
    <>
      <div className=" bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg px-1 md:px-4 py-3">
        {/* Name section */}
        <div className="flex flex-col w-fit items-center  px-5 py-2  ">
          <h1 className="text-2xl font-bold">{userData.data.username}</h1>
          <div className="w-[100px] h-1 rounded-md bg-yellow-500 mt-2"></div>
        </div>

        {/* data section */}
        <div className="flex flex-col md:flex-row justify-center items-center   gap-5 flex-wrap  mt-5  ">
          <div className=" h-[165px] flex w-full max-w-[22rem]  px-2 py-3 lg:px-3 gap-x-5 justify-center lg:py-4 border border-gray-300 rounded-md shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
            <img
              src="https://img.icons8.com/?size=512&id=HmbJ1hyHp39u&format=png"
              alt=""
              width={72}
            />
            <div className="self-center">
              <h1 className="text-xl  text-gray-500">Total Donation</h1>
              <span className="text-2xl font-semibold">
                <CountUp end={7200} separator="," />
              </span>
            </div>
          </div>
          <div className=" h-[165px] flex w-full max-w-[22rem] gap-x-5 justify-center py-4 border xs:mt-4 border-gray-300 rounded-md shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
            <img
              src="https://img.icons8.com/?size=512&id=HmbJ1hyHp39u&format=png"
              alt=""
              width={72}
            />
            <div className="self-center">
              <h1 className="text-xl  text-gray-500">Total Pending Donation</h1>
              <span className="text-2xl font-semibold">
                <CountUp end={7200} separator="," />
              </span>
            </div>
          </div>

          <div className=" h-[165px]  flex w-full max-w-[22rem] gap-x-5 justify-center py-4  border border-gray-300 rounded-md shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
            <img
              src="https://img.icons8.com/?size=512&id=HmbJ1hyHp39u&format=png"
              alt=""
              width={72}
            />
            <div className="self-center">
              <h1 className="text-xl  text-gray-500">Total Approve Donation</h1>
              <span className="text-2xl font-semibold">
                <CountUp end={7200} separator="," />
              </span>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <section className="px-5 pt-5  ">
          <h1 className="text-3xl font-semibold text-gray-900 pb-3 ">
            Account Information
          </h1>
          <div className="pt-3 border-b">
            <span className="flex flex-row justify-between">
              <h2 className=" text-md md:text-2xl text-gray-800 font-semibold">
                Contact Information
              </h2>
              <button className=" text-green-500 hover:text-green-700  pb-2 text-sm  md:text-xl  md:pr-5">
                Edit
              </button>
            </span>
          </div>
          <div className="py-4">
            <h2 className="py-1 text-sm md:text-lg ">
              {userData.data.username}{" "}
            </h2>
            <p className="py-1 text-sm md:text-lg ">{userData.data.email} </p>
            <p className="py-1 text-sm md:text-lg "> +91
              {userData.data.phonenumber}{" "}
            </p>
            <button onClick={() => setForgotModel(true)} className="float-left">
              <p className=" py-1 text-sm  md:text-lg text-green-600 ">
                Forgot Password?
              </p>
            </button>
            {forgotModel && <ForgotPassword setForgotModel={setForgotModel} />}
          </div>
        </section>
      </div>
    </>
  );
}

export default DonorDashboard