import React, { useState } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const Donor_auth = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("token"));

  if (isLogin !== null) {
    return children;
  } else {
    toast.success("You need to login !");
    return <Navigate to="/login" />;
  }
};

export default Donor_auth;
