import React, { Fragment, useState } from "react";
import "./ProjectThumbnail.scss";
import { formatProjectTools } from "../util/Formatting";
import ProjectModal from "./ProjectModal";

function ProjectThumbnail(props) {
  const [isModalActive, updateModalActive] = useState(false);

  const { title, tools, img, source, blurb, description, progress } = props;
  const projectProps = {
    title,
    tools,
    img,
    source,
    blurb,
    description,
    progress,
  };

  return (
    <Fragment>
      <div className="project-thumbnail-container">
        <img className="project-image" src={img} alt="testing" />
        <div className="project-info flex">
          <div className="project-title-container">
            <div className="title">{props.title}</div>
            <div className="tools">{formatProjectTools(tools)}</div>
          </div>
          <div className="blurb">{blurb}</div>
          <div
            className="button see-more"
            onClick={() => updateModalActive(true)}
          >
            <div className="text">See More</div>
          </div>
          {/* <p className="progress">{progress}%</p>
      <p className="description">{description}</p> */}
        </div>
      </div>
      <ProjectModal
        setActive={updateModalActive}
        active={isModalActive}
        title={title}
        tools={tools}
        img={img}
        source={source}
        blurb={blurb}
        description={description}
        progress={progress}
      />
    </Fragment>
  );
}

export default ProjectThumbnail;
