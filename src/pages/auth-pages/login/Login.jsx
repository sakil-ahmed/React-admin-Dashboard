import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { StyledLogin } from "./StyledLogin";
import logo from "../../../../public/brand.svg";
import { Link } from "react-router-dom";
import { Auth } from "../../../components/auth/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

export const Login = () => {
  const [input, setInput] = useState(0);
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });
  // user
  const user = {
    name: "sakil",
    password: "1234",
  };
  // user
  const form = useRef();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const displayInput = () => {
    setTimeout(() => {
      setInput(1);
    }, [1000]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    form.current.reset();

    if (JSON.stringify(user) == JSON.stringify(login)) {
      toast.success("Login Successfull", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Login failed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  // hide Alart
  const alart = useRef();
  const hideAlart = () => {
    alart.current.style.display = "none";
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
                  {/* logo */}
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Facit Logo" />
                    </Link>
                  </div>
                  {/* Button */}
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
                  {/* Button */}
                  {/* descptrion */}
                  <h1 className="heading">Welcome,</h1>
                  <h4 className="desc">Sign in to continue!</h4>
                  {/* descptrion */}
                  {/* alart */}
                  <div className="alart-user-info" ref={alart}>
                    <div className="alert-icon">
                      <MdLockOutline size="26px" />
                    </div>
                    <div className="alert-text">
                      <p className="">
                        <strong>Username: </strong>
                        sakil
                      </p>
                      <p className="">
                        <strong>Password: </strong>
                        1234
                      </p>
                    </div>
                    <div className="alart-btn">
                      <button type="button" onClick={hideAlart}>
                        <MdOutlineClose size="22px" />
                      </button>
                    </div>
                  </div>
                  {/* alart */}
                  {/* User Name */}
                  {input === 0 ? (
                    ""
                  ) : (
                    <h4 className="user-name">Hi,{login.name}.</h4>
                  )}
                  {/* User Name */}

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
                      {input === 0 ? (
                        <div className="button center" onClick={displayInput}>
                          Continue
                        </div>
                      ) : (
                        <button type="submit" className="button">
                          Login
                        </button>
                      )}
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
      <ToastContainer />
    </>
  );
};
