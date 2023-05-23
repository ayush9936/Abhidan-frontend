import React from 'react'
import SignupTemplet from '../templet/SignupTemplet';

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <SignupTemplet
        title="Welcome to Abhidan! "
        desc1="Together, we can make a difference. Donate now through our NGO partners."
        formType={"signup"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Signup