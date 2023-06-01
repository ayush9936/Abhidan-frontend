import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import CountUp from "react-countup";
import {
  BsFillExclamationOctagonFill,
  BsFillCheckSquareFill,
} from "react-icons/bs";
import "./Sidebar.css";
import dp from "../Ngoprofiles/dashboard-profile.png";
import app_config from "../../../config";

const NgoProfile = () => {
  const [ngoData, setNgoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = app_config.back_url;

  const fetchData = async () => {
    try {
      // Get the ngotoken from localstorage , store in token variable and get the ngo registerid from token and store in id variable
      const ngoToken = JSON.parse(localStorage.getItem("ngo_token"));
      console.log("token", ngoToken);
      const id = { register_id: ngoToken.data.data.register_id };
      console.log(ngoToken.data.data);

      // Make the API request with the ngoToken
      const response = await axios.post(url + "/api/ngo-data", id);

      // console.log("data",response.data.data)
      setNgoData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(ngoData);

  if (loading) {
    return (
      <div className="flex justify-center font-bold text-green-400">
        Loading...{" "}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // create object for showing the no.of request ,approve and deleted donor by ngo and map it .

  const donorData = [
    {
      icon: <BsFillExclamationOctagonFill />,
      name: "Total Request",
      value: 80,
    },
    {
      icon: <BsFillCheckSquareFill />,
      name: "Approved Request",
      value: 50,
    },
    {
      icon: <BsFillExclamationOctagonFill />,
      name: "Pending Request",
      value: 30,
    },
  ];

  return (
    <>
      <div className="ngoProfile m-5  ">
        <div className="row ">
          {donorData.map((item, index) => (
            <div className="col-md-4 " key={index}>
              <NavLink className="Card bg-[#F8F8F8] ">
                <div className="count-icon text-4xl text-yellow-400 ">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xl text-black">{item.name}</p>

                  <CountUp
                    end={item.value}
                    separator=","
                    className="text-xl font-semibold"
                  />
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="row mt-5 bg-[#F8F8F8] ">
          <h2 className="text-xl font-semibold ">
            Account <span className="text-yellow-400">Information</span>
            <Link className="float-right " to={"/edit"}>
              Edit
            </Link>
          </h2>

          <hr />

          <div className="col-md-6   ">
            {ngoData &&
              ngoData.map((ngo, index) => (
                <ul className="ngoinfo text-lg text-black m-4 " key={index}>
                  <li>{ngo.ngo_name}</li>
                  <li className="mt-2">{ngo.register_id}</li>
                  <li className="mt-2">{ngo.email}</li>
                  <li className="mt-2">{ngo.contact}</li>

                  <li className="mt-2"> {ngo.address}</li>
                </ul>
              ))}
          </div>
          <div className="col-md-6 flex justify-center">
            <img src={dp} alt="dashboard-img" className="h-52" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NgoProfile;
