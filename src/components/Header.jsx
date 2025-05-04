import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const formatted = format(new Date(), "EEEE, LLLL d, yyyy");
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <img src={logo} alt="" className="w-[350px] " />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold">{formatted}</p>
    </div>
  );
};

export default Header;
