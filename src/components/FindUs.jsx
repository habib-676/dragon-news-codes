import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find us on</h2>
      <div className="join join-vertical w-full *:flex *:justify-start">
        <button className="btn join-item">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item">
          <FaWhatsapp></FaWhatsapp> whatsapp
        </button>
      </div>
    </div>
  );
};

export default FindUs;
