import React from "react";
import "./SkillBar.scss";

function SkillBar(props) {
  return (
    <div className="skill-bar-container flex-row">
      <h3 className="title">{props.title}</h3>
      {/* <p className="progress">{props.progress}%</p>
      <p className="description">{props.description}</p> */}
    </div>
  );
}

export default SkillBar;
