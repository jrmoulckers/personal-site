import React from "react";
import "./Footer.scss";
import SocialMedia from "../misc/SocialMedia";

function Footer() {
  return (
    <div className="footer flex">
      <SocialMedia />
      <div className="brand">
        Jeffrey Moulckers <span>&#0169;2020</span>
      </div>
    </div>
  );
}

export default Footer;
