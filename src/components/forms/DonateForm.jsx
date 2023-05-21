import React, { useState } from 'react'
import Login from '../../pages/Login'
import {AiOutlineClose} from "react-icons/ai"


function Modal({ setShowModal }) {
  
  const [formData, setFormData] = useState({
    donor_name: "",
    email: "",
    category: "",
    phone: "",
    address:""
  });


  return (
    <>
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          // onClick={() => setShowModal(false)}
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center justify-between px-5 py-3 border-b border-solid border-slate-200 rounded-t">
                <div className="text-2xl font-semibold text-gray-800">
                  Please fill the form
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  <AiOutlineClose />
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <form action="">
                  <div className="flex flex-col gap-y-3 mt-1 px-3 py-2">
                    <div>
                      <label
                        htmlFor="donor_name"
                        className="text-base font-medium text-gray-900 dark:text-gray-200"
                      >
                        Name:
                      </label>
                      <div className="mt-2.5">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="donor_name"
                          name="donor_name"
                          placeholder="Enter Your Name"
                        ></input>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
  }
  
  export default Modal
  //   <div className='modal-container'>
  //     <div className='modal-body'>
  //       {/* condition agar user login hai to modal dikhega nhi to login page par render ho jayega */}
        
  //       </div>

  //   </div>
  // )