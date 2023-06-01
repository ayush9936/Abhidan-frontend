import React, { useState } from "react";
import NgoProfile from "./NgoProfile";
import Pending from "./Pending";
import { NavLink } from "react-router-dom";
import Approve from "./Approve";
import {
  BsFillCheckSquareFill,
  BsFillExclamationOctagonFill,
  BsFillCaretLeftSquareFill,
} from "react-icons/bs";

import { FaUserAlt } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar(ngoData) {
  // this is state for change page ,when click on it and below this also function for it
  const [currentPage, setCurrentPage] = useState("ngo");

  // this state used in close and open the side bar and below function also
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const renderPage = () => {
    switch (currentPage) {
      case "ngo":
        return <NgoProfile />;
      case "pending":
        return <Pending />;
      case "approve":
        return <Approve />;
      default:
        return null;
      // Or handle an invalid state if needed
    }
  };
  const setPage = (page) => {
    setCurrentPage(page);
  };

  //   create object for menunitems ,which show in side

  const sideMenu = [
    {
      name: "Profile",
      page: "ngo",
      icon: <FaUserAlt />,
     
    },
    {
      name: "Pending Request",
      page: "pending",
      icon: <BsFillExclamationOctagonFill />,
    },
    {
      name: "Approve",
      page: "approve",
      icon: <BsFillCheckSquareFill />,
    },
  ];

  return (
    <>
      <div className="sidebar-container flex w-[100%] ">
        <div className="side-bar" style={{ width: open ? "250px" : "50px " }}>
          <div className="top_heading ">
            <h1
              className="text-2xl font-bold"
              style={{ display: open ? "block" : "none" }}
            >
              Ngo<span className="text-yellow-400">Profile </span>
            </h1>

            <div
              className={`close-arrow ${!open && "rotate-180"}`}
              style={{ marginLeft: open ? "50px" : "0px" }}
            >
              <BsFillCaretLeftSquareFill onClick={toggle} />
            </div>
          </div>
          {sideMenu.map((item, index) => (
            <NavLink 
              key={index}
              className="sidebar-items  "
              onClick={() => setPage(item.page)}
            >
              <div className="icons   ">{item.icon}</div>
              <div
                className="side_text  text-lg font-semibold"
                style={{ display: open ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>

        <div className="renderPages bg-white w-[100%] pl-5">{renderPage()}</div>
      </div>
    </>
  );
}

export default Sidebar;
