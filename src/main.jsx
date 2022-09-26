import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/auth-pages/login/Login";
import { Signup } from "./pages/auth-pages/signup/Signup";
import { PageNotfound } from "./pages/auth-pages/PageNotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route
            exact="/auth-pages/login"
            path="/auth-pages/login"
            element={<Login />}
          />
          <Route path="/auth-pages/signup" element={<Signup />} />
          <Route path="*" element={<PageNotfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
