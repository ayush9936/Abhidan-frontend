import React from 'react'
import SignupTemplet from '../templet/SignupTemplet';
// import image  from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <SignupTemplet
        title="Welcome to Abhidan! "
        desc1="Together, we can make a difference. Donate now through our NGO partners."
        // image={image}
        formType={"signup"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Signup