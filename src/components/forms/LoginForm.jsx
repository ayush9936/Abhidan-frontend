import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import FormValidation from "./FormValidation";
import ForgotPassword from "./ForgotPassword";
import app_config from "../../config";

const LoginForm = ({ setIsLoggedIn }) => {
  const url = app_config.back_url;
  const navigate = useNavigate();
  let initialValue = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [errors, setErrors] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [forgotModel, setForgotModel] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handlerSubmit(event) {
    event.preventDefault();

    setErrors(FormValidation(formData));
    console.log("errors", errors);

    axios
      .post(url + "/donor-login", formData)
      .then((data) => {
        console.log("userRegister", data);
        window.localStorage.setItem("token", JSON.stringify(data.data.data));

        // console.log(res.data);
        // localStorage.setItem("token", JSON.stringify(res.data.data));

        setIsLoggedIn(true);

        setTimeout(() => {
          toast.success("Logged In Successfully!");
          navigate("/");
        }, 1000);

        setFormData("");
      })

      .catch((error) => {
        if (error.response.status === 400) {
          return toast.error("Please fill all field!");
          // navigate("/login");
        }

        if (error.response.status === 404) {
          return toast.error("User not found");
        }

        if (error.response.status === 401) {
          return toast.error("Invalid email or password!");
        }

        toast.error(error);
        console.log(error);
      });
  }
  return (
    <div>
      <form
        onSubmit={handlerSubmit}
        className="flex flex-col gap-y-3 mt-1 px-3 py-2"
      >
        <label htmlFor="email" className="w-full">
          <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
            Email Address:<sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            value={formData?.email || " "}
            onChange={handleChange}
            className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
          />
          {errors && (
            <p className="text-red-500 ml-5 text-sm ">{errors.email}</p>
          )}
        </label>
        <label htmlFor="" className="w-full relative  ">
          <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
            Password:<sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            minLength={3}
            maxLength={15}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password "
            value={formData?.password || ""}
            onChange={handleChange}
            className="bg-[#F1F6F9]  rounded-[0.5rem] text-[#394867] w-full p-[12px] "
          />
          {errors && (
            <p className="text-red-500 ml-5 text-sm">{errors.password}</p>
          )}
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
        </label>
        {forgotModel && <ForgotPassword setForgotModel={setForgotModel} />}
        <button
          onClick={handlerSubmit}
          className=" bg-yellow-50 hover:bg-yellow-500 rounded-[8px] font-medium text-richblack-900 py-3"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <button onClick={() => setForgotModel(true)} className="float-right">
        <p className=" mt-1 text-blue-100 text-md float-right mr-5 hover:underline">
          Forgot Password?
        </p>
      </button>
      <div className="flex w-full items-center mt-4  pl-4 gap-x-2">
        <div className="h-[1px] w-[45%] bg-richblack-700"></div>
        <p className="text-richblack-700 font-medium leading-[1.375rem">OR</p>
        <div className="h-[1px] w-[45%] bg-richblack-700"></div>
      </div>
      <div className="text-gray-500 mt-3 text-center">
        Don't have Account?{" "}
        <Link
          to="/signup"
          className="text-blue-300 hover:text-blue-400 hover:underline"
        >
          Create Account..
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
