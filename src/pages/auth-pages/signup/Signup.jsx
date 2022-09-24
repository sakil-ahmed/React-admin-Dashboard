import React from "react";
import { Helmet } from "react-helmet";
import { StyledSignup } from "./StyledSignup";

export const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up | Facit</title>
      </Helmet>
      <StyledSignup>
        <h1>Signup</h1>
      </StyledSignup>
    </>
  );
};
