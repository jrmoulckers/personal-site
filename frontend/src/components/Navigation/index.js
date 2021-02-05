import React from "react";
import "./Navigation.scss";

function Navigation(props) {
  // console.log(data);

  return (
    <section className="navigation flex">
      <div className="links">
        <div className="nav-link">Home</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Skills</div>
        <div className="nav-link">Projects</div>
        <div className="nav-link">Blog</div>
        <div className="nav-link">Contact</div>
      </div>
    </section>
  );
}

export default Navigation;
