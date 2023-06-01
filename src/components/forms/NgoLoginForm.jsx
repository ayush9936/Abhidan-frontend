import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import FormValidation from "./FormValidation";
import app_config from "../../config";

const NgoLoginForm = ({ setIsNgoLoggedIn }) => {
  const url = app_config.back_url;

  const navigate = useNavigate();
  let initialValue = {
    register_id: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const [showPassword, setShowPassword] = useState(false);
  const [forgotModel, setForgotModel] = useState(false);
  const [errors, setErrors] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handlerSubmit(event) {
    event.preventDefault();

    setErrors(FormValidation(formData));

    axios
      .post(url + "/api/ngo-login", formData)
      .then((data) => {
        console.log(data);
        localStorage.setItem("ngo_token", JSON.stringify(data));
        setIsNgoLoggedIn(true);
        setTimeout(() => {
          
          toast.success("NGO Logged In Successfully!");
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error("Please fill all field!");
          // navigate("/login");
        }

        if (error.response.status === 404) {
          toast.error("NGO not found");
          navigate("/login");
        }

        if (error.response.status === 401) {
          toast.error("Invalid email or password!");
          navigate("/login");
        }
      });
  }
  return (
    <>
      <form
        onSubmit={handlerSubmit}
        className="flex flex-col gap-y-3 mt-2 px-3 py-2"
      >
        <label htmlFor="register_id" className="w-full">
          <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
            Register ID:<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="register_id"
            id="register_id"
            placeholder="Enter register Id"
            value={formData.register_id}
            onChange={handleChange}
            className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
          />
          {errors && (
            <p className="text-red-500 ml-5 text-sm ">{errors.register_id}</p>
          )}
        </label>
        <label htmlFor="password" className="w-full relative  ">
          <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
            Password:<sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            minLength={8}
            maxLength={12}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password "
            value={formData?.password}
            onChange={handleChange}
            className="bg-[#F1F6F9] rounded-[0.5rem]  text-[#394867] w-full p-[12px] "
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-[38px] cursor-pointer "
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          {forgotModel && <ForgotPassword setForgotModel={setForgotModel} />}
        </label>

        <button
          onClick={handlerSubmit}
          className=" bg-yellow-50 hover:bg-yellow-500 rounded-[8px] font-medium text-richblack-900 py-3"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <button className="float-right">
        <p
          onClick={() => setForgotModel(true)}
          className=" mt-1 text-blue-100 mr-4 text-md float-right hover:underline"
        >
          Forgot Password?
        </p>
      </button>
      <div className="flex w-full items-center mt-4  pl-4 gap-x-2">
        <div className="h-[1px] w-[47%] bg-richblack-700"></div>
        <p className="text-richblack-700 font-medium leading-[1.375rem">OR</p>
        <div className="h-[1px] w-[47%] bg-richblack-700"></div>
      </div>
      <div className="text-gray-500 mt-3 text-center">
        New Ngo?{" "}
        <Link to="/signup" className=" text-blue-500 text-md  hover:underline">
          Create Account..
        </Link>
      </div>
    </>
  );
};

export default NgoLoginForm;
