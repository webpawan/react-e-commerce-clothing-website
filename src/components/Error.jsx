import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1 className="display-1">404</h1>
      <NavLink to="/">
        <button>go back to home page</button>
      </NavLink>
    </>
  );
};

export default Error;
