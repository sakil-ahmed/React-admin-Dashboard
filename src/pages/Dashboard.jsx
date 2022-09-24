import React from "react";
import { Helmet } from "react-helmet";
import { StyledDashboard } from "./../styles/StyledDashboard";

export const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Facit</title>
      </Helmet>
      <StyledDashboard>
        <h1>Dashboard</h1>
      </StyledDashboard>
    </>
  );
};
