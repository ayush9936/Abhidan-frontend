import React, { useState } from 'react'
import LoginForm from '../components/forms/LoginForm';
import NgoLoginForm from '../components/forms/NgoLoginForm';

const LogInSelection = ({ setIsLoggedIn, setIsNgoLoggedIn }) => {
  const [loginType, setLoginType] = useState("donar");
  return (
    <>
      <div className="flex flex-col md:flex-row bg-richblack-800 p-1 gap-x-1 my-6 justify-around rounded-md md:rounded-full md:mx-auto w-full md:max-w-max">
        <button
          onClick={() => setLoginType("donar")}
          className={`${
            loginType === "donar"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } rounded-full  px-5 py-2 transition-all duration-200`}
        >
          As a Donar
        </button>
        <button
          onClick={() => setLoginType("ngo")}
          className={`${
            loginType === "ngo"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } rounded-full px-5 py-2 transition-all duration-200`}
        >
          As a NGO
        </button>
      </div>
      <div>
        {loginType === "donar" ? (
          <LoginForm setIsLoggedIn={setIsLoggedIn} loginType={loginType} />
        ) : (
          <NgoLoginForm
            setIsNgoLoggedIn={setIsNgoLoggedIn}
            loginType={loginType}
          />
        )}
      </div>
    </>
  );
};

export default LogInSelection
