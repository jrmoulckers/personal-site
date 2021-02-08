import React from "react";
import "./Navigation.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation(props) {
  return (
    <section className="navigation flex">
      <div className="links">
        <Link to="homepage-splash" spy={true} smooth={true} duration={500}>
          <div className="nav-link">Home</div>
        </Link>
        <Link to="homepage-about" spy={true} smooth={true} duration={500}>
          <div className="nav-link">About</div>
        </Link>
        <Link to="homepage-skills" spy={true} smooth={true} duration={500}>
          <div className="nav-link">Skills</div>
        </Link>
        <Link to="homepage-projects" spy={true} smooth={true} duration={500}>
          <div className="nav-link">Projects</div>
        </Link>
        <Link to="homepage-feed" spy={true} smooth={true} duration={500}>
          <div className="nav-link">Feed</div>
        </Link>
        <Link to="homepage-contact" spy={true} smooth={true} duration={500}>
          <div className="nav-link">Contact</div>
        </Link>
      </div>
    </section>
  );
}

export default Navigation;
