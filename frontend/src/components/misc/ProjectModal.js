import React, { Fragment, useEffect, useState } from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import { formatProjectTools } from "../util/Formatting";
import "./ProjectModal.scss";

const NUM_VISIBLE_PROJECTS = 18;

function ProjectModal(props) {
  const { title, tools, img, source, blurb, description, progress } = props;
  console.log(tools);
  return props.active ? (
    <div
      className="project-container-background flex"
      onClick={() => props.setActive(false)}
    >
      <div
        className="project-container flex"
        onClick={e => e.stopPropagation()}
      >
        <div className="project-gallery"></div>
        <div className="title-container">
          <div className="title">{title}</div>
          <div className="tools">{formatProjectTools(tools)}</div>
        </div>
        <div className="description">{description}</div>
        <a href={source}>
          <div className="visit-site-container">Visit Site</div>
        </a>
      </div>
    </div>
  ) : (
    <Fragment />
  );
}

export default ProjectModal;
