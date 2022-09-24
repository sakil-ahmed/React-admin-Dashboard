import React from "react";
import { Helmet } from "react-helmet";
import { StyledLogin } from "./StyledLogin";

export const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | Facit</title>
      </Helmet>
      <StyledLogin>
        <h1>Login</h1>
      </StyledLogin>
    </>
  );
};
