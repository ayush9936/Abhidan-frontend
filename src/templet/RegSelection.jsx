import React, { useState } from 'react'
import NgoRegistation from '../components/forms/NgoRegistation';
import SignupForm from '../components/forms/SignupForm';

const RegSelection = ({ setFormType }) => {
  const [accountType, setAccountType] = useState("donar");

  // setFormType(accountType);

  return (
    <>
      <div className="flex flex-col md:flex-row bg-richblack-800 p-1 gap-x-1 my-6 justify-around rounded-md md:rounded-full md:mx-auto w-full md:max-w-max">
        <button
          onClick={() => {
            setAccountType("donar");
             setFormType("donor");
          }}
          className={`${
            accountType === "donar"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } rounded-full  px-5 py-2 transition-all duration-200`}
        >
          As a Donar
        </button>
        <button
          onClick={() => {
            setAccountType("ngo");
            setFormType("ngo");
          }}
          className={`${
            accountType === "ngo"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } rounded-full px-5 py-2 transition-all duration-200`}
        >
          As a NGO
        </button>
      </div>
      <div>
        {accountType === "donar" ? (
          <SignupForm accountType={accountType} />
        ) : (
          <NgoRegistation accountType={accountType} />
        )}
      </div>
    </>
  );
};

export default RegSelection
