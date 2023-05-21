import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Blog from "./components/Blog/Blog";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import HowitWorks from "./components/How_it_Works/HowitWorks";
import Ngopage from "./components/Ngo/Ngopage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Navbar/Nav";
import DonorProfile from "./components/profiles/DonorProfile";

import Sidebar from "./components/profiles/Ngoprofiles/Sidebar/Sidebar";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNgoLoggedIn, setIsNgoLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setIsNgoLoggedIn={setIsNgoLoggedIn}
              />
            }
          /> 
          {isLoggedIn && (
            <Route path="/donor/myProfile" element={<DonorProfile />} />
          )}
           
            <Route path="/ngo/myProfile" element={<Sidebar/>}/>
        
          <Route path="/signup" element={<Signup />} />
          <Route path="/ngo" element={<Ngopage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/blog"
            element={
              
                <Blog />
              
            }
          />
          <Route path="/howitworks" element={<HowitWorks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
