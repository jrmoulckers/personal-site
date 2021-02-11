import React from "react";
import "./Footer.scss";
import SocialMedia from "../misc/SocialMedia";

function Footer() {
  return (
    <div className="footer flex">
      <p className="title">Jefrey Moulckers</p>
      <p>
        School:{" "}
        <a className="fancy" href="mailto:jrmoulckers@utexas.edu">
          jrmoulckers@utexas.edu
        </a>
      </p>
      <SocialMedia />
      <div className="brand">Jeffrey Moulckers <span>&#0169;2020</span></div>
    </div>
  );
}

export default Footer;
