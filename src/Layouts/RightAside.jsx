import React from "react";
import SocialLogin from "../components/SocialLogin";
import FindUs from "../components/FindUs";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightAside;
