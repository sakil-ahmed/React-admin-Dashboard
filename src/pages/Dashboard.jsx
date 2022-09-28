import axios from "axios";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { StyledDashboard } from "./../styles/StyledDashboard";

export const Dashboard = () => {
  const fatchUser = async () => {
    const res = await axios.get("https://api.github.com/users").catch((err) => {
      console.log("Err", err);
    });

    console.log(res.data);
  };
  useEffect(() => {
    fatchUser();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Facit</title>
      </Helmet>
      <StyledDashboard>
        <h1>Dashboard</h1>
        <Link to="/auth-pages/login">login</Link>
        <Link to="/auth-pages/signup">signup</Link>
        <Link to="/auth-pages/404">404</Link>
      </StyledDashboard>
    </>
  );
};
