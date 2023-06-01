import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import app_config from "../../config";
import { ColorRing } from "react-loader-spinner";

const SignupForm = () => {
  const url = app_config.back_url;

  const navigate = useNavigate();
  let initialValue = {
    username: "",
    email: "",
    password: "",
    salt_password: "",
    phonenumber: "",
    user_type: "donor",
  };
  const [formData, setFormData] = useState(initialValue);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    console.log(formData);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  console.log("form data", formData);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("formdata", formData);
    setLoading(true);
    axios
      .post(url + "/api/register-user", formData)
      .then((res) => {
        console.log(res.data);

        //  window.localStorage.setItem("token", res.data);
        setLoading(false);

        toast.success("Sign Up successfully");
        navigate("/login");

        setFormData(" ");
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 422) {
          toast.error("User is already present");
          setLoading(false);
        }

        if (error.response.status === 400) {
          toast.error("Please fill all fields!");
          setLoading(false);
        }
        if (error.response.status === 500) {
          toast.error("Something Wrong!");
          setLoading(false);
          console.log(error);
        }
      });
  }

  return (
    <div>
      <div className="px-3 py-2  ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 mt-2 ">
          {/* firstName and lastName */}
          <div className="flex flex-col  md:flex-row gap-x-4">
            <label htmlFor="username" className="w-full">
              <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
                User Name:<sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter First name"
                value={formData?.username}
                onChange={handleChange}
                className="bg-[#F1F6F9] rounded-[0.5rem] flex shrink text-[#394867] w-full p-[12px]"
              />
            </label>
            <label htmlFor="phonenumber" className="w-full">
              <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
                Phone Number:<sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                placeholder="Enter Last name"
                value={formData?.phonenumber}
                onChange={handleChange}
                className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
              />
            </label>
          </div>
          {/* email */}
          <label htmlFor="email" className="w-full">
            <p className="text-lg text-[#292929] w-full  leading-[1.375rem]">
              Email Address:<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Addresss"
              value={formData?.email}
              onChange={handleChange}
              className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
            />
          </label>
          {/* Create Password and Confirm Password */}
          <div className="flex flex-col md:flex-row gap-x-4">
            <label htmlFor="password" className="w-full relative">
              <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
                Create Password:<sup className="text-pink-200">*</sup>
              </p>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
                value={formData?.password}
                onChange={handleChange}
                className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
              />

              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-[38px] cursor-pointer  "
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <label htmlFor="salt_password" className="w-full relative">
              <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
                Confirm Password:<sup className="text-pink-200">*</sup>
              </p>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="salt_password"
                id="salt_password"
                placeholder="Confirm Password"
                value={formData?.salt_password}
                onChange={handleChange}
                className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
              />

              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-2 top-[38px] cursor-pointer  "
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
          <button
            type="submit"
            className=" bg-yellow-50 hover:bg-yellow-500 rounded-[8px] font-medium text-richblack-900 py-3"
          >
            {loading ? (
              <div className="flex justify-center">
                <ColorRing
                  visible={true}
                  height="30"
                  width="60"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />{" "}
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <div className="flex w-full items-center mt-4  pl-4 gap-x-2">
          <div className="h-[1px] w-[45%] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem">OR</p>
          <div className="h-[1px] w-[45%] bg-richblack-700"></div>
        </div>
        <div className="text-gray-500 mt-1 text-center">
          Already have account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            log in here...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
