import React from "react";
import "../Home/Home.css";

const Circle = () => {
 

  return (
    <>
      <div className="container bg-white pt-4">
        <div className="rowCircle">
          <h2 className="social-head">
            small donations make bigger impact on <br />
            someone's life, act today!
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="Circle">
                <div className="inner-circle">
                  <h2>
                  
                    
                    Greater <span style={{ color: "#eb9309" }}> Impact </span>
                    
                  </h2>
                  <p>
                   Make a positive impact on individuals' lives with each contribution, saving one person at a time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Circle">
                <div className="inner-circle">
                  <h2 >
                  Regular 
                      <span className="circle-txt" style={{ color: "#eb9309" }}>
                   
                    Updates
                    </span>
                  </h2>
                  <p>
                   
Stay informed about the ongoing influence you've made by receiving consistent updates on the impact you've created.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Circle">
                <div className="inner-circle">
                  <h2>
                   
                  Hassle-<span style={{ color: "#eb9309" }}>
                    free contribution.
                    </span>
                  </h2>
                  <p>
                   We gladly receive contributions through various way
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="nextrow">
            <div className="Circle">
              <div className="inner-circle">
                <h2>
                 
                100%   <span className="circle-txt" style={{ color: "#eb9309" }}>
                   verified Ngo's
                  </span>
                </h2>
                <p>
                Thorough and rigorous protocols for conducting due diligence with utmost precision.
                </p>
              </div>
            </div>

            <div className="Circle m-1">
              <div className="inner-circle">
                <h2>
                  
                Reliable<span style={{ color: "#eb9309" }}>
                    and Fortified.
                  </span>
                </h2>
                <p>
          Ngo's and donor's data is completely secure and encrypted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circle;
