import React from "react";
import { MdArrowForward } from "react-icons/md";
import "./Splash.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Splash(props) {
  return (
    <section className="splash flex" id="homepage-splash">
      <div className="content flex">
        <h1 className="welcome-message">
          Hi, I'm <span>Jeffrey Moulckers</span>.<br />
          Check out my portfolio.
        </h1>
        <div style={{ textAlign: "center" }}>
          <Link
            to="homepage-about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            <div className="button view-my-work">
              <div className="text">View my work</div>
              <MdArrowForward className="splash-arrow rotate-right" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Splash;
