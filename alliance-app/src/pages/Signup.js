import React from 'react';
import '../../src/app/globals.css';


const Signup = () => {
    const handleSignUpClick = () => {
        // Navigate to the sign-in page when Sign Up button is clicked
        window.location.href = '/Signin'; // Replace '/signin' with the URL of your sign-in page
      };

 
  return (
    <div className="container">
      <div className="signup-form">
        <header className="signup-header">Create an Account</header>
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
           <button className="signup-button">Signup</button>

      </form>
      </div>
    </div>
  );
};

export default Signup;
