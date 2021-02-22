import React from "react";
import "./ProjectThumbnail.scss";

const NUM_VISIBLE_SKILLS = 2;

function formatProjectTools(tools) {
  console.log(tools);
  return tools.slice(0, NUM_VISIBLE_SKILLS).join(" / ");
}

function ProjectThumbnail(props) {
  return (
    <div className="project-thumbnail-container">
      <img className="project-image" src={props.img} alt="testing" />
      <div className="project-info flex">
        <div className="project-title-container">
          <div className="title">{props.title}</div>
          <div className="tools">{formatProjectTools(props.tools)}</div>
        </div>
        <div className="blurb">{props.blurb}</div>
        <a href={props.source}>
          <div className="button see-more">
            <div className="text">See More</div>
          </div>
        </a>
        {/* <p className="progress">{props.progress}%</p>
      <p className="description">{props.description}</p> */}
      </div>
    </div>
  );
}

export default ProjectThumbnail;
