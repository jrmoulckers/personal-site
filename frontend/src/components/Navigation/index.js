import React, { Fragment } from "react";
import "./Navigation.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import BackToTop from "../misc/BackToTop";

function Navigation(props) {
  // console.log(props.sticky);
  return (
    <Fragment>
      <div className="navigation-container" ref={props.element}>
        <section
          className={`flex ${
            props.sticky ? "navigation-sticky navigation" : "navigation"
          }`}
        >
          <div className="navigation-links-container">
            <Link
              to="homepage-splash"
              activeClass="focus"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div className="nav-link">Home</div>
            </Link>
            <Link
              to="homepage-about"
              activeClass="focus"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              <div className="nav-link">About</div>
            </Link>
            {/* <Link
            to="homepage-skills"
            activeClass="focus"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            <div className="nav-link">Skills</div>
          </Link> */}
            <Link
              to="homepage-projects"
              activeClass="focus"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              <div className="nav-link">Projects</div>
            </Link>
            <Link
              to="homepage-feed"
              activeClass="focus"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              <div className="nav-link">Feed</div>
            </Link>
            <Link
              to="homepage-contact"
              activeClass="focus"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              <div className="nav-link">Contact</div>
            </Link>
          </div>
        </section>
      </div>
      <Link
        to="homepage-splash"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={800}
      >
        <BackToTop visible={props.sticky} />
      </Link>
    </Fragment>
  );
}

export default Navigation;
