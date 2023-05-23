import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-hot-toast";
import logo from "./navlogo.png";

const UserDropDown = ({ isLoggedIn, setIsLoggedIn }) => {
  let [dropOpen, setDropOpen] = useState(false);

  return (
    <>
      <div className="relative hidden md:block">
        <button className="relative z-10 block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
          <img
            onClick={() => setDropOpen(true)}
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt="Your avatar"
          />
        </button>
        <button
          onClick={() => setDropOpen(false)}
          // tabindex="-1"
          className={`${
            dropOpen
              ? "fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
              : "hidden"
          }`}
        ></button>
        <div
          onClick={() => setDropOpen(false)}
          className={`${
            dropOpen
              ? "absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl"
              : "hidden"
          }`}
        >
          <Link to={"/donor/myProfile"}>
            <span className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
              my Profile
            </span>
          </Link>

          <Link
            to={"/login"}
            onClick={() => {
              setIsLoggedIn(false);
              toast.success("Log out successfully");
            }}
          >
            <span className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
              Log Out
            </span>
          </Link>
        </div>
      </div>
      {/* mobile par */}
      <div className="ml-[-5px] py-5 border-t border-gray-800 mt-2 bg-gray-100 px-2 block md:hidden">
        <div className="flex items-center">
          <img
            className="h-[42px] w-[42px] border-2 border-gray-600 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt="Your avatar"
          />
          <span className="ml-3 text-xl font-semibold text-gray-700 ">
            Jane Doe
          </span>
        </div>
        <div className="mt-4 ">
          <Link to={"/donor/myProfile"}>
            <span className="block text-gray-500 text-lg hover:text-gray-700">
              My Profile
            </span>
          </Link>
          <Link
            to={"/login"}
            onClick={() => {
              setIsLoggedIn(false);
              toast.success("Log out successfully");
            }}
          >
            <span className="block text-gray-500 text-lg hover:text-gray-700">
              Log Out
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const NavItems = [
    { id: 1, title: "HOME", link: "/" },
    { id: 2, title: "ABOUT", link: "/about" },
    { id: 3, title: "NGO", link: "/ngo" },
    { id: 4, title: "BLOG", link: "/blog" },
    { id: 5, title: "GALLERY", link: "/gallery" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className=" font-[Poppins] bg-white   h-[70px] z-10 sticky top-0 shadow-2xl ">
      <div className="shadow-md w-full sticky top-0 left-0">
        <div className="md:flex h-[70px] shrink-md items-center justify-between py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex  items-center font-[Poppins]  text-gray-800">
            <span className="fixed mt-1 px-2 py-2">
              <img src={logo} className=" w-[62px] mt-2 md:w-[82px]" alt="abhidan" />
            </span>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl font-semibold absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
            {!open ? (
              <GiHamburgerMenu className="text-gray-900" />
            ) : (
              <IoCloseSharp className="text-gray-900" />
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-[3.8rem] h-screen pl-15 bg-gray-200   "
                : "top-[-490px]"
            }`}
            onClick={() => setOpen(false)}
          >
            {NavItems.map((link, index) => (
              <li
                key={link.id}
                className="md:ml-8 text-base md:my-0 my-3 nav-item w-full "
              >
                <NavLink
                  to={link.link}
                  className={`text-gray-800 md:hover:text-gray-700 hover:text-blue-300   duration-500 end-auto `}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
            <div
              onClick={() => setOpen(false)}
              className="flex flex-col ml-3   md:flex-row"
            >
              {/* agar login nhi hai to ye dikhao */}
              {!isLoggedIn && (
                <NavLink to="/login">
                  <button
                    className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
                 duration-500"
                  >
                    Login
                  </button>
                </NavLink>
              )}
              {isLoggedIn && (
                <>
                  {/* login krne ke baad */}
                  <div className="mx-2 ">
                    <UserDropDown setIsLoggedIn={setIsLoggedIn} />
                  </div>
                </>
              )}

              {/* agar login hai to ye dikhao */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
