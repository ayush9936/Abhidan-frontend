import React from 'react'
import CountUp from 'react-countup';
   
      import {BsFillExclamationOctagonFill } from "react-icons/bs";
function Pending() {
  return (
    <>
    <div  className="Card bg-white flex justify-center items-center  mt-5">
                <div className="count-icon text-4xl text-yellow-400 mx-4 ">
                 <BsFillExclamationOctagonFill />

                
                </div>
                <div>
                  <p className="text-xl font-bold text-black">Pending Request</p>
                  <CountUp end={400} separator=","  className='text-xl font-semibold mt-2'/>
                </div>
              </div></>
  )
}

export default Pending;