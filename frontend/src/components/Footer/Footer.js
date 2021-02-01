import React from "react";
import "./Footer.scss";
import SocialMedia from "../misc/SocialMedia";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p className="title">Jefrey Moulckers</p>
        <p>
          Email:{" "}
          <a className="fancy" href="mailto:jrmoulckers@gmail.com">
            jrmoulckers@gmail.com
          </a>
        </p>
        <p>
          School:{" "}
          <a className="fancy" href="mailto:jrmoulckers@utexas.edu">
            jrmoulckers@utexas.edu
          </a>
        </p>
        <SocialMedia />
      </div>
    </div>
  );
}

export default Footer;
