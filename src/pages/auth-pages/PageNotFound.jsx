import React from "react";
import { Helmet } from "react-helmet";
import { Styled404 } from "./../../styles/Styled404";
import man from "../../../public/404.webp";
import { Link } from "react-router-dom";
import { MdOutlineHolidayVillage } from "react-icons/md";

export const PageNotfound = () => {
  return (
    <div>
      <Helmet>
        <title>404 Page | Facit</title>
      </Helmet>
      <Styled404>
        <div className=""></div>
        <div className="page-container">
          <div className="page-text">
            <h1 className="heading-text">404</h1>
            <h2 className="text">Page not found</h2>
          </div>
          <img src={man} alt="" />
          <div className="button">
            <Link to="/">
              <MdOutlineHolidayVillage />
              Homepage
            </Link>
          </div>
        </div>
      </Styled404>
    </div>
  );
};
