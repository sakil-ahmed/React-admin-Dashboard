import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { StyledDashboard } from "./../styles/StyledDashboard";

export const Dashboard = () => {
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
