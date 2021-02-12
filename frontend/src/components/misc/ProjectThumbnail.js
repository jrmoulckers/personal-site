import React from "react";
import "./ProjectThumbnail.scss";

function formatProjectTools(tools) {
  return tools;
}

function ProjectThumbnail(props) {
  return (
    <div className="project-thumbnail-container">
      <img className="project-image" src={props.img} alt="testing" style={{objectFit: "cover"}}/>
      <div className="project-info flex">
        <div className="title">{props.title}</div>
        <div className="tools">{formatProjectTools(props.tools)}</div>
        <div className="blurb">{props.blurb}</div>
        <div className="button see-more">
          <div className="text">See More</div>
        </div>
        {/* <p className="progress">{props.progress}%</p>
      <p className="description">{props.description}</p> */}
      </div>
    </div>
  );
}

export default ProjectThumbnail;
