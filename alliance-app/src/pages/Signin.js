"use client";
import React from "react";
import { useRouter } from "next/navigation";
import '../../src/app/globals.css';
import Navbar from "@/components/Navbar";

const Signin = () => {
  const router = useRouter();

  const handleSignupClick = (event) => {
    event.preventDefault();
    router.push("/Signup");
  };

  return (

    <div className="signin_container">
      <div className="form">
        <header className="sign-in-header">SIGN IN</header>
        <form action="#">
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
          <div className="forgot-password">
            <a href="#" className="forgot-password-link">
              Forgot password?
            </a>
          </div>
          <button className="login-button">Login</button>
        </form>
        <div className="signup-link">
          <span className="signup-prompt">Don't have an account?</span>
          <a
            href="/Signup"
            className="signup-link-text"
            onClick={handleSignupClick}
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
