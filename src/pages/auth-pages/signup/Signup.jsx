import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { StyledSignup } from "./StyledSignup";
import logo from "../../../../public/brand.svg";
import { Auth } from "../../../components/auth/Auth";

export const Signup = () => {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    surname: "",
    password: "",
  });
  const form = useRef();
  const handleChange = (e) => {
    setCreateUser({ ...createUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    console.log(createUser);
  };
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
                  <form ref={form} action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Your email</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Your name</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="surname">Your surname</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-btn">
                      <button type="submit">Sign Up</button>
                    </div>
                  </form>
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
