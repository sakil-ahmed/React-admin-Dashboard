import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { StyledLogin } from "./StyledLogin";
import logo from "../../../../public/brand.svg";
import { Link } from "react-router-dom";
import { Auth } from "../../../components/auth/Auth";

export const Login = () => {
  const [input, setInput] = useState(0);
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });
  const form = useRef();
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const displayInput = () => {
    setInput(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    form.current.reset();
  };
  return (
    <>
      <Helmet>
        <title>Login | Facit</title>
      </Helmet>
      <StyledLogin>
        <div className="container">
          <div className="row">
            <div className={`card-container ${input === 0 ? "" : "mt"}`}>
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
                  <h1 className="heading">Welcome,</h1>
                  <h4 className="desc">Sign in to continue!</h4>
                  {/* Login Form */}

                  <form ref={form} action="" onSubmit={handleSubmit}>
                    {input === 0 ? (
                      <div className="form-group ">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control "
                          onChange={handleChange}
                          value={login.name}
                          required
                        />
                        <label className="" htmlFor="name">
                          Your email or username
                        </label>
                      </div>
                    ) : (
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control "
                          onChange={handleChange}
                          value={login.password}
                          required
                        />
                        <label className="" htmlFor="password">
                          Password
                        </label>
                      </div>
                    )}
                    <div className="form-btn">
                      <button
                        type={input === 0 ? "" : "submit"}
                        className=""
                        onClick={displayInput}
                      >
                        {input === 0 ? "Continue" : "Login"}
                      </button>
                    </div>
                  </form>
                  {/* Login Form */}
                  {input === 0 ? <Auth /> : ""}
                </div>
              </div>
            </div>
            <div className="policy-link">
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms of use</Link>
            </div>
          </div>
        </div>
      </StyledLogin>
    </>
  );
};
