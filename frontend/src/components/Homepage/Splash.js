import React from "react";
import { MdArrowForward } from "react-icons/md";
import "./Splash.scss";

function Splash(props) {
  return (
    <section className="splash flex">
      <div className="content flex">
        <h1 className="welcome-message">
          Hi, I'm <span>Jeffrey Moulckers</span>.<br />
          Check out my portfolio.
        </h1>
        <div style={{ textAlign: "center" }}>
          <div className="button check-me-out">
            <div className="text">View my work</div>
            <MdArrowForward className="splash-arrow rotate-right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Splash;
