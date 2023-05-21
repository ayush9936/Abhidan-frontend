import React from 'react'
import LoginTemplet from "../templet/LoginTemplet"
// import image from "../assets/login.png"

const Login = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  let setIsNgoLoggedIn = props.setIsNgoLoggedIn;
  return (
    <div >
      <LoginTemplet
        title="Welcome Back!"
        desc1="Let's keep Donating."
        // desc2="Education to future-proof your Career."
        // image={image}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
        setIsNgoLoggedIn={setIsNgoLoggedIn}
      />
    </div>
  );
}

export default Login