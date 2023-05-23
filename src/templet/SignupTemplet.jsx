import React, { useState } from "react";
import frameImage from "./SignupImage.jpeg";
import RegSelection from "./RegSelection";



const SignupTemplet = ({
  title,
  desc1,
  desc2,
  image,
 

}) => {

  const [formType, setFormType] = useState("donor");
  return (
    <>
      <div className="flex flex-col-reverse bg-[#fff] mt-3 rounded-lg shadow-xl dark:shadow-gray-800   gap-x-4  h-fit lg:flex-row-reverse w-11/12 max-w-[1160px] gap-y-5 box-border md:justify-between  mb-2   mx-auto  md:gap-y-5">
        <div className=" w-full rounded-lg ">
          <div className="w-full  flex flex-col items-center justify-center text-center  max-h-screen  mx-auto md:px-[5rem] px-4  rounded-md pt-4 box-border  ">
            <h1 className="text-[#104e8b] font-semibold text-[1.875rem] lg:text-3xl leading-[2.375rem]">
              {title}
            </h1>
            <p className="text-[1.125rem] leading-[1.625rem] mt-4">
              <span className="text-blue-100  ityalic">{desc1}</span>
              <br />
              {/* <span className="text-blue-100 ityalic">{desc2}</span> */}
            </p>
          </div>
          <RegSelection setFormType={setFormType} />
        </div>
        {formType === "donor" ? (
          <div className="md:w-[80%] lg:min-w-[550px] mx-auto py-2 lg:h-full max-h-screen ">
            <div className=" hidden md:block  md:w-[100%] rounded-md  ">
              <img
                src={frameImage}
                alt="frame"
                loading="lazy"
                className={` w-full  md:h-[400px] md:w-[100%] lg:h-[700px] `}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default SignupTemplet;
