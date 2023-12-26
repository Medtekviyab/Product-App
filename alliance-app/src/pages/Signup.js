import React from 'react';
import '../../src/app/globals.css';
import { useRouter } from "next/navigation";



const Signup = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/Signin");
  };
   

 
  return (
    <div className="signup_container">
      <div className="signup-form">
        <header className="signup-header">CREATE AN ACCOUNT</header>
        <form className="signup-form-fields" action="#">
          <input
            type="text"
            className="email-input"
            placeholder="Enter email"
          />
          <input
            type="password" 
            className="password-input"
            placeholder="Enter password"
          />
          <input
            type="password"
            className="confirm-password-input"
            placeholder="Confirm password"
          />
           <button  type="button" className="signup-button inline-flex justify-center items-center" onClick={handleSignInClick} >Signup</button>

      </form>
      </div>
    </div>
  );
};

export default Signup;
