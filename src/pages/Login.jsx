import React from 'react'
import LoginTemplet from "../templet/LoginTemplet"

const Login = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  let setIsNgoLoggedIn = props.setIsNgoLoggedIn;
  return (
    <div >
      <LoginTemplet
        title="Welcome Back!"
        desc1="Let's keep Donating."
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
        setIsNgoLoggedIn={setIsNgoLoggedIn}
      />
    </div>
  );
}

export default Login