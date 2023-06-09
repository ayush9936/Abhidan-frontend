import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import app_config from "../../config";
import { ColorRing } from "react-loader-spinner";

const NgoRegistation = (props) => {
  const url = app_config.back_url;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    ngo_name: "",
    image: "",
    register_id: "",
    email: "",
    password: "",
    confirm_password: "",
    user_type: "ngo",
    contact: "",
    address: "",
    established_date: "",
    description: "",
    state: "",
  });

  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  function handleChange(event) {
    console.log(formData);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, ["image"]: image });
  }

  // console.log(formData);

  async function handleSubmit(event) {
    event.preventDefault();
    if (formData.password !== formData.confirm_password) {
      toast.error("Password does not match!");
      return;
    }
    setLoading(true);
    axios
      .post(url + "/api/register-ngo", formData)
      .then((res) => {
        console.log(res.data);
        setLoading(false);

        toast.success("NGO registation successfully!");
        navigate("/login");

        setFormData(" ");
      })
      .catch((error) => {
        console.log(error);
        // if (error.response.status === 400) {
        //   toast.error("Please fill all field");
        // }
        // if (error.response.status === 422) {
        //   toast.error("Ngo is already present");
        // }
        // if (error.response.status === 500) {
        //   toast.error("Something Wrong!");
        // }
      });

    console.log(formData);
  }

  return (
    <div className="  pb-5  px-3 py-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 mt-2">
        {/* firstName and lastName */}
        <div className="flex flex-col md:flex-row gap-x-4">
          <label htmlFor="ngo_name" className="w-full">
            <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
              Organization_Name:<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="ngo_name"
              id="ngo_name"
              placeholder="Enter Ngo name"
              value={formData.ngo_name}
              onChange={handleChange}
              className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
            />
          </label>
          <label htmlFor="register_id" className="w-full">
            <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
              Register ID:<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="register_id"
              id="register_id"
              placeholder="Enter register id:"
              value={formData.register_id}
              onChange={handleChange}
              className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
            />
          </label>
        </div>
        <label htmlFor="email" className="w-full">
          <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
            Email Address:<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Addresss"
            value={formData.email}
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
              minLength={8}
              maxLength={12}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Password"
              value={formData.password}
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
          <label htmlFor="confirm_password" className="w-full relative">
            <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
              Confirm Password:<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
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
        {/* contact and adddress */}
        <div className="flex flex-col md:flex-row gap-x-4">
          <label htmlFor="contact" className="w-full">
            <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
              Ngo Contact:<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="Ngo contact"
              value={formData.contact}
              onChange={handleChange}
              className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
            />
          </label>
          <label htmlFor="address" className="w-full">
            <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
              Address:<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter address:"
              value={formData.address}
              onChange={handleChange}
              className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
            />
          </label>
        </div>

        <div className="flex flex-col  gap-y-2">
          <label
            class=" text-lg text-[#292929] mb-1 leading-[1.375rem]"
            for="file_input"
          >
            Upload file<sup className="text-pink-200">*</sup>
          </label>
          <input
            className="block w-full h-[2rem] file:h-[2rem] file:bg-yellow-500 file:text-white border-[1px] bg-gray-300 file:border-none rounded-md  text-sm "
            id="file_input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {/* state and establish date */}
        <div className="flex flex-col md:flex-row gap-x-4">
          <label htmlFor="state" className="w-full">
            <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
              State:<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Enter Ngo name"
              value={formData.state}
              onChange={handleChange}
              className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
            />
          </label>
          <label htmlFor="established_date" className="w-full">
            <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
              Established Date:<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="date"
              name="established_date"
              id="established_date"
              placeholder="Enter register id:"
              value={formData.established_date}
              onChange={handleChange}
              className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
            />
          </label>
        </div>

        {/* About Ngo */}
        <label htmlFor="description" className="w-full">
          <p className="text-lg text-[#292929] mb-1 leading-[1.375rem]">
            About NGO:<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter description Addresss"
            value={formData.description}
            onChange={handleChange}
            className="bg-[#F1F6F9] rounded-[0.5rem] text-[#394867] w-full p-[12px]"
          />
        </label>

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
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
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
      <div className="text-gray-500 mt-1 text-xl text-center">
        Already have account?{" "}
        <Link
          to="/login"
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          log in here...
        </Link>
      </div>
    </div>
  );
};

export default NgoRegistation;
