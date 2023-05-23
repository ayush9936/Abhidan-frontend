import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {  useNavigate } from "react-router-dom";

function Modal() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('token'));

  const [formData, setFormData] = useState({
    donor_name: "",
    email: "",
    category: "",
    address: "",
    contact: "",
    city: "",
    state: "",
    pinCode: "",
    uid: userData.data._id
  });

  // console.log(formData);

  function handleChange(event) {
    console.log(formData);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      //  [name]: type === "checkbox" ? checked : value,
    });
  }
  console.log("formDartaaa", formData);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:1300/api/donate", formData)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          toast.success("Data Submittd!");
          //  navigate("/login");
        }, 1000);
        setFormData(" ");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="bg-orange-300 w-11/12 max-w-screen-md mx-auto mt-4 rounded-lg px-4 py-3 ">
        <fieldset className="px-4 roundrd  ">
          <legend className="mb-2 relative mx-auto">
            - Fill Donation Form -
          </legend>
          <form onSubmit={handleSubmit}>
            <label htmlFor="donor_name" className="mt-2">
              Name:
            </label>
            <input
              type="text"
              placeholder="Name"
              id="donor_name"
              name="donor_name"
              value={formData?.donor_name}
              onChange={handleChange}
              className="w-[100%] bg-gray-100 rounded mb-2 mt-1 px-2 py-1  focus:outline-none focus:border-[1.5px] border-l-red-300  focus:border-r-red-300  focus:border-t-violet-400 focus:border-b-blue-300  "
            />
            <label htmlFor="email">Email: </label>
            <br />
            <input
              type="email"
              placeholder="xyz@gmail.com"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[100%] bg-gray-100 rounded mb-2 mt-1 px-2 py-1 focus:outline-none focus:border-[0.5px] focus:border-l-red-300  focus:border-r-red-300  focus:border-t-violet-400 focus:border-b-blue-300  "
            />
            <label htmlFor="contact">Contact: </label>
            <br />
            <input
              type="text"
              placeholder="+91 8888 8888 88"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-[100%] bg-gray-100 rounded mb-2 mt-1 px-2 py-1 focus:outline-none focus:border-[0.5px] focus:border-l-red-300  focus:border-r-red-300  focus:border-t-violet-400 focus:border-b-blue-300  "
            />

            <br />
            <label htmlFor="category" aria-label="City">
              Category:
            </label>
            <br />
            <select
              name="category"
              id="category"
              placeholder="Choose your category"
              onChange={handleChange}
              className="w-[100%] bg-gray-100 rounded mb-2 mt-1 px-2 py-1 focus:outline-none focus:border-[0.5px] focus:border-l-red-300  focus:border-r-red-300  focus:border-t-violet-400 focus:border-b-blue-300  "
            >
              <option value="Food">Food</option>
              <option value="Medical">Medical</option>
              <option value="Education">Education</option>
              <option value="Animals">Animals</option>
            </select>

            <br />
            <label htmlFor="address">Address: </label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Addresss"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="w-[100%] bg-gray-100 rounded mb-2 mt-1 px-2 py-1 focus:outline-none focus:border-[0.5px] focus:border-l-red-300  focus:border-r-red-300  focus:border-t-violet-400 focus:border-b-blue-300  "
            />
            <br />
            <label htmlFor="city">City: </label>
            <br />
            <input
              type="text"
              placeholder="City Name"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="w-[100%] bg-gray-100 rounded mb-2 mt-1 px-2 py-1 focus:outline-none focus:border-[0.5px] focus:border-l-red-300  focus:border-r-red-300  focus:border-t-violet-400 focus:border-b-blue-300  "
            />

            <br />
            <label htmlFor="state">State: </label>
            <br />
            <input
              type="text"
              id="state"
              placeholder="State Name: "
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-[100%] bg-gray-100 rounded mb-2 mt-1 px-2 py-1 focus:outline-none focus:border-[0.5px] focus:border-l-red-300  focus:border-r-red-300  focus:border-t-violet-400 focus:border-b-blue-300  "
            />
            <br />
            <label htmlFor="pinCode">Pincode/Zipcode : </label>
            <br />
            <input
              type="tel"
              id="pincode"
              placeholder="271305"
              maxLength={"6"}
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-[100%] bg-gray-100 rounded mb-2 mt-1 px-2 py-1 focus:outline-none focus:border-[0.5px] focus:border-l-red-300  focus:border-r-red-300  focus:border-t-violet-400 focus:border-b-blue-300  "
            />
            <div className="flex flex-col md:flex-row items-center justify-start gap-5 p-6 b rounded-md ">
              <button
                onSubmit={handleSubmit}
                type="submit"
                className="bg-yellow-400 outline hover:bg-yellow-700 text-white text-lg md:text-2xl font-semibold py-2.5 px-4 rounded text-center"
              >
                Send
              </button>
              <button
                onClick={() => {
                  navigate("/ngo");
                }}
                className=" text-red-500 font-semibold outline  hover:bg-red-800 hover:text-white text-lg md:text-2xl  py-2 px-4 rounded text-center"
              >
                Cancel
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default Modal;
