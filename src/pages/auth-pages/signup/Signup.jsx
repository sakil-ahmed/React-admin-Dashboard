import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { StyledSignup } from "./StyledSignup";
import logo from "../../../../public/brand.svg";
import { Auth } from "../../../components/auth/auth";

export const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up | Facit</title>
      </Helmet>
      <StyledSignup>
        <div className="container">
          <div className="row">
            <div className="card-container">
              <div className="card-shadow">
                <div className="card-body">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Facit Logo" />
                    </Link>
                  </div>
                  <div className="auth-button">
                    <div className="btn-col">
                      <Link to="/auth-pages/login">
                        <button className="login-btn transition">Login</button>
                      </Link>
                    </div>
                    <div className="btn-col">
                      <Link to="/auth-pages/signup">
                        <button className="signup-btn transition">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                  <h1 className="heading">Create Account,</h1>
                  <h4 className="desc">Sign up to get started!</h4>
                  <Auth />
                </div>
              </div>
            </div>
            <div className="policy-link">
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms of use</Link>
            </div>
          </div>
        </div>
      </StyledSignup>
    </>
  );
};
