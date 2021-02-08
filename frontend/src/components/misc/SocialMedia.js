import React from "react";
import "./SocialMedia.scss";

function Socials(props) {
  return (
    <div className="socials">
      <a
        href="https://www.facebook.com/jeffrey.moulckers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="https://twitter.com/jrmoulckers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        href="https://www.instagram.com/jeffrey.moulckers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram" />
      </a>
      <a
        href="mailto:jrmoulckers@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="far fa-envelope" />
      </a>
      <a
        href="https://github.com/jrmoulckers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
    </div>
  );
}

export default Socials;
