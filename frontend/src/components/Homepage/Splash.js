import React from "react";
import "./Homepage.scss";

function Splash(props) {
  return (
    <section className="splash">
      <div className="content">
        <h1 className="welcome-message">Hello, I'm Jeffrey Moulckers</h1>
        <div style={{textAlign: "center"}}><button className="check-me-out">Check me out</button></div>
      </div>
    </section>
  );
}

export default Splash;
