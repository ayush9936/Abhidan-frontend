import React from 'react'
import {Link} from "react-router-dom"
import footer from "./nav_logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="p-10 bg-gray-800 text-gray-200 rounded-md shadow-2xl border-t-2 border-gray-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">

              {/* col-1 */}
              <div className="flex flex-col basis-1/4  ">

               <div className='w-full flex ' >
               <img className='w-[160px]' src={footer} alt="footer_logo"/>
               </div>
               <p className="text-orange-400">BBDU Faizabad road, Lucknow </p>
                <p className="text-orange-400">
                  <strong>Phone:</strong>+91 8888 8888 88
                </p>
                <p className="text-orange-400">
                  <strong>Email:</strong>abhidan@gmail.com
                </p>
              </div>

              {/* col-2 */}
              <div className="mb-5 basis-1/4">
                <h3 className="pb-3 leading-5 tracking-[0.1rem] font-semibold">
                  Useful Links
                </h3>
                <ul className="text-gray-500 pl-2">
                  <li className="pb-2 text-orange-400">Home</li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">About us</li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">Ngo's</li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">Blog</li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">Gallery</li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">
                    Term of Services
                  </li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">Privacy Policy</li>
                </ul>
              </div>

              {/* col-3 */}
              <div className="mb-5 basis-1/4">
                <h3 className="pb-3 leading-5 tracking-[0.1rem] font-semibold">
                  Our Services
                </h3>
                <ul className="text-gray-500 pl-2">
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">Food Donation</li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">
                    Ngo Description
                  </li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">
                    Ngo Description
                  </li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">
                    Ngo Description
                  </li>
                  <li className="pb-2 text-orange-400 hover:text-yellow-600">
                    Ngo Description
                  </li>
                </ul>
              </div>

              {/* col-4 */}
              <div className="mb-5  space-y-3">
                <h4 className="pb-3 font-semibold leading-5 tracking-[0.1rem] ">
                  Join Us
                </h4>
                <p className="text-orange-400 pb-2">
                  Join 25,000+ others and never miss donation and more..
                </p>
                <form>
                  <label className="flex flex-row w-full box-border  rounded-lg bg-gray-800 focus:border-yellow-500">
                    <input
                      type="email"
                      placeholder="info@example.com"
                      className="appearance-none outline-none pl-2  text-gray-500  bg-gray-200 focus:border-2 focus:border-yellow-500 rounded-tl-lg rounded-bl-lg"
                    />
                    <button
                      type="submit"
                      className="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600 rounded-tr-lg rounded-br-lg"
                    >
                      Suscribe
                    </button>
                  </label>
                </form>
                <div>
                  {/* <Link><img src={Facebook} alt="" /></Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer








// /** @format */

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Footer/footer.css';
// // import logo from "../../assets/workitimages/logo-abhidan.png";
// // import logoIcon from "../logoAbhidan.png";
// // import logo from "/Abhidan-master/frontend/src/assets/logo-abhidan.png";


// import {
// 	MDBDropdown,
// 	MDBDropdownMenu,
// 	MDBDropdownToggle,
// 	MDBDropdownItem,
// } from 'mdb-react-ui-kit';

// const Footer = () => {
// 	const validateEmail = (email_id) => {
// 		const regex_pattern =
// 			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 		if (regex_pattern.test(email_id)) {
			
// 			document.getElementsById("errmsg").style.visibility="hidden"
// 		} else {
// 			console.log('The email address is not valid');
// 			document.getElementById("errmsg").style.visibility="visible";
// 		}
// 	};

// 	const [email, setEmail] = useState('');

// 	const validateEmailHandler = () => {
// 		validateEmail(email);
// 	};
// 	return (
//     <>
//       <div>
//         <footer
//           className="text-center text-white"
//           style={{
//             backgroundColor: "black",
//             borderTopLeftRadius: "30px",
//             borderTopRightRadius: "30px",
//           }}
//         >
//           <div className="container">
//             <section className="mt-2">
//               <div className="row text-center d-flex justify-content-center pt-4">
//                 <div className="col-md-2">
//                   <h6
//                     className="text-uppercase font-weight-bold"
//                     style={{ marginTop: "8px" }}
//                   >
//                     <Link style={{ textDecoration: "none" }} to={"/about"}>
//                       <span className="text-white">About us</span>
//                     </Link>
//                   </h6>
//                 </div>

//                 <div className="col-md-2">
//                   <h6
//                     className="text-uppercase font-weight-bold "
//                     style={{ marginTop: "8px" }}
//                   >
//                     <Link style={{ textDecoration: "none" }} to={"/gallery"}>
//                       <span className="text-white">Gallery</span>
//                     </Link>
//                   </h6>
//                 </div>

//                 <div className="col-md-2">
//                   <h6
//                     className="text-uppercase font-weight-bold"
//                     style={{ marginTop: "8px" }}
//                   >
//                     <Link style={{ textDecoration: "none" }} to={"/Blog"}>
//                       <span className="text-white">Blog</span>
//                     </Link>
//                   </h6>
//                 </div>

//                 <div className="col-md-2">
//                   <h6
//                     className="text-uppercase font-weight-bold"
//                     style={{ marginTop: "8px" }}
//                   >
//                     <Link style={{ textDecoration: "none" }} to="#/">
//                       <span className="text-white">Help</span>
//                     </Link>
//                   </h6>
//                 </div>

//                 <div className="col-md-2">
//                   <MDBDropdown dropright group>
//                     <MDBDropdownToggle
//                       style={{
//                         backgroundColor: "black",
//                         border: "none",
//                         borderColor: "none",
//                         color: "white",
//                       }}
//                       className="text-uppercase font-weight-bold  btn-outline-dark"
//                     >
//                       Contact
//                     </MDBDropdownToggle>
//                     <MDBDropdownMenu>
//                       <MDBDropdownItem link>0000000000</MDBDropdownItem>
//                       <MDBDropdownItem link>abhidan.com</MDBDropdownItem>
//                       <MDBDropdownItem link>
//                         abhidan@customercare
//                       </MDBDropdownItem>
//                     </MDBDropdownMenu>
//                   </MDBDropdown>
//                   {/* </h6> */}
//                 </div>
//               </div>
//             </section>

//             <hr className="my-4" />

//             <div className="row">
//               <div className="col-md-3 col-sm-12">
//                 <div className="Logo_Design">
//                   <Link to={"#"}>
//                     <img
//                       className="footer-img-logo"
//                       //   src={logoIcon}
//                       alt="dd"
//                       style={{ width: "12rem" }}
//                     />
//                   </Link>
//                 </div>
//                 <span>Donate to help</span>
//               </div>
//               <div className="col-md-9 col-sm-12">
//                 <section className="">
//                   <form className="form-button">
//                     <div className="row d-flex justify-content-center">
//                       <div className="col-auto">
//                         <p className="pt-2">
//                           <strong>Subscribe For Newsletter </strong>
//                         </p>
//                       </div>

//                       <div className="col-md-4 col-12">
//                         <div className=" mb-4">
//                           <input
//                             type="email"
//                             id="form5Example21"
//                             onChange={(e) => setEmail(e.target.value)}
//                             class="form-control"
//                             placeholder="Enter Your Email Address"
//                           />
//                         </div>
//                       </div>

//                       <div class="col-auto">
//                         <button
//                           onClick={validateEmailHandler}
//                           type="submit"
//                           className="btn btn-danger mb-4 "
//                         >
//                           Subscribe
//                         </button>
//                       </div>
//                       <p
//                         id="errmsg"
//                         style={{ color: "red", visibility: "hidden" }}
//                       >
//                         Please Enter a valid email
//                       </p>
//                     </div>
//                   </form>
//                 </section>

//                 <section className="mb-2">
//                   <div className="row d-flex justify-content-center">
//                     <div className="col-lg-9">
//                       <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Sunt distinctio earum repellat quaerat voluptatibus
//                         placeat nam, commodi optio pariatur est quia magnam eum
//                         harum corrupti dicta, aliquam sequi voluptate quas.
//                       </p>
//                     </div>
//                   </div>
//                 </section>

//                 <section className="text-center mb-1">
//                   <a
//                     href="https://www.facebook.com/"
//                     className="text-white me-4"
//                   >
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a
//                     href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
//                     className="text-white me-4"
//                   >
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a
//                     href="https://www.google.co.in/"
//                     className="text-white me-4"
//                   >
//                     <i className="fab fa-google"></i>
//                   </a>
//                   <a href="" className="text-white me-4">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/feed/"
//                     className="text-white me-4"
//                   >
//                     <i className="fab fa-linkedin"></i>
//                   </a>

//                   <a
//                     href="https://github.com/ashish385/Abhidan"
//                     className="text-white me-4"
//                   >
//                     <i className="fab fa-github"></i>
//                   </a>
//                 </section>
//                 <div
//                   className="text-center p-3"
//                   style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
//                 >
//                   © 2020 Copyright:
//                   <a className="text-white" to="https://mdbootstrap.com/">
//                     Abidhan.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default Footer;
