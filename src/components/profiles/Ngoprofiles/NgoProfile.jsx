import React from "react";
import CountUp from "react-countup";
import { BsFillExclamationOctagonFill,BsFillCheckSquareFill, } from "react-icons/bs";
import "./Sidebar/Sidebar.css";
import dp from "../Ngoprofiles/dashboard-profile.png"
const NgoProfile = () => {
  // create object for shwing the no.of request ,approve and deleted donor by ngo and map it .

  const donorData = [
    {
      icon: <BsFillExclamationOctagonFill />,
      name: "Pending Request",
      value: 20,
    },
    {
      icon: <BsFillCheckSquareFill/>,
      name: "Approved Request",
      value: 20,
    },
    {
      icon: <BsFillExclamationOctagonFill />,
      name: "Pending Request",
      value: 20,
    },
  ];

  return (
    <>
      <div className="ngoProfile m-5">
        <div className="row ">
          {donorData.map((item, index) => (
            <div
              className="col-md-4 "
              
              key={index}
            >
              <div className="Card bg-white ">
                <div className="count-icon text-4xl text-yellow-400 ">{item.icon}</div>
                <div >
                  <p className="text-xl text-black">{item.name}</p>
                  <h2 className="text-xl font-semibold">{item.value}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ngoInfo mt-4 bg-white">
            <h2 className="text-lg font-semibold">Account <span className="text-yellow-400">Information</span></h2>
    <h2 >Edit</h2>
       <hr/>
<div className="row">
    <div className="col-md-4 flex justify-center ">
    <ul className="text-lg mt-2">
       <li>OrganizationName: Milaap</li>
       <li>RegisterId:r253r78</li>
       <li>EmailId:jhefhuif</li>
       <li>Phone:784534059</li>
       <li>Address:jhsdfhfi flkjhfrk</li></ul>
       </div>
        <div className="col-md-8 flex justify-center">
        <img src={dp} alt="dashboard-img" className="h-60 w-60"/>
         </div></div></div>
      </div>
    </>
  );
};

export default NgoProfile;
