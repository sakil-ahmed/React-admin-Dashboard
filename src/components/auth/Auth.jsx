import React from "react";
import { StyledAuth } from "./StyledAuth";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const Auth = () => {
  return (
    <StyledAuth>
      <h3 className="or">OR</h3>
      <button className="button apple transition">
        <FaApple size="20px" />
        Sign in with Apple
      </button>
      <button className="button google transition">
        <FcGoogle size="20px" />
        Continue with Google
      </button>
    </StyledAuth>
  );
};
