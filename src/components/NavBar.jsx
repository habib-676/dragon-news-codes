import React from "react";
import { NavLink } from "react-router";
import userLogo from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="nav-btn flex justify-between gap-3">
        <img src={userLogo} alt="" />
        <button className="btn btn-primary px-8"> Login</button>
      </div>
    </div>
  );
};

export default NavBar;
