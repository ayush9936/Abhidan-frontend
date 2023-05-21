import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import {AiOutlineMail} from "react-icons/ai"

const ForgotPassword = ({ setForgotModel }) => {
  return (
    <>
      <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className="absolute opacity-50 top-0 left-0 bottom-0 right-0 bg-black"
          onClick={() => setForgotModel(false)}
        ></div>
        <div className="relative w-auto my-6 mx-auto  max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white opacity-100 outline-none focus:outline-none">
            {/*header*/}
            {/* <div className="flex items-center justify-between px-5 py-3 gap-x-5 border-b border-solid border-slate-200 rounded-t">
              <div className="text-xl font-semibold text-gray-800">
                Please fill the form
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setForgotModel(false)}
              >
                <AiOutlineClose />
              </div>
            </div> */}
            {/*body*/}
            <div className="relative p-6 flex flex-col  justify-center items-center space-y-3">
              <p className="text-center">{<RiErrorWarningLine size={40} />}</p>
              <div className="flex flex-col mt-2">
                <p className=" text-center text-2xl text-gray-600">
                  Forgot Passwword
                </p>
                <p className="flex-auto text-sm text-center text-gray-400 my-2">
                  Enter your email we'll send you a link to reset your <br />{" "}
                  password{" "}
                </p>
              </div>

              <div className="flex w-full relative gap-x-3 mt-2">
                <AiOutlineMail
                  size={25}
                  className="mt-[7px] transform left-1 rounded-full text-slate-400  absolute "
                />
                <input
                  class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Enter your email "
                  type="text"
                  name="search"
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setForgotModel(false)}
              >
                Cancel
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setForgotModel(false)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ForgotPassword;
