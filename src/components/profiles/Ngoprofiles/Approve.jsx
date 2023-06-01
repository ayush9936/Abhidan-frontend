import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import CountUp from "react-countup";
import {BsFillCheckSquareFill} from "react-icons/bs";
import {Dna} from "react-loader-spinner"

function Approve() {

const [loading,setLoading] = useState(false);
useEffect(() => {
  setLoading(true);
  setTimeout(()=>{
    setLoading(false)
  },2000);

  
}, [])



  return (
    <>
    {loading ? (
    <div className='flex justify-center'> 
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      
    /></div>
    )
  :(
    <div  className="Card bg-white flex justify-center items-center  mt-5">
    <div className="count-icon text-4xl text-green-400 mx-4 ">
<BsFillCheckSquareFill/>
    
    </div>
    <div>
      <p className="text-xl font-bold text-black">Approved Request</p>
      <CountUp end={700} separator=","  className='text-xl font-semibold mt-2'/>
    </div>
  </div>
  )}
     
          </>
  )
}

export default Approve